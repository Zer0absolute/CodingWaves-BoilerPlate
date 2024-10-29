import PricingCompare from "@/components/feature/pricing/PricingCompare";
import PricingSection from "@/components/feature/pricing/PricingSection";
import { PricingModifySection } from "@/components/feature/pricing/PricingModify";
import AccordionDemo from "@/components/layout/Accordion";
import { getDataStripeUser } from "@/lib/actionsStripe";
import { getUser } from "@/lib/actionsUsers";

export default async function PaymentPage() {
  const user = await getUser();
  const dataStripe = await getDataStripeUser(user?.id as string);

  if (dataStripe?.status === "active") {
    return <PricingModifySection />;
  }

  return (
    <>
      <PricingSection/>
      <PricingCompare />
      <AccordionDemo/>
    </>
  );
}
