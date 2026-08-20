import heroImage from "@/assets/images/blogs/blog-detail-2.webp";
import bannerImage from "@/assets/images/blogs/blog-details-2-banner.webp";
import sophiaAnderson from "@/assets/images/blogs/sophia-anderson.webp";

export const POST = {
  slug: "red-oxide-on-tmt-bars",
  title: "Why Red Oxide is Important on TMT (Thermo-Mechanically Treated) Bars",
  // `image` is the in-article photo and the listing-card shot; the banner runs
  // its own artwork.
  image: heroImage,
  banner: bannerImage,
  readTime: "10 mins",
  date: "10th June, 2026",
  author: {
    name: "Sophia Anderson",
    role: "Freelance Journalist",
    avatar: sophiaAnderson,
  },
  metaTitle: "Why Red Oxide is Important on TMT Bars | Kapuria Developers",
  metaDescription:
    "When red oxide primer earns its place on TMT bars, when it does not, and what IS 456 actually says about rust and bond.",
};

// Four columns here rather than the three the fly-ash post uses — the table
// renders whatever width the `columns` array declares.
export const COMPARISON = {
  columns: ["Protection Method", "Cost", "Where It Fits", "Watch Out For"],
  rows: [
    [
      "Red oxide primer",
      "Very low",
      "Site storage, transport, starter bars",
      "Thick layers on bars about to be embedded",
    ],
    [
      "Cement slurry wash",
      "Almost free",
      "Starter bars, short waits",
      "Washes off in heavy rain, needs redoing",
    ],
    [
      "Fusion-bonded epoxy (FBE)",
      "High",
      "Bridges, marine structures, chloride zones",
      "Factory-applied only; damaged patches corrode faster",
    ],
    [
      "Galvanised bars",
      "High",
      "Aggressive environments, long design life",
      "Availability, cost, welding precautions",
    ],
    [
      "Doing nothing",
      "Free today",
      "Bars used within 2–3 weeks, dry inland sites",
      "Everything, if the schedule slips",
    ],
  ],
};

export const SECTIONS = [
  {
    id: "introduction",
    title: "Introduction",
    body: [
      "Walk past any construction site that sat idle through a monsoon. The column starter bars poking out of the plinth tell the whole story. The ones left bare have turned a flaky orange-brown, scale peeling off in layers. The ones painted that dull brick-red colour? Still solid underneath.",
      "That red paint is red oxide primer, and it's one of the cheapest insurance policies in construction. Yet half the sites in the country skip it, usually because nobody explained what it actually does or when it's genuinely needed. This article fixes that.",
    ],
    imageAfter: 2,
    imageAlt: "TMT bars tied into a column cage on site",
  },
  {
    id: "what-is-red-oxide",
    title: "What is Red Oxide?",
    body: [
      "Red oxide is a protective primer, basically iron oxide pigment suspended in a binder, brushed or sprayed onto TMT bars to keep moisture and salty air off the steel. It matters most in four situations: long storage at site or godown, transport over weeks, coastal or high-humidity locations, and exposed starter bars waiting months for the next slab. Bars going straight from delivery into concrete within a few weeks generally don't need it, and heavy paint layers on bars about to be embedded can actually be a problem. The details below explain why",
    ],
  },
  {
    id: "tmt-bars-do-rust",
    title: "First, a Reality Check: TMT Bars Do Rust",
    body: [
      "TMT stands for Thermo-Mechanically Treated. During manufacturing, the hot bar gets quenched with water, hardening the outer surface into a tough layer while the core stays softer and ductile. Good design. What it is not, despite what some sales brochures suggest, is rust-proof.",
      "The quenching process does leave a thin protective oxide film on the surface, which is why fresh TMT bars resist corrosion better than old cold-twisted bars ever did. But that film is thin. Give it standing water, coastal salt spray, or six months of open storage, and ordinary rust takes over. Anyone who has bought steel in Chennai or Mumbai and stored it near the coast knows how fast the orange bloom appears. Sometimes within a fortnight.",
      "So the question isn't whether TMT bars can rust. They can. The question is whether rust will get a chance to do real damage before the bars go into concrete.",
    ],
  },
  {
    id: "what-red-oxide-does",
    title: "What Red Oxide Actually Does",
    body: [
      "Red oxide primer works in a simple, almost boring way. It forms a physical barrier between the steel and everything that wants to attack it: humidity, rain, salt-laden air, even the mild acidity in industrial-area atmospheres.",
      "The pigment itself is iron oxide, chemically stable stuff that doesn't react further. The binder holds it against the steel surface. Nothing clever is happening at a molecular level. The coating just stands in the way, the same job a raincoat does.",
      "And because it's cheap and brushable on site with zero skill required, it fills a gap that fancier solutions can't. Epoxy coating needs factory application. Galvanising needs a plant. Red oxide needs a labourer, a brush, and an hour.",
    ],
  },
  {
    id: "four-situations",
    title: "The Four Situations Where It Earns Its Keep",
    steps: [
      {
        title: "Long storage",
        body: "Steel bought in bulk at a good rate often sits for months before use. Every month in the open costs surface metal. Coated stacks come through a full monsoon in usable condition; bare stacks frequently need wire-brushing, and badly pitted bars get rejected outright by any engineer worth their fee.",
      },
      {
        title: "Transport and handling",
        body: "Bars travelling from a distant stockyard, sitting in transit, getting loaded and unloaded in the rain. A primer coat applied at the yard means the material arrives in the condition it left.",
      },
      {
        title: "Coastal and humid regions",
        body: "Chloride is steel's worst enemy. In coastal belts, salt in the air accelerates corrosion several times over, and chloride-induced rust is the nasty pitting kind, not just surface bloom. For projects within a few kilometres of the sea, protecting stored reinforcement isn't optional. It's the difference between using the steel and scrapping it.",
      },
      {
        title: "Exposed starter and dowel bars",
        body: "This is the big one, and the most visible on real sites. Construction happens in stages. Column bars project above each slab, waiting weeks or months for the next lift. Foundation dowels wait for columns. During that wait they're fully exposed. Painting these projecting lengths with red oxide (or dipping them in cement slurry, the older trick) is standard good practice, and its absence is one of the quickest ways to spot a carelessly run site.",
      },
    ],
  },
  {
    id: "rust-bond-is-456",
    title: "The Part Most Articles Skip: Rust, Bond, and What IS 456 Says",
    body: [
      "Here's where honesty matters, because there's a nuance sellers rarely mention.",
      "Concrete grips reinforcement through bond, and the ribs on a TMT bar plus a clean, slightly rough surface make that bond work. Indian Standard IS 456 requires reinforcement to be free of loose mill scale, loose rust, oil, grease, and any coating that reduces bond.",
      "Read that carefully. Loose rust and bond-reducing coatings are the problem. A thin, tight film of rust is actually harmless, some studies suggest it marginally improves bond by roughening the surface. Flaky, layered, pitting rust is what destroys both the bar's cross-section and the bond.",
      "Which leads to a practical rule for red oxide: it belongs on bars in storage and on exposed lengths that will later be lapped or welded, not slathered thickly on bars going into concrete tomorrow. If coated bars are being embedded, the coat should be thin and well-adhered, and any structural engineer on record gets the final word. For exposed starter bars, the coated projecting length typically gets cleaned or the lap detail accounts for it before the next pour. This is routine site practice, not a complication.",
    ],
  },
  {
    id: "red-oxide-vs-alternative",
    title: "Red Oxide vs the Alternative",
    type: "table",
  },
  {
    id: "storage-habits",
    title: "Storage Habits That Make the Coating Work Harder",
    body: [
      "A coat of primer on badly stored steel is a bandage on a bad habit. The basics still apply. Stack bars on timber sleepers or concrete blocks, never on bare ground where they wick up moisture all night. Cover stacks with tarpaulin, but leave air movement so condensation doesn't pool underneath. Keep different diameters separated and tagged, because the longer a crew digs through a stack, the more coating gets scraped off. Simple things. Ignored constantly.",
    ],
  },
  {
    id: "how-important",
    title: "So, How Important Is It Really?",
    body: [
      "Important in proportion to time and moisture. A dry inland site consuming steel within days can skip it and lose nothing. A coastal project, a slow-moving build, a bulk purchase sitting through the rains, exposed starters on a staged construction - for these, a drum of red oxide primer costing a few hundred rupees protects steel worth lakhs. Few decisions in construction have a better ratio of cost to consequence.",
      "Ask any senior site engineer what they check when taking over a stalled project. Somewhere in the first five items: the condition of the exposed reinforcement. Red-painted starters say someone was paying attention. Flaking orange ones say start budgeting for replacement steel.",
    ],
  },
  {
    id: "conclusion",
    title: "Conclusion",
    body: [
      "Red oxide on TMT bars isn't a gimmick and isn't universal law. It's a cheap, low-skill barrier coat that buys steel time against moisture, and it matters exactly where time and moisture pile up: storage, transport, coasts, and exposed starter bars between pours. Use it there, keep it thin where bars will be embedded, respect what IS 456 says about bond, and store the steel properly underneath it all. The bars will still be worth their price when the concrete finally arrives.",
    ],
  },
];
