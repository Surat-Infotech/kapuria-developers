import { notFound } from "next/navigation";

import { PROJECTS, getProjectBySlug, heroImages } from "@/config/projects";

import GlobalPresenceSection from "../_sections/global-presence";
import BreadcrumbSection from "./_sections/breadcrumb";
import ConsultationCtaSection from "./_sections/consultation-cta";
import HeroGallerySection from "./_sections/hero-gallery";
import NearbyLocationsSection from "./_sections/nearby-locations";
import OverviewSection from "./_sections/overview";

// The catalogue is static, so every detail page is prerendered at build time
// and an unknown slug 404s rather than rendering an empty shell.
export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.name} | Kapuria Developers`,
    description: `${project.name} — a ${project.type.toLowerCase()} in ${project.location}. ${project.bedrooms} bedrooms across ${project.floors} floors on a ${project.plotSize} plot.`,
  };
}

export const dynamicParams = false;

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <HeroGallerySection project={project} images={heroImages(project)} />
      <BreadcrumbSection project={project} />
      <OverviewSection project={project} />
      <NearbyLocationsSection project={project} />
      <GlobalPresenceSection />
      <ConsultationCtaSection />
    </>
  );
}
