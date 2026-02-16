"use client";

import { motion } from "framer-motion";
import TechMarquee from "@/components/ui/TechMarquee";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

const About = () => {
    return (
        <div className="relative min-h-screen pt-24 pb-20">
            <BackgroundBeams className="absolute inset-0" />
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight leading-tight">
                        Experiments in <br />
                        <span className="text-electric-blue">Code & Chaos.</span>
                    </h1>

                    {/* The Body */}
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-4">
                        SoloStack is my personal digital garden—a space where I document the messy,
                        beautiful process of building software from scratch.
                    </p>
                    <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                        I’m not here to sell a solution. I’m here to explore the limits of what a single
                        developer can create with the modern web stack (Next.js, React, AI).
                        Sometimes I break things. Sometimes I ship them.
                    </p>
                </motion.div>
            </div>

            {/* Tech Stack Marquee */}
            <div className="mb-24">
                <TechMarquee />
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto prose prose-invert prose-lg"
                >
                    {/* The Newsletter Section */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold font-heading mb-4 text-white">The Newsletter</h2>
                        <p className="text-neutral-300 mb-6">
                            While this site is the showcase, the real value happens in your inbox.
                        </p>
                        <p className="text-neutral-300 mb-8">
                            I send out a weekly dispatch called <span className="text-electric-blue font-medium">The Stack</span>.
                            It’s where I break down exactly how I built these experiments, share the raw source code,
                            and talk about the tools I’m learning. No spam, just the blueprint.
                        </p>

                        <Link
                            href="https://www.beehiiv.com"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-electric-blue text-white px-6 py-3 rounded-full font-medium hover:bg-electric-blue/90 transition-colors"
                        >
                            Join the Stack
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
