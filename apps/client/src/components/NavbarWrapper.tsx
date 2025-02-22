"use client";
import { usePathname } from "next/navigation";
import { NavbarDemo } from "@/components/Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const hideNavbarRoutes = ["/dashboard"];

  return !hideNavbarRoutes.includes(pathname) ? <NavbarDemo /> : null;
}
