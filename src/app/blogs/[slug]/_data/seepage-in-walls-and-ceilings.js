import heroImage from "@/assets/images/blogs/blog-list-3.webp";
import sophiaAnderson from "@/assets/images/blogs/sophia-anderson.webp";

export const POST = {
  slug: "seepage-in-walls-and-ceilings",
  title:
    "Seepage in Walls and Ceilings: Why It Happens and How to Stop It for Good",
  image: heroImage,
  readTime: "10 mins",
  date: "10th June, 2026",
  author: {
    name: "Sophia Anderson",
    role: "Freelance Journalist",
    avatar: sophiaAnderson,
  },
  metaTitle: "Seepage in Walls and Ceilings | Kapuria Developers",
  metaDescription:
    "Why damp patches keep coming back, how to trace the real source, and which repair actually holds — before you spend a rupee on paint.",
};

export const SECTIONS = [
  {
    id: "introduction",
    title: "Introduction",
    body: [
      "It usually starts small. A faint yellowish patch on the bedroom ceiling. Paint bubbling behind the almirah that nobody noticed for months. A musty smell in one corner of the living room that no amount of airing out seems to fix.",
      "Then the monsoon arrives, and the patch becomes a map.",
      "Seepage is probably the most common complaint in Indian homes after the first few years, and also the most badly handled. Most people paint over it. The stain returns the following season, a little wider, and the cycle repeats until plaster starts dropping in chunks. The reason is simple: paint treats the symptom. The water is still coming from somewhere.",
      "Seepage is moisture moving slowly through a wall, ceiling, or floor from a source you usually can't see: a leaking concealed pipe, a cracked or badly sloped roof, an unpainted external wall soaking up rain, a neighbouring bathroom, or groundwater climbing up from the foundation. The permanent cure follows one sequence, always in this order. Find the source. Cut off the water there. Only then repair and repaint the damaged surface. Skip step one and every rupee spent on step three washes away by next October.",
    ],
    imagePosition: "bottom",
    imageAlt: "Damp staining and salt bloom along the base of an external wall",
  },
  {
    id: "not-the-same-thing",
    title: "Seepage, Leakage, Dampness: Not the Same Thing",
    body: [
      "The words get used interchangeably, and that confusion leads to wrong fixes, so it's worth thirty seconds to separate them.",
    ],
    // Lead-in term is bold, the definition runs on in the same paragraph.
    definitions: [
      {
        term: "Leakage",
        body: "is water arriving fast from a definite point. A dripping ceiling during rain, water pooling under a sink. Easy to spot, usually easy to fix.",
      },
      {
        term: "Seepage",
        body: "is the slow version. Water travels through the pores of concrete and brick, sometimes moving a metre or more sideways before it shows on the surface. The stain you see is rarely directly below the source. This is what makes seepage maddening.",
      },
      {
        term: "Condensation",
        body: "is different altogether: moist indoor air hitting a cold surface, common in bathrooms and north-facing walls in winter. No external water involved at all. Treating condensation with waterproofing chemicals wastes money; the fix there is ventilation.",
      },
    ],
    footer: [
      "A quick test the old plumbers use: tape a small square of aluminium foil tightly over the damp patch and leave it for two days. Moisture on the outer face of the foil means condensation. Moisture trapped behind it means real seepage. Costs nothing, tells plenty.",
    ],
  },
  {
    id: "where-water-comes-from",
    title: "Where the Water Actually Comes From",
    body: [
      "Five sources cover nearly every case. Ranked roughly by how often they turn up:",
    ],
    steps: [
      {
        title: "Bathroom and kitchen plumbing",
        body: "Concealed pipes, old joints, cracked tile grouting in the flat above or the bathroom next door. A ceiling patch below someone's bathroom is this, nine times out of ten. Grouting failures are sneakier than pipe leaks - water enters through hairline gaps around tiles every single time the shower runs.",
      },
      {
        title: "The roof or terrace",
        body: "Waterproofing layers age. Terrace slabs develop hairline cracks, water finds them, and gravity does the rest. Poor slope matters too: water that stands on a terrace for days after rain will eventually find a way down. Look for ponding marks after a shower; they point straight at the weak zones.",
      },
      {
        title: "External walls",
        body: "An outside wall that's never been painted, or whose paint has chalked away, drinks rainwater like a sponge. Wind-driven monsoon rain against a west-facing wall can push moisture right through a 9-inch brick wall over a season. The damp shows up inside as patches that worsen only in the rains and fade by winter. That seasonal rhythm is the giveaway.",
      },
      {
        title: "Rising damp",
        body: "Groundwater climbing up through the foundation and lower walls by capillary action, the same way a tissue pulled from one wet corner goes damp all over. Recognisable by its geography: dampness in a band along the bottom metre of ground-floor walls, often with white salt deposits and crumbling paint. Buildings constructed without a proper damp-proof course get this, and it's the hardest type to cure retrospectively.",
      },
      {
        title: "Balconies, window sills, and joints",
        body: "Water sneaks in at junctions - where a balcony meets the wall, where a window frame meets masonry, where an AC drain pipe was punched through without sealing. Small openings, steady supply.",
      },
    ],
  },
  {
    id: "tracing-the-source",
    title: "Tracing the Source Before Spending a Rupee",
    body: [
      "The stain lies about its origin, so a bit of detective work pays for itself.",
      "Note the timing first. Patch worsens during rain? External source - roof, outer wall, or a joint. Patch stays damp in bone-dry January? Plumbing, almost certainly, because rain has an off switch and pipes don't. A pressure test on the bathroom lines (any decent plumber does this in an hour) confirms it without breaking a single tile.",
      "Check upstairs before breaking anything downstairs. Ceiling seepage in an apartment is the upstairs bathroom until proven otherwise, and that conversation with the neighbour, awkward as it is, is cheaper than chipping open the wrong ceiling.",
      "And measure, don't guess. A basic moisture meter costs less than a dinner out and shows exactly where the wall is wettest - which, followed backwards, usually walks straight to the source.",
    ],
  },
  {
    id: "fixing-it",
    title: "Fixing It: What Actually Works",
    body: [
      "Match the cure to the cause. There is no universal seepage chemical, whatever the hardware shop says.",
    ],
    // Same shape as `steps`, minus the numbering — these are categories of fix,
    // not an ordered procedure.
    blocks: [
      {
        title: "Plumbing sources",
        body: "Repair the pipe or joint, regrout the tiles with epoxy grout (cement grout fails again within a couple of years in a wet area), and only then treat the stained surface below.",
      },
      {
        title: "Terrace and roof",
        body: "Clean the slab, fill cracks with polymer-modified mortar, and lay a fresh waterproofing system - brush-applied acrylic or PU membrane coats for moderate cases, an APP membrane for terraces in heavy-rainfall zones. Fix the slope while at it, or the new layer inherits the old ponds.",
      },
      {
        title: "External walls",
        body: "Fill cracks, then apply a good exterior primer and weatherproof exterior paint. On badly exposed walls, a silicone-based water repellent underneath adds real protection. This is the cheapest category to fix and the most commonly ignored.",
      },
      {
        title: "Rising damp",
        body: "Honest answer, difficult. Chemical DPC injection along the wall base works but needs skilled hands. Anything less - waterproof paint on the inside face - just traps moisture in the wall and pushes the damp higher. This one deserves a professional.",
      },
      {
        title: "Interior repair",
        body: "Afterwards, in every case: scrape back to sound plaster, let the wall dry fully (weeks, not days - rushing this step is the classic mistake), apply a stain-blocking primer, then paint. Painting over damp plaster guarantees a repeat performance.",
      },
    ],
  },
  {
    id: "prevention",
    title: "Prevention Is a Construction Decision",
    body: [
      "Most seepage is bought at construction time and paid for years later. A proper damp-proof course at plinth level. Adequate terrace slope with waterproofing done before the tiles go on, not after the first complaint. Epoxy grout in bathrooms. Sealed sleeves wherever a pipe crosses a wall. Even the walling material plays a part - low-absorption bricks and blocks give water less to work with than thirsty ones, which is one of the quieter arguments for materials that soak up 8% of their weight instead of 20%.",
      "None of these items costs much on day one. All of them cost multiples later.",
    ],
  },
  {
    id: "when-to-call-a-professional",
    title: "When to Call a Professional",
    body: [
      "Small external-wall dampness, a regrouting job, repainting after a fixed leak: fair DIY territory or a job for the regular painter. Rising damp, recurring terrace leaks that survived one repair already, seepage near electrical points, or any patch that keeps growing — bring in a waterproofing specialist, and ask for a warranty in writing. A treatment worth doing is a treatment the applicator will stand behind for five years.",
    ],
  },
  {
    id: "conclusion",
    title: "Conclusion",
    body: [
      "Seepage never announces its real source; it shows a stain somewhere convenient and lets the homeowner chase it with paint. Break the cycle by working in the only order that holds: trace, stop, then repair. Time the observations, test before breaking tiles, dry the wall properly before the final coat. Do that once, correctly, and the ceiling map stops redrawing itself every monsoon. Do it in the wrong order and the painter becomes an annual subscription.",
    ],
  },
];

export const FAQS = [
  {
    question: "What causes seepage in walls?",
    answer:
      "The usual suspects are leaking concealed pipes, failed tile grouting in bathrooms, aged terrace waterproofing, unpainted external walls absorbing rain, and rising damp from the foundation. The visible patch often sits a metre or more away from the real entry point.",
  },
  {
    question: "Can waterproof paint stop seepage permanently?",
    answer:
      "No. Paint is a finish, not a cure. Applied over a wall that is still receiving water, it blisters and peels within a season. It only works as the last step after the source has been cut off and the wall has dried fully.",
  },
  {
    question: "How do you find where seepage is coming from?",
    answer:
      "Start with timing. A patch that worsens during rain points to an external source; one that stays damp in dry months points to plumbing. A pressure test on the bathroom lines and a basic moisture meter will usually locate it without breaking any tiles.",
  },
  {
    question: "Is seepage dangerous for a building?",
    answer:
      "Left long enough, yes. Persistent moisture crumbles plaster, corrodes embedded reinforcement, and encourages mould that affects air quality. Seepage near electrical points is an immediate safety concern and should not wait.",
  },
  {
    question: "How much does seepage treatment cost?",
    answer:
      "It depends entirely on the source. Repainting an external wall or regrouting a bathroom is modest. Re-waterproofing a terrace costs more, and chemical DPC injection for rising damp is the most expensive because it needs skilled application. In every case, tracing the source first is what keeps the bill from repeating.",
  },
];
