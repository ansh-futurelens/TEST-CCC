"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface BlogPost {
  title: string;
  date: string;
  image?: string;
  link?: string;
}

const BlogSection: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchBlogData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/hello?page=${page}`);
        const posts = await res.json();
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [page]);

  const featured = blogPosts[0];
  const others = blogPosts.slice(1);

  return (
    <section className="min-h-screen bg-[#F8FAF9] px-4 py-10 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      <div className="mb-10 flex flex-wrap justify-center gap-3 sm:gap-4 md:mb-12">
        {["Blog", "E-Book", "Social Media"].map((label, i) => (
          <button
            key={i}
            className={`cursor-pointer rounded-full px-8 py-2 text-[18px] font-semibold transition-colors duration-200 lg:px-12 lg:py-4 lg:text-[18px] lg:font-bold ${
              i === 0
                ? "hover:bg-teal-hover bg-teal-900 text-white"
                : "hover:bg-white-hover bg-[#E5E7EB] text-gray-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {featured && (
        <div className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div className="relative h-56 w-full overflow-hidden rounded-xl sm:h-64 md:h-[350px] lg:h-[400px]">
            <Image
              src={featured.image || "https://via.placeholder.com/600x400"}
              alt={featured.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL="/media/blur-placeholder.webp"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-1 sm:px-3 md:px-0">
            <h2 className="mb-1 text-2xl font-semibold text-teal-900 sm:text-3xl lg:text-4xl">
              {featured.title}
            </h2>
            <p className="mb-2 !text-xl !font-bold text-red-700">{featured.date}</p>
            {featured.link && (
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="!text-lg !font-bold text-gray-800"
              >
                Read More →
              </a>
            )}
          </div>
        </div>
      )}

      {loading ? (
        <p className="text-center text-gray-500"></p>
      ) : (
        <div className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {others.map(({ title, date, image, link }, i) => (
            <article
              key={i}
              className="overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden sm:h-56 md:h-60 lg:h-64">
                <Image
                  src={image || "https://via.placeholder.com/400x280"}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  placeholder="blur"
                  blurDataURL="/media/blur-placeholder.webp"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="mb-1 text-lg text-teal-900">{title}</h3>
                <p className="mb-2 text-xs !font-bold text-red-700 sm:text-sm">{date}</p>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm !font-bold text-gray-800"
                  >
                    Read More →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="flex items-center justify-center gap-2 text-gray-600 sm:gap-3">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-300 disabled:opacity-50 sm:h-9 sm:w-9"
        >
          &#8249;
        </button>
        {[page - 1, page, page + 1]
          .filter((p) => p > 0)
          .map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full font-medium sm:h-9 sm:w-9 ${
                p === page ? "bg-teal-900 text-white" : "border border-gray-300 text-gray-700"
              }`}
            >
              {p}
            </button>
          ))}
        <button
          onClick={() => setPage((p) => p + 1)}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-300 disabled:opacity-50 sm:h-9 sm:w-9"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
