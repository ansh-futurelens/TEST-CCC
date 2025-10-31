"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Individuals", href: "/individual" },
    { name: "Teams", href: "/teams" },
    { name: "Organizations", href: "/organizations" },
    { name: "About Us", href: "/about" },
    { name: "Resources", href: "/resources" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="w-full absolute top-0 left-0 z-50 pt-5">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              className="2xl:hidden p-2 rounded-md hover:bg-teal-700 transition"
              onClick={() => setIsOpen(true)}
            >
              <img
                src="/media/icons/mobile-icon.png"
                alt="Menu"
                className="h-7 w-7 object-contain"
              />
            </button>

            <Link href="/" aria-label="Go to homepage">
              <img
                src="/media/logos/q_white_logo.png"
                alt="Q Studio Logo"
                className="h-10 md:h-15 lg:h-20"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden 2xl:flex gap-6 text-white text-base xl:text-lg font-medium">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded-full hover:bg-teal-hover transition whitespace-nowrap"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="flex items-center">
            <a
              href="https://themesberg.com/product/tailwind-css/landing-page"
              className="bg-red-700 text-white text-sm sm:text-base lg:text-lg font-medium py-2 px-5 sm:py-3 sm:px-7 rounded-full hover:bg-[var(--color-red-hover)] transition whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try for Free
            </a>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-50 bg-black/50 flex transition-opacity duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Sidebar */}
          <div
            className={`bg-[#F1F1F1] h-full flex flex-col transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } w-4/5 sm:w-96 md:w-[30rem] p-6`}
          >
            <div className="flex items-center justify-between mb-6">
              <img
                src="/media/logos/mobile-logo.png"
                alt="Logo"
                className="h-8 md:h-10 ml-6"
              />
              <button
                className="p-1 rounded-full bg-[#02514B] flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                <X size={18} className="text-white" />
              </button>
            </div>

            <ul className="flex flex-col font-medium">
              {menuItems.map((item, idx) => (
                <li key={idx} className="border-b border-[#E6E9E9]">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[#02514B] py-4 px-4 block hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
