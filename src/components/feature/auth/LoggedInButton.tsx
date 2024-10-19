"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { AlertDescription } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCard, LanguagesIcon, LogOut, Settings, User } from "lucide-react";
import { Session } from "next-auth";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "../langage/LocaleSwitcher";
import { LogoutButton } from "./LogoutButton";

export type LoggedInButtonProps = {
  user: Session["user"];
};

export const LoggedInButton = (props: LoggedInButtonProps) => {
  const t = useTranslations("LoggedInButton");
  return (
    <DropdownMenu>
      <AlertDialog>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"outline"}
            size={"icon"}
            className="size-12 rounded-full"
          >
            <Avatar className="size-10">
              <AvatarFallback>{props.user?.name?.[0]}</AvatarFallback>
              {props.user?.image && (
                <AvatarImage
                  src={props.user?.image}
                  alt={`picture of ${props.user?.name}`}
                />
              )}
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <div className="flex items-center justify-center">
            <DropdownMenuLabel>{t("dropDownTitleAccount")}</DropdownMenuLabel>
            <ThemeToggle />
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href={"/account"}>
              <DropdownMenuItem>
                <User className="mr-2 size-4" />
                <span>{t("dropDownTitleProfile")}</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem>
              <CreditCard className="mr-2 size-4" />
              <span>{t("dropDownTitleBilling")}</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 size-4" />
              <span>{t("dropDownTitleSettings")}</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LanguagesIcon className="mr-2 size-4" />
              <LocaleSwitcher />
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <AlertDialogTrigger>
              <LogOut className="mr-2 inline-flex size-4" />
              <span>{t("dropDownTitleLogout")}</span>
            </AlertDialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
        <AlertDialogContent className="bg-primary-foreground">
          <AlertDialogHeader>
            <AlertDialogTitle>
              <LogOut className="mr-2 inline-flex size-4" />
              <span>{t("dropDownTitleLogout")}</span>
            </AlertDialogTitle>
            <AlertDescription>{t("alertDialogDescription")}</AlertDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button variant={"secondary"}>{t("buttonCancel")}</Button>
            </AlertDialogCancel>
            <LogoutButton />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DropdownMenu>
  );
};
