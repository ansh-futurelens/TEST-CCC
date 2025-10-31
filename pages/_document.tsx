import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/media/logos/q_logo.webp" />
        <link rel="preload" as="image" href="/media/bgs/individual_bg.webp" />
        <link rel="preload" as="image" href="/media/bgs/landing_bg.webp" />
        <link rel="preload" as="image" href="/media/bgs/teams_bg.webp" />
        <link rel="preload" as="image" href="/media/bgs/organizations_bg.webp" />
        <link rel="preload" as="image" href="/media/about_us/about_us_bg.webp" />
        <link rel="preload" as="image" href="/media/bgs/resources_bg.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
