"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Link
        href="/"
        className="absolute left-8 top-[50%] z-50 -translate-y-[50%]"
      >
        Tech Waddo
      </Link>
      <Menu setActive={setActive}>
        <Link href="#Home" className="hover:opacity-[0.7]">
          Home
        </Link>
        <MenuItem setActive={setActive} active={active} item="Categories">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Software"
              href="#"
              src="/navbarImages/software.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Hardware"
              href="#"
              src="/navbarImages/hardware.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="IOT "
              href="#"
              src="/navbarImages/iot.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Automation"
              href="#"
              src="/navbarImages/automation.jpg"
              description="Prepare for tech interviews like never before."
            />
          </div>
        </MenuItem>
        <Link href="#About" className="hover:opacity-[0.7]">
          About
        </Link>
        <Link className="text-green-1 hover:text-green-2" href="#">
          Become a Vendor
        </Link>
      </Menu>
    </div>
  );
}
