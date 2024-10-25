import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Ban } from "lucide-react";
import Link from "next/link";

export default function CancelledPage() {
  return (
    <section className="h-screen w-full pt-20 text-center">
      <Card className="mx-auto w-[400px] p-4">
        <Ban className="mb-3 w-full text-center text-8xl text-red-500" />
        <h1 className="mb-2  text-center text-xl font-black uppercase ">
          Echec Paiement !
        </h1>
        <p className="mb-2 text-sm text-muted-foreground">
          Oups, Il y a eu une erreur
        </p>
        <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">
          <Link href="/dashboard/payment">Retour sur le Dashboard </Link>
        </Button>
      </Card>
    </section>
  );
}
