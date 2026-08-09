"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Handshake, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled
          ? "border-gray-200 bg-white/90 backdrop-blur-sm"
          : "border-transparent bg-white"
      )}
    >
      <nav className="container-custom flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600 text-white">
            <Handshake size={20} />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold text-gray-900">Trust Aid</span>
            <span className="block text-[11px] font-medium tracking-wide text-gray-500">
              INITIATIVE
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-green-700",
                    active ? "text-green-700" : "text-gray-700"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="hidden text-sm font-medium text-gray-700 transition-colors hover:text-green-700 xl:inline-block"
          >
            Contact Us
          </Link>
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-700"
          >
            Donate
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-200 bg-white lg:hidden"
          >
            <ul className="container-custom flex flex-col gap-1 py-4">
              {[...navLinks, { label: "Contact Us", href: "/contact" }].map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        active
                          ? "bg-green-50 text-green-700"
                          : "text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/donate"
                  className="block rounded-lg bg-green-600 px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-green-700"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
