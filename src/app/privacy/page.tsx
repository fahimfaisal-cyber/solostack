"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

export default function PrivacyPolicy() {
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
                        Privacy Policy
                    </h1>
                    <p className="text-gray-400 dark:text-gray-400 mb-12">
                        Last updated: February 16, 2026
                    </p>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-2xl font-bold mb-4 mt-8">Introduction</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            Welcome to SoloStack. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and subscribe to our newsletter. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Information We Collect</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-4">
                            We collect information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 mb-6 space-y-2">
                            <li>Subscribe to our newsletter via Beehiiv</li>
                            <li>Contact us via email</li>
                            <li>Interact with our website</li>
                        </ul>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            The personal information we collect may include your email address and any other information you choose to provide.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">How We Use Your Information</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 mb-6 space-y-2">
                            <li>Send you our newsletter and updates about new content</li>
                            <li>Respond to your inquiries and provide customer support</li>
                            <li>Improve our website and user experience</li>
                            <li>Monitor and analyze usage and trends</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Third-Party Services</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            We use third-party services to help us operate our website and deliver our services:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 mb-6 space-y-2">
                            <li><strong>Beehiiv:</strong> Newsletter subscription and email delivery service</li>
                            <li><strong>Analytics:</strong> We may use analytics tools to understand how visitors interact with our site</li>
                            <li><strong>Hosting Services:</strong> Our website is hosted on third-party servers</li>
                        </ul>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            These third parties have their own privacy policies addressing how they use such information.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Affiliate Disclosure</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            SoloStack participates in affiliate marketing programs, including Amazon Associates and other partner programs. This means that we may earn a commission when you click on or make purchases via affiliate links on our site. These affiliate partnerships do not influence our content or recommendations. We only promote products and services that we genuinely believe will add value to our readers.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Data Security</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Your Rights</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            You have the right to:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 dark:text-gray-300 mb-6 space-y-2">
                            <li>Unsubscribe from our newsletter at any time</li>
                            <li>Request access to the personal information we hold about you</li>
                            <li>Request correction or deletion of your personal information</li>
                            <li>Object to our processing of your personal information</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Cookies</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            We may use cookies and similar tracking technologies to improve your browsing experience and analyze site traffic. You can control cookie settings through your browser preferences.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Children's Privacy</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Changes to This Policy</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Contact Us</h2>
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-6">
                            If you have any questions about this Privacy Policy, please contact us at:{" "}
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
