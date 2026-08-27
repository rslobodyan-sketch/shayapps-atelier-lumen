"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EditorialSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function EditorialSection({ children, className, id }: EditorialSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      className={cn("py-20 md:py-32", className)}
    >
      {children}
    </motion.section>
  );
}
