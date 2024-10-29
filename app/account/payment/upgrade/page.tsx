import { PricingUpgradeSection } from "@/components/feature/pricing/PricingUpgrade";
import { getDataStripeUser } from "@/lib/actionsStripe";
import { getUser } from "@/lib/actionsUsers";

export default async function UpgradePage() {
  const user = await getUser();
  const dataStripe = await getDataStripeUser(user?.id as string);

  if (dataStripe?.status === "active") {
    return <PricingUpgradeSection />;
  }
}
