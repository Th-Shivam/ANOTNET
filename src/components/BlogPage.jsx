import React from "react";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { PinContainer } from "../components/ui/3d-pin";

const BlogCard = ({ title, excerpt, date, readTime, link }) => {
    return (
        <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
            <PinContainer title="Read More" href={link}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        {title}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                            {excerpt}
                        </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    <div className="flex justify-between items-center mt-4 text-xs text-slate-400">
                        <span>{date}</span>
                        <span>{readTime}</span>
                    </div>
                </div>
            </PinContainer>
        </div>
    );
};

export default function BlogPage() {
    const blogs = [
        {
            title: "The Future of AI in 2025",
            excerpt: "Exploring how Artificial Intelligence will shape our lives, from personalized assistants to autonomous agents.",
            date: "Dec 15, 2024",
            readTime: "5 min read",
            link: "#"
        },
        {
            title: "Why Cybersecurity Matters",
            excerpt: "Understanding the importance of digital security in an interconnected world and how to stay safe.",
            date: "Dec 10, 2024",
            readTime: "7 min read",
            link: "#"
        },
        {
            title: "React vs Vue: A Comparison",
            excerpt: "A deep dive into the pros and cons of two popular JavaScript frameworks for modern web development.",
            date: "Nov 28, 2024",
            readTime: "6 min read",
            link: "#"
        },
        {
            title: "Mastering Ethical Hacking",
            excerpt: "Steps to becoming a certified ethical hacker and securing systems against potential threats.",
            date: "Nov 20, 2024",
            readTime: "8 min read",
            link: "#"
        },
        {
            title: "Cloud Computing Trends",
            excerpt: "The shift towards serverless architecture and what it means for developers and businesses.",
            date: "Nov 15, 2024",
            readTime: "4 min read",
            link: "#"
        },
        {
            title: "The Rise of Web3",
            excerpt: "Decentralization, blockchain, and the future of the internet as we know it.",
            date: "Oct 30, 2024",
            readTime: "6 min read",
            link: "#"
        }

    ];

    return (
        <div className="min-h-screen bg-[#030317] py-20 px-4">
            <Helmet>
                <title>Blog - ANOTNET</title>
                <meta name="description" content="Read our latest insights on technology, AI, cybersecurity, and more." />
            </Helmet>

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Our <span className="text-blue-500">Blog</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Insights, tutorials, and thoughts on the ever-evolving world of technology.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <BlogCard {...blog} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
