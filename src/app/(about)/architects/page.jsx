import ArchitectProfilesSection from "./_sections/architect-profiles";
import BannerSection from "./_sections/banner";
import ConsultationCtaSection from "./_sections/consultation-cta";

export const metadata = {
  title: "Kapuria Developers",
  description: "The best minds in villa, farmhouse architecture & design.",
};

export default function OurTeam() {
  return (
    <>
      <BannerSection />
      <ArchitectProfilesSection />
      <ConsultationCtaSection />
    </>
  );
}
