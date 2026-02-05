import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = "dandirahmadani19";
    
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch repos" },
        { status: 500 }
      );
    }

    const repos = await response.json();

    // Filter out forks and map to essential data
    const filteredRepos = repos
      .filter((repo: { fork: boolean }) => !repo.fork)
      .map((repo: {
        id: number;
        name: string;
        description: string;
        html_url: string;
        stargazers_count: number;
        forks_count: number;
        language: string;
      }) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        language: repo.language,
      }));

    return NextResponse.json(filteredRepos);
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return NextResponse.json(
      { error: "Failed to fetch repos" },
      { status: 500 }
    );
  }
}
