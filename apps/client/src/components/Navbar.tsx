"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { deleteCookie, getCookie, hasCookie } from "cookies-next";

import { useRouter } from "next/navigation";
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isloggedin, setisloggedin] = useState<boolean>(false);
  useEffect(() => {
    hasCookie("Auth_token") ? setisloggedin(true) : setisloggedin(false);
  }, [isloggedin]);
  const router = useRouter(); // Move inside component

  const handlelogout = () => {
    if (hasCookie("Auth_token")) {
      deleteCookie("Auth_token");
      router.push("/auth/register");
    }
  };
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>Home</Link>
        {isloggedin ? (
          <>
            <Link href={"/auth/register"}>Register</Link>
            <Link href={"/auth/login"}>Login</Link>
          </>
        ) : (
          <>
            <Link href={"/auth/register"} onClick={handlelogout}>
              Log Out
            </Link>
            <Link href={"/dashboard"}>dashboard</Link>
          </>
        )}
      </Menu>
    </div>
  );
}
