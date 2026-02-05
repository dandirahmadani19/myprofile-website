import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = "dandirahmadani19";
    const rssUrl = `https://medium.com/feed/@${username}`;
    
    // Use a public RSS to JSON converter
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch articles" },
        { status: 500 }
      );
    }

    const data = await response.json();

    if (data.status !== "ok") {
      return NextResponse.json(
        { error: "Invalid RSS feed" },
        { status: 500 }
      );
    }

    const articles = data.items.map((item: {
      title: string;
      link: string;
      pubDate: string;
      description: string;
      thumbnail: string;
    }) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.description,
      thumbnail: item.thumbnail,
    }));

    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching Medium articles:", error);
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}
