// All page copy and company details live here so they can be edited
// without touching layout code.
//
// TODO before launch: confirm `url` and `contactEmail`, and have the
// capability wording reviewed. No performance figures are stated on
// purpose; add them only once they are verified and cleared for release.

export const site = {
  name: "HorizonSentry",
  url: "https://www.horizonsentry.com",
  contactEmail: "contact@horizonsentry.com",
  description:
    "HorizonSentry builds mobile counter-UAS systems that combine radar, electro-optical tracking and directed energy on a single deployable platform.",
};

export const nav = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "System", href: "#system" },
  { label: "Command & Control", href: "#command" },
  { label: "Why HorizonSentry", href: "#why" },
];

export const hero = {
  eyebrow: "Counter-UAS · Directed Energy",
  title: "Detect. Track. Defeat.",
  body: "Small drones are cheap, numerous and hard to stop. HorizonSentry pairs radar, electro-optical tracking and a high-energy laser on one mobile platform, so a single crew can protect a site against them.",
  keywords: ["Mobile", "Modular", "Open architecture", "Operator in the loop"],
};

export const capabilities = [
  {
    step: "01",
    title: "Detect",
    image: "sensors",
    alt: "Flat-panel radar and a multi-sensor electro-optical head mounted on a mast",
    body: "A flat-panel radar scans the airspace around the site and flags small, low and slow aircraft that conventional air defence radars tend to miss.",
  },
  {
    step: "02",
    title: "Track",
    image: "command-station",
    alt: "Operator watching drone tracks on rugged laptops with the system in the background",
    body: "Daylight and thermal cameras take over from the radar cue, hold the target in view and give the operator a clear picture for identification.",
  },
  {
    step: "03",
    title: "Defeat",
    image: "system-dusk",
    alt: "Beam director and sensor mast at sunset with two drones overhead",
    body: "A stabilised beam director puts laser energy on the target. Each engagement uses electrical power instead of an interceptor missile.",
  },
];

export const system = {
  title: "One trailer. A complete engagement chain.",
  body: "Sensors, effector, power and control are integrated on a single towable platform. It is set up on its own stabilisers and run from a rugged operator station.",
  image: "system-trailer",
  alt: "Trailer-mounted counter-UAS system with radar, camera head and beam director in a desert at sunset",
  parts: [
    {
      name: "Search radar",
      body: "Flat-panel array on a mast for all-round detection of small aircraft.",
    },
    {
      name: "EO/IR tracker",
      body: "Day and thermal cameras for tracking and visual identification.",
    },
    {
      name: "Beam director",
      body: "Stabilised optics that hold the laser on a moving target.",
    },
    {
      name: "Power and cooling",
      body: "On-board generation and thermal management, with no external supply needed.",
    },
    {
      name: "Operator station",
      body: "Rugged laptop and tablet, connected by cable and placed away from the platform.",
    },
  ],
};

export const command = {
  title: "One operator, the whole air picture",
  body: "Radar tracks, camera video and system status come together on one screen. The software cues the sensors and proposes targets, and a person makes every engagement decision.",
  image: "command-station",
  alt: "Operator at two rugged displays showing radar tracks and thermal video of drones",
  points: [
    "Radar and camera tracks fused into a single map view",
    "Thermal and daylight video of each target for identification",
    "Open interfaces for connecting to existing command networks",
  ],
};

export const reasons = [
  {
    title: "Low cost per engagement",
    body: "A laser shot is paid for in electricity. That changes the arithmetic of defending against drones that cost far less than a missile.",
  },
  {
    title: "Deployable by a small crew",
    body: "The system arrives on one trailer and runs on its own power, so it can be moved as the threat moves.",
  },
  {
    title: "Modular by design",
    body: "Radar, cameras and effector are separate modules. Each can be upgraded or replaced without redesigning the rest.",
  },
  {
    title: "Open architecture",
    body: "Documented interfaces let the system share tracks with other sensors and take its place in a layered defence.",
  },
];
