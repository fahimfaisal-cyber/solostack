"use client";

import { motion } from "framer-motion";
import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiOpenai,
    SiVercel,
    SiFramer
} from "react-icons/si";

const techStack = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "TypeScript", icon: SiTypescript },
    { name: "OpenAI", icon: SiOpenai },
    { name: "Vercel", icon: SiVercel },
    { name: "Framer Motion", icon: SiFramer },
];

const TechMarquee = () => {
    return (
        <div className="w-full overflow-hidden py-10 bg-black/50 border-y border-white/5 backdrop-blur-sm">
            <div className="relative flex">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-deep-space to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-deep-space to-transparent z-10" />

                {/* Marquee Container */}
                <motion.div
                    className="flex flex-nowrap gap-16 items-center"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Duplicate list 3 times for seamless loop */}
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex gap-16 items-center shrink-0">
                            {techStack.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex flex-col items-center gap-2 group cursor-pointer"
                                >
                                    <tech.icon
                                        size={40}
                                        className="text-white/50 group-hover:text-white transition-colors duration-300"
                                    />
                                    <span className="text-xs font-medium text-white/30 group-hover:text-white/80 transition-colors uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TechMarquee;
