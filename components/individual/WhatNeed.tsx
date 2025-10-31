import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { LazyImage } from "../LazyMedia";
import { CONTENT_CONFIG } from "@/config/contentConfig";

interface SlideDataItem {
  img: string;
  title: string;
  audioPath: string;
}

interface AudioState {
  audio: HTMLAudioElement;
  isPlaying: boolean;
  progress: number;
  isScrubbing: boolean;
  hasPlayed: boolean;
}

const WhatNeed: React.FC = () => {
  const { TITLE_PRIMARY, TITLE_SECONDARY, SLIDES, PLAY_ICON, PAUSE_ICON } =
    CONTENT_CONFIG.INDIVIDUAL_PAGE.WHATNEED_SECTION;

  const [audios, setAudios] = useState<AudioState[]>([]);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const audioStates: AudioState[] = SLIDES.map((slide) => ({
      audio: new Audio(slide.audioPath),
      isPlaying: false,
      progress: 0,
      isScrubbing: false,
      hasPlayed: false,
    }));
    setAudios(audioStates);

    return () => {
      audioStates.forEach((a) => a.audio.pause());
    };
  }, []);

  useEffect(() => {
    const intervals: number[] = audios.map((audioState, index) =>
      window.setInterval(() => {
        if (!audioState.isScrubbing && audioState.audio.duration) {
          setAudios((prev) =>
            prev.map((a, i) =>
              i === index ? { ...a, progress: (a.audio.currentTime / a.audio.duration) * 100 } : a
            )
          );
        }
      }, 100)
    );

    return () => intervals.forEach(clearInterval);
  }, [audios]);

  const togglePlay = (index: number) => {
    setAudios((prev) =>
      prev.map((a, i) => {
        if (!a) return a;
        if (i === index) {
          if (a.isPlaying) {
            a.audio.pause();
          } else {
            a.audio.play().catch(console.error);
          }
          return { ...a, isPlaying: !a.isPlaying, hasPlayed: true };
        } else {
          a.audio.pause();
          return { ...a, isPlaying: false };
        }
      })
    );
  };

  const startScrubbing = (index: number, clientX: number) => {
    const progressBar = progressRefs.current[index];
    if (!progressBar || !audios[index]) return;
    const rect = progressBar.getBoundingClientRect();
    const newProgress = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));

    setAudios((prev) =>
      prev.map((a, i) => (i === index ? { ...a, isScrubbing: true, progress: newProgress } : a))
    );
  };

  const handleMove = (index: number, clientX: number) => {
    const progressBar = progressRefs.current[index];
    if (!progressBar || !audios[index]?.isScrubbing) return;
    const rect = progressBar.getBoundingClientRect();
    const newProgress = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setAudios((prev) => prev.map((a, i) => (i === index ? { ...a, progress: newProgress } : a)));
  };

  const endScrubbing = (index: number) => {
    const a = audios[index];
    if (!a || !a.audio.duration) return;
    a.audio.currentTime = (a.progress / 100) * a.audio.duration;
    if (a.isPlaying) a.audio.play().catch(console.error);

    setAudios((prev) => prev.map((a, i) => (i === index ? { ...a, isScrubbing: false } : a)));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      audios.forEach((a, index) => handleMove(index, e.clientX));
    const handleTouchMove = (e: TouchEvent) =>
      audios.forEach((a, index) => handleMove(index, e.touches[0].clientX));
    const handleMouseUp = () => audios.forEach((_, index) => endScrubbing(index));
    const handleTouchEnd = () => audios.forEach((_, index) => endScrubbing(index));

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [audios]);

  return (
    <div className="whatneed-root">
      <div className="container-custom">
        <div className="whatneed-heading-wrapper">
          <h2 className="whatneed-heading-primary">{TITLE_PRIMARY}</h2>
          <h3 className="whatneed-heading-secondary">{TITLE_SECONDARY}</h3>
        </div>

        <div className="whatneed-swiper-container">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={false}
            pagination={{ clickable: true, el: ".whatneed-pagination" }}
            allowTouchMove={false}
            breakpoints={{
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
            className="!overflow-visible"
          >
            {SLIDES.map((item, index) => (
              <SwiperSlide key={index} className="whatneed-slide-group">
                <div className="whatneed-slide">
                  <div className="whatneed-image-wrapper">
                    <LazyImage src={item.img} alt={item.title} className="whatneed-image" />
                  </div>

                  <div className="whatneed-audio-wrapper">
                    <button onClick={() => togglePlay(index)} className="whatneed-audio-button">
                      <span className="whatneed-audio-hover-circle"></span>

                      {audios[index] && (
                        <LazyImage
                          src={audios[index].isPlaying ? PAUSE_ICON : PLAY_ICON}
                          alt={audios[index].isPlaying ? "Pause" : "Play"}
                          className="whatneed-audio-icon"
                        />
                      )}
                    </button>

                    {/* Progress bar */}
                    <div
                      ref={(el) => {
                        progressRefs.current[index] = el;
                      }}
                      className={`whatneed-progress-bar ${
                        audios[index]?.isPlaying ? "bg-[#E6C7C0]" : "bg-gray-300"
                      }`}
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        startScrubbing(index, e.clientX);
                      }}
                      onTouchStart={(e) => {
                        e.stopPropagation();
                        startScrubbing(index, e.touches[0].clientX);
                      }}
                    >
                      {audios[index] && (
                        <>
                          <div
                            className={`whatneed-progress-inner ${
                              audios[index].isPlaying ? "bg-[#B8543D]" : "bg-gray-400"
                            }`}
                            style={{
                              width: `${audios[index].progress}%`,
                              transition: audios[index].isScrubbing
                                ? "none"
                                : "width 0.1s linear, background-color 0.3s ease",
                            }}
                          ></div>
                          <div
                            className={`whatneed-progress-thumb ${
                              audios[index].isPlaying ? "bg-[#B8543D]" : "bg-gray-400"
                            }`}
                            style={{
                              left: `calc(${audios[index].progress}% - 8px)`,
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                            onMouseDown={(e) => {
                              e.stopPropagation();
                              startScrubbing(index, e.clientX);
                            }}
                            onTouchStart={(e) => {
                              e.stopPropagation();
                              startScrubbing(index, e.touches[0].clientX);
                            }}
                          ></div>
                        </>
                      )}
                    </div>
                  </div>

                  <h3 className="whatneed-slide-title">{item.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="whatneed-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatNeed;
