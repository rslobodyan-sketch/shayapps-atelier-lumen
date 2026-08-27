interface ProjectMetaProps {
  location: string;
  category: string;
  year: string;
  className?: string;
  variant?: "default" | "overlay";
}

export function ProjectMeta({
  location,
  category,
  year,
  className = "",
  variant = "default",
}: ProjectMetaProps) {
  if (variant === "overlay") {
    return (
      <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs tracking-[0.15em] uppercase text-ivory/90 ${className}`}>
        <span>{category}</span>
        <span className="opacity-50">/</span>
        <span>{location}</span>
        <span className="opacity-50">/</span>
        <span>{year}</span>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-[0.15em] uppercase text-stone ${className}`}>
      <span>{category}</span>
      <span className="text-warm-grey">/</span>
      <span>{location}</span>
      <span className="text-warm-grey">/</span>
      <span>{year}</span>
    </div>
  );
}
