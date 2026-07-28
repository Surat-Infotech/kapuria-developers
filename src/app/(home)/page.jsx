import BannerSection from "./_sections/banner";
import StandStrong from "./_sections/stand-strong";

export const metadata = {
  title: "Kapuria Developers",
  description: "The best minds in villa, farmhouse architecture & design.",
};

export default function Home() {
  return (
    <>
      <BannerSection />
      <StandStrong />
    </>
  );
}
