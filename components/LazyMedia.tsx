import React, { useEffect, useRef, useState, ReactNode } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = "",
  priority = false,
}) => {
  const [isVisible, setIsVisible] = useState(priority);
  const [loaded, setLoaded] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

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
  }, [priority]);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : ""}
      alt={alt}
      onLoad={() => setLoaded(true)}
      className={`lazy-fade-in ${loaded ? "visible" : ""} ${className}`}
    />
  );
};

interface LazyBackgroundProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  priority?: boolean;
}

export const LazyBackground: React.FC<LazyBackgroundProps> = ({
  src,
  className = "",
  style,
  children,
  priority = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(priority);
  const [loaded, setLoaded] = useState(priority);

  useEffect(() => {
    if (priority) return;

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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (isVisible) {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoaded(true);
    }
  }, [isVisible, src]);

  return (
    <div
      ref={ref}
      className={`lazy-bg-fade ${loaded ? "visible" : ""} ${className}`}
      style={{
        ...style,
        backgroundImage: loaded ? `url(${src})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};
