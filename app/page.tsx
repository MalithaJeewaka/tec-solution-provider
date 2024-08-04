import CustomButton from "@/components/CustomButton";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-[100vh] flex items-center justify-center mx-auto ">
      <HeroParallaxDemo />
    </main>
  );
}
