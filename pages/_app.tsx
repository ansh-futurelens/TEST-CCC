import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-loading-skeleton/dist/skeleton.css";

import Footer from "@/components/common/Footer";
import type { AppProps } from "next/app";
import { preloadImages } from "@/utils/preloadImages";
import { useEffect, useState } from "react";
import BackToTopButton from "@/components/common/BackToTopButton";
import SkeletonLoader from "@/components/common/SkeletonLoader";

const images = [
  "/media/bgs/individual_bg.webp",
  "/media/bgs/landing_bg.webp",
  "/media/bgs/teams_bg.webp",
  "/media/bgs/organizations_bg.webp",
];

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSite = async () => {
      try {
        await preloadImages(images);
        setTimeout(() => setIsLoading(false), 500);
      } catch {
        setIsLoading(false);
      }
    };
    loadSite();
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          <Component {...pageProps} />
          <Footer />
          <BackToTopButton />
        </>
      )}
    </>
  );
}

export default MyApp;
