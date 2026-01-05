"use client";

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const NAV_LINKS = [
  { name: "Features", href: "#features" },
  { name: "Agents", href: "#how-it-works" },
  { name: "FAQ", href: "#faq" },
  { name: "About Us", href: "#about-us" },
];

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const { isSignedIn } = useUser();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-3xl border border-white/20 bg-gradient-to-r from-indigo-900/30 via-purple-900/20 to-violet-900/30 backdrop-blur-lg shadow-lg shadow-indigo-900/40">
          <div className="flex h-16 items-center justify-between px-6">
            <a
              href="#"
              className="flex items-center gap-1 text-lg font-semibold tracking-tight text-white"
            >
              <span>Agentic</span>
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                AI
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-white/80">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-indigo-400 transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle theme"
                className="rounded-full p-2 text-white hover:bg-white/10 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {darkMode ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </motion.button>

              {isSignedIn ? (
                <SignOutButton>
                  <motion.button
                    className="rounded-full px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-lg shadow-purple-600/40 hover:opacity-90 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign Out
                  </motion.button>
                </SignOutButton>
              ) : (
                <SignInButton>
                  <motion.button
                    className="rounded-full px-6 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg shadow-indigo-600/40 hover:opacity-90 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign In
                  </motion.button>
                </SignInButton>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden rounded-lg p-2 text-white hover:bg-white/10 transition"
            >
              {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <motion.div
              className="md:hidden border-t border-white/30 px-6 py-5 space-y-4 text-white"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium hover:text-indigo-400 transition"
                >
                  {link.name}
                </a>
              ))}

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-2 text-sm"
              >
                {darkMode ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
                {darkMode ? "Light mode" : "Dark mode"}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}
