import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JobTicketForm from "../components/JobTicketForm";
import { blogPosts } from "../data/blogData";

export const metadata: Metadata = {
  title: "Commission Guides & Insights | Blog",
  description:
    "Articles, pricing breakdowns, and guides on how to commission custom album cover art, manga illustrations, and brand identity design.",
  openGraph: {
    title: "Commission Guides & Insights — Jhay Sanyay Studio",
    description:
      "Learn how to commission custom cover art, manga illustrations, and digital branding online.",
  },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--ink)]">
      <Header />

      {/* Top Banner */}
      <section className="bg-[var(--paper)] py-12 border-b-2 border-[var(--ink)]">
        <div className="wrap">
          <div className="font-mono text-xs text-[var(--red)] font-bold uppercase tracking-widest mb-2">
            Guides &amp; Resources
          </div>
          <h1 className="font-anton text-4xl sm:text-5xl uppercase text-[var(--ink)]">
            Artist Guides &amp; Insights
          </h1>
          <p className="text-[var(--muted)] text-base max-w-2xl mt-3 font-sans">
            Practical advice for musicians, authors, and creators on commissioning custom cover art, managing revision rounds, and hiring digital illustrators online.
          </p>
        </div>
      </section>

      {/* Blog Cards Listing */}
      <section className="py-16 bg-[var(--ink)] text-[var(--paper)]">
        <div className="wrap max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-[var(--ink)] border-2 border-[var(--paper-2)]/30 hover:border-[var(--yellow)] transition-all flex flex-col group overflow-hidden shadow-lg"
              >
                {/* Cover Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--paper-2)]">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[var(--red)] text-[var(--paper)] font-mono text-[10px] uppercase font-bold px-3 py-1 tracking-widest">
                    {post.category}
                  </div>
                </div>

                {/* Article Meta & Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-3 font-mono text-xs text-[var(--muted)] mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="font-anton text-2xl uppercase text-[var(--paper)] group-hover:text-[var(--yellow)] transition-colors leading-tight">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-[var(--paper-2)]/80 text-sm mt-3 leading-relaxed font-sans line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-dashed border-[var(--paper-2)]/20">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-mono text-xs font-bold text-[var(--yellow)] uppercase tracking-wider hover:underline inline-flex items-center gap-2"
                    >
                      Read Full Guide →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Integration */}
      <JobTicketForm />
      <Footer />
    </main>
  );
}
