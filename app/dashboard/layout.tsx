import { AppSidebar } from "@/components/app-sidebar";
import { Layout } from "@/components/layout/Layout";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getUser } from "@/lib/actionsUsers";
import prisma from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

export default async function LayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  if (!user) {
    return <div>Please sign in</div>;
  }

  if (!user?.stripeCustomerId) {
    const stripeCustomer = await stripe.customers.create({
      email: user?.email as string,
    });

    await prisma.user.update({
      where: {
        id: user?.id as string,
      },
      data: {
        stripeCustomerId: stripeCustomer.id as string,
      },
    });
  }

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
          <Layout>
            <main>
              <div className="flex-1">{children}</div>
            </main>
          </Layout>
      </SidebarProvider>
    </>
  );
}
