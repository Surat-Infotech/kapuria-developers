import BannerSection from "./_sections/banner";
import ConsultationCtaSection from "./_sections/consultation-cta";
import ManagingDirectorSection from "./_sections/managing-director";
import MeetOurTeamSection from "./_sections/meet-our-team";
import OurMissionSection from "./_sections/our-mission";
import OurNetworkSection from "./_sections/our-network";
import QualityPromiseSection from "./_sections/quality-promise";

export const metadata = {
  title: "Kapuria Developers",
  description: "The best minds in villa, farmhouse architecture & design.",
};

export default function OurTeam() {
  return (
    <>
      <BannerSection />
      <ManagingDirectorSection />
      <OurMissionSection />
      <MeetOurTeamSection />
      <QualityPromiseSection />
      <OurNetworkSection />
      <ConsultationCtaSection />
    </>
  );
}
