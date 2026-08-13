import { notFound } from "next/navigation";

import { getAllPostSlugs, getPostBySlug } from "./_data";
import Article from "./_sections/article";
import BannerSection from "./_sections/banner";
import MoreArticles from "./_sections/more-articles";

// The posts are static, so every article is prerendered at build time and an
// unknown slug 404s rather than rendering an empty shell.
export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entry = getPostBySlug(slug);

  if (!entry) return {};

  return {
    title: entry.post.metaTitle,
    description: entry.post.metaDescription,
  };
}

export const dynamicParams = false;

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const entry = getPostBySlug(slug);

  if (!entry) notFound();

  const { post, sections, comparison, faqs } = entry;

  return (
    <>
      <BannerSection post={post} />
      <Article
        post={post}
        sections={sections}
        comparison={comparison}
        faqs={faqs}
      />
      <MoreArticles />
    </>
  );
}
