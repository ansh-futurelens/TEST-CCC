import React, { useState, useEffect } from "react";
import DownloadForm from "../universities/DownloadForm";
import ContactForm from "../aboutus/ContactForm";
import Form from "../home/Form";
import { useRouter } from "next/navigation";
interface LinkItem {
  name: string;
  path: string;
}

interface ImageLink {
  src: string;
  alt: string;
  title: string;
  link?: string;
}

interface MenuSection {
  title: string;
  links?: LinkItem[];
  images?: ImageLink[];
}

const Footer: React.FC = () => {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow =
      isDownloadOpen || isContactOpen || isDemoFormOpen ? "hidden" : "auto";
  }, [isDownloadOpen, isContactOpen, isDemoFormOpen]);

  const menuLinks: MenuSection[] = [
    {
      title: "SERVICES",
      links: [
        { name: "Individuals", path: "/individual" },
        { name: "Universities", path: "/universities" },
        { name: "Organizations", path: "/organizations" },
      ],
    },
    {
      title: "USEFUL LINKS",
      links: [
        { name: "Schedule a Demo", path: "/schedule-demo" },
        { name: "Download eBook", path: "/download-ebook" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
    {
      title: "ABOUT",
      links: [
        { name: "About Us", path: "/aboutus" },
        { name: "Blog", path: "https://blog.myqstudio.com/" },
        { name: "Terms of Use", path: "https://myqstudio.com/terms-of-use" },
        { name: "Privacy Policy", path: "https://myqstudio.com/privacy-policy" },
      ],
    },
    {
      title: "GET THE APP",
      images: [
        { src: "/media/footer/apple.webp", alt: "App Store", title: "App Store" },
        {
          src: "/media/footer/playStore.webp",
          alt: "Google Play",
          title: "Google Play",
          link: "https://play.google.com/store/apps/details?id=com.myqstudio.myq.prod",
        },
      ],
    },
  ];

  const socialIcons = [
    {
      name: "LinkedIn",
      title: "LinkedIn",
      href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEQed5JiPUHLAAAAZoj22wwa_TNPuTexkaBlw_kPiOjinpuO0fWZeTwFIeUXye6CdvgFhZr4BlUXYdvRllGkpz8kECQNBCQOyrAeFc0TVzDITL0uyEffe8jJP3FauagnhnT8to=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fmyqstudio%2Fabout%2F",
      src: "/media/icons/linkedin.webp",
    },
    {
      name: "Instagram",
      title: "Instagram",
      href: "https://www.instagram.com/myqstudio/",
      src: "/media/icons/instagram.webp",
    },
    {
      name: "Facebook",
      title: "Facebook",
      href: "https://www.facebook.com/people/Q-Studio/61551147298303/",
      src: "/media/icons/facebook.webp",
    },
  ];

  const handleLinkClick = (linkName: string, path: string) => {
    if (linkName === "Download eBook") {
      setIsDownloadOpen(true);
    } else if (linkName === "Contact Us") {
      setIsContactOpen(true);
    } else if (linkName === "Schedule a Demo") {
      setIsDemoFormOpen(true);
    } else {
      window.location.href = path;
    }
  };

  return (
    <>
      <footer
        className="footer-root"
        style={{ backgroundImage: "url('/media/footer/footer.webp')" }}
      >
        <div className="footer-container container-custom">
          <div className="footer-logo-section">
            <button
              onClick={() => router.push("/")}
              className="footer-logo-btn"
              aria-label="Go to homepage"
            >
              <img src="media/logos/q_white_logo.webp" alt="logo" className="footer-logo-img" />
            </button>
            <h4 className="footer-desc">
              Mind Skills for individuals and teams.
              <br />
              Transformative solutions for organizations.
            </h4>

            <div className="footer-social-icons flex space-x-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  aria-label={icon.name}
                  href={icon.href}
                  className="footer-social-icon-link"
                >
                  <img
                    src={icon.src}
                    alt={icon.name}
                    className="footer-social-icon-img h-8 w-8 object-contain transition-transform duration-300 ease-out hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links-wrapper">
            {menuLinks.map((section) => (
              <div key={section.title} className="footer-section">
                <h3
                  className={`footer-section-title ${
                    section.title === "GET THE APP" ? "ml-5" : ""
                  }`}
                >
                  {section.title}
                </h3>

                {section.links && (
                  <ul className="footer-section-links">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <button
                          onClick={() => handleLinkClick(link.name, link.path)}
                          className="footer-link"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                {section.images && (
                  <div className="footer-section-images">
                    {section.images.map((img) => (
                      <a key={img.alt} href={img.link} target="_blank" rel="noopener noreferrer">
                        <img src={img.src} alt={img.alt} className="footer-section-img" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <hr className="footer-hr container-custom" />
        <h6 className="footer-copyright">© 2025, Sashya Living Corporation, DBA MyQStudio</h6>
      </footer>

      {isDownloadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-6xl">
            <DownloadForm onClose={() => setIsDownloadOpen(false)} />
          </div>
        </div>
      )}

      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-6xl">
            <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
          </div>
        </div>
      )}

      {isDemoFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-6xl">
            <Form isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
