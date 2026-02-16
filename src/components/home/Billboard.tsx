"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Billboard() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full py-12 md:py-16 bg-zinc-900/50 dark:bg-zinc-900/50 border-y border-zinc-800/50 dark:border-zinc-800/50"
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Left: Visual */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative aspect-video bg-zinc-800/50 dark:bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-700/50 dark:border-zinc-700/50">
                            {/* Promoted Badge */}
                            <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-electric-blue/90 text-white text-xs font-semibold rounded-full">
                                PROMOTED
                            </div>

                            {/* Placeholder Image */}
                            <Image
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                                alt="Featured Product"
                                fill
                                className="object-cover opacity-80"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
                        </div>
                    </div>

                    {/* Right: Copy */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-white dark:text-white">
                            The <span className="text-electric-blue">SoloStack</span> Shop
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 dark:text-gray-300 mb-6 md:mb-8 max-w-lg">
                            Gear and tools for the modern creator. Curated by a developer, built for builders.
                        </p>
                        <Link
                            href="/shop"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-electric-blue hover:bg-electric-blue/90 text-white rounded-full font-medium transition-all shadow-lg shadow-electric-blue/20 group"
                        >
                            Shop Now
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
