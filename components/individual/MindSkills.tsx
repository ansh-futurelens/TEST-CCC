import { useState, useEffect, useRef, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { DOWNLOAD_LINKS } from "../constants/downloadLinks";
import { CONTENT_CONFIG } from "@/config/contentConfig";

interface LazyMotionImageProps {
  src: string;
  alt: string;
  className?: string;
  hovered?: boolean;
}

const LazyMotionImage: React.FC<LazyMotionImageProps> = ({
  src,
  alt,
  className,
  hovered,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.img
      ref={imgRef}
      src={isVisible ? src : undefined}
      alt={alt}
      className={className}
      animate={{
        opacity: hovered ? 0 : 1,
        scale: hovered ? 1.05 : 1,
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    />
  );
};


const chunkArray = (arr: any[], size: number) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
};

const MindSkills = () => {
  const { TITLE_PRIMARY, TITLE_SECONDARY, BUTTON_TEXT, SLIDES } =
    CONTENT_CONFIG.INDIVIDUAL_PAGE.MINDSKILLS_SECTION;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [downloadLink, setDownloadLink] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent;
      if (userAgent.includes("Mac")) setDownloadLink(DOWNLOAD_LINKS.macos);
      else if (userAgent.includes("Win"))
        setDownloadLink(DOWNLOAD_LINKS.windows);
      else setDownloadLink(DOWNLOAD_LINKS.windows);
    }
  }, []);

  const groupedSlides = useMemo(() => chunkArray(SLIDES, 3), [SLIDES]);

  return (
    <div className="min-h-[85vh] w-screen bg-[#F0F0F0] select-none flex flex-col justify-center py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
      <div className="container-custom">
        <div className="flex flex-col items-start justify-center text-left md:items-center md:text-center">
          <h2 className="font-sans font-bold xl:text-[40px] lg:text-[28px] text-2xl leading-tight tracking-wide text-teal-900 max-w-4xl">
            {TITLE_PRIMARY}
          </h2>
          <h3 className="font-sans font-normal xl:text-[26px] lg:text-[24px] sm:text-[20px] text-2xl leading-tight tracking-wide text-gray-800 max-w-4xl mt-4">
            {TITLE_SECONDARY}
          </h3>
        </div>

        <div className="flex lg:justify-center h-auto pt-8">
          <a
            href={downloadLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="!py-6 !px-9 bg-red-700 hover:bg-[var(--color-red-hover)] font-medium text-2xl antialiased text-white rounded-full transition duration-300 ease-in-out select-none"
          >
            {BUTTON_TEXT}
          </a>
        </div>

        <div className="pt-14 max-w-7xl mx-auto overflow-hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".mindskills-pagination" }}
            spaceBetween={20}
            slidesPerView={1}
            loop={false}

            className="!overflow-visible"
          >
            {groupedSlides.map((group, groupIndex) => (
              <SwiperSlide key={`group-${groupIndex}`} className="flex justify-center">
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${group.length < 3 ? "lg:grid-cols-2 lg:justify-center lg:mx-auto" : ""
                    }`}
                >
                  {group.map((slide, index) => (
                    <motion.div
                      key={`slide-${groupIndex}-${index}`}
                      className="relative rounded-2xl h-[380px] w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-xl mx-auto overflow-hidden cursor-pointer"
                      style={{ backgroundColor: "var(--color-red-700)" }}
                      onMouseEnter={() =>
                        setHoveredIndex(groupIndex * 3 + index)
                      }
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <LazyMotionImage
                        src={slide.img}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        hovered={hoveredIndex === groupIndex * 3 + index}
                      />

                      <motion.div
                        className="absolute bottom-0 left-0 right-0 text-white font-medium z-10 px-4 pb-4"
                        animate={{
                          opacity: hoveredIndex === groupIndex * 3 + index ? 0 : 1,
                          y: hoveredIndex === groupIndex * 3 + index ? 10 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/50 to-transparent rounded-b-lg"></div>
                        <h4 className="relative text-[20px]  sm:text[20px] md:text-[24px] xl:text-[26px] font-semibold text-white z-10">
                          {slide.title}
                        </h4>
                      </motion.div>

                      <motion.div
                        className="absolute inset-0 flex flex-col justify-start items-start text-left p-6 gap-6"
                        style={{ backgroundColor: "var(--color-red-700)" }}
                        animate={{
                          opacity: hoveredIndex === groupIndex * 3 + index ? 1 : 0,
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <h5 className="text-2xl font-semibold text-white">
                          {slide.title}
                        </h5>
                        <h3 className="text-lg font-normal text-white max-h-[60%]">
                          {slide.description}
                        </h3>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mindskills-pagination mt-6 flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default MindSkills;
