import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "src", "content", "blog");

function isPostFile(fileName) {
  return fileName.endsWith(".mdx") || fileName.endsWith(".md");
}

function normalizePost(fileName) {
  const slug = fileName.replace(/\.mdx?$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(source);

  return {
    slug: data.slug ?? slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    tags: data.tags ?? [],
    featured: Boolean(data.featured),
    draft: Boolean(data.draft),
    coverImage: data.coverImage ?? null,
    readingTime: data.readingTime ?? readingTime(content).text,
    content,
    frontmatter: data,
  };
}

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs.readdirSync(postsDirectory).filter(isPostFile);
}

export function getAllPosts({ includeDrafts = false } = {}) {
  return getPostSlugs()
    .map(normalizePost)
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug) {
  const fileName = getPostSlugs().find((postFile) => postFile.replace(/\.mdx?$/, "") === slug);

  if (!fileName) {
    return null;
  }

  const post = normalizePost(fileName);

  if (post.draft) {
    return null;
  }

  return post;
}
