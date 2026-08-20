import heroImage from "@/assets/images/blogs/blog-detail.webp";
import bannerImage from "@/assets/images/blogs/blog-details-1-banner.webp";
import sophiaAnderson from "@/assets/images/blogs/sophia-anderson.webp";

// Article content for the demo post. When a CMS lands, this shape is what the
// page consumes: `sections` drives both the body and the table of contents.
export const POST = {
  slug: "fly-ash-bricks-vs-red-bricks",
  title: "Fly Ash Bricks vs Red Bricks: Which One is Better for Your Home?",
  image: heroImage,
  // The banner runs its own artwork; `image` stays the in-article photo and
  // the shot the listing cards use.
  banner: bannerImage,
  readTime: "10 mins",
  date: "10th June, 2026",
  author: {
    name: "Sophia Anderson",
    role: "Freelance Journalist",
    avatar: sophiaAnderson,
  },
  metaTitle: "Fly Ash Bricks vs Red Bricks | Kapuria Developers",
  metaDescription:
    "Which brick is better for your home? A builder walks through strength, cost, durability and the environmental trade-offs.",
};

export const COMPARISON = {
  columns: ["Introduction", "Fly Ash Bricks", "Red Bricks"],
  rows: [
    ["Strength", "7.5-10 MPa, sometimes higher", "3.5-5 MPa for good Class 1"],
    ["Weight", "Around 2.6kg a piece", "3 to 3.5kg, varies"],
    ["Water Absorption", "6-12%", "15-25%"],
    [
      "Durability",
      "Very good, rarely shows salt stains",
      "Good, but efflorescence is common",
    ],
    [
      "Cost",
      "Cheaper per brick, cheaper to plaster",
      "Works out 20-30% dearer overall",
    ],
    ["Finish", "Smooth and uniform", "Uneven, depends on the kiln"],
    [
      "Eco-Friendliness",
      "Recycles waste, no burning",
      "Eats topsoil, kilns pollute",
    ],
    ["Fire Resistance", "Good", "Excellent (already fired once)"],
    ["Thermal Insulation", "Average", "Noticeably better"],
    ["Maintenance", "Low", "Dampness & salt marks show up"],
  ],
};

// `type: "table"` marks where the comparison grid drops into the flow.
export const SECTIONS = [
  {
    id: "introduction",
    title: "Introduction",
    body: [
      "Last March a client of mine, a schoolteacher building her first house on a 30x40 plot, called me from the brick yard. Her mason wanted red bricks. The supplier kept pushing the grey ones. She'd been standing there for forty minutes and nobody could give her a straight answer.",
      "I get some version of this call every few months. So here's the straight answer, the one I gave her, with the reasoning laid out so you can check my logic instead of taking anyone's word for it.",
      "If your house has an RCC frame (columns and beams carrying the load, which is how almost every urban home gets built now), pick fly ash bricks. They test stronger, drink less water, cost less once you count plaster and wastage, and they don't eat farmland to get made. Red bricks earn their keep in one situation: old-style load-bearing construction in hot dry regions, where their natural insulation genuinely helps. That's it. That's the whole debate, minus the yard gossip. Now the reasoning.",
    ],
    // Drops into the copy after this many paragraphs, rather than sitting
    // above the intro the way the hero used to.
    imageAfter: 3,
    imageAlt: "A mason setting a fly ash brick into a fresh course",
  },
  {
    id: "what-are-fly-ash-bricks",
    title: "What are Fly Ash Bricks?",
    body: [
      'When a thermal power plant burns coal, a fine grey ash comes out. For decades this stuff just piled up in ash ponds. Somebody eventually figured out that if you mix it with cement, stone dust, and a bit of gypsum, then press it in a hydraulic machine and cure it with water for a couple of weeks, you get a brick. No kiln. No firing. The machine does in seconds what a kiln does in days. My mason friend Rafiq calls them "factory bricks," which honestly tells you most of what you need to know about them.',
    ],
  },
  {
    id: "what-are-red-bricks",
    title: "What are Red Bricks?",
    body: [
      "Red bricks need no introduction. Clay gets dug up (usually good topsoil, which is a problem we'll get to), moulded, dried in the sun, then fired in a kiln at around 900 to 1,000 degrees. People have built this way for a few thousand years. The Harappans did it. Your grandfather's house probably did it.",
      "The trouble isn't the concept. It's the consistency. A brick that sat near the fire comes out over-burnt and brittle. One from the edge of the stack comes out soft enough to scratch with a nail. Same kiln, same day, same price.",
    ],
  },
  {
    id: "comparison-table",
    title: "Fly Ash Bricks vs Red Bricks: Comparison Table",
    type: "table",
  },
  {
    id: "manufacturing-process",
    title: "Why the Manufacturing Process Decides Everything",
    body: [
      "Every difference in that table traces back to one fact. Red bricks are handmade and fire-cured; fly ash bricks are machine-pressed under controlled pressure.",
      "Measure ten red bricks from one lot and you might find size differences of 5mm or more. Doesn't sound like much. But your mason compensates with thicker mortar joints, and then thicker plaster to hide the waviness. You pay for that cement. Machine-pressed bricks come out identical, ten thousand at a time, so the joints stay thin and the walls come up straight.",
    ],
  },
  {
    id: "strength",
    title: "Strength: Not Even Close",
    body: [
      "Fly ash bricks generally test between 7.5 and 10 MPa. Decent red bricks manage 3.5 to 5. So roughly double, in favour of the grey brick.",
      "Does a house even need that? For filler walls in a framed structure, not really, the columns do the work. Where it shows up is everywhere else. Fewer bricks crack in transit. Fewer break when a labourer tosses them up to the first floor (they always toss them, whatever you say). On one delivery I tracked out of curiosity, the red brick lot lost close to 8% to breakage. The fly ash lot that came the same week lost under 2%. That's money.",
    ],
  },
  {
    id: "water-absorption",
    title: "Water Absorption and Durability",
    body: [
      "Water is the thing that actually ages a wall. Red bricks soak up 15 to 25% of their weight in it. Fly ash bricks take in maybe half that.",
      "You've seen those white powdery streaks near the base of older buildings? That's efflorescence, salts inside the clay migrating out with moisture, and red bricks are full of them. It's not structural, but it ruins paint and it keeps coming back no matter how many times you repaint. Fly ash bricks barely have free salts to push out, so the problem mostly doesn't exist. During monsoon this difference stops being theoretical very fast.",
    ],
  },
  {
    id: "weight-heat-sound",
    title: "Weight, Heat, and Sound",
    body: [
      "Fly ash bricks are lighter, which trims a little off the structural load. On a single house the saving in steel is modest. Over three or four floors it starts to matter.",
      "Here's where red bricks fight back, though. Fired clay is naturally porous, and those tiny air pockets insulate. A red brick house in Nagpur in May is noticeably more bearable than the same house in fly ash brick, and anyone who's spent an afternoon in both will back me up. If you're in a hot dry belt and don't plan to run the AC all day, this is a real argument, maybe the only strong one left for clay.",
      "Sound insulation? Pretty similar at the same wall thickness. Red brick has a slight edge. Not enough to choose by.",
    ],
  },
  {
    id: "fire-resistance",
    title: "Fire Resistance",
    body: [
      "Both are fine. A red brick has already survived a thousand-degree kiln, so fire barely bothers it. Fly ash bricks clear building code requirements comfortably too. In a house fire, your bricks are not going to be the weak point either way, so I wouldn't spend a minute deciding on this.",
    ],
  },
  {
    id: "what-it-costs",
    title: "What It Actually Costs",
    body: [
      "Per brick, fly ash usually comes in cheaper than good Class 1 red brick. But the per-brick rate is the least interesting number.",
      "The real savings hide in the finishing. Uniform bricks take thinner joints, so less mortar. Smooth faces sometimes need only a putty coat inside instead of full plaster. Masons lay identical bricks faster because they're not checking line and level every third course. Stack all of it up and the walling package typically lands 20 to 30% cheaper. My schoolteacher client saved a little over a lakh on her build, and most of it came from plaster, not the bricks themselves.",
      "Speed follows the same logic. Call it a week saved on a typical two-storey home, sometimes more.",
    ],
  },
  {
    id: "environmental",
    title: "The Environmental Bit",
    body: [
      "I'll keep this short because it's not a contest. Every red brick is made from fertile topsoil that took centuries to form, fired in a kiln pumping out smoke and CO₂. Every fly ash brick uses up waste that would otherwise sit in an ash pond, and skips the burning entirely. If eco-friendly bricks are on your priority list at all, you already know which way this points.",
    ],
  },
  {
    id: "advantages-fly-ash",
    title: "Advantages of Fly Ash Bricks",
    list: [
      "Roughly double the compressive strength of common red bricks",
      "Uniform size means thin joints, less mortar, straighter walls",
      "Absorbs far less water, so damp walls and salt stains mostly disappear",
      "Cheaper once you count plaster and breakage, not just the brick rate",
      "Made from recycled waste with zero kiln emissions",
    ],
  },
  {
    id: "advantages-red",
    title: "Advantages of Red Bricks",
    list: [
      "Better natural insulation, cooler rooms in summer without help",
      "A few thousand years of track record, and every mason in the country knows exactly how to work with them",
      "Practically fireproof",
      "Available even in places where no fly ash plant delivers",
    ],
  },
  {
    id: "disadvantages-fly-ash",
    title: "Disadvantages of Fly Ash Bricks",
    list: [
      "Rooms run slightly warmer in extreme heat",
      "Quality swings wildly between manufacturers. A brick from a proper hydraulic plant and one from a small manual-press unit are different products wearing the same name",
      "Exposed unplastered walls need a water-repellent coat in heavy-rain regions",
    ],
  },
  {
    id: "disadvantages-red",
    title: "Disadvantages of Red Bricks",
    list: [
      "No two batches are quite the same",
      "Thirsty. All the dampness and efflorescence problems flow from this",
      "The topsoil and kiln-smoke problem",
      "Ends up costlier in the final bill despite feeling familiar and safe",
    ],
  },
  {
    id: "which-to-choose",
    title: "So Which One Should You Choose?",
    body: [
      "Framed RCC structure, city or town plot, standard modern build: fly ash bricks, and don't lose sleep over it. Load-bearing traditional house, hot dry region, a kiln nearby with a good local reputation: red bricks are still a perfectly sound choice, and the summer comfort is real.",
      "The one rule that overrides everything: the maker matters more than the material. A well-pressed fly ash brick beats a mediocre red brick, and a proper Class 1 red brick beats junk from a manual press. Choose the supplier first, the brick type second.",
    ],
  },
  {
    id: "expert-recommendation",
    title: "Expert Recommendation",
    body: [
      "Whatever you buy, spend ten minutes testing before you pay. Ask the fly ash supplier for a strength certificate, 7.5 MPa or better. Drop a sample brick from chest height onto hard ground; it can chip, it shouldn't shatter. Knock two together and listen for a ring rather than a thud. Soak one overnight and weigh it, anything past 15% heavier is a brick you don't want holding up your bedroom wall.",
      "Ten minutes. Fifty years of living behind it. Cheap insurance.",
    ],
  },
  {
    id: "conclusion",
    title: "Conclusion",
    body: [
      "My schoolteacher client went with fly ash bricks, plastered smooth, painted white, and her walls came through their second monsoon without a single damp patch. Would red bricks have failed her? No. Her house would've stood fine either way. It just would've cost more, taken longer, and needed repainting sooner.",
      "That's really what the fly ash bricks vs red bricks question comes down to for most people: both bricks build good houses, one of them just makes the process cheaper, faster, and kinder to the ground it came from. Match the brick to your build, test before you buy, and you'll be fine.",
    ],
  },
];
