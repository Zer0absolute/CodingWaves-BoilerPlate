import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <section className="h-screen w-full pt-20 text-center">
      <Card className="mx-auto w-[400px] p-4">
        <BadgeCheck className="mb-3 w-full text-center text-8xl text-green-500" />
        <h1 className="mb-2  text-center text-xl font-black uppercase ">
          Paiement réussi !
        </h1>
        <p className="mb-2 text-sm text-muted-foreground">
          Vous etes maintenant membre premium
        </p>
        <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">
          <Link href="/dashboard/payment">Retour sur le Dashboard </Link>
        </Button>
      </Card>
    </section>
  );
}
