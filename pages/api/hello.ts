import type { NextApiRequest, NextApiResponse } from "next";
import * as cheerio from "cheerio";

interface BlogPost {
  title: string;
  date: string;
  link: string;
  image: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const pageParam = req.query.page ? Number(req.query.page) : 1;
  const targetUrl =
    pageParam === 1
      ? "https://blog.myqstudio.com/"
      : `https://blog.myqstudio.com/?query-9-page=${pageParam}`;

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; QStudioBot/1.0; +https://myqstudio.com)",
      },
    });

    if (!response.ok)
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);

    const html = await response.text();
    const $ = cheerio.load(html);
    const posts: BlogPost[] = [];

    $(".wp-block-latest-posts__list li, article, .wp-block-group")
      .filter((_, el) => $(el).find("h6 a").length > 0)
      .each((_, el) => {
        const titleEl = $(el).find("h6 a").first();
        const title = titleEl.text().trim();
        const link = titleEl.attr("href") || "";

        const date = $(el).find("time").first().text().trim();
        let image = $(el).find("img.wp-post-image").first().attr("src") || "";

        if (image && image.startsWith("/")) {
          image = `https://blog.myqstudio.com${image}`;
        }

        if (title && link && image) {
          posts.push({ title, date, link, image });
        }
      });

    const uniquePosts = posts.filter(
      (post, index, self) => index === self.findIndex((p) => p.link === post.link)
    );

    res.status(200).json(uniquePosts);
  } catch (error) {
    console.error("Error  blog:", error);
    res.status(500).json({ error: "Failed to fetch blog data" });
  }
}
