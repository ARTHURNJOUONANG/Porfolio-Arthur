const fallback = {
  publicRepos: 12,
  languages: ["TypeScript", "JavaScript", "Java", "Python", "Dart"],
};

export async function getGithubStats() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  if (!username) return fallback;

  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) return fallback;
    const data = (await response.json()) as { public_repos?: number };
    return {
      publicRepos: data.public_repos ?? fallback.publicRepos,
      languages: fallback.languages,
    };
  } catch {
    return fallback;
  }
}
