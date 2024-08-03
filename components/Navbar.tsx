"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import CustomButton from "./CustomButton";
<<<<<<< HEAD
import Image from "next/image";
=======
import { Divide as Hamburger } from "hamburger-react";
>>>>>>> 78e4a76dee2753fcf142f9756d9e261e98d7d91d

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-5 inset-x-0 max-w-5xl mx-auto z-50 text-sm tracking-tight ",
        className
      )}
    >
      {/* <CustomButton
        href="/login"
        iconRight="/assets/login.svg"
        className="absolute z-30 right-6 top-[50%] -translate-y-[50%]"
      >
        Login
      </CustomButton>
      <Link
        href="/"
        className="absolute left-8 top-[50%] z-50 -translate-y-[50%]"
      >
        Tech Waddo
      </Link> */}
      <Menu setActive={setActive}>
        <Link href="/" className="z-50 cursor-pointer">
          Tech Waddo
        </Link>

        <div className="flex justify-center items-center gap-5 flex-1 sms:hidden">
          <Link href="#Home" className="hover:opacity-[0.7]">
            Home
          </Link>
          <Link href="/categories">
            <MenuItem setActive={setActive} active={active} item="Categories">
              <div className="text-xs grid grid-cols-2 gap-10 p-4 mds:grid-cols-1">
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
          </Link>

          <Link href="#about" className="hover:opacity-[0.7]">
            About
          </Link>
        </div>

        <Link className="text-green-1 hover:text-green-2 sms:hidden" href="#">
          Become a Vendor
        </Link>
        <CustomButton href="/login" iconRight="/assets/login.svg">
          Login
        </CustomButton>
      </Menu>
    </div>
  );
}
