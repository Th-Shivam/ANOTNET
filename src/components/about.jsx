"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamDemo() {
    return (
        <TracingBeam className="px-6 bg-[#030317]">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                            {item.badge}
                        </h2>

                        <p className="text-xl mb-4">{item.title}</p>

                        <div className="text-sm prose prose-sm dark:prose-invert">
                            {item?.image && (
                                <img
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="1000"
                                    width="1000"
                                    className="rounded-lg mb-10 object-cover"
                                />
                            )}
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
        title: "About the Founder",
        description: (
            <>
                <p>
                    I am Shivam Singh, the CEO & Founder of ANOTNET. <br /> <br />
                    I am a cybersecurity expert, ethical hacker, and web developer with a
                    passion for automation, security, and AI.
                    <br /> <br />
                    I specialize in: <br /> <br />
                    ⟡ Penetration testing & ethical hacking <br />
                    ⟡ Automation scripting & AI-driven tools <br />
                    ⟡ Web development (JavaScript, Python, Tailwind CSS, etc.) <br /> <br />
                </p>
                <p>
                    My vision is to make security smarter and more efficient
                    through cutting-edge technology. <br /> <br />
                    At ANOTNET, I am working on innovative projects like: <br /> <br />
                    🚀 PhishGuard – An advanced anti-phishing protection tool <br />
                    🌐 Net Spectra – A network speed monitoring tool <br /> <br />
                </p>
                <p>I am committed to innovation, security, and open-source contributions to shape the future of cybersecurity & automation. 🔥</p>
            </>
        ),
        badge: "Hello Worldwide , Welcome to ANOTNET",
        image: "showcase_images/shivam.jpeg",
    },
    {
        title: " Our Vision",
        description: (
            <>
                <p>At Anotnet, our vision is to create a space where technology becomes a tool of empowerment, not confusion. In today’s fast-moving digital world, many aspiring learners feel overwhelmed by complexity—especially when starting out. <br />  <br />That’s where we step in.</p>
                <p>We imagine a world where anyone—whether a student, developer, or enthusiast—can confidently explore the world of programming, cybersecurity, and automation. <br /> <br />Our content is designed to remove fear and encourage curiosity.

                    By simplifying code, making tutorials practical, and keeping our language real and relatable, we want to ensure that no learner is left behind. <br />  <br />Whether you're just starting your coding journey or looking to level up, Anotnet is here to support you every step of the way.</p>
            </>
        ),
        badge: "Think big, think fast, think ahead",
        image:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "What We Do",
        description: (
            <>
                <p>Anotnet is more than just a platform—it’s a growing csommunity of curious minds who are passionate about learning and building. <br /><br />

                    We create content on programming (HTML, CSS, JavaScript, Tailwind CSS), ethical hacking tips, and even automation tools. <br /> <br /> But we don’t stop there. Every piece of content we publish is crafted with simplicity and clarity, so that even the most complex topics feel easy to understand. <br /> <br />

                    From YouTube videos to blog posts, from source codes to hands-on projects—we are building an ecosystem that not only teaches you how to build websites, apps, and tools, but also how to think like a developer. <br /> <br />

                    Our mission is to provide genuine knowledge that makes you independent, confident, and future-ready. <br /> <br />
                    Because when you learn with understanding, you don’t just copy-paste code—you build your own future. <br /></p>
            </>
        ),
        badge: "Launch Week",
        image:
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export default TracingBeamDemo;
