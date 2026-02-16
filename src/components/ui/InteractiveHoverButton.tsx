import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps {
    text?: string;
    asLink?: boolean;
    href?: string;
    className?: string;
}

export function InteractiveHoverButton({
    text = "Button",
    className,
    asLink = false,
    href
}: InteractiveHoverButtonProps) {
    const sharedContent = (
        <>
            <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                {text}
            </span>
            <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white dark:text-black opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                <span>{text}</span>
                <ArrowRight />
            </div>
            <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-black dark:bg-white transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]"></div>
        </>
    );

    const sharedClassName = cn(
        "group relative w-40 cursor-pointer overflow-hidden rounded-full border bg-white dark:bg-black text-black dark:text-white p-3 text-center font-semibold hover:scale-105 transition-transform",
        className,
    );

    if (asLink && href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={sharedClassName}
            >
                {sharedContent}
            </a>
        );
    }

    return (
        <button className={sharedClassName}>
            {sharedContent}
        </button>
    );
}
