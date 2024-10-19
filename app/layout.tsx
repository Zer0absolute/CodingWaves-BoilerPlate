// app/layout.
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TailwindIndicator } from "@/components/utils/TailwindIndicator";
import { SiteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";
import { Providers } from "./Providers";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <>
      <html lang={locale} className="h-full" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "h-full bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
            <NextIntlClientProvider messages={messages}>
              <div className="relative flex min-h-screen flex-col">
                <Header />
                <div className="flex-1">{children}</div>
                <Footer />
              </div>
              {/* TODO end of construct website delete TailwindIndicator component */}
              <TailwindIndicator />
            </NextIntlClientProvider>
          </Providers>
        </body>
      </html>
    </>
  );
}
