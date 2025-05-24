import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";



export function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="glowingtext bg-black h-[30rem] overflow-visible">
        <TextHoverEffect text="ANOTNET" />
      </div>
      <div className="main flex flex-col items-center justify-between px-8 py-12">
        <div className="heading text-4xl font-bold mb-4">DEFEND | DETECT | SECURE | INNOVATE </div>
        <div className="tagline text-lg text-white-600">
          Unlock the power of ethical hacking, advanced cyber security projects, latest tools and exclusive resources — all under one roof — ANOTNET
        </div>
      </div>

    </div>

  );
}
export default LandingPage;

