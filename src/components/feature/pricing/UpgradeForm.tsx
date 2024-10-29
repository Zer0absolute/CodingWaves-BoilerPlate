"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { upgradeSubscriptionPlan } from "@/lib/actionsStripe";

export function UpgradeForm({ planType }: { planType: string }) {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const successPath = await upgradeSubscriptionPlan(planType);
      router.push(successPath); // Redirect to success page
    } catch (error) {
      console.error("Error upgrading subscription:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 w-full">
      <Button className="w-full rounded-lg bg-indigo-600 p-3 text-sm font-semibold text-white duration-150 hover:bg-indigo-500 active:bg-indigo-700">
        Upgrade
      </Button>
    </form>
  );
}