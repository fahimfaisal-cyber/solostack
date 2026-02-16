"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

export default function TermsAndConditions() {
    return (
        <div className="relative min-h-screen bg-black dark:bg-black text-white dark:text-white">
            <BackgroundBeams className="absolute inset-0" />

            <div className="relative z-10 container mx-auto px-6 py-20 md:py-32 max-w-3xl">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-electric-blue hover:text-electric-blue/80 mb-8 transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                        Terms & Conditions
                    </h1>
                    <p className="text-gray-400 dark:text-gray-400 mb-12">
                        Last updated: February 16, 2026
                    </p>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-2xl font-bold mb-4 mt-8">Agreement to Terms</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            By accessing and using SoloStack, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms and Conditions, please do not use this website.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Intellectual Property Rights</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            Unless otherwise stated, SoloStack and/or its licensors own the intellectual property rights for all material on this website. All code snippets, tutorials, articles, and content published on SoloStack are the property of SoloStack unless explicitly stated otherwise.
                        </p>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            You may view, download for caching purposes only, and print pages or code snippets from the website for your own personal use, subject to the restrictions set out below:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 mb-6 space-y-2">
                            <li>You must not republish material from this website without attribution</li>
                            <li>You must not sell, rent, or sub-license material from the website</li>
                            <li>You must not reproduce, duplicate, or copy material from this website for commercial purposes</li>
                            <li>You must not redistribute content from SoloStack unless content is specifically made for redistribution</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Code and Content Usage</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            Code snippets and tutorials shared on SoloStack are provided for educational purposes. While you are free to use these code snippets in your own projects, we request that you:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 mb-6 space-y-2">
                            <li>Provide attribution when sharing or teaching others</li>
                            <li>Do not claim the original work as your own</li>
                            <li>Understand that code is provided "as is" (see Disclaimer below)</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4 mt-8">User Conduct</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            You agree not to use this website:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 mb-6 space-y-2">
                            <li>In any way that violates any applicable national or international law or regulation</li>
                            <li>To transmit any material that is defamatory, offensive, or otherwise objectionable</li>
                            <li>To impersonate or attempt to impersonate SoloStack, a SoloStack employee, another user, or any other person or entity</li>
                            <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Disclaimer</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            THE CONTENT, CODE, AND MATERIALS ON THIS WEBSITE ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. SoloStack does not warrant that:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 mb-6 space-y-2">
                            <li>The website will be constantly available, or available at all</li>
                            <li>The information on this website is complete, true, accurate, or non-misleading</li>
                            <li>Code snippets are error-free, secure, or will function without disruptions, delays, or imperfections</li>
                        </ul>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            Any code or advice provided is for educational purposes and should be thoroughly tested before use in production environments.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Limitation of Liability</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            In no event shall SoloStack, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort, or otherwise.
                        </p>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            SoloStack shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website or the code and content provided herein.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Affiliate Links</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            This website contains affiliate links to products and services. We may receive a commission for purchases made through these links at no additional cost to you. Our affiliate relationships do not influence our content or recommendations.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">External Links</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            Our website may contain links to external websites that are not provided or maintained by SoloStack. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Indemnification</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            You agree to indemnify and hold SoloStack and its affiliates harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the website, your violation of these Terms and Conditions, or your violation of any rights of another.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Severability</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Changes to Terms</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            SoloStack reserves the right to revise these Terms at any time. By continuing to use this website after changes are posted, you agree to be bound by the revised terms.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Contact Information</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            If you have any questions about these Terms and Conditions, please contact us at:{" "}
                            <a href="mailto:editor@solostack.tech" className="text-electric-blue hover:underline">
                                editor@solostack.tech
                            </a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
