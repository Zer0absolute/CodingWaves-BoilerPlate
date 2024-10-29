import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "@/components/ui/Typography";
import { createCustomerPortal } from "@/lib/actionsStripe";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function PricingModifySection() {
  const t = useTranslations("PaymentPage.PricingModify");
  return (
    <section className="py-14">
      {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
      <div className="absolute top-0 z-[-2] h-full w-screen bg-primary-foreground bg-[radial-gradient(#00000033_1px,#ffffff_1px)] bg-[size:20px_20px] dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#000000_1px)]"></div>
      <div className="mx-auto max-w-screen-xl px-4 text-center text-primary md:px-8">
        <div className="relative mx-auto max-w-xl">
          <Typography variant={"h1"}>{t("title")}</Typography>
          <div className="mt-3 max-w-xl">
            <Typography variant={"p"}>{t("description")}</Typography>
          </div>
        </div>
        <div className="mt-16 justify-center gap-6 sm:grid sm:space-y-0">
          <Card className="m-auto mt-4 max-w-lg bg-card">
            <CardHeader className="flex flex-row gap-4 space-y-0">
              <div className="flex flex-col gap-1">
                <CardTitle>{t("titleCard")}</CardTitle>
                <CardDescription className="mt-6">
                  {t("descriptionCard")}
                </CardDescription>
              </div>
            </CardHeader>
            <CardFooter className="flex flex-row-reverse">
              <form action={createCustomerPortal}>
                <Link
                  href={"/account/payment/upgrade"}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    " rounded-lg bg-indigo-600 p-3 text-sm font-semibold text-white hover:text-white duration-150 hover:bg-indigo-500 active:bg-indigo-700"
                  )}
                >
                  {t("upgradeButton")}
                </Link>
                <Button className="ml-2 rounded-lg bg-indigo-600 p-3 text-sm font-semibold text-white duration-150 hover:bg-indigo-500 active:bg-indigo-700">
                  {t("modifyButton")}
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
