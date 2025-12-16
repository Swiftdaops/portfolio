"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="w-full border-b bg-white/60 dark:bg-black/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-0.5">
          <Link href="/" className="font-semibold text-lg">
            Welcome
          </Link>
          <div className="flex items-center">
            <div className="rounded-full p-1 bg-transparent dark:bg-white/20 dark:bg-opacity-10 backdrop-blur-sm">
              <div className="rounded-full overflow-hidden h-8 w-8">
                <DotLottieReact
                  src="https://lottie.host/40c175ce-d052-460c-8ed2-db59775d4eda/WVFXQZVW3z.lottie"
                  loop
                  autoplay
                  className="h-8 w-8 block"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop links */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/steeze" className="hover:underline">
            Steeze
          </Link>
          <Link href="/ebooks" className="hover:underline">
            Ebooks
          </Link>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-md border p-1"
          >
            {mounted && theme === "dark" ? (
              // Sun icon for light
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36l-1.41 1.41M7.05 16.95l-1.41 1.41m12.02 0l-1.41-1.41M7.05 7.05L5.64 5.64" />
                <circle cx="12" cy="12" r="3" strokeWidth="2" />
              </svg>
            ) : (
              // Moon icon for dark
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          {/* theme toggle shown on mobile (mounted check) */}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border p-1 mr-2"
            >
              {theme === "dark" ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36l-1.41 1.41M7.05 16.95l-1.41 1.41m12.02 0l-1.41-1.41M7.05 7.05L5.64 5.64" />
                  <circle cx="12" cy="12" r="3" strokeWidth="2" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
          )}

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border p-1"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              {open ? (
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t bg-white/60 dark:bg-black/60">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:px-6 lg:px-8">
            <Link href="/" onClick={() => setOpen(false)} className="py-2">
              Home
            </Link>
            <Link href="/steeze" onClick={() => setOpen(false)} className="py-2">
              Steeze
            </Link>
            <Link href="/ebooks" onClick={() => setOpen(false)} className="py-2">
              Ebooks
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
