"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

const projectTypes = [
  "Residential",
  "Hospitality",
  "Cultural",
  "Commercial",
  "Other",
];

const budgetRanges = [
  "Under $100k",
  "$100k–$500k",
  "$500k–$1m",
  "$1m+",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-16 text-left md:py-20 md:pl-2 border-t border-warm-grey/30"
      >
        <p className="font-display text-3xl text-charcoal mb-4">Thank you.</p>
        <p className="text-stone">
          We&apos;ve received your enquiry and will respond within two business days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormField label="Name" name="name" required />
        <FormField label="Email" name="email" type="email" required />
      </div>

      <FormField label="Company" name="company" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormSelect label="Project type" name="projectType" options={projectTypes} required />
        <FormField label="Location" name="location" required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormSelect label="Budget range" name="budget" options={budgetRanges} required />
        <FormField label="Timeline" name="timeline" placeholder="e.g. Start Q2 2025" />
      </div>

      <div>
        <label htmlFor="description" className="block text-xs tracking-[0.15em] uppercase text-stone mb-3">
          Project description
        </label>
        <textarea
          id="description"
          name="description"
          rows={6}
          required
          className="form-input resize-none"
          placeholder="Tell us about your project, site, and ambitions."
        />
      </div>

      <button type="submit" className="btn-primary">
        Send enquiry
        <span aria-hidden="true">&rarr;</span>
      </button>
    </form>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

function FormField({ label, name, type = "text", required, placeholder }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs tracking-[0.15em] uppercase text-stone mb-3">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="form-input"
      />
    </div>
  );
}

interface FormSelectProps {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}

function FormSelect({ label, name, options, required }: FormSelectProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs tracking-[0.15em] uppercase text-stone mb-3">
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="form-select"
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-stone mb-3">Email</p>
        <a href={`mailto:${siteConfig.email}`} className="text-charcoal hover:text-clay transition-colors duration-300 text-base md:text-lg link-underline">
          {siteConfig.email}
        </a>
      </div>
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-stone mb-3">Telephone</p>
        <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-charcoal hover:text-clay transition-colors duration-300 text-base md:text-lg">
          {siteConfig.phone}
        </a>
      </div>
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-stone mb-3">Studio</p>
        <address className="not-italic text-charcoal leading-relaxed">
          {siteConfig.address.line1}<br />
          {siteConfig.address.line2}<br />
          {siteConfig.address.country}
        </address>
      </div>
    </div>
  );
}
