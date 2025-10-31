"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface SlideDataItem {
  src: string;
  title: string;
  audioPath: string;
}

const WhatNeed: React.FC = () => {
  const images: SlideDataItem[] = [
    {
      src: "/media/individuals/find_focus2.png",
      title: "Find focus",
      audioPath: "/media/audio/audio1.mp3",
    },
    {
      src: "/media/individuals/Preparing_an_event.png",
      title: "Preparing for an event",
      audioPath: "/media/audio/audio2.mp3",
    },
    {
      src: "/media/individuals/Overcoming_anger.png",
      title: "Overcoming anger",
      audioPath: "/media/audio/audio3.mp3",
    },
    {
      src: "/media/individuals/Coping_sadness.png",
      title: "Coping sadness",
      audioPath: "/media/audio/audio4.mp3",
    },
    {
      src: "/media/individuals/Managing_anxiety.png",
      title: "Managing anxiety",
      audioPath: "/media/audio/audio5.mp3",
    },
    {
      src: "/media/individuals/Calming_mind.png",
      title: "Calming mind",
      audioPath: "/media/audio/audio6.mp3",
    },
  ];

  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [isScrubbing, setIsScrubbing] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof Audio !== "undefined") {
      audioRef.current = new Audio();
    }
    return () => {
      audioRef.current?.pause();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const updateProgress = useCallback(() => {
    if (audioRef.current && audioRef.current.duration && !isScrubbing) {
      setProgress(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
    }
    animationRef.current = requestAnimationFrame(updateProgress);
  }, [isScrubbing]);

  const handlePlay = (index: number) => {
    if (typeof window === "undefined" || !audioRef.current) return;

    const audio = audioRef.current;

    if (currentPlaying === index) {
      audio.pause();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      setCurrentPlaying(null);
    } else {
      if (!audio.paused) audio.pause();
      audio.src = images[index].audioPath;
      audio.load();
      audio.play().catch((e) => console.error("Audio play failed:", e));
      setCurrentPlaying(index);
      setProgress(0);

      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      animationRef.current = requestAnimationFrame(updateProgress);

      audio.onended = () => {
        setCurrentPlaying(null);
        setProgress(0);
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    }
  };

  const calculateProgress = useCallback((clientX: number) => {
    if (progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const clickPosition = clientX - rect.left;
      return Math.max(0, Math.min(100, (clickPosition / rect.width) * 100));
    }
    return 0;
  }, []);

  const startScrubbing = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (
        currentPlaying !== null &&
        audioRef.current?.src &&
        audioRef.current.duration
      ) {
        setIsScrubbing(true);
        audioRef.current.pause();

        if (e.currentTarget === progressBarRef.current) {
          const newProgress = calculateProgress(e.clientX);
          setProgress(newProgress);
        }
      }
    },
    [currentPlaying, calculateProgress]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isScrubbing) {
        const newProgress = calculateProgress(e.clientX);
        setProgress(newProgress);
      }
    },
    [isScrubbing, calculateProgress]
  );

  const handleMouseUp = useCallback(() => {
    if (isScrubbing && audioRef.current?.duration) {
      const newTime = (progress / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      audioRef.current
        .play()
        .catch((e) => console.error("Audio resume play failed:", e));
      setIsScrubbing(false);

      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      animationRef.current = requestAnimationFrame(updateProgress);
    }
  }, [isScrubbing, progress, updateProgress]);

  useEffect(() => {
    if (isScrubbing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isScrubbing, handleMouseMove, handleMouseUp]);

  return (
    <div className="min-h-[85vh] w-screen bg-[#F3F3F3] flex flex-col justify-center select-none py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-bold text-teal-900 text-2xl lg:text-[28px] xl:text-[47px] max-w-4xl mx-auto leading-tight">
            What do you need right now?
          </h2>
          <h3 className="text-gray-800 text-2xl lg:text-[20px] xl:text-[27px] max-w-4xl mt-5">
            Try out our techniques and feel the difference instantly.
          </h3>
        </div>

        <div className="py-12 max-w-7xl mx-auto overflow-hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={false}
            pagination={{ clickable: true, el: ".whatneed-pagination" }}
            breakpoints={{
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
            className="!overflow-visible"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="w-full max-w-sm mx-auto flex flex-col items-center">
                  <div className="rounded-2xl h-[350px] w-full overflow-hidden mb-4">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-cover rounded-xl"
                    />
                  </div>

                  <div className="flex items-center space-x-5 w-full px-4 mt-4">
                    <button onClick={() => handlePlay(index)}>
                      <img
                        src={
                          currentPlaying === index
                            ? "/media/individuals/stop.png"
                            : "/media/individuals/play_audio.png"
                        }
                        alt={currentPlaying === index ? "Pause" : "Play"}
                        className="w-10 h-10 object-contain"
                      />
                    </button>

                    <div
                      ref={progressBarRef}
                      className="flex-grow h-2 bg-gray-300 rounded-full relative cursor-pointer"
                      onMouseDown={startScrubbing}
                    >
                      <div
                        className={`h-full rounded-full absolute left-0 top-0 ${
                          currentPlaying === index
                            ? "bg-red-600"
                            : "bg-gray-400"
                        }`}
                        style={{
                          width: `${progress}%`,
                          transition: isScrubbing
                            ? "none"
                            : "width 0.1s linear",
                        }}
                      ></div>

                      {(currentPlaying === index || isScrubbing) && (
                        <div
                          className="absolute w-4 h-4 bg-red-600 rounded-full shadow-sm cursor-grab"
                          style={{
                            left: `calc(${progress}% - 8px)`,
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                          onMouseDown={startScrubbing}
                        ></div>
                      )}

                      {currentPlaying !== index && !isScrubbing && (
                        <div
                          className="absolute w-4 h-4 bg-gray-400 rounded-full shadow-sm"
                          style={{
                            left: "calc(0% - 8px)",
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                        ></div>
                      )}
                    </div>
                  </div>

                  <h3 className="font-semibold text-4xl text-red-700 mt-4">
                    {item.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="whatneed-pagination mt-6 flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatNeed;
