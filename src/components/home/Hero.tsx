"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);

    // Load images on mount
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const frameCount = 50; // We have 50 frames: 000 to 049

            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                // Construct filename: 2026-02-15T17-34-45_cinematic_000.jpg to ..._049.jpg
                const frameNumber = i.toString().padStart(3, '0');
                img.src = `/hero-sequence/2026-02-15T17-34-45_cinematic_${frameNumber}.jpg`;
                await new Promise((resolve) => {
                    img.onload = resolve;
                    // Continue even if error to avoid breaking everything
                    img.onerror = resolve;
                });
                loadedImages.push(img);
            }
            setImages(loadedImages);
            setLoaded(true);
        };

        loadImages();
    }, []);

    // Animation Loop
    useEffect(() => {
        if (!loaded || images.length === 0 || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let currentFrame = 0;

        // Playback speed control
        const fps = 24;
        const interval = 1000 / fps;
        let lastTime = 0;

        const draw = (currentTime: number) => {
            animationFrameId = requestAnimationFrame(draw);

            if (currentTime - lastTime < interval) return;
            lastTime = currentTime;

            const img = images[currentFrame];

            // Calculate scaling to cover canvas while maintaining aspect ratio
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;

            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

            currentFrame = (currentFrame + 1) % images.length;
        };

        // Handle Resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial sizing

        animationFrameId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [loaded, images]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image Sequence */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 object-cover w-full h-full opacity-60"
            />

            {/* Overlay Gradient to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-deep-space/50 to-transparent z-10" />

            {/* Content */}
            <div className="container relative z-20 px-6 mx-auto flex flex-col items-center text-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <h2 className="text-electric-blue font-medium mb-4 text-lg md:text-xl tracking-wide uppercase">
                        Full Stack Developer & Minimalist
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight leading-tight text-white drop-shadow-2xl">
                        Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple">Universes</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                        I craft high-performance web experiences with modern technologies.
                        Merging design and code to create digital products that feel alive.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
                        <Link
                            href="#projects"
                            className="px-8 py-4 bg-electric-blue text-white rounded-full font-medium flex items-center gap-2 hover:bg-electric-blue/90 transition-all shadow-lg shadow-electric-blue/20 group"
                        >
                            View Projects
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/resume.pdf"
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium flex items-center gap-2 hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            Download CV
                            <Download size={20} />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40"
            >
                <span className="text-sm uppercase tracking-widest text-[10px]">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
            </motion.div>
        </section>
    );
};

export default Hero;
