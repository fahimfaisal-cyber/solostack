"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { products, type Product } from "@/lib/products";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

function ProductCard({ product, index }: { product: Product; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-electric-blue/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-electric-blue/10"
        >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white dark:text-white">{product.name}</h3>
                    <span className="text-electric-blue font-semibold">{product.price}</span>
                </div>
                <p className="text-gray-300 dark:text-gray-300 text-sm line-clamp-2">
                    {product.description}
                </p>
                {product.category && (
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/20">
                        {product.category}
                    </span>
                )}

                {/* CTA Button */}
                <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 w-full bg-electric-blue hover:bg-electric-blue/90 text-white py-2.5 px-4 rounded-lg font-medium transition-all group/btn"
                >
                    <span>Get it</span>
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
            </div>
        </motion.div>
    );
}

export default function ShopPage() {
    return (
        <div className="relative min-h-screen bg-black dark:bg-black text-white dark:text-white overflow-hidden">
            {/* Animated Background */}
            <BackgroundBeams className="absolute inset-0" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
                        The <span className="text-electric-blue">Stack</span>
                    </h1>
                    <p className="text-xl text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
                        Tools and gear I use to build.
                    </p>
                </motion.div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
