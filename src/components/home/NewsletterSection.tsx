"use client";

import { motion } from "framer-motion";

const NewsletterSection = () => {
    return (
        <section className="w-full py-24 bg-black relative overflow-hidden flex flex-col items-center justify-center">
            {/* Glowing Separator Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent shadow-[0_0_20px_rgba(41,216,255,0.5)]" />

            <div className="container mx-auto px-6 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4 tracking-tight">
                        Join the <span className="text-electric-blue">SoloStack</span>
                    </h2>
                    <p className="text-neutral-400 text-lg mb-8">
                        Stay ahead of the curve on AI and the future.
                    </p>

                    {/* Beehiiv Embed */}
                    <div className="flex justify-center mt-8 w-full">
                        <iframe
                            src="https://subscribe-forms.beehiiv.com/7c8d90d9-09f8-4cd3-b264-7ba7c3bc180b"
                            data-test-id="beehiiv-embed"
                            frameBorder="0"
                            scrolling="no"
                            style={{
                                width: '100%',
                                height: '206px',
                                backgroundColor: 'transparent',
                                borderRadius: '0px',
                                margin: 0,
                                filter: 'invert(1) hue-rotate(180deg)'
                            }}
                            title="Beehiiv Newsletter Subscription"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default NewsletterSection;
