"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/Loader";
import { useMutation } from "@tanstack/react-query";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";

export const LoginButton = () => {
  const mutation = useMutation({
    mutationFn: async () => signIn(),
  });
  return (
    <Button
      onClick={() => mutation.mutate()}
      disabled={mutation.isPending}
      variant={"outline"}
      size={"sm"}
    >
      {mutation.isPending ? (
        <Loader size={12} className="ml-1" />
      ) : (
        <LogIn size={12} className="ml-1" />
      )}
      <p>&ensp;Login</p>
    </Button>
  );
};
