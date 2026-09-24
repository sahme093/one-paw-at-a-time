// ============================================================================
// SALON CONFIG — everything specific to THIS business lives here.
//
// To reuse this whole site for a different grooming salon: change the values
// in this file (and swap the files in /public/assets), then update the two
// SEO tags at the top of index.html. You should not need to touch any file
// inside src/components/ or src/utils/.
// ============================================================================

export const salon = {
  name: "One Paw at a Time Grooming",
  shortName: "One Paw at a Time",

  // Used in the hero heading as: "{kicker} {highlight} {city}"
  heroKicker: "Dog grooming",
  heroHighlight: "in",
  heroCity: "Menifee",
  // false keeps the heading for search engines and screen readers but hides
  // it visually, so the hero opens straight into the description.
  showHeroHeading: false,

  tagline: "One-on-one grooming · Menifee, CA",

  description:
    "One-on-one dog groomer in a quiet, home-based salon. I specialize in a low-stress experience with no cages or kennels. Your pup will have the same groomer every time, with quality shampoos, nail care and ear cleaning included with every groom.",

  // E.164 format — used for tel: / sms: links.
  phone: "+19515650191",
  phoneDisplay: "(951) 565-0191",

  email: "", // leave blank to hide the "send by email" fallback link

  address: {
    line1: "28350 Shutes Cir",
    city: "Menifee",
    state: "CA",
    zip: "92584",
  },

  // Google Maps embed + link query. Kept separate from the address object
  // so you can hand-tune the query string without reformatting the address.
  mapsQuery: "28350 Shutes Cir, Menifee, CA 92584",

  // 0 = Sunday ... 6 = Saturday, matching Date#getDay().
  hours: [
    { day: "Sunday", open: "9:00 am", close: "5:00 pm" },
    { day: "Monday", open: "9:00 am", close: "5:00 pm" },
    { day: "Tuesday", open: "9:00 am", close: "5:00 pm" },
    { day: "Wednesday", open: "9:00 am", close: "5:00 pm" },
    { day: "Thursday", open: "9:00 am", close: "5:00 pm" },
    { day: "Friday", open: "9:00 am", close: "5:00 pm" },
    { day: "Saturday", open: "9:00 am", close: "5:00 pm" },
  ],
  hoursSummary: "Open daily, 9am–5pm",

  // Toggle to show/hide "from $X" price labels next to each service. Add a
  // `price` to each service below before turning this on.
  showPrices: false,

  // Keyed by species — the booking form only offers a Dog/Cat choice when
  // more than one species is listed. On the Services section, items are
  // grouped into cards by `group` (falling back to the species name).
  services: {
    dog: [
      { name: "Full service grooming", group: "Grooming" },
      { name: "Grooming and styling", group: "Grooming" },
      { name: "Bathing and blow dry", group: "Grooming" },
      { name: "Nail trimming", group: "Grooming" },
      { name: "Ear cleaning", group: "Grooming" },
      { name: "Teeth brushing", group: "Grooming" },
      { name: "Anal gland expression", group: "Grooming" },
      { name: "Flea and tick treatment", group: "Grooming" },
      { name: "Pet-safe creative color", group: "Creative color" },
      { name: "Pet-safe nail color", group: "Creative color" },
    ],
  },

  // [label, sublabel] pairs shown as size-picker buttons in the booking form.
  sizes: {
    dog: [
      ["Small", "under 20 lb"],
      ["Medium", "20–50 lb"],
      ["Large", "50–90 lb"],
      ["XL", "90+ lb"],
    ],
  },

  // Shown in the Gallery section in this order.
  gallery: [
    { src: "/assets/pyrenees-easter.webp", alt: "Fluffy white Great Pyrenees in a lilac bandana, smiling in a spring garden" },
    { src: "/assets/terrier-bandana.webp", alt: "Freshly groomed cream terrier mix wearing a blue bow-tie bandana" },
    { src: "/assets/schnauzer-rainbow.webp", alt: "Groomed silver schnauzer relaxing in a rainbow bandana" },
    { src: "/assets/maltese-flower-wall.webp", alt: "White Maltese mix with a fresh trim in front of a flower wall" },
    { src: "/assets/before-after-bow.webp", alt: "Before and after: shaggy mixed-breed pup, then trimmed and tidy with a pink bow" },
  ],

  // Real reviews copied from Google. `name` and `when` are optional.
  reviews: [
    {
      name: "",
      when: "",
      text: "Crystal did an amazing job grooming my dog! She was friendly, professional, and my pup came back looking and smelling great. You can tell she really cares about the dogs she works with. Highly recommend!",
    },
  ],

  // Pulled from the One Paw at a Time logo: blush pink, bubble teal and
  // ribbon tan. accentStrong/accentDeep/accentLabel are deepened versions so
  // text set in them clears WCAG AA against the light backgrounds.
  colors: {
    bg: "#FFF9F7",
    surface: "#FFFFFF",
    surfaceAlt: "#FCEFEC",
    ink: "#2A2226",
    inkSoft: "#554A4E",
    inkMute: "#6E6266",
    border: "rgba(42,34,38,.1)",
    borderStrong: "rgba(42,34,38,.18)",
    accent: "#F2A7A1",
    accentHover: "#F5B9B4",
    accentStrong: "#C0564F",
    accentDeep: "#9E433D",
    accentLabel: "#2F6C82",
    highlight: "#DDEFF5",
    selection: "#F7CDC9",
    onDark: "#FFF9F7",
    error: "#B3261E",
    openDot: "#3E9B5A",
    closedDot: "#D2B48C",
  },

  fonts: {
    display: "'Fraunces', Georgia, serif",
    body: "'Nunito', system-ui, sans-serif",
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,400..700,100&family=Nunito:wght@400;500;600;700&display=swap",
  },
};
