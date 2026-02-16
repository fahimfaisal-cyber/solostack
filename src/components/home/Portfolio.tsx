"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import {
    Code,
    Globe,
    Layout,
    Smartphone,
    Server,
    Database,
} from "lucide-react";
import { motion } from "framer-motion";

const Portfolio = () => {
    return (
        <section id="projects" className="py-20 bg-deep-space relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-electric-blue font-medium mb-4 text-lg tracking-wide uppercase">
                        Selected Works
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-heading text-white">
                        Digital <span className="text-neon-purple">Craftsmanship</span>
                    </h3>
                </motion.div>

                <BentoGrid className="max-w-6xl mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-electric-blue/5 to-transparent pointer-events-none" />
        </section>
    );
};

const Skeleton = ({ color }: { color: string }) => (
    <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 overflow-hidden relative group`}>
        <div className={`absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500`} style={{ backgroundColor: color }} />
        <div className="absolute inset-0 flex items-center justify-center text-white/10 font-bold text-4xl uppercase tracking-widest opacity-20 rotate-12 scale-150">
            Preview
        </div>
    </div>
);

const items = [
    {
        title: "E-Commerce Platform",
        description: "A high-performance headless commerce solution built with Next.js and Shopify.",
        header: <Skeleton color="#29D8FF" />,
        icon: <Globe className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Fintech Dashboard",
        description: "Real-time financial data visualization with D3.js and WebSocket integration.",
        header: <Skeleton color="#bf00ff" />,
        icon: <Layout className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "AI Content Generator",
        description: "Generative AI application for creating marketing copy and social media posts.",
        header: <Skeleton color="#29D8FF" />,
        icon: <Code className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Mobile Banking App",
        description: "Cross-platform mobile application for digital banking with biometric security.",
        header: <Skeleton color="#bf00ff" />,
        icon: <Smartphone className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Cloud Infrastructure",
        description: "Automated cloud infrastructure management system using Terraform and AWS.",
        header: <Skeleton color="#29D8FF" />,
        icon: <Server className="h-4 w-4 text-neutral-500" />,
    },
];

export default Portfolio;
