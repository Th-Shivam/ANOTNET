"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "../components/ui/lamp";


export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        id="intro-section"
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        About Us <br /> <br />

        
      <div className='text-lg text-white-600 font-raleway text-center '>
        Welcome to ANOTNET, a tech-driven company dedicated to automation, cybersecurity, and AI innovation.
        <br /> <br />
        At  ANOTNET, we specialize in providing automation scripts, ethical hacking tools, and security-focused scripts to enhance efficiency and security in the digital world.
        Our mission is to empower individuals and businesses with cutting-edge solutions that streamline workflows and strengthen cybersecurity.
        Looking ahead, we are expanding our expertise into AI agents, leveraging artificial intelligence to create intelligent, autonomous systems that revolutionize automation and cybersecurity.
        <br /><br />
        Join us on our journey to shape the future of automation and AI-driven security. 🚀
      </div>
      </motion.h1>
       

      
    </LampContainer>
  );
}

export default LampDemo;