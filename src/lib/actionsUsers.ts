"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "./prisma";
import { auth } from "./auth";

export const getUser = async () => {
  const session = await auth();

  // Vérifier si la session et l'utilisateur sont définis
  if (!session || !session.user || !session.user.id) {
    redirect("../");
  }
  const id = session.user.id as string;

  const user = await prisma.user.findUnique({
    where: { id },
  });

  return user;
};

export const updateUser = async (formData: FormData) => {
  try {
    const userName = formData.get("name") as string;
    const id = formData.get("id") as string;

    if (userName !== null) {
      await prisma.user.update({
        where: { id },
        data: { name: userName },
      });
    }
  } catch (error) {
    console.error("Error updating user:", error);
  } finally {
    revalidatePath("/");
  }
};

export const deleteUser = async () => {
  const session = await auth();

  const userId = session?.user?.id as string;

  if (!session || !session.user || !session.user.id) {
    redirect("../");
  }

  await prisma.user.deleteMany({
    where: { stripeCustomerId: userId },
  });
  await prisma.subscription.deleteMany({
    where: { userId: userId },
  });

  await prisma.session.deleteMany({
    where: { userId: userId },
  });

  await prisma.account.deleteMany({
    where: { userId: userId },
  });

  return redirect("../");
};
