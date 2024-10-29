import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Plans } from "./Plans";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function PricingCompare() {
  const t = useTranslations("PaymentPage.PricingCompare")
  return (
    <div className="mx-4 md:flex md:justify-center">
      <Card className="w-auto max-w-5xl bg-card">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            {t("titleCard")}
          </CardTitle>
          <CardDescription className="text-center">
            {t("titleDescription")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t("titleTableRowOne")}
                  </th>
                  {Plans.map((plan) => (
                    <th
                      key={plan.name}
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-foreground">
                    {t("titleTableRowTwo")}
                  </td>
                  {Plans.map((plan) => (
                    <td
                      key={plan.name}
                      className="whitespace-nowrap px-6 py-4 text-sm text-foreground"
                    >
                      {plan.price}{" "}{t("priceSym")}
                      <span className="block text-xs text-muted-foreground">
                        {plan.description}
                      </span>
                    </td>
                  ))}
                </tr>
                {Plans[0].features.map((feature, index) => (
                  <tr
                    key={feature.name}
                    className={index % 2 === 0 ? "bg-muted/50" : ""}
                  >
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-foreground">
                      {feature.name}
                    </td>
                    {Plans.map((plan) => (
                      <td
                        key={plan.name}
                        className="whitespace-nowrap px-6 py-4 text-sm text-foreground"
                      >
                        {plan.features[index].included ? (
                          <Check className="text-green-500" />
                        ) : (
                          <X className="text-red-500" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-foreground"></td>
                  {Plans.map((plan) => (
                    <td
                      key={plan.name}
                      className="whitespace-nowrap px-6 py-4 text-sm text-foreground"
                    >
                      <Button className="w-full">{`${t("buttonChoose")} ${plan.name}`}</Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
