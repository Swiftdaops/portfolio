// src/components/Footer.jsx
import Link from 'next/link';
import GlassWhatsAppCTA from './Glassfooter';

/**
 * Portfolio Footer (Obi Tobechukwu)
 * - Links + contact info in footer
 * - Two full-width mobile buttons AFTER the footer (last items on page)
 *
 * Props:
 * - projectLinks?: { label: string, href: string }[]
 * - primaryCta?: { label: string, href: string }
 * - secondaryCta?: { label: string, href: string }
 */
export default function Footer({
  projectLinks = [
    { label: "JohnBooks Project Page", href: "/projects/johnbooks" },
    { label: "The Steeze Store Project Page", href: "/projects/steeze-store" },
  ],
  primaryCta = {
    label: "Start a Project",
    href:
      "https://wa.me/14376654926?text=Hi%20Obi,%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20talk%20about%20a%20web%20app%20%2F%20website%20project.",
  },
  secondaryCta = {
    label: "View Projects",
    href: "/projects",
  },
}) {
  const links = {
    GitHub: "https://github.com/Swiftdaops",
    Instagram: "https://www.instagram.com/siinzuu_fx?igsh=MWg5cTEzZnZwdTI5YQ%3D%3D&utm_source=qr",
    X: "https://x.com/swiftdevops?s=21",
    LinkedIn:
      "https://www.linkedin.com/in/obi-tobechukwu-5b3b40293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    Facebook:
      "https://www.facebook.com/profile.php?id=61552214320844&mibextid=LQQJ4d",
  };

  return (
    <>
      <footer className="border-t border-stone-200 dark:border-stone-800 bg-white/60 dark:bg-stone-950/40 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-20 py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="text-sm font-semibold text-stone-900 dark:text-white inline-block">
                Obi Tobechukwu
              </Link>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                Product-first web developer building modern, scalable, and secure
                web apps optimized for conversion.
              </p>
            </div>

            
            {/* Social */}
            <nav aria-label="Social links" className="lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                Social
              </p>
              <ul className="mt-3 space-y-2">
                {Object.entries(links).map(([name, href]) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-stone-800 hover:underline dark:text-stone-200"
                      aria-label={`Open ${name} profile`}
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div className="lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                Contact
              </p>
              <p className="mt-3 text-sm text-stone-600 dark:text-stone-300">
                For collaborations, portfolio reviews, or client projects, reach
                me via WhatsApp or LinkedIn.
              </p>

              <div className="mt-4 space-y-2">
                <a
                  href={primaryCta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit rounded-lg border border-stone-200 bg-white/70 px-3 py-2 text-sm font-semibold text-stone-900 hover:bg-white dark:border-stone-800 dark:bg-stone-950/40 dark:text-white dark:hover:bg-stone-950 ml-4"
                >
                  Message on WhatsApp
                </a>
                <a
                  href={links.LinkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit rounded-lg border border-stone-200 bg-white/70 px-3 py-2 text-sm font-semibold text-stone-900 hover:bg-white dark:border-stone-800 dark:bg-stone-950/40 dark:text-white dark:hover:bg-stone-950"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

        {/* Bottom row */}
                  <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-stone-200 pt-6 text-xs text-stone-500 dark:border-stone-800 dark:text-stone-400">
                    <p>© {new Date().getFullYear()} Obi Tobechukwu. All rights reserved.</p>
                    <p className="text-stone-500 dark:text-stone-400">
                      Built with React • Tailwind 
                    </p>
                  </div>
                </div>
              </footer>
      <GlassWhatsAppCTA />
    </>
  );
}
