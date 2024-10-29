import { Typography } from "@/components/ui/Typography";
import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Plans } from "./Plans";
import { UpgradeForm } from "./UpgradeForm";

process.env.STRIPE_API_ID_SECOND_PLAN;

export function PricingUpgradeSection() {
  const t = useTranslations("PaymentPage.PricingUpgrade");

  return (
    <section className="py-14">
      {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
      <div className="absolute top-0 z-[-2] h-full w-screen bg-primary-foreground bg-[radial-gradient(#00000033_1px,#ffffff_1px)] bg-[size:20px_20px] dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#000000_1px)]"></div>
      <div className="mx-auto max-w-screen-xl px-4 text-primary md:px-8">
        <div className="relative mx-auto max-w-xl sm:text-center">
          <Typography variant={"h1"}>{t("title")}</Typography>
          <div className="mt-3 max-w-xl">
            <Typography variant={"p"}>
              {t("description")}
            </Typography>
          </div>
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
              <div className="space-y-4 border-b p-8">
                <span className="font-medium text-indigo-600">{item.name}</span>
                <div className="text-3xl font-semibold text-primary">
                  {item.price ? item.price : "FREE"}
                  <span className="text-xl font-normal text-primary"> /mo</span>
                </div>
                <p>{item.description}</p>
                <UpgradeForm planType={item.type} />
              </div>
              <ul className="space-y-3 p-8">
                <li className="pb-2 font-medium text-primary">
                  <Typography variant={"p"}>{t("titlePlan")}</Typography>
                </li>
                {item.features.map((featureItem, idx) => {
                  const { checks, xCount } = item.featureConfig; // Récupérer les paramètres de configuration
                  const shouldShowCheck = idx < checks; // Afficher Check pour le nombre défini
                  const shouldShowX = idx >= checks && idx < checks + xCount; // Afficher X pour le nombre défini

                  return (
                    <li key={idx} className="flex items-center gap-5">
                      {shouldShowCheck ? (
                        <Check className="size-5 text-green-primary" />
                      ) : shouldShowX ? (
                        <X className="size-5 text-red-600" />
                      ) : null}
                      {featureItem.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
