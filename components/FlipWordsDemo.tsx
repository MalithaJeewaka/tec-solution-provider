import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["innovative", "efficient", "cutting-edge", "customized"];

  return (
    <div>
      <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-silver-2">
        Empower
        <FlipWords words={words} /> <br />
        solutions with TechPro Services
      </div>
    </div>
  );
}
