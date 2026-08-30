import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JobTicketForm from "../../components/JobTicketForm";
import { blogPosts } from "../../data/blogData";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jhaysanyay.com";

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: post.targetKeywords,
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      type: "article",
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      images: [
        {
          url: post.coverImage,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
      creator: "@jhaysanyay",
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col bg-[var(--ink)]">
      <Header />

      {/* Article Top Section */}
      <section className="bg-[var(--paper)] py-12 border-b-2 border-[var(--ink)] text-[var(--ink)]">
        <div className="wrap max-w-4xl">
          <Link
            href="/blog"
            className="font-mono text-xs text-[var(--red)] uppercase font-bold tracking-wider hover:underline inline-block mb-6"
          >
            ← Back to All Guides
          </Link>

          <div className="flex items-center gap-3 font-mono text-xs text-[var(--muted)] mb-3">
            <span className="bg-[var(--ink)] text-[var(--paper)] font-bold px-2 py-0.5 uppercase tracking-widest text-[10px]">
              {post.category}
            </span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl uppercase leading-tight text-[var(--ink)] mt-2">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[var(--ink)]/20 font-mono text-xs">
            <span className="text-[var(--muted)] uppercase">Written by:</span>
            <span className="font-bold text-[var(--ink)]">{post.author}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-[var(--ink)] text-[var(--paper)]">
        <div className="wrap max-w-3xl space-y-8 font-sans text-lg leading-relaxed text-[var(--paper-2)]/90">
          {/* Article Banner Image */}
          <div className="relative aspect-[16/9] w-full border-2 border-[var(--paper-2)]/30 overflow-hidden mb-10 shadow-2xl">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>

          {/* Formatted Content */}
          <ArticleBody content={post.content} />

          {/* Author CTA Card */}
          <div className="mt-16 p-8 bg-[var(--paper)] text-[var(--ink)] border-2 border-[var(--ink)] shadow-[10px_10px_0_var(--red)]">
            <div className="font-mono text-xs text-[var(--red)] font-bold uppercase tracking-widest mb-1">
              Ready to Commission?
            </div>
            <h3 className="font-anton text-3xl uppercase mb-3">
              Get Your Custom Artwork Stamped
            </h3>
            <p className="text-sm font-sans text-[var(--muted)] mb-6">
              Jhay Sanyay Studio handles custom cover art, manga/comic illustrations, and logo design from brief submission to final delivery. Fill out your job ticket below for a 48-hour quote.
            </p>
            <a href="#order" className="stamp-btn inline-block !py-3 !px-6">
              FILL OUT JOB TICKET
            </a>
          </div>
        </div>
      </article>

      {/* Booking Form Integration */}
      <JobTicketForm />
      <Footer />
    </main>
  );
}

// Simple Parser Component for Markdown formatting
function ArticleBody({ content }: { content: string }) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];

  const renderTextWithLinksAndBold = (text: string) => {
    // Process links [text](url) and bold **text**
    const parts = text.split(/(\[.*?\]\(.*?\)|`.*?`|\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
        const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
        if (linkMatch) {
          return (
            <a
              key={index}
              href={linkMatch[2]}
              className="text-[var(--yellow)] font-bold underline hover:text-[var(--red)] transition-colors"
            >
              {linkMatch[1]}
            </a>
          );
        }
      }
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-bold text-[var(--paper)]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return (
          <em key={index} className="italic text-[var(--yellow)]">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("|")) {
      inTable = true;
      const cells = trimmed
        .split("|")
        .map((c) => c.trim())
        .filter((c) => c !== "");
      if (!trimmed.includes("---")) {
        tableRows.push(cells);
      }
      return;
    } else if (inTable) {
      inTable = false;
      if (tableRows.length > 0) {
        const headers = tableRows[0];
        const bodyRows = tableRows.slice(1);
        elements.push(
          <div key={`table-${idx}`} className="overflow-x-auto my-8 border-2 border-[var(--paper-2)]/30">
            <table className="w-full text-left border-collapse font-mono text-sm">
              <thead>
                <tr className="bg-[var(--paper)] text-[var(--ink)] font-bold">
                  {headers.map((h, i) => (
                    <th key={i} className="p-3 border border-[var(--ink)]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className="border-b border-[var(--paper-2)]/20">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-3 border border-[var(--paper-2)]/20">
                        {renderTextWithLinksAndBold(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
      }
    }

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2
          key={idx}
          className="font-anton text-3xl uppercase text-[var(--paper)] mt-12 mb-4 pt-6 border-t border-dashed border-[var(--paper-2)]/20"
        >
          {trimmed.replace("## ", "")}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={idx} className="font-anton text-2xl uppercase text-[var(--yellow)] mt-8 mb-3">
          {trimmed.replace("### ", "")}
        </h3>
      );
    } else if (trimmed.startsWith("- ")) {
      elements.push(
        <li key={idx} className="ml-6 list-disc mb-2 text-[var(--paper-2)] font-sans">
          {renderTextWithLinksAndBold(trimmed.replace("- ", ""))}
        </li>
      );
    } else if (trimmed.match(/^\d+\.\s/)) {
      elements.push(
        <li key={idx} className="ml-6 list-decimal mb-2 text-[var(--paper-2)] font-sans">
          {renderTextWithLinksAndBold(trimmed.replace(/^\d+\.\s/, ""))}
        </li>
      );
    } else if (trimmed === "---") {
      elements.push(
        <hr key={idx} className="my-8 border-dashed border-[var(--paper-2)]/30" />
      );
    } else if (trimmed.length > 0) {
      elements.push(
        <p key={idx} className="mb-4 font-sans leading-relaxed">
          {renderTextWithLinksAndBold(trimmed)}
        </p>
      );
    }
  });

  return <div className="space-y-4">{elements}</div>;
}
