import BannerSection from "./_sections/banner";
import BeneathSurfaceSection from "./_sections/beneath-surface";
import CheckpointsSection from "./_sections/checkpoints";
import ConsultationCtaSection from "./_sections/consultation-cta";
import MaterialsSection from "./_sections/materials";
import NineStagesSection from "./_sections/nine-stages";
import OurApproachSection from "./_sections/our-approach";

export const metadata = {
  title: "Kapuria Developers",
  description: "The method behind a building that lasts for generations.",
};

export default function Construction() {
  return (
    <>
      <BannerSection />
      <OurApproachSection />
      <BeneathSurfaceSection />
      <NineStagesSection />
      <CheckpointsSection />
      <MaterialsSection />
      <ConsultationCtaSection />
    </>
  );
}
