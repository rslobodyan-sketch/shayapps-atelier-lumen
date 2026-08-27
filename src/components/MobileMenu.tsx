"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navigation } from "@/data/site";

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] bg-ivory flex flex-col"
    >
      <div className="container-editorial flex items-center justify-between py-6">
        <span className="font-body text-xs tracking-[0.25em] uppercase text-stone">
          Menu
        </span>
        <button
          type="button"
          onClick={onClose}
          className="p-2 -mr-2 text-charcoal"
          aria-label="Close menu"
        >
          <span className="block text-2xl font-light leading-none">&times;</span>
        </button>
      </div>

      <nav className="flex-1 flex flex-col justify-center container-editorial pb-16" aria-label="Mobile navigation">
        {navigation.map((item, i) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
          >
            <Link
              href={item.href}
              onClick={onClose}
              className="block font-display text-4xl md:text-5xl text-charcoal py-4 border-b border-warm-grey/30 hover:text-clay transition-colors"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.div>
  );
}
