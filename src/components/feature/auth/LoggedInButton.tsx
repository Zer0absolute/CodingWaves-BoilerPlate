"use client";

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
import { CreditCard, LogOut, Settings, User } from "lucide-react";
import { Session } from "next-auth";
import { LogoutButton } from "./LogoutButton";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export type LoggedInButtonProps = {
  user: Session["user"];
};

export const LoggedInButton = (props: LoggedInButtonProps) => {
  return (
    <DropdownMenu>
      <AlertDialog>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"outline"}
            size={"icon"}
            className="rounded-full h-12 w-12"
          >
            <Avatar className="h-10 w-10">
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
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <ThemeToggle/>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href={"/account"}>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <AlertDialogTrigger>
              <LogOut className="mr-2 h-4 w-4 inline-flex" />
              <span>Log out</span>
            </AlertDialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
        <AlertDialogContent className="bg-primary-foreground">
          <AlertDialogHeader>
            <AlertDialogTitle>
              <LogOut className="mr-2 h-4 w-4 inline-flex" />
              <span>Log out</span>
            </AlertDialogTitle>
            <AlertDescription>
              Are you sure you want to logout ?
            </AlertDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button variant={"secondary"}>Cancel</Button>
            </AlertDialogCancel>
            <LogoutButton />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DropdownMenu>
  );
};
