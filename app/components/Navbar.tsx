  "use client";

  import { useState } from "react";
  import Link from "next/link";
  import Image from "next/image";
  import { usePathname } from "next/navigation";
  import { motion, AnimatePresence } from "framer-motion";

  export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Community", path: "/community" },
      { name: "Contact", path: "/contact" },
    ];

    return (
      <nav className="fixed top-0 left-0 w-full z-50 h-17.5 bg-linear-to-br from-[#020617] via-[#031525] to-[#041c2e] border-b border-white/10 backdrop-blur-md">
        <div className="container mx-auto px-6 md:px-16 h-full flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={20}
              priority
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 text-lg">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`transition hover:text-teal-400 ${
                    pathname === item.path ? "text-teal-400" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <Image
              src="/images/menu.png"
              alt="Menu"
              width={28}
              height={28}
              className="cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10"
            >
              <ul className="flex flex-col items-center py-6 space-y-6 text-lg">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-teal-400 transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    );
  }