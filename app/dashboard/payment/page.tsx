import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  createCustomerPortal,
  createSubscription,
  getDataStripeUser,
} from "@/lib/actionsStripe";
import { getUser } from "@/lib/actionsUsers";
import Image from "next/image";

export default async function PaymentPage() {
  const user = await getUser();
  const dataStripe = await getDataStripeUser(user?.id as string);

  const itemsPremium = [
    { name: "Générateur de couleurs" },
    { name: "Générateur de mot de passe" },
    { name: "Générateur de QR Code" },
    { name: "Compresseur d'image" },
  ];

  if (dataStripe?.status === "active") {
    return (
      <div className="mx-auto mt-3 max-w-lg space-y-4 w-full justify-center">
        <Card className="flex-flex-col justify-center items-center">
          <CardContent className="py-8">
            <div>
              <h3 className="text-md inline rounded-md bg-orange-900 bg-opacity-20 p-3 font-black uppercase text-orange-500">
                Pass Premium
              </h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Modifier votre abonemment premiun
            </p>
            <Image
              src={"/logo-text.png"}
              width={100}
              height={100}
              alt="badge"
              className="my-4 size-16 block"
              unoptimized
            />

            <form className="mt-4 w-full" action={createCustomerPortal}>
              <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">
                Modifier abonnement
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-3 max-w-lg space-y-4 w-full">
      <Card className="flex-flex-col">
        <CardContent className="py-8">
          <div>
            <h3 className="text-md inline rounded-md bg-orange-900 bg-opacity-20 p-3 font-black uppercase text-orange-500">
              Pass Premium
            </h3>
          </div>
          <div className="mt-4 text-6xl font-black ">
            <span>19,99€</span>{" "}
            <span className="text-sm text-muted-foreground">/ par mois</span>
          </div>
          <p className="mt-4 text-muted-foreground">
            {
              "Découvrez les Plaisirs Exclusifs du Développement Web Premium avec notre pass Premium et Profitez d'une experience unique !"
            }
          </p>
          <div className="px6 space-t-6 m-1 mt-4 flex flex-1 flex-col justify-between rounded-lg bg-secondary p-3 py-6">
            <ul className="space-y-3">
              {itemsPremium.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span>✅</span>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
            <form className="mt-4 w-full" action={createSubscription}>
              <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">
                Devenir membre premium
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
