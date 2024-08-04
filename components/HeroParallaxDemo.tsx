"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/navbarImages/software.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/navbarImages/hardware.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/navbarImages/iot.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/navbarImages/automation.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/navbarImages/software.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/navbarImages/hardware.jpg",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/navbarImages/iot.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/navbarImages/automation.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/navbarImages/software.jpg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/navbarImages/hardware.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/navbarImages/iot.jpg",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/navbarImages/automation.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/navbarImages/software.jpg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/navbarImages/hardware.jpg",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/navbarImages/iot.jpg",
  },
];
