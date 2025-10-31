import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { metaConfig } from "@/utils/metaConfig";

interface DynamicMetaPageProps {
  children: ReactNode;
}

export default function DynamicMetaPage({ children }: DynamicMetaPageProps) {
  const router = useRouter();
  const pathname = router.pathname;
  const meta = metaConfig[pathname] || metaConfig["/"];

  const baseUrl = "https://myqstudio-next-web.vercel.app";
  const canonicalUrl = `${baseUrl}${pathname}`.replace(/\/$/, "");

  return (
    <>
      <Head>
        <title>MyQStudio</title>
        <meta name="author" content="MyQStudio" />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={baseUrl} />
      </Head>

      {children}
    </>
  );
}
