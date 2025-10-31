import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";

const menuItems = [
  { name: "Home", href: "/", color: "#084F50" },
  { name: "Individuals", href: "/individual", color: "#B05143" },
  { name: "Universities", href: "/universities", color: "#2A9496" },
  { name: "Organizations", href: "/organizations", color: "#50408C" },
  { name: "About Us", href: "/aboutus", color: "#EDA646" },
];

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const activeRoute =
    menuItems.find((item) =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
    ) || menuItems[0];

  const bgColor = activeRoute.color;

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 800);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className={`fixed right-6 bottom-6 z-50 cursor-pointer rounded-full p-3 text-white shadow-lg transition-all duration-300 hover:opacity-90`}
          style={{ backgroundColor: bgColor }}
        >
          <ArrowUp size={30} />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
