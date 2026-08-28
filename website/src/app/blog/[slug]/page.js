import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export const dynamicParams = false;

const mdxComponents = {
  a: (props) => (
    <a
      {...props}
      className="text-cyan underline decoration-cyan/30 underline-offset-4 transition-colors hover:text-acid"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
    />
  ),
  h2: (props) => <h2 {...props} className="font-display text-4xl text-porcelain" />,
  h3: (props) => <h3 {...props} className="font-display text-2xl text-porcelain" />,
  p: (props) => <p {...props} className="text-white/64" />,
  ul: (props) => <ul {...props} className="space-y-3 text-white/64" />,
  ol: (props) => <ol {...props} className="space-y-3 text-white/64" />,
  li: (props) => <li {...props} className="pl-1" />,
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found | Kashyap Hegde Kota",
    };
  }

  return {
    title: `${post.title} | Kashyap Hegde Kota`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section-pad min-h-screen pt-32">
      <div className="content-grid">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-white/54 transition-colors hover:text-cyan"
          data-cursor="link"
        >
          <ArrowLeft size={16} />
          Back to notes
        </Link>

        <header className="mb-12 border-b border-white/10 pb-10">
          <div className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/50">
            {post.tags.map((tag, index) => (
              <span key={tag}>
                {tag}
                {index < post.tags.length - 1 && (
                  <span className="ml-2 text-white/22" aria-hidden="true">/</span>
                )}
              </span>
            ))}
          </div>
          <h1 className="fluid-copy type-article-title font-display max-w-5xl font-semibold text-porcelain">
            {post.title}
          </h1>
          <div className="mt-7 flex flex-wrap gap-4 text-sm text-white/48">
            <span>{post.date}</span>
            <span className="inline-flex items-center gap-2">
              <Clock size={14} />
              {post.readingTime}
            </span>
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/62">
            {post.description}
          </p>
        </header>

        <div className="prose prose-invert prose-blog max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </div>
    </article>
  );
}
