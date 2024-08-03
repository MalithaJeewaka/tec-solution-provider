"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  iconLeft?: string;
  iconRight?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const CustomButton = ({
  children,
  iconLeft,
  iconRight,
  className,
  href,
  onClick,
}: ButtonProps) => {
  const buttonContent = (
    <>
      {iconLeft && <Image src={iconLeft} width={15} height={15} alt="icon" />}
      {children}
      {iconRight && <Image src={iconRight} width={15} height={15} alt="icon" />}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "bg-green-3 text-black text-sm py-2 px-4 rounded-3xl flex items-center justify-between cursor-pointer gap-1 hover:bg-green-1 hover:scale-95 transition",
          className
        )}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-green-3 text-black text-sm py-2 px-4 rounded-3xl flex items-center justify-between cursor-pointer gap-1 hover:bg-green-1 hover:scale-95 transition",
        className
      )}
    >
      {buttonContent}
    </div>
  );
};

export default CustomButton;
