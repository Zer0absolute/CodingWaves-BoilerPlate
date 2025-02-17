'use client'

import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/Loader";
import { useMutation } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const t = useTranslations("LogoutButton")
  const router = useRouter()
  const handleSignOut = () => {
    signOut()
    router.push("/")
  }
  const mutation = useMutation({
    mutationFn: async () => handleSignOut(),
  });

  return (
    <Button
      onClick={() => mutation.mutate()}
      disabled={mutation.isPending}
      variant={"destructive"}
    >
      {mutation.isPending ? (
        <Loader size={12} className="ml-0.5 mr-2" />
      ) : (
        <LogOut size={12} className="ml-0.5 mr-2" />
      )}
      {t("titleButton")}
    </Button>
  );
};
