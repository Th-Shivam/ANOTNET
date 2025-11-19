"use client";
import React from "react";
import { Code, Palette, Smartphone, TrendingUp, Cloud, Box } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Helmet } from 'react-helmet-async';

export default function ServicesPage() {
  return (
    <section className="min-h-screen w-full bg-[#030317] text-white py-12 px-4 md:px-12">
      <Helmet>
        <title>Services - ANOTNET</title>
        <meta name="description" content="Explore our services including Web Development, UI/UX Design, and more." />
      </Helmet>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl mt-10 font-bold mb-12 text-center">
          Our Services
        </h1>

        {/* Grid */}
        <ul className="grid grid-cols-1 grid-rows-none gap-4 mt-44 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Code className="h-4 w-4 text-white dark:text-neutral-400" />}
            title="Web Development"
            description="Building responsive, high-performance websites using modern technologies like React, Next.js, and Tailwind CSS."
          />
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Palette className="h-4 w-4 text-white dark:text-neutral-400" />}
            title="UI/UX Design"
            description="Creating intuitive and visually stunning user interfaces that provide exceptional user experiences."
          />
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Smartphone className="h-4 w-4 text-white dark:text-neutral-400" />}
            title="Mobile App Dev"
            description="Developing cross-platform mobile applications that run smoothly on both iOS and Android devices."
          />
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<TrendingUp className="h-4 w-4 text-white dark:text-neutral-400" />}
            title="SEO Optimization"
            description="Optimizing your online presence to rank higher in search results and drive organic traffic."
          />
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Cloud className="h-4 w-4 text-white dark:text-neutral-400" />}
            title="Cloud Solutions"
            description="Scalable cloud infrastructure setup and management using AWS, Google Cloud, or Azure."
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