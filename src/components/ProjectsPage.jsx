"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import { motion } from "framer-motion";

function ProjectsPage() {
  const projects = [
    {
      title: "VYOM",
      description: "VYOM (Virtual Yet Omnipotent Machine) is a futuristic AI-powered personal assistant , inspired by J.A.R.V.I.S. from Iron Man",
      technologies: ["Python", "Groq-Ai", "HuggingFace-Api"],
      gradient: "from-violet-500 via-purple-500 to-blue-500",
      link: "https://github.com/Th-Shivam/VYOM"
    },
    {
      title: "Phishguard",
      description: " PHISHGUARD is a cutting-edge browser extension designed to protect users from phishing attacks and malicious websites in real-time.",
      technologies: ["HTML", "CSS", "JS" , "Virus-Total-Api"],
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      link: "https://github.com/Th-Shivam/Phishguard"
    },
    {
      title: "NetSpectra",
      description: "NetSpectra is a lightweight, real-time internet speed monitoring app built with Python.",
      technologies: ["Python", "Tkinter", "Speedtest-cli"],
      gradient: "from-blue-500 via-cyan-500 to-sky-500",
      link: "https://github.com/Th-Shivam/NetSpectra"
    },
    {
      title: "ANOTNET-REPO",
      description: "A repository dedicated to publishing Python scripts related to ethical hacking, cybersecurity, and tech innovations.",
      technologies: ["Python" , "Kali-Linux"],
      gradient: "from-pink-500 via-rose-500 to-red-500",
      link: "https://github.com/Th-Shivam/ANOTNET-REPO"
    },
    {
      title: "CMD_Chat",
      description: "CMD Chat is a simple yet powerful LAN-based terminal chat application that allows two or more devices to chat with each other without the internet.",
      technologies: ["Python", "Tkinter"],
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      link: "https://github.com/Th-Shivam/CMD_Chat"
    },
    {
      title: "And many more...",
      description: "I'm always working on new projects, check out my GitHub for more.",
      technologies: ["Web3", "Python", "C++", "AI"],
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      link: "https://github.com/Th-Shivam"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030317] py-20 px-4 mt-5">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pb-2">
            Our Projects
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full blur-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-500/20 rounded-full blur-xl"
          />
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex justify-center mb-8 group"
            whileHover={{ scale: 1.02 }}
          >
            <PinContainer title={project.title} href={project.link}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 group-hover:text-slate-300 transition-colors duration-300">
                    {project.description}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-slate-800 rounded-full text-slate-300 group-hover:bg-slate-700 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.div 
                  className={`flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br ${project.gradient}`}
                  whileHover={{ scale: 1.02 }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;