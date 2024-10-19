import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="flex justify-center w-[350px]">
        <CardHeader>
          <CardTitle>{t("titleCard")}</CardTitle>
          <CardDescription className="flex justify-center">{t('cardDescription')}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
