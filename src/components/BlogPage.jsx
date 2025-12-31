import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Extract unique categories from blog data
    const categories = useMemo(() => {
        const uniqueCategories = ["All", ...new Set(blogData.map(blog => blog.category))];
        return uniqueCategories;
    }, []);

    // Filter blogs based on selected category
    const filteredBlogs = useMemo(() => {
        if (selectedCategory === "All") {
            return blogData;
        }
        return blogData.filter(blog => blog.category === selectedCategory);
    }, [selectedCategory]);

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
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                        Insights, tutorials, and thoughts on the ever-evolving world of technology.
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {filteredBlogs.length === 0 ? (
                    <div className="text-center text-gray-500 text-xl mt-20">
                        No blogs found in this category. Stay tuned!
                    </div>
                ) : (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredBlogs.map((blog, index) => (
                                <motion.div
                                    key={blog.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <BlogCard {...blog} link={`/blog/${blog.slug}`} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </div>
    );
}
