"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";

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
      <h1 className="text-4xl md:text-7xl font-bold text-center text-white mb-16">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="flex justify-center mb-8">
            <PinContainer title={project.title} href={project.link}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    {project.description}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-slate-800 rounded-full text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={`flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br ${project.gradient}`} />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;