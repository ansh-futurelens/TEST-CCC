import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { CONTENT_CONFIG } from "@/config/contentConfig";

const PeoplesSaying: React.FC = () => {
  const { TESTIMONIALS, HEADING } =
    CONTENT_CONFIG.LANDING_PAGE.PEOPLES_SAYING;
  const getChunkSize = () => {
    if (typeof window === "undefined") return 1;
    const w = window.innerWidth;
    if (w >= 1024) return 3;
    if (w >= 768) return 2;
    return 1;
  };

  const [chunkSize, setChunkSize] = useState<number>(getChunkSize);

  useEffect(() => {
    const onResize = () => {
      const newSize = getChunkSize();
      setChunkSize((prev) => (prev === newSize ? prev : newSize));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const groupedSlides = useMemo(() => chunkArray(TESTIMONIALS, chunkSize), [
    TESTIMONIALS,
    chunkSize,
  ]);

  return (
    <div className="peoples-saying-root">
      <div className="container-custom">
        <div className="peoples-saying-heading-wrapper">
          <h2 className="peoples-saying-heading">{HEADING}</h2>
        </div>

        <div className="peoples-saying-swiper-wrapper">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            loop
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            className="!overflow-visible"
          >
            {groupedSlides.map((group, index) => (
              <SwiperSlide key={index}>

                <div
                  className={`grid gap-6 ${group.length < chunkSize
                    ?
                    "lg:grid-cols-1 flex justify-center"
                    :
                    "grid-cols-1 md:grid-cols-1 flex justify-center lg:grid-cols-2 flex justify-center xl:grid-cols-3"
                    }`}
                >
                  {group.map((item, i) => (
                    <div key={i} className="peoples-saying-card">
                      <p className="peoples-saying-text">{item.text}</p>
                      <h3 className="peoples-saying-author">
                        {item.author}
                        {item.company ? `, ${item.company}` : ""}
                      </h3>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination mt-6 flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default PeoplesSaying;
