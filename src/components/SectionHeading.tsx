"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  size?: "default" | "large";
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
  size = "default",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "font-display text-charcoal leading-[1.05] tracking-tight",
          size === "large"
            ? "text-4xl md:text-6xl lg:text-7xl"
            : "text-3xl md:text-5xl"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-stone text-base md:text-lg max-w-xl leading-relaxed",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
