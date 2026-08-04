import { COMPARISON, FAQS, POST, SECTIONS } from "./_data/post";
import Article from "./_sections/article";
import BannerSection from "./_sections/banner";
import MoreArticles from "./_sections/more-articles";

export const metadata = {
  title: "Fly Ash Bricks vs Red Bricks | Kapuria Developers",
  description:
    "Which brick is better for your home? A builder walks through strength, cost, durability and the environmental trade-offs.",
};

export default function BlogDetail() {
  return (
    <>
      <BannerSection post={POST} />
      <Article
        post={POST}
        sections={SECTIONS}
        comparison={COMPARISON}
        faqs={FAQS}
      />
      <MoreArticles />
    </>
  );
}
