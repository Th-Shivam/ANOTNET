"use client";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function ServicesPage() {
  return (
    <section className="min-h-screen w-full bg-[#030317] text-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl mt-10 font-bold mb-12 text-center">
          Our Services
        </h1>

        {/* Grid */}
        <ul className="grid grid-cols-1 grid-rows-none gap-4 mt-44 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Box className="h-4 w-4 text-white dark:text-neutral-400" />}
            title="Coming Soon"
            description="Coming Soon"
          />
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Settings className="h-4 w-4 text-white dark:text-neutral-400" />}
            title="Coming Soon"
            description="Coming Soon"
          />
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Lock className="h-4 w-4 text-white dark:text-neutral-400" />}
            title="Coming Soon"
            description="Coming Soon"
          />
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Sparkles className="h-4 w-4 text-white dark:text-neutral-400" />}
            title="Coming Soon"
            description="Coming Soon"
          />
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Search className="h-4 w-4 text-white dark:text-neutral-400" />}
            title="Coming Soon"
            description="Coming Soon"
          />
        </ul>
      </div>
    </section>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-neutral-700 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="text-white font-sans text-xl font-semibold md:text-2xl">
                {title}
              </h3>
              <h2 className="text-white font-sans text-sm md:text-base">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}; 