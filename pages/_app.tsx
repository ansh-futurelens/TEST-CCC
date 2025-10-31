import "@/styles/globals.css";
import Footer from "@/components/common/Footer";
import type { AppProps } from "next/app";
import { preloadImages } from "@/utils/preloadImages";
import { useEffect } from "react";
const images = [
  "/media/bgs/individual_bg.webp",
  "/media/bgs/landing_bg.webp",
  "/media/bgs/teams_bg.webp",
  "/media/bgs/organizations_bg.webp",
];

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    preloadImages(images);
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
