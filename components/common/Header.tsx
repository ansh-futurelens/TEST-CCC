import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { LazyImage } from "../LazyMedia";

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
  const router = useRouter();

  useEffect(() => {
    ["aboutus", "individual", "organizations", "universities"].forEach((path) =>
      router.prefetch(`/${path}`)
    );
  }, [router]);

  const menuItems = [
    { name: "Individuals", href: "/individual" },
    { name: "Universities", href: "/universities" },
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
    <nav className="header-root">
      <div className="header-container container-custom">
        <div className="header-logo-wrapper">
          <button className="header-menu-button" onClick={() => setIsOpen(true)}>
            <img src="/media/icons/icon.webp" alt="Menu" className="h-7 w-7 object-contain" />
          </button>

          <Link href="/" aria-label="Go to homepage">
            <img src="/media/logos/q_white_logo.webp" alt="Q Studio Logo" className="header-logo" />
          </Link>
        </div>

        <ul className="header-nav">
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
                  className="header-nav-link header-nav-link-hover header-cta"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = hoverBgColor;
                    (e.currentTarget as HTMLAnchorElement).style.color = hoverTextColor;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = isActive
                      ? activeBgColor
                      : bgColor;
                    (e.currentTarget as HTMLAnchorElement).style.color = isActive
                      ? activeTextColor
                      : textColor;
                  }}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href="https://play.google.com/store/apps/details?id=com.myqstudio.myq.prod"
          className="header-cta"
          style={{ backgroundColor: buttonBgColor }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = buttonHoverColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = buttonBgColor)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Try for Free
        </a>
      </div>
      <div
        className={`header-mobile-menu-bg ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className={`header-mobile-menu ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="mb-6 flex items-center justify-between">
            <LazyImage
              src="/media/logos/q-logo-mobile.webp"
              alt="Logo"
              className="header-mobile-logo"
            />
            <button className="header-mobile-close-btn" onClick={() => setIsOpen(false)}>
              <X size={18} className="text-white" />
            </button>
          </div>

          <ul className="header-mobile-list">
            {menuItems.map((item, idx) => (
              <li key={idx} className="header-mobile-list-item">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="header-mobile-list-link"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1" onClick={() => setIsOpen(false)} />
      </div>
    </nav>
  );
};

export default Header;
