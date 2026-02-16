"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "editor@solostack.tech";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center">
            <BackgroundBeams className="absolute inset-0" />
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 tracking-tight">
                        Got a <span className="text-electric-blue">Query?</span>
                    </h1>
                    <p className="text-xl text-neutral-400 mb-12">
                        Have a question or just want to say hi? Drop me a line.
                    </p>

                    {/* Email Copy Section */}
                    <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-full p-2 pr-6 mb-16 backdrop-blur-sm group hover:border-white/20 transition-colors">
                        <div className="relative w-10 h-10 rounded-full bg-electric-blue/10 flex items-center justify-center overflow-hidden border border-white/10">
                            <Image
                                src="/logo-v2.png"
                                alt="SoloStack Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-white font-medium text-lg">{email}</span>
                        <div className="w-px h-6 bg-white/10 mx-2" />
                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors relative"
                        >
                            {copied ? (
                                <>
                                    <Check size={16} className="text-green-400" />
                                    <span className="text-green-400">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy size={16} />
                                    <span>Copy</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-8">
                        {[
                            { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
                            { name: "GitHub", icon: Github, href: "https://github.com" },
                            { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
                        ].map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                className="text-neutral-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                                target="_blank"
                            >
                                <social.icon size={24} />
                                <span className="sr-only">{social.name}</span>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
