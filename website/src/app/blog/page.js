import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Kashyap Hegde Kota",
  description: "Engineering notes, AI build logs, and portfolio project essays.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];
  const restPosts = posts.filter((post) => post.slug !== featuredPost?.slug);

  return (
    <section className="section-pad min-h-screen pt-32">
      <div className="content-grid">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_0.55fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-cyan">Journal</p>
            <h1 className="fluid-copy type-route-title font-display font-semibold text-porcelain">
              Notes from the build floor.
            </h1>
          </div>
          <p className="max-w-lg text-base leading-7 text-white/58 lg:justify-self-end">
            Field notes on AI systems, product details, cloud infrastructure,
            and the engineering choices behind the work.
          </p>
        </div>

        {!posts.length && (
          <div className="glass-panel rounded-[8px] p-8 text-white/58">
            Posts will appear here when MDX files are added under
            <span className="font-mono text-porcelain"> src/content/blog</span>.
          </div>
        )}

        {featuredPost && (
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group glass-panel mb-4 grid overflow-hidden rounded-[8px] p-6 transition duration-500 hover:border-cyan/40 md:grid-cols-[0.88fr_0.42fr]"
            data-cursor="button"
          >
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase">
                <span className="text-acid">
                  Featured
                </span>
                {featuredPost.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-white/50">
                    <span className="mr-2 text-white/22" aria-hidden="true">/</span>
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="fluid-copy type-feature-title font-display max-w-3xl font-semibold text-porcelain">
                {featuredPost.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/58">
                {featuredPost.description}
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-between gap-10 border-t border-white/10 pt-6 md:mt-0 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <div className="text-sm text-white/48">
                <p>{featuredPost.date}</p>
                <p className="mt-2 inline-flex items-center gap-2">
                  <Clock size={14} />
                  {featuredPost.readingTime}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                Read note
                <ArrowUpRight size={16} />
              </span>
            </div>
          </Link>
        )}

        {!!restPosts.length && (
          <div className="grid gap-4 md:grid-cols-2">
            {restPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group glass-panel rounded-[8px] p-5 transition duration-500 hover:border-ember/40"
                data-cursor="link"
              >
                <div className="mb-5 flex items-center justify-between gap-4 text-xs uppercase text-white/42">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-2">
                    <Clock size={13} />
                    {post.readingTime}
                  </span>
                </div>
                <h2 className="font-display text-3xl font-semibold leading-tight text-porcelain">
                  {post.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/58">{post.description}</p>
                <div className="mt-6 flex flex-wrap gap-x-2 gap-y-1 text-[0.7rem] text-white/48">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={tag}>
                      {tag}
                      {index < Math.min(post.tags.length, 3) - 1 && (
                        <span className="ml-2 text-white/22" aria-hidden="true">/</span>
                      )}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
