import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BadgeX } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CancelledPage() {
  const t = useTranslations("CancelPaymentPage");
  return (
    <section className="h-screen w-full pt-20 text-center">
      {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
      <div className="absolute top-0 z-[-2] h-full w-screen bg-primary-foreground bg-[radial-gradient(#00000033_1px,#ffffff_1px)] bg-[size:20px_20px] dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#000000_1px)]"></div>
      <Card className="mx-auto w-[400px] p-4">
        <BadgeX className="w-full text-center text-8xl text-red-600" />
        <CardHeader>
          <CardTitle>{t("cardTitle")}</CardTitle>
          <CardDescription>{t("cardDescription")}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Link
            href={"/account/payment"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              " rounded-lg bg-indigo-600 p-3 text-sm font-semibold text-white hover:text-white duration-150 hover:bg-indigo-500 active:bg-indigo-700"
            )}
          >
            {t("buttonCard")}
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
