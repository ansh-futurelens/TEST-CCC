import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/media/logos/q_logo.png" />
        <meta name="description" content="The only Mind Skills app for peak performance"/>
        <meta name="keywords" content="MyQStudio, Mental health, Flutter, Emotional, MyQ, Q Studio, Mind Skills, Practice"></meta>
        <meta name="author" content="MyQStudio"></meta>
        <link
          rel="preload"
          as="image"
          href="/media/bgs/individual_bg.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/media/bgs/landing_bg.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/media/bgs/teams_bg.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/media/bgs/organizations_bg.webp"
        />
        <title>MyQStudio</title>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
