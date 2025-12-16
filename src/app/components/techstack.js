"use client";

import * as simpleIcons from "simple-icons";

/**
 * Safely resolve icons from simple-icons.
 * Prevents runtime crashes if an icon export does not exist.
 */
const resolveIcon = (exportKey) => {
  if (!exportKey) return null;
  return simpleIcons[exportKey] || null;
};

/**
 * Single source of truth for the tech stack.
 * Exported for reuse in Hero, Footer, Project pages, etc.
 */
export const ALL = [
  { label: "Node.js", icon: resolveIcon("siNodedotjs") },
  { label: "Express", icon: resolveIcon("siExpress") },
  { label: "MongoDB", icon: resolveIcon("siMongodb") },
  { label: "Supabase", icon: resolveIcon("siSupabase") },
  { label: "REST API", icon: null },
  { label: "Cloudinary", icon: resolveIcon("siCloudinary") },
  { label: "ImageKit", icon: resolveIcon("siImagekit") },
  { label: "Vercel", icon: resolveIcon("siVercel") },
  { label: "PostHog", icon: resolveIcon("siPosthog") },
  { label: "Git", icon: resolveIcon("siGit") },
  { label: "GitHub", icon: resolveIcon("siGithub") },
  { label: "React", icon: resolveIcon("siReact") },
  { label: "Next.js", icon: resolveIcon("siNextdotjs") },
  { label: "Tailwind CSS", icon: resolveIcon("siTailwindcss") },
  { label: "ShadCN UI", icon: resolveIcon("siShadcnui") },
  { label: "Framer Motion", icon: resolveIcon("siFramer") },
  { label: "Swiper", icon: resolveIcon("siSwiper") },
  { label: "Zustand", icon: resolveIcon("siZustand") },
  { label: "Vite", icon: resolveIcon("siVite") },
  { label: "Postman", icon: resolveIcon("siPostman") },
];

export default function TechStack({
  title = "Tech Stack",
  subtitle = "Tools I use to build modern, scalable, secure web apps.",
  variant = "default", // "default" | "compact"
  items,
}) {
  const filtered =
    Array.isArray(items) && items.length
      ? ALL.filter((x) => items.includes(x.label))
      : ALL;

  const isCompact = variant === "compact";

  return (
    <section
      aria-labelledby="tech-stack-title"
      className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-20 py-12"
    >
      <header className="max-w-2xl">
        <h2
          id="tech-stack-title"
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 dark:text-white"
        >
          {title}
        </h2>

        {!isCompact && (
          <p className="mt-3 text-base leading-relaxed text-stone-700 dark:text-stone-200">
            {subtitle}
          </p>
        )}
      </header>

      <div className={`mt-8 flex flex-wrap gap-3 ${isCompact ? "mt-6" : ""}`}>
        {filtered.map((t) => (
          <TechBadge
            key={t.label}
            label={t.label}
            icon={t.icon}
            compact={isCompact}
          />
        ))}
      </div>
    </section>
  );
}

/**
 * Tech badge (SEO-safe, accessible, dark-mode ready)
 */
export function TechBadge({ label, icon, compact }) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2 rounded-xl border backdrop-blur",
        "border-stone-200 bg-white/70 text-stone-800",
        "dark:border-stone-800 dark:bg-stone-950/40 dark:text-stone-200",
        "hover:bg-white dark:hover:bg-stone-950",
        compact ? "px-3 py-2 text-xs" : "px-4 py-2.5 text-sm",
      ].join(" ")}
      aria-label={label}
      title={label}
    >
      {icon ? (
        <span
          aria-hidden="true"
          className={[
            "inline-flex items-center justify-center rounded-lg border",
            "border-stone-200 bg-white/60 text-stone-700",
            "dark:border-stone-800 dark:bg-stone-950/40 dark:text-stone-200",
            compact ? "h-7 w-7" : "h-8 w-8",
          ].join(" ")}
        >
          <svg
            viewBox="0 0 24 24"
            width={compact ? 16 : 18}
            height={compact ? 16 : 18}
            fill="currentColor"
            role="img"
            aria-label={`${label} logo`}
          >
            <path d={icon.path} />
          </svg>
        </span>
      ) : (
        <span
          aria-hidden="true"
          className={[
            "inline-flex items-center justify-center rounded-lg border",
            "border-stone-200 bg-white/60 text-stone-700",
            "dark:border-stone-800 dark:bg-stone-950/40 dark:text-stone-200",
            compact ? "h-7 w-7 text-[10px]" : "h-8 w-8 text-[11px]",
          ].join(" ")}
        >
          API
        </span>
      )}

      <span className="font-semibold">{label}</span>
    </div>
  );
}
