"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MoveRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "About", href: "/about" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
                scrolled
                    ? "bg-deep-space/80 backdrop-blur-md border-white/10 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-10 h-10 overflow-hidden rounded-full border border-white/10">
                        <Image
                            src="/logo-v2.png"
                            alt="SoloStack Logo"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <span className="text-xl font-bold font-heading tracking-tight">
                        Solo<span className="text-electric-blue">Stack</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white/70 hover:text-electric-blue transition-colors text-sm font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                    <Link
                        href="/contact"
                        className="group flex items-center gap-2 bg-white/10 hover:bg-electric-blue dark:bg-white/10 dark:hover:bg-electric-blue text-white px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium border border-white/5 hover:border-electric-blue/50"
                    >
                        Let's Talk
                        <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-electric-blue transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-deep-space/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-white/80 hover:text-electric-blue text-lg font-medium transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="flex items-center justify-center gap-2 bg-electric-blue text-white px-5 py-3 rounded-lg hover:bg-electric-blue/90 transition-colors font-medium mt-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Let's Talk
                                <MoveRight size={16} />
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
