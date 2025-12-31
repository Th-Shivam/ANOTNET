import React from "react";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { PinContainer } from "../components/ui/3d-pin";
import { blogData } from "../data/blogData";

const BlogCard = ({ title, excerpt, date, readTime, link, imageUrl }) => {
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
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={title}
                            className="flex flex-1 w-full rounded-lg mt-4 object-cover"
                        />
                    ) : (
                        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    )}
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
    return (
        <div className="min-h-screen bg-[#030317] py-20 px-4">
            <Helmet>
                <title>Blog - ANOTNET | Technology Insights & Tutorials</title>
                <meta name="description" content="Read our latest insights on technology, AI, web development, cybersecurity, and more. Expert tutorials and industry analysis." />
                <meta name="keywords" content="Technology Blog, AI, Web Development, Cybersecurity, Tech Tutorials, ANOTNET" />
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

                {blogData.length === 0 ? (
                    <div className="text-center text-gray-500 text-xl mt-20">
                        No blogs found. Stay tuned!
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogData.map((blog, index) => (
                            <motion.div
                                key={blog.id || index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <BlogCard {...blog} link={`/blog/${blog.slug}`} />
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
