"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { InteractiveHoverButton } from "@/components/ui/InteractiveHoverButton";
import { cn } from "@/lib/utils";

const HeroScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);

    // Scroll progress for the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress (0-1) to frame index (0-49)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 49]);

    // Load images on mount
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const frameCount = 50;

            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                const frameNumber = i.toString().padStart(3, '0');
                img.src = `/hero-sequence/2026-02-15T17-34-45_cinematic_${frameNumber}.jpg`;
                await new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve;
                });
                loadedImages.push(img);
            }
            setImages(loadedImages);
            setLoaded(true);
        };

        loadImages();
    }, []);

    // Animation Loop on Scroll
    useEffect(() => {
        if (!loaded || images.length === 0 || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const renderFrame = (index: number) => {
            const img = images[index];
            if (!img) return;

            // Object-fit: cover logic
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        };

        // Handle Resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Force redraw after resize to avoid blank canvas
            const currentIndex = Math.min(
                Math.round(frameIndex.get()),
                images.length - 1
            );
            renderFrame(currentIndex);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial sizing

        // Subscribe to scroll changes to render frames
        const unsubscribe = frameIndex.on("change", (latest) => {
            const index = Math.min(Math.round(latest), images.length - 1);
            requestAnimationFrame(() => renderFrame(index));
        });

        // Initial render
        renderFrame(0);

        return () => {
            window.removeEventListener("resize", handleResize);
            unsubscribe();
        };
    }, [loaded, images, frameIndex]);

    return (
        <div ref={containerRef} className="relative h-[200vh] md:h-[300vh]">
            <div className="sticky top-0 h-[100dvh] overflow-hidden">
                {/* Canvas Background */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 z-0 object-cover w-full h-full"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-deep-space/20 to-transparent z-10" />

                {/* Content Overlay */}
                <div className="container relative z-20 px-6 mx-auto h-full flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl"
                    >

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight leading-tight text-white drop-shadow-2xl">
                            Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple">Universes</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 dark:text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                            Built by AI. Curated by Human.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
                            <InteractiveHoverButton
                                text="Newsletter"
                                asLink={true}
                                href="https://solostack-tech.beehiiv.com"
                                className="text-base"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40"
                >
                    <span className="text-sm uppercase tracking-widest text-[10px]">Scroll to Explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
                </motion.div>
            </div>
        </div>
    );
};

export default HeroScroll;
