"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

export function ImageReveal({
  src,
  alt,
  width,
  height,
  className,
  imageClassName,
  priority = false,
  fill = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn("overflow-hidden", className)}
    >
      <motion.div
        initial={shouldReduceMotion ? false : { scale: 1.06 }}
        whileInView={shouldReduceMotion ? undefined : { scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full"
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn("object-cover image-hover", imageClassName)}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width ?? 1200}
            height={height ?? 800}
            sizes={sizes}
            priority={priority}
            className={cn("w-full h-auto object-cover image-hover", imageClassName)}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
