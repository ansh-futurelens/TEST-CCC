import React from 'react';

// Define types for better type checking
interface Link {
  name: string;
  path: string;
}

interface ImageLink {
  src: string;
  alt: string;
}

interface MenuSection {
  title: string;
  links?: Link[];
  images?: ImageLink[];
}

const Footer: React.FC = () => {
  const menuLinks: MenuSection[] = [
    {
      title: "SERVICES",
      links: [
        { name: "Individuals", path: "/individuals" },
        { name: "Teams", path: "/teams" },
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
        { name: "About Us", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Terms of Use", path: "/terms-of-use" },
        { name: "Privacy Policy", path: "/privacy-policy" },
      ],
    },
    {
      title: "GET THE APP",
      images: [
        { src: "/media/footer/apple.png", alt: "App Store" },
        { src: "/media/footer/playStore.png", alt: "Google Play" },
      ],
    },
  ];

  const socialIcons = [
    {
      name: "LinkedIn",
      href: "#", // Placeholder
      src: "/media/icons/linkedin.png",
    },
    {
      name: "Instagram",
      href: "#", // Placeholder
      src: "/media/icons/instagram.png",
    },
    {
      name: "Facebook",
      href: "#", // Placeholder
      src: "/media/icons/facebook.png",
    },
  ];

  return (
    <footer
      className="mx-auto pt-20 sm:pt-24 md:pt-28 text-white gothic antialiased bg-cover bg-center"
      style={{ backgroundImage: "url('/media/footer/footer.png')" }}
    >
      <div className="container-custom flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-16 lg:gap-20 2xl:gap-24 4xl:justify-center">
        {/* Left Column: Logo, Tagline, Social Icons */}
        <div className="md:w-1/2 lg:w-1/3 space-y-6 min-w-[250px] md:min-w-0">
          <button
            onClick={() => console.log("Navigating to homepage")}
            className="p-0 bg-transparent border-none cursor-pointer"
            aria-label="Go to homepage"
          >
            <img
              src="media/logos/q_white_logo.png"
              alt="logo"
              className="w-20 sm:w-24 md:w-22 h-auto"
            />
          </button>
          <h4 className="max-w-full sm:max-w-[460px] text-white font-medium text-base sm:text-lg md:text-xl xl:text-[18px] leading-relaxed">
            Mind Skills for individuals and teams.
            <br />
            Transformative solutions for organizations.
          </h4>

          <div className="flex space-x-4 mt-4">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                aria-label={icon.name}
                href={icon.href}
                className="hover:opacity-75"
              >
                <img
                  src={icon.src}
                  alt={icon.name}
                  className="w-6 sm:w-8 h-6 sm:h-8 object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right Columns: Menu Links and App Downloads */}
        {/* Use flex-wrap to allow columns to wrap on smaller horizontal spaces */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-x-8 gap-y-10 md:gap-x-12 md:gap-y-0 lg:gap-x-16 text-white md:w-1/2 lg:w-2/3">
          {menuLinks.map((section) => (
            <div
              key={section.title}
              // flex-grow/shrink/basis for even distribution, min-w to prevent squishing
              className="flex-grow flex-shrink-0 basis-auto min-w-[140px] sm:min-w-[150px] space-y-4 mt-6 sm:mt-0"
            >
              <h3 className="font-bold text-lg sm:text-xl lg:text-lg">
                {section.title}
              </h3>

              {section.links && (
                <ul className="space-y-3 leading-relaxed">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => console.log(`Navigating to ${link.name}`)}
                        className="hover:text-gray-300 transition text-left cursor-pointer text-base sm:text-lg font-[400]"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {section.images && (
                <div className="flex flex-col space-y-3 mt-2 items-start">
                  {section.images.map((img) => (
                    <img
                      key={img.alt}
                      src={img.src}
                      alt={img.alt}
                      className="w-32 sm:w-36 md:w-40 lg:w-44 h-auto object-contain"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <hr className="border-white !my-10 container-custom !opacity-10" />

      <h6 className="text-center text-white leading-relaxed pb-8 !text-md !font-[500]">
        © 2025, Sashya Living Corporation, DBA MyQStudio
      </h6>
    </footer>
  );
};

export default Footer;