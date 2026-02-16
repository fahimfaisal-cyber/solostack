"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";
import { threads, type Thread } from "@/lib/threads";

function ThreadCard({ thread, index }: { thread: Thread; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-electric-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-electric-blue/5"
        >
            {/* Profile Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-electric-blue/20 border border-electric-blue/50 flex items-center justify-center">
                    <span className="text-electric-blue font-bold text-sm">SS</span>
                </div>
                <div>
                    <p className="text-white dark:text-white font-semibold text-sm">SoloStack</p>
                    <p className="text-gray-400 dark:text-gray-400 text-xs">@solostack · {thread.date}</p>
                </div>
            </div>

            {/* Thread Title */}
            <h3 className="text-lg font-bold text-white dark:text-white mb-2 group-hover:text-electric-blue transition-colors">
                {thread.title}
            </h3>

            {/* Thread Snippet */}
            <p className="text-gray-300 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {thread.snippet}
            </p>

            {/* Engagement Stats */}
            {thread.engagement && (
                <div className="flex items-center gap-6 mb-4 text-gray-400 dark:text-gray-400 text-sm">
                    <div className="flex items-center gap-1.5">
                        <Heart size={16} />
                        <span>{thread.engagement.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <MessageCircle size={16} />
                        <span>{thread.engagement.replies}</span>
                    </div>
                </div>
            )}

            {/* Read Thread Link */}
            <Link
                href={thread.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-electric-blue hover:text-electric-blue/80 text-sm font-medium transition-colors group/link"
            >
                Read Thread
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
    );
}

export default function LatestThreads() {
    return (
        <section className="relative py-20 md:py-32">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                        Latest <span className="text-electric-blue">Threads</span>
                    </h2>
                    <p className="text-xl text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
                        Real-time updates from the trenches. Building in public, one thread at a time.
                    </p>
                </motion.div>

                {/* Threads Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {threads.map((thread, index) => (
                        <ThreadCard key={thread.id} thread={thread} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
