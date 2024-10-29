"use client";

import { ToastProvider } from "@/components/ui/toast";
import SessionWrapper from "@/lib/SessionWrapper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionWrapper>
          <ToastProvider>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </ToastProvider>
        </SessionWrapper>
      </ThemeProvider>
    </>
  );
};
