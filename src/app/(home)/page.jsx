import ApartSection from "./_sections/apart";
import BannerSection from "./_sections/banner";
import Beautiful from "./_sections/beautiful";
import Brands from "./_sections/brands";
import Contact from "./_sections/contact";
import GlobalPresence from "./_sections/global-presence";
import LatestContent from "./_sections/latest-content";
import Materials from "./_sections/materials";
import OurMission from "./_sections/our-mission";
import ProjectsSection from "./_sections/projects";
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
      <ProjectsSection />
      <QualityPromise />
      <GlobalPresence />
      <LatestContent />
      <Materials />
      <Brands />
      <OurMission />
      <Contact />
    </>
  );
}
