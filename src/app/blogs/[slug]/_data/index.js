import * as flyAshBricksVsRedBricks from "./fly-ash-bricks-vs-red-bricks";
import * as punjabTricityRealEstate from "./punjab-tricity-real-estate";
import * as redOxideOnTmtBars from "./red-oxide-on-tmt-bars";
import * as seepageInWallsAndCeilings from "./seepage-in-walls-and-ceilings";
import * as vastuBeliefsExplainedByScience from "./vastu-beliefs-explained-by-science";

// Every post module exports the same four names, so the page can render any of
// them without knowing which one it got. Adding a post means writing the module
// and listing it here — nothing in the page changes.
const MODULES = [
  flyAshBricksVsRedBricks,
  redOxideOnTmtBars,
  seepageInWallsAndCeilings,
  vastuBeliefsExplainedByScience,
  punjabTricityRealEstate,
];

const toEntry = ({ POST, SECTIONS, COMPARISON, FAQS }) => ({
  post: POST,
  sections: SECTIONS,
  comparison: COMPARISON,
  faqs: FAQS,
});

const POSTS_BY_SLUG = new Map(
  MODULES.map((module) => [module.POST.slug, toEntry(module)])
);

export const getPostBySlug = (slug) => POSTS_BY_SLUG.get(slug) ?? null;

export const getAllPostSlugs = () => [...POSTS_BY_SLUG.keys()];
