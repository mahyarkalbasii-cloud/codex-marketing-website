export const siteEn = {
  name: "PersianSaze",
  url: "https://persiansaze.com",
  logoPath: "/logo.svg",
  description:
    "PersianSaze helps construction suppliers find active projects in Tehran, Karaj, and Lavasan earlier, evaluate them better, and follow up more consistently.",
  phones: ["021-75425000", "021-72897000"],
  salesExpert: "Mahyar Kalbasi",
  extension: "108",
  email: "info@persiansaze.com",
  address: "Tehran, Shahid Hassan Tehrani Moghaddam Square",
  openingHours: "Sa-Th 09:00-18:00",
  handle: "@persiansaze",
  sameAs: ["https://instagram.com/persiansaze"],
};

export const navItemsEn = [
  { label: "Solution", href: "/#solution" },
  { label: "Product", href: "/#product" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Plans", href: "/#plans" },
  { label: "FAQ", href: "/#faq" },
];

export const seoPagesEn = [
  { title: "Features", href: "/features" },
  { title: "Pricing", href: "/pricing" },
  { title: "FAQ", href: "/faq" },
  { title: "Construction projects in Tehran", href: "/cities/tehran" },
  { title: "Construction projects in Karaj", href: "/cities/karaj" },
  { title: "Construction projects in Lavasan", href: "/cities/lavasan" },
];

export const pricingGroupsEn = [
  {
    id: "small",
    label: "Small to mid-size",
    description:
      "For companies that want focused coverage of small to mid-size construction projects.",
    plans: [
      {
        name: "Bonyan",
        subtitle: "A lighter start for smaller projects",
        prices: [
          ["3 months", "9,000,000 toman"],
          ["6 months", "13,500,000 toman"],
          ["12 months", "18,000,000 toman"],
        ],
        extra: "Each additional stage: 3,000,000 toman",
      },
      {
        name: "Royan",
        subtitle: "Balanced coverage for a growing sales team",
        prices: [
          ["3 months", "12,000,000 toman"],
          ["6 months", "18,000,000 toman"],
          ["12 months", "24,000,000 toman"],
        ],
        extra: "Each additional stage: 4,000,000 toman",
        featured: true,
      },
    ],
  },
  {
    id: "large",
    label: "Large projects",
    description:
      "For teams whose sales value comes from larger lots, heavier projects, and wider market coverage.",
    plans: [
      {
        name: "Taban",
        subtitle: "Stronger coverage for larger opportunities",
        prices: [
          ["3 months", "15,000,000 toman"],
          ["6 months", "22,500,000 toman"],
          ["12 months", "30,000,000 toman"],
        ],
        extra: "Each additional stage: 5,000,000 toman",
      },
      {
        name: "Taban Plus",
        subtitle: "Wide coverage for large and multi-area projects",
        prices: [
          ["3 months", "18,000,000 toman"],
          ["6 months", "27,000,000 toman"],
          ["12 months", "36,000,000 toman"],
        ],
        extra: "Each additional stage: 6,000,000 toman",
        featured: true,
      },
    ],
  },
];

export const karajAddonEn = {
  title: "Karaj add-on",
  description:
    "When purchased with a Tehran subscription, Karaj coverage can be added with a 50% discount.",
  prices: [
    ["3 months", "7,500,000 toman"],
    ["6 months", "11,250,000 toman"],
    ["12 months", "15,000,000 toman"],
  ],
};

export const citiesEn = [
  {
    slug: "tehran",
    name: "Tehran",
    title: "Active construction projects in Tehran",
    description:
      "For construction sales in Tehran, speed of reaching the right project and knowing the build stage are decisive. PersianSaze turns Tehran's scattered market into a map, filters, and a trackable CRM workflow.",
    answer:
      "PersianSaze gives suppliers usable project data in Tehran: location, construction stage, images, and a clear sales follow-up path.",
    areas: ["North Tehran", "West Tehran", "East Tehran", "Central Tehran", "South Tehran"],
  },
  {
    slug: "karaj",
    name: "Karaj",
    title: "Active construction projects in Karaj",
    description:
      "Karaj is a nearby and active market for many suppliers. PersianSaze helps teams view Karaj opportunities alongside Tehran and follow them in CRM.",
    answer:
      "Karaj coverage is useful for teams that want to include active and actionable Karaj projects in their sales pipeline.",
    areas: ["Central Karaj", "Jahanshahr", "Gohardasht", "Azimiyeh", "Fardis"],
  },
  {
    slug: "lavasan",
    name: "Lavasan",
    title: "Active construction projects in Lavasan",
    description:
      "Lavasan can be valuable for facade, MEP, doors and windows, cabinetry, stone, and specialized services. Timing the sales conversation matters in this market.",
    answer:
      "In Lavasan, PersianSaze is most valuable for identifying higher-quality projects and entering consultative sales conversations earlier.",
    areas: ["Little Lavasan", "Great Lavasan", "Sabu Bozorg", "Naran", "Golandoak"],
  },
];

export const suppliersEn = [
  {
    slug: "cement-and-basic-materials",
    name: "Basic materials",
    title: "Selling basic materials to construction projects",
    products: "Cement, brick, plaster, steel, sand, concrete, and construction chemicals",
    description:
      "In basic-material sales, the gap between need and purchase is short. Sales teams need to find active projects ready to buy faster.",
    answer:
      "For basic materials, PersianSaze creates value through faster access to active projects, the right stage signal, and quicker follow-up.",
    stages: ["Foundation", "Structure", "Masonry", "Plaster"],
  },
  {
    slug: "elevator",
    name: "Elevators",
    title: "Selling elevators to construction projects",
    products: "Elevators, escalators, service, and related equipment",
    description:
      "Elevator sales are consultative and usually require negotiation, trust-building, and early entry into project decision-making.",
    answer:
      "For elevator sales, PersianSaze helps you enter the conversation before the purchase moment and keep opportunities trackable in CRM.",
    stages: ["Structure", "Masonry", "Early finishing"],
  },
  {
    slug: "facade",
    name: "Facade and building envelope",
    title: "Selling facade, stone, and envelope materials",
    products: "Facade systems, stone, composite panels, glass, insulation, and envelope materials",
    description:
      "In facade sales, negotiation timing matters. If you arrive late, the material or contractor may already be selected.",
    answer:
      "PersianSaze uses construction stage and project imagery to help facade opportunities become visible earlier and easier to follow up.",
    stages: ["Masonry", "Plaster", "Early finishing"],
  },
  {
    slug: "doors-windows",
    name: "Doors and windows",
    title: "Selling doors and windows to active projects",
    products: "UPVC, aluminum, security doors, hardware, and glass",
    description:
      "Door and window sales depend on knowing the project stage and the right time to submit an offer.",
    answer:
      "For doors and windows, PersianSaze surfaces projects that are moving closer to the decision window.",
    stages: ["Masonry", "Plaster", "Finishing"],
  },
  {
    slug: "mechanical-electrical",
    name: "Mechanical and electrical",
    title: "Selling mechanical and electrical systems",
    products: "Pipe, cable, boiler room equipment, cooling, heating, and electrical systems",
    description:
      "MEP usually has multiple sales windows and requires knowing when to enter the project.",
    answer:
      "For MEP suppliers, PersianSaze helps prioritize projects by stage, scale, and follow-up potential.",
    stages: ["Foundation", "Structure", "Masonry", "Finishing"],
  },
  {
    slug: "interior-finishing",
    name: "Finishing and interiors",
    title: "Selling finishing, cabinetry, and interior products",
    products: "Cabinets, flooring, paint, wallpaper, lighting, and interior equipment",
    description:
      "For finishing and interiors, entering too early or too late can both weaken the opportunity.",
    answer:
      "PersianSaze clarifies the right entry timing for finishing and interior sales by showing construction stage and enabling follow-up.",
    stages: ["Early finishing", "Finishing", "Final work"],
  },
];

export const stagesEn = [
  {
    slug: "demolition-excavation",
    name: "Demolition and excavation",
    title: "Sales opportunities during demolition and excavation",
    description:
      "This stage matters for execution services, machinery, safety, retaining structures, and early consultative sales entry.",
  },
  {
    slug: "foundation",
    name: "Foundation",
    title: "Sales opportunities during foundation work",
    description:
      "Foundation activates stronger needs for basic materials, concrete, steel, and some technical services.",
  },
  {
    slug: "structure",
    name: "Structure",
    title: "Sales opportunities during structural work",
    description:
      "Structural work is a strong signal for structural materials, early MEP, elevators, and many consultative sales categories.",
  },
  {
    slug: "masonry",
    name: "Masonry",
    title: "Sales opportunities during masonry",
    description:
      "Masonry is an important window for materials, doors and windows, facade, MEP, and finishing sales planning.",
  },
  {
    slug: "plaster",
    name: "Plaster",
    title: "Sales opportunities during plaster work",
    description:
      "This stage signals that the project is approaching decisions around finishing, facade, and interior equipment.",
  },
  {
    slug: "early-finishing",
    name: "Early finishing",
    title: "Sales opportunities at the start of finishing",
    description:
      "For cabinets, flooring, lighting, paint, interiors, and some engineering services, this stage is highly important.",
  },
  {
    slug: "finishing",
    name: "Finishing",
    title: "Sales opportunities during finishing",
    description:
      "At this stage, speed of decision-making and quality of follow-up directly affect opportunity conversion.",
  },
  {
    slug: "final-work",
    name: "Final work",
    title: "Sales opportunities during final work and handover",
    description:
      "This stage matters for final equipment, completion services, and some fast transactional sales.",
  },
];

export const featurePagesEn = [
  {
    title: "Project map",
    href: "/features#map",
    description: "See the scattered construction market on a clear spatial view.",
  },
  {
    title: "Construction-stage filters",
    href: "/features#filters",
    description: "Narrow opportunities by stage, city, scale, and sales fit.",
  },
  {
    title: "Lightweight project-sales CRM",
    href: "/features#crm",
    description: "Record calls, messages, opportunity status, and next follow-up.",
  },
  {
    title: "AI sales assistant",
    href: "/features#ai",
    description: "Use project summaries, prioritization, and suggested next actions.",
  },
];

export const faqsEn = [
  {
    question: "Is PersianSaze only a phone-number database?",
    answer:
      "No. PersianSaze is not just a phone-number database; it turns a project into something your team can evaluate and follow up. A raw contact list gives you a lead. PersianSaze adds map context, construction stage, sales filters, follow-up tools, messaging, and sales enablement.",
  },
  {
    question: "How are project updates collected and checked?",
    answer:
      "Project information is collected, reviewed, and updated through field and operational workflows. This helps construction stage, activity status, and decision context stay more reliable for sales decisions.",
  },
  {
    question: "What does a project record include?",
    answer:
      "Project data includes the information needed for project-based sales evaluation and follow-up, such as general location, construction stage, activity status, land size, use type, imagery, and signals for sales prioritization.",
  },
  {
    question: "Which suppliers is PersianSaze best for?",
    answer:
      "PersianSaze is best for suppliers whose sales depend on construction projects and the right contact timing. This includes basic materials, MEP, facade, elevators, doors and windows, engineering services, and teams with project-based B2B sales.",
  },
  {
    question: "What does PersianSaze do for construction sales?",
    answer:
      "PersianSaze makes the project-sales path clearer, from project discovery to consistent follow-up. It helps suppliers see active projects on a map, filter them by construction stage and sales fit, and manage follow-up more systematically.",
  },
  {
    question: "How can I request a demo?",
    answer:
      "You can request a demo through the form on this page or by calling sales. In the demo, we walk through project discovery, filtering opportunities, reviewing project data, and managing follow-up.",
  },
  {
    question: "Does PersianSaze guarantee sales?",
    answer:
      "No. Sales still depend on your product quality, pricing, brand trust, negotiation, and follow-up. PersianSaze makes the path to the right project, evaluation, and follow-up more professional.",
  },
  {
    question: "What role does AI play in PersianSaze?",
    answer:
      "AI acts as a decision assistant: it helps summarize projects, evaluate opportunities, prioritize follow-up, and suggest next actions. It does not replace field data or sales judgment.",
  },
  {
    question: "What is the current geographic coverage?",
    answer:
      "The current focus is Tehran, Karaj, and Lavasan. Geographic expansion should happen while preserving data quality, not just by adding more cities.",
  },
];
