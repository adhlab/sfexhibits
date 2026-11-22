import { historicalMidwifeStories } from "./historical-midwife-stories";

export type MidwifeRecord = {
  name: string;
  era: "Historical" | "Contemporary";
  county: string;
  community: string;
  practice: string;
  contribution: string;
  period?: string;
  story?: string;
  sourceTitle?: string;
  sourceUrl?: string;
  sourceLocator?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
  imageScale?: number;
  imageOrigin?: string;
  thumbnailTransform?: string;
  thumbnailOrigin?: string;
};

const establishedMidwives: MidwifeRecord[] = [
  { name: "Lillery Knox", era: "Historical", county: "Union County", community: "New Albany", practice: "Lay midwife", contribution: "A practicing midwife who trained her niece Olivia Jefferies." },
  { name: "Olivia Jefferies", era: "Historical", county: "Union County", community: "New Albany", practice: "Lay midwife", contribution: "Trained by her aunt and provided midwifery care in Union County." },
  { name: "Bessie Sutton", era: "Historical", county: "Lawrence County", community: "Monticello", practice: "Lay midwife", contribution: "Practiced beginning in the 1920s and appears in Mississippi public history accounts." },
  { name: "Catherine Lyons", era: "Historical", county: "Forrest County", community: "Palmer’s Crossing", practice: "Lay midwife", contribution: "Honored at a retirement ceremony under state regulations." },
  { name: "Mollie Merrill", era: "Historical", county: "Forrest County", community: "Palmer’s Crossing", practice: "Lay midwife", contribution: "Honored at a 1948 retirement ceremony after delivering hundreds of babies." },
  { name: "Josephine Franklin", era: "Historical", county: "Forrest County", community: "Palmer’s Crossing", practice: "Lay midwife", contribution: "A long-serving midwife honored at a retirement ceremony in 1948." },
  { name: "Della Falkner", era: "Historical", county: "Marshall County", community: "Holly Springs", practice: "Lay midwife", contribution: "Authored a 1937 booklet documenting 133 deliveries, including two stillbirths." },
  { name: "Estelle W. Christian", era: "Historical", county: "Claiborne County", community: "Rocky Springs / Willows", practice: "Lay midwife", contribution: "Correspondence and reports reflect her role in public-health education and disease prevention." },
  { name: "Janie Clara Breckenridge", era: "Historical", county: "Claiborne County", community: "Port Gibson", practice: "State-licensed lay midwife", contribution: "Identified in public history sources as part of an early generation of licensed Mississippi midwives." },
  { name: "Virginia Scott Ford", era: "Historical", county: "Hinds County", community: "Jackson", practice: "Lay midwife", contribution: "Practiced from the Scott Ford Houses and throughout Jackson, sustaining a trusted community network of care." },
  { name: "Georgiana Taylor", era: "Historical", county: "Adams County", community: "Natchez", practice: "Lay midwife", contribution: "Described in Natchez historical sources as a well-known Black midwife by 1900." },
  { name: "Mary Ann Walker", era: "Historical", county: "Noxubee County", community: "Noxubee County", practice: "Lay midwife", contribution: "Referenced as an antebellum midwife who continued her practice after emancipation." },
  { name: "Millie Simpson", era: "Historical", county: "Union County", community: "New Albany area", practice: "Lay midwife", contribution: "Documented in a 1942 Union County group photograph of midwives." },
  { name: "Hattie Stone", era: "Historical", county: "Union County", community: "New Albany area", practice: "Lay midwife", contribution: "Documented in a 1942 Union County group photograph of midwives." },
  { name: "Louanna Bell", era: "Historical", county: "Union County", community: "New Albany area", practice: "Lay midwife", contribution: "Documented in a 1942 Union County group photograph of midwives." },
  { name: "Rhoda Morris", era: "Historical", county: "Union County", community: "New Albany area", practice: "Lay midwife", contribution: "Documented in a 1942 Union County group photograph of midwives." },
  { name: "Maggie Venzant", era: "Historical", county: "Union County", community: "New Albany area", practice: "Lay midwife", contribution: "Documented in a 1942 Union County group photograph of midwives." },
  { name: "Audreanna Lewis", era: "Contemporary", county: "Hinds County", community: "Jackson", practice: "Certified nurse-midwife", contribution: "A contemporary midwife practicing in Jackson, documented through a public professional listing." },
  { name: "Aisha Ralph", era: "Contemporary", county: "Hinds County", community: "Jackson", practice: "CPM / LM", contribution: "A contemporary midwife practicing in Jackson, documented through a public professional listing." },
  { name: "Toni Hill", era: "Contemporary", county: "Lee County", community: "Tupelo area", practice: "Direct-entry midwife", contribution: "A contemporary midwife serving North Mississippi, documented through a public directory listing." },
  { name: "Tanya Smith-Johnson", era: "Contemporary", county: "Hinds County", community: "Jackson metro", practice: "Certified professional midwife", contribution: "A contemporary midwife and birth-justice leader documented through a public organizational profile." },
  { name: "Johnnie Lee Smith", era: "Historical", county: "Lee County", community: "Lee County", practice: "Lay midwife", contribution: "Began working in 1938, delivered 523 babies, and first trained under Henrietta Shambry." },
  { name: "Henrietta Shambry", era: "Historical", county: "Lee County", community: "Lee County", practice: "Lay midwife", contribution: "Midwife and mentor who trained Johnnie Lee Smith before retiring." },
  { name: "Mittie Patterson", era: "Historical", county: "Alcorn County", community: "Corinth", practice: "Lay midwife", contribution: "Practiced for roughly 45 years, trained by her mother Lou Taylor and later with Dr. R. E. Honnell." },
  { name: "Lou Taylor", era: "Historical", county: "Alcorn County", community: "Corinth area", practice: "Lay midwife", contribution: "Mother and teacher of midwife Mittie Patterson, representing an intergenerational lineage of care." },
  { name: "Sadie Mae Singleton", era: "Historical", county: "Hinds County", community: "Bolton", practice: "Lay midwife", contribution: "Beginning in 1942, trained for two years under experienced Bolton midwives before practicing independently." },
  { name: "Mollie Gilmore", era: "Historical", county: "Warren County", community: "Vicksburg", practice: "Lay midwife", contribution: "Delivered 25 babies in 1936–1937, conducted home visits, and encouraged vaccination." },
  { name: "Aunt Caroline", era: "Historical", county: "Wilkinson / Amite Counties", community: "Woodville–Centreville corridor", practice: "Lay midwife", contribution: "Remembered in community accounts as serving the region for decades." },
  { name: "Aunt Mary Green", era: "Historical", county: "Wilkinson / Amite Counties", community: "Woodville–Centreville corridor", practice: "Lay midwife", contribution: "Remembered as serving families in the region alongside Aunt Caroline." },
];

const countyOverrides: Record<string, string> = {
  "Sally Montgomery": "Hinds County",
  "Mary White Watson": "Hinds County",
};

const storyByName = new Map(historicalMidwifeStories.map((story) => [story.name, story]));
const enrichedEstablished = establishedMidwives.map((midwife) => {
  const story = storyByName.get(midwife.name);
  if (!story) return midwife;
  return {
    ...midwife,
    period: story.period,
    story: story.story,
    sourceTitle: story.sourceTitle,
    sourceUrl: story.sourceUrl,
    sourceLocator: story.sourceLocator,
    imageSrc: story.imageSrc,
    imageAlt: story.imageAlt,
    imagePosition: story.imagePosition,
    imageScale: story.imageScale,
    imageOrigin: story.imageOrigin,
    thumbnailTransform: story.thumbnailTransform,
    thumbnailOrigin: story.thumbnailOrigin,
  };
});

const establishedNames = new Set(establishedMidwives.map((midwife) => midwife.name));
const regionalContextNames = new Set(["Lucrecia Perryman", "Margaret Charles Smith"]);
const additionalHistoricalMidwives: MidwifeRecord[] = historicalMidwifeStories
  .filter((story) => !establishedNames.has(story.name) && !regionalContextNames.has(story.name))
  .map((story) => ({
    name: story.name,
    era: "Historical",
    county: countyOverrides[story.name] ?? story.county,
    community: story.place,
    practice: story.practice ?? "Lay midwife",
    contribution: story.story,
    period: story.period,
    story: story.story,
    sourceTitle: story.sourceTitle,
    sourceUrl: story.sourceUrl,
    sourceLocator: story.sourceLocator,
    imageSrc: story.imageSrc,
    imageAlt: story.imageAlt,
    imagePosition: story.imagePosition,
    imageScale: story.imageScale,
    imageOrigin: story.imageOrigin,
    thumbnailTransform: story.thumbnailTransform,
    thumbnailOrigin: story.thumbnailOrigin,
  }));

const tjHandy: MidwifeRecord = {
  name: "T. J. Handy",
  era: "Historical",
  county: "Copiah County",
  community: "Hazlehurst",
  practice: "Permitted lay midwife",
  contribution: "A surviving state permit places T. J. Handy within Mississippi’s regulated network of community midwives in the 1970s.",
  period: "Permit issued 1973–1974",
  story: "T. J. Handy’s surviving permit records official authorization to practice in Copiah County. The document preserves a name, a place, and the state’s terms for midwifery, while the daily calls, households served, and knowledge carried remain beyond the permit’s narrow frame.",
  sourceTitle: "Mississippi State Board of Health midwife permit",
  sourceLocator: "Scott Ford Houses Collection, SRM-2026-200",
};

export const midwives: MidwifeRecord[] = [...enrichedEstablished, ...additionalHistoricalMidwives, tjHandy]
  .sort((left, right) => left.name.localeCompare(right.name));
