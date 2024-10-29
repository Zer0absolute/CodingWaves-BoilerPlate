"use client"; // Error components must be Client Components

import { LoginButton } from "@/components/feature/auth/LoginButton";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { School2 } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Card className="m-auto mt-4 max-w-lg">
      <CardHeader>
        <CardTitle className="flex justify-center">
          You need to be logged in to view this page
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-center gap-2">
        <LoginButton />
        <Link
          href={"/"}
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          <School2 size={14} className="ml-1" />
          <p>&ensp;Home</p>
        </Link>
      </CardFooter>
    </Card>
  );
}
