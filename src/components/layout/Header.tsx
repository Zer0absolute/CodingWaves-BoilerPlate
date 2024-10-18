// src/components/layout/Header.
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import { Typography } from "../ui/Typography";
import { SiteConfig } from "@/lib/site-config";
import Image from "next/image";
import { AuthButton } from "../feature/auth/AuthButton";

export function Header() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-2 p-2 items-center">
          <Image
            // TODO METTRE SONT LOGO
            src={"/images/logo.svg"}
            width={50}
            height={35}
            alt={`logo ${SiteConfig.title}`}
          />
          <Typography className="text-primary" variant="h3" as={Link} href="/">
            {SiteConfig.title}
          </Typography>
        </div>

        <div className="flex flex-1 items-center justify-end p-2 space-x-4">
          <nav className="flex items-center space-x-1">
            <AuthButton/>
          </nav>
        </div>
      </div>
    </header>
  );
}
