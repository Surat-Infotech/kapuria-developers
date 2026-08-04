import { ROUTES } from "@/lib/route";

import canopyVeil1 from "@/assets/images/our-projects/canopy-veil-1.webp";
import canopyVeil2 from "@/assets/images/our-projects/canopy-veil-2.webp";
import canopyVeil3 from "@/assets/images/our-projects/canopy-veil-3.webp";
import canopyVeil4 from "@/assets/images/our-projects/canopy-veil-4.webp";
import canopyVeil5 from "@/assets/images/our-projects/canopy-veil-5.webp";
import magesticVilla1 from "@/assets/images/our-projects/magestic-project-1.webp";
import magesticVilla2 from "@/assets/images/our-projects/magestic-project-2.webp";
import magesticVilla3 from "@/assets/images/our-projects/magestic-project-3.webp";
import magesticVilla4 from "@/assets/images/our-projects/magestic-project-4.webp";
import magesticVilla5 from "@/assets/images/our-projects/magestic-project-5.webp";
import palatialArc1 from "@/assets/images/our-projects/palatial-arc-1.webp";
import palatialArc2 from "@/assets/images/our-projects/palatial-arc-2.webp";
import palatialArc3 from "@/assets/images/our-projects/palatial-arc-3.webp";
import palatialArc4 from "@/assets/images/our-projects/palatial-arc-4.webp";
import palatialArc5 from "@/assets/images/our-projects/palatial-arc-5.webp";
import vantage1 from "@/assets/images/our-projects/vantage-1.webp";
import vantage2 from "@/assets/images/our-projects/vantage-2.webp";
import vantage3 from "@/assets/images/our-projects/vantage-3.webp";
import vantage4 from "@/assets/images/our-projects/vantage-4.webp";
import vantage5 from "@/assets/images/our-projects/vantage-5.webp";
import vantage6 from "@/assets/images/our-projects/vantage-6.webp";
import { AMENITY_ICONS } from "@/assets/svgs/amenities";

// The label lives here rather than beside the mark so copy changes never mean
// touching an svg. Two ids share the car mark because the wording differs by
// project ("Extensive Car Parking Space" vs "Car Parking Space").
export const AMENITIES = {
  "living-dining": {
    label: "Living and Dining Room",
    icon: AMENITY_ICONS["living-dining"],
  },
  elevator: { label: "Elevator", icon: AMENITY_ICONS.elevator },
  "lounge-bar": { label: "Lounge Bar", icon: AMENITY_ICONS["lounge-bar"] },
  "duct-ac": { label: "Duct AC", icon: AMENITY_ICONS["duct-ac"] },
  "terrace-garden": {
    label: "Open Terrace Garden",
    icon: AMENITY_ICONS["terrace-garden"],
  },
  "music-system": {
    label: "Background Music System",
    icon: AMENITY_ICONS["music-system"],
  },
  "car-parking": {
    label: "Car Parking Space",
    icon: AMENITY_ICONS["car-parking"],
  },
  "car-parking-extensive": {
    label: "Extensive Car Parking Space",
    icon: AMENITY_ICONS["car-parking"],
  },
  pantry: { label: "Pantry", icon: AMENITY_ICONS.pantry },
  "home-theater": {
    label: "Home Theater Provisioning",
    icon: AMENITY_ICONS["home-theater"],
  },
  "semi-furnished": {
    label: "Semi Furnished",
    icon: AMENITY_ICONS["semi-furnished"],
  },
  staircase: {
    label: "Separate Servant Staircase",
    icon: AMENITY_ICONS.staircase,
  },
  "park-facing": { label: "Park Facing", icon: AMENITY_ICONS["park-facing"] },
  security: { label: "24×7 Security", icon: AMENITY_ICONS.security },
};

// Every project in the design carries this same paragraph, so it is hoisted
// until each one gets copy of its own.
const DESCRIPTION =
  "The architectural construction of an eco-friendly villa combines innovative design with sustainable practices, prioritizing the integration of renewable materials and energy-efficient systems. From the initial blueprint, the emphasis is on maximizing natural light and ventilation, reducing the need for artificial heating or cooling. The villa's structure often incorporates recycled materials, such as reclaimed wood and repurposed stone, minimizing the ecological footprint while infusing the space with a rustic yet contemporary aesthetic.";

const PALATIAL_ARC = {
  slug: "the-palatial-arc",
  name: "The Palatial Arc",
  // Split around the letter the brand mark stands in for on desktop; mobile
  // keeps the letter itself.
  lockup: ["The P", "o", "latial Arc"],
  location: "Sector 88, Mohali, Punjab, India",
  city: "Mohali, Punjab, India",
  // No project has art-directed hero photography yet, so every `hero` below is
  // empty and the detail banner falls back to the gallery frames, cropping
  // them to its own ratio — see `heroImages` at the foot of the file.
  images: [
    palatialArc1,
    palatialArc2,
    palatialArc3,
    palatialArc4,
    palatialArc5,
  ],
  hero: [],
  type: "Villa",
  typePlural: "Villas",
  plotSize: "2,852 sq.ft.",
  builtArea: "2,753 sq.ft.",
  floors: "2",
  bedrooms: "5",
  highlights: ["Private Pool", "2 Indoor Parking"],
  amenities: [
    "living-dining",
    "elevator",
    "lounge-bar",
    "duct-ac",
    "terrace-garden",
    "music-system",
    "car-parking-extensive",
    "pantry",
    "home-theater",
    "semi-furnished",
    "staircase",
  ],
  nearby: [
    { name: "Airport", distance: "22 mins Drive" },
    { name: "Elante Mall", distance: "30 mins Drive" },
    { name: "VR Punjab", distance: "18 mins Drive" },
    { name: "Nearest Park", distance: "10 mins walk" },
    { name: "Sec 17 Plaza", distance: "32 mins Drive" },
  ],
  mapLink: "https://maps.app.goo.gl/D6jiT6hEFZdW15wLA",
  mapCenter: "30.6903477,76.6872864",
  mapQuery: "Sector 88, Mohali, Punjab, India",
  description: DESCRIPTION,
};

const MAJESTIC_VILLA = {
  slug: "the-majestic-villa",
  name: "The Majestic Villa",
  lockup: ["The M", "a", "gestic Villa"],
  location: "Sector 89, Mohali, Punjab, India",
  city: "Mohali, Punjab, India",
  images: [
    magesticVilla1,
    magesticVilla2,
    magesticVilla3,
    magesticVilla4,
    magesticVilla5,
  ],
  hero: [],
  type: "Villa",
  typePlural: "Villas",
  plotSize: "1,835.19 sq.ft.",
  builtArea: "1,830 sq.ft",
  floors: "2",
  bedrooms: "5",
  highlights: ["Private Pool", "1 Indoor Parking"],
  amenities: [
    "living-dining",
    "elevator",
    "lounge-bar",
    "duct-ac",
    "terrace-garden",
    "music-system",
    "car-parking-extensive",
    "pantry",
    "home-theater",
    "semi-furnished",
    "staircase",
  ],
  nearby: [
    { name: "Airport", distance: "20 mins Drive" },
    { name: "Elante Mall", distance: "34 mins Drive" },
    { name: "VR Punjab", distance: "20 mins Drive" },
    { name: "Nearest Park", distance: "10 mins walk" },
    { name: "Sec 17 Plaza", distance: "30 mins Drive" },
  ],
  mapLink: "https://maps.app.goo.gl/7EyvAxUNVcwWzU8v8",
  mapCenter: "30.6808758,76.6899567",
  mapQuery: "Sector 89, Mohali, Punjab, India",
  description: DESCRIPTION,
};

const VANTAGE = {
  slug: "the-vantage",
  name: "The Vantage",
  lockup: ["The V", "a", "ntage"],
  location: "Sector 79, Mohali, Punjab, India",
  city: "Mohali, Punjab, India",
  images: [vantage1, vantage2, vantage3, vantage4, vantage5, vantage6],
  hero: [],
  type: "Villa",
  typePlural: "Villas",
  plotSize: "2,756.25 sq.ft.",
  builtArea: "1,835.28 sq.ft.",
  floors: "3",
  bedrooms: "5",
  highlights: ["Private Pool", "1 Indoor Parking"],
  amenities: [
    "living-dining",
    "elevator",
    "lounge-bar",
    "duct-ac",
    "terrace-garden",
    "music-system",
    "car-parking",
    "pantry",
    "home-theater",
    "semi-furnished",
    "staircase",
  ],
  nearby: [
    { name: "Airport", distance: "25 mins Drive" },
    { name: "Elante Mall", distance: "35 mins Drive" },
    { name: "VR Punjab", distance: "30 mins Drive" },
    { name: "Nearest Park", distance: "10 mins walk" },
    { name: "Sec 17 Plaza", distance: "35 mins Drive" },
  ],
  mapLink: "https://maps.app.goo.gl/Efs53r8eTu4VJ5Se8",
  mapCenter: "30.6829033,76.7164917",
  mapQuery: "Sector 79, Mohali, Punjab, India",
  description: DESCRIPTION,
};

const CANOPY_VEIL = {
  slug: "the-canopy-veil",
  name: "The Canopy Veil",
  lockup: ["The C", "a", "nopy Veil"],
  location: "Sector 60, Mohali, Punjab, India",
  city: "Mohali, Punjab, India",
  images: [canopyVeil1, canopyVeil2, canopyVeil3, canopyVeil4, canopyVeil5],
  hero: [],
  type: "Villa",
  typePlural: "Villas",
  plotSize: "3,750 sq.ft.",
  builtArea: "8,041 sq.ft.",
  floors: "3",
  bedrooms: "5",
  highlights: ["Private Pool", "1 Indoor Parking"],
  amenities: [
    "living-dining",
    "elevator",
    "lounge-bar",
    "duct-ac",
    "terrace-garden",
    "music-system",
    "car-parking",
    "pantry",
    "home-theater",
    "park-facing",
    "semi-furnished",
    "staircase",
  ],
  nearby: [
    { name: "Airport", distance: "25 mins Drive" },
    { name: "Elante Mall", distance: "28 mins Drive" },
    { name: "VR Punjab", distance: "15 mins Drive" },
    { name: "Nearest Park", distance: "10 mins walk" },
    { name: "Sec 17 Plaza", distance: "30 mins Drive" },
  ],
  // No shared map link for this one yet, so it still resolves by text and
  // keeps Google's own pin — see `mapSrc` in the nearby-locations section.
  mapLink: null,
  mapCenter: null,
  mapQuery: "Sector 60, Mohali, Punjab, India",
  description: DESCRIPTION,
};

export const PROJECTS = [PALATIAL_ARC, MAJESTIC_VILLA, VANTAGE, CANOPY_VEIL];

export const projectHref = (project) =>
  `${ROUTES.OUR_PROJECTS}/${project.slug}`;

export const getProjectBySlug = (slug) =>
  PROJECTS.find((project) => project.slug === slug);

// The hero runs full-bleed at 1440×922, a ratio no gallery frame has. Where a
// project has no hero art yet the gallery frames stand in and the banner crops
// them, so the carousel is never empty.
export const heroImages = (project) =>
  project.hero.length > 0 ? project.hero : project.images;

export const resolveAmenity = (id) => AMENITIES[id];
