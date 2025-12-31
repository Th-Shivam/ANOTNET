
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogBySlug } from '../data/blogData';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Calendar, User, Tag } from 'lucide-react';

export default function BlogDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const blog = getBlogBySlug(slug);

    if (!blog) {
        return (
            <div className="min-h-screen bg-[#030317] flex flex-col items-center justify-center text-white">
                <p className="text-xl text-red-500 mb-4">Blog post not found.</p>
                <button
                    onClick={() => navigate('/blog')}
                    className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                    Back to Blogs
                </button>
            </div>
        );
    }

    // Generate full URL for canonical and Open Graph tags
    const currentUrl = `https://anotnet.com/blog/${blog.slug}`;

    return (
        <div className="min-h-screen bg-[#030317] py-24 px-4 sm:px-6 lg:px-8 text-white font-sans">
            <Helmet>
                {/* Primary Meta Tags */}
                <title>{blog.title} - ANOTNET</title>
                <meta name="title" content={`${blog.title} - ANOTNET`} />
                <meta name="description" content={blog.metaDescription} />
                <meta name="keywords" content={blog.keywords} />
                <meta name="author" content={blog.author} />
                <link rel="canonical" href={currentUrl} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:title" content={blog.title} />
                <meta property="og:description" content={blog.metaDescription} />
                <meta property="og:image" content={blog.imageUrl} />
                <meta property="og:site_name" content="ANOTNET" />
                <meta property="article:published_time" content={new Date(blog.date).toISOString()} />
                <meta property="article:author" content={blog.author} />
                <meta property="article:section" content={blog.category} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={currentUrl} />
                <meta name="twitter:title" content={blog.title} />
                <meta name="twitter:description" content={blog.metaDescription} />
                <meta name="twitter:image" content={blog.imageUrl} />

                {/* Structured Data / Schema.org */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": blog.title,
                        "description": blog.metaDescription,
                        "image": blog.imageUrl,
                        "datePublished": new Date(blog.date).toISOString(),
                        "author": {
                            "@type": "Organization",
                            "name": blog.author
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "ANOTNET",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://anotnet.com/logo.png"
                            }
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": currentUrl
                        },
                        "keywords": blog.keywords
                    })}
                </script>
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <button
                    onClick={() => navigate('/blog')}
                    className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Blogs
                </button>

                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {blog.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-8 pb-8 border-b border-white/10">
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{blog.date}</span>
                    </div>
                    {blog.readTime && (
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{blog.readTime}</span>
                        </div>
                    )}
                    {blog.author && (
                        <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            <span>{blog.author}</span>
                        </div>
                    )}
                    {blog.category && (
                        <div className="flex items-center">
                            <Tag className="w-4 h-4 mr-2" />
                            <span>{blog.category}</span>
                        </div>
                    )}
                </div>

                {blog.imageUrl && (
                    <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="w-full h-96 object-cover rounded-2xl mb-10 border border-white/10 shadow-2xl"
                    />
                )}

                <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                    {blog.content ? (
                        blog.content.split('\n\n').map((paragraph, index) => {
                            // Check if paragraph is a heading (starts with specific patterns)
                            if (paragraph.trim().length > 0) {
                                return (
                                    <p key={index} className="mb-6 leading-relaxed text-justify">
                                        {paragraph}
                                    </p>
                                );
                            }
                            return null;
                        })
                    ) : (
                        <p className="italic text-slate-500">No content available.</p>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
