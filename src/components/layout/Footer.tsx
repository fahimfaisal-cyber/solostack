"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Script from "next/script";

const Footer = () => {
    return (
        <footer className="relative bg-deep-space border-t border-white/5">
            {/* Beehiiv Embed Script */}
            <Script
                src="https://subscribe-forms.beehiiv.com/embed.js"
                strategy="lazyOnload"
            />

            {/* Newsletter Section */}
            <div className="border-b border-white/5 py-16 md:py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                            Join the <span className="text-electric-blue">Stack</span>.
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 dark:text-gray-300 mb-8">
                            Get the source code and tutorials for every build. Weekly insights from the trenches.
                        </p>

                        {/* Newsletter Embed */}
                        <div className="max-w-md mx-auto">
                            <iframe
                                src="https://subscribe-forms.beehiiv.com/7c8d90d9-09f8-4cd3-b264-7ba7c3bc180b"
                                className="beehiiv-embed w-full rounded-lg"
                                data-test-id="beehiiv-embed"
                                frameBorder="0"
                                scrolling="no"
                                style={{
                                    height: '206px',
                                    margin: 0,
                                    borderRadius: '0px',
                                    backgroundColor: 'transparent',
                                    maxWidth: '100%'
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                        <div className="flex flex-col gap-2 items-center md:items-start">
                            <Link href="/" className="flex items-center gap-2 group">
                                <div className="relative w-8 h-8 overflow-hidden rounded-full border border-white/10 opacity-80 group-hover:opacity-100 transition-opacity">
                                    <Image
                                        src="/logo-v2.png"
                                        alt="SoloStack Logo"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <span className="text-xl font-bold font-heading tracking-tight">
                                    Solo<span className="text-electric-blue">Stack</span>
                                </span>
                            </Link>
                            <p className="text-white/40 text-sm">
                                Building the future, one pixel at a time.
                            </p>
                        </div>

                        <div className="flex gap-6">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-electric-blue transition-colors" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-electric-blue transition-colors" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-electric-blue transition-colors" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:editor@solostack.tech" className="text-white/40 hover:text-electric-blue transition-colors" aria-label="Email">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/20 text-xs text-center md:text-left">
                            © {new Date().getFullYear()} SoloStack. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-xs text-white/20">
                            <Link href="/privacy" className="hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-white transition-colors">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
