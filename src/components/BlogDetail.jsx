
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

export default function BlogDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const docRef = doc(db, 'blogs', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setBlog({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setError('Blog post not found.');
                }
            } catch (err) {
                console.error('Error fetching blog:', err);
                setError('Failed to load blog post.');
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#030317] flex items-center justify-center text-white">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#030317] flex flex-col items-center justify-center text-white">
                <p className="text-xl text-red-500 mb-4">{error}</p>
                <button
                    onClick={() => navigate('/blog')}
                    className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                    Back to Blogs
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#030317] py-24 px-4 sm:px-6 lg:px-8 text-white font-sans">
            <Helmet>
                <title>{blog?.title || 'Blog'} - ANOTNET</title>
                <meta name="description" content={blog?.excerpt || 'Read this blog post on ANOTNET'} />
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
                        blog.content.split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-4 leading-relaxed">
                                {paragraph}
                            </p>
                        ))
                    ) : (
                        <p className="italic text-slate-500">No content available.</p>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
