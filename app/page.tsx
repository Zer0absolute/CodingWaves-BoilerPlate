"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";

export default function Home() {
  const t = useTranslations("HomePage");
  const { data: session } = useSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="flex w-[350px] justify-center">
        <CardHeader>
          <CardTitle>{t("titleCard")}</CardTitle>
          <CardDescription className="flex justify-center">
            {t("cardDescription")}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
