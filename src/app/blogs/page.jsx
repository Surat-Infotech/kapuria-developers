import Articles from "./_sections/articles";
import BannerSection from "./_sections/banner";
import BlogPosts from "./_sections/blog-posts";
import Press from "./_sections/press";
import Videos from "./_sections/videos";

export const metadata = {
  title: "Kapuria Developers",
  description: "The best minds in villa, farmhouse architecture & design.",
};

export default function Blog() {
  return (
    <>
      <BannerSection />
      <BlogPosts />
      <Videos />
      <Articles />
      <Press />
    </>
  );
}
