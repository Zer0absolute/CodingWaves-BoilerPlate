import { LogoutButton } from "@/components/feature/auth/LogoutButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Account() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <Card className="m-auto mt-4 max-w-lg">
      <CardHeader className="flex flex-row gap-4 space-y-0">
        <Avatar>
          <AvatarFallback>{session?.user?.email?.[0]}</AvatarFallback>
          {session?.user?.image && (
            <AvatarImage src={session?.user?.image} alt="user image" />
          )}
        </Avatar>
        <div className="flex flex-col gap-1">
          <CardTitle>{session?.user?.email}</CardTitle>
          <CardDescription>{session?.user?.name}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
      <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href="/account/payment"
        >
          Payment
        </Link>
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href="/account/billing"
        >
          Billing
        </Link>
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href="/account/settings"
        >
          Settings
        </Link>
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href="/admin"
        >
          Admin
        </Link>
      </CardContent>
      <CardFooter className="flex flex-row-reverse">
        <LogoutButton />
      </CardFooter>
    </Card>
  );
}
