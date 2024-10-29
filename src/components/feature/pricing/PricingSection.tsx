/* eslint-disable tailwindcss/no-contradicting-classname */
import { useTranslations } from "next-intl";
import { Plans } from "./Plans";
import { Button } from "@/components/ui/button";
import { createSubscription } from "@/lib/actionsStripe";
import { Typography } from "@/components/ui/Typography";

export default function PricingSection() {
  const t = useTranslations("PaymentPage.PricingSection");
  return (
    <section className="py-14">
      {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
      <div className="absolute top-0 z-[-2] h-full w-screen bg-primary-foreground bg-[radial-gradient(#00000033_1px,#ffffff_1px)] bg-[size:20px_20px] dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#000000_1px)]"></div>
      <div className="mx-auto max-w-screen-xl px-4 text-primary md:px-8">
        <div className="relative mx-auto max-w-xl sm:text-center">
          <Typography variant={"h1"}>
            {t("titleCard")}
          </Typography>
          <div className="mt-3 max-w-xl">
            <Typography variant={"p"}>
              {t("descriptionCard")}
            </Typography>
          </div>
        </div>
        <div>
      </div>
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {Plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative mt-6 flex flex-1 flex-col items-stretch rounded-xl border-2 bg-card sm:mt-0 ${
                item.isMostPop ? "mt-10" : ""
              }`}
            >
              {item.isMostPop ? (
                <span className="absolute inset-x-0 -top-5 mx-auto w-32 rounded-full border bg-white px-3 py-2 text-center text-sm font-semibold text-black shadow-md">
                  {t("isMostPop")}
                </span>
              ) : (
                ""
              )}
              <div className="space-y-4 p-8">
                <span className="font-medium text-indigo-600">{item.name}</span>
                <div className="text-3xl font-semibold text-primary">
                  {item.price}{t("priceSym")}{" "}
                  <span className="text-xl font-normal text-primary">/mo</span>
                </div>
                <p>{item.description}</p>
                <form className="mt-4 w-full" action={createSubscription}>
                  <Button className="w-full rounded-lg bg-indigo-600 p-3 text-sm font-semibold text-white duration-150 hover:bg-indigo-500 active:bg-indigo-700">
                    {t("buttonStarted")}
                  </Button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}