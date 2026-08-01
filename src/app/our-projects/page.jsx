import GlobalPresenceSection from "@/components/common/global-presence";

import BannerSection from "./_sections/banner";
import ConsultationCtaSection from "./_sections/consultation-cta";
import FeaturedProjectsSection from "./_sections/featured-projects";
import OurLocationSection from "./_sections/our-location";

export const metadata = {
  title: "Kapuria Developers",
  description: "The best minds in villa, farmhouse architecture & design.",
};

export default function Architects() {
  return (
    <>
      <BannerSection />
      <FeaturedProjectsSection />
      <GlobalPresenceSection />
      <OurLocationSection />
      <ConsultationCtaSection />
    </>
  );
}
