"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  bgColor?: string;
  textColor?: string;
  activeBgColor?: string;
  activeTextColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  buttonBgColor?: string;
  buttonHoverColor?: string;
}

const Header: React.FC<HeaderProps> = ({
  bgColor = "",
  textColor = "",
  activeBgColor = "",
  activeTextColor = "",
  hoverBgColor = "",
  hoverTextColor = "",
  buttonBgColor = "",
  buttonHoverColor = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Individuals", href: "/individual" },
    { name: "Teams", href: "/teams" },
    { name: "Organizations", href: "/organizations" },
    { name: "About Us", href: "/aboutus" },
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

          <ul className="hidden 2xl:flex gap-6 font-medium  text-base xl:text-lg">
            {menuItems.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <li key={idx}>
                  <Link
                    href={item.href}
                    style={{
                      backgroundColor: isActive ? activeBgColor : bgColor,
                      color: isActive ? activeTextColor : textColor,
                    }}
                    className="px-4 py-2 rounded-full transition-all whitespace-nowrap"
                    onMouseEnter={(e) => {
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.backgroundColor = hoverBgColor;
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        hoverTextColor;
                    }}
                    onMouseLeave={(e) => {
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.backgroundColor = isActive
                        ? activeBgColor
                        : bgColor;
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        isActive ? activeTextColor : textColor;
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center">
            <a
              href="https://themesberg.com/product/tailwind-css/landing-page"
              className="text-white text-sm sm:text-base lg:text-lg font-medium py-2 px-5 sm:py-3 sm:px-7 rounded-full transition whitespace-nowrap"
              style={{ backgroundColor: buttonBgColor }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  buttonHoverColor;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  buttonBgColor;
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Try for Free
            </a>
          </div>
        </div>
        <div
          className={`fixed inset-0 z-50 bg-black/50 flex transition-opacity duration-300 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
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

          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
