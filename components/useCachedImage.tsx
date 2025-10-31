import {  useEffect, useState } from "react";

export function useCachedImage(url?: string) {
  const [cachedSrc, setCachedSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    const cacheKey = `cached_bg_${url}`; 
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
      setCachedSrc(cached);
      return;
    }

    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result as string;
          try {
            localStorage.setItem(cacheKey, base64data);
          } catch {
            console.warn("LocalStorage full, skipping cache for", url);
          }
          setCachedSrc(base64data);
        };
        reader.readAsDataURL(blob);
      })
      .catch(() => setCachedSrc(url));
  }, [url]);

  return cachedSrc || url || "";
}
