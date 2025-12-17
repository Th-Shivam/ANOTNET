import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { PinContainer } from "../components/ui/3d-pin";

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
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "blogs"));
                const blogList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setBlogs(blogList);
            } catch (error) {
                console.error("Error fetching blogs: ", error);
                setError("Failed to load blogs. Please check your connection or permissions.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#030317] flex items-center justify-center text-white">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#030317] flex items-center justify-center text-red-500">
                <p className="text-xl">{error}</p>
            </div>
        );
    }

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

                {blogs.length === 0 ? (
                    <div className="text-center text-gray-500 text-xl mt-20">
                        No blogs found. Stay tuned!
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, index) => (
                            <motion.div
                                key={blog.id || index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <BlogCard {...blog} link={`/blog/${blog.id}`} />
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
