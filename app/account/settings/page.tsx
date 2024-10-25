'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { deleteUser, getUser, updateUser } from "@/lib/actionsUsers";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

type User = {
  id: string;
  email: string | null;
  stripeCustomerId: string | null;
  name: string | null;
  emailVerified: Date | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export default function SettingsPage() {
  const t = useTranslations("SettingsPage")
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
    };
    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }


  return (
    <section className="m-auto mt-4 max-w-lg p-3">
      <h2 className="text-3xl font-black uppercase">{t("title")}</h2>
      <p className="text-lg text-muted-foreground">{t("p")}</p>
      <div className="mx-1 my-2 h-px w-12 bg-white"></div>
      <form action={updateUser}>
        <input type="hidden" name="id" value={user?.id} />
        <Card>
          <CardHeader>
            <CardTitle>{t("cardTitle")}</CardTitle>
            <CardDescription>
              {t("cardDescription")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {user?.image && (
              <Image
                src={user?.image}
                alt={`${user?.name}`}
                className="mb-4 size-16 rounded-full object-contain"
                width={64}
                height={64}
              />
            )}
            <div className="mb-2 space-y-1">
              <Label htmlFor="idUser">ID</Label>
              <Input
                disabled
                name="idUser"
                type="text"
                id="idUser"
                placeholder="Votre e-mail"
                defaultValue={user?.id || ""}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">{t("inputName")}</Label>
              <Input
                name="name"
                type="text"
                id="name"
                placeholder="Votre nom"
                defaultValue={user?.name || ""}
              />
            </div>
            <div className="mt-2 space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                disabled
                name="email"
                type="email"
                id="email"
                placeholder="Votre e-mail"
                defaultValue={user?.email || ""}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">{t("buttonModify")}</Button>
          </CardFooter>
        </Card>
      </form>
      <form action={deleteUser}>
        <input type="hidden" name="id" value={user?.id} />
        <Button className="mx-1 my-2 bg-red-500 text-white hover:bg-red-600">
          {t("buttonDelete")}
        </Button>
      </form>
    </section>
  );
}
