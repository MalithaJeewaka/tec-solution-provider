import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ButtonProps {
  children: React.ReactNode;
  iconLeft?: string;
  iconRight?: string;
  className?: string;
}

const CustomButton = ({
  children,
  iconLeft,
  iconRight,
  className,
}: ButtonProps) => {
  return (
    <div
      className={cn(
        "bg-green-3 text-black text-sm py-2 px-4 rounded-3xl flex items-center justify-between cursor-pointer gap-1",
        className
      )}
    >
      {iconLeft && <Image src={iconLeft} width={15} height={15} alt="icon" />}
      {children}
      {iconRight && <Image src={iconRight} width={15} height={15} alt="icon" />}
    </div>
  );
};

export default CustomButton;
