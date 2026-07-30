import ApartSection from "./_sections/apart";
import BannerSection from "./_sections/banner";
import Beautiful from "./_sections/beautiful";
import GlobalPresence from "./_sections/global-presence";
import QualityPromise from "./_sections/quality-promise";
import SoundsGood from "./_sections/sounds-good";
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
      <Beautiful />
      <ApartSection />
      <SoundsGood />
      <QualityPromise />
      <GlobalPresence />
    </>
  );
}
