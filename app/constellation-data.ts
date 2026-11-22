import { archiveRecords } from "./archive-data";

export type ConstellationThemeId =
  | "houses"
  | "midwives"
  | "knowledge"
  | "tools"
  | "journeys"
  | "health"
  | "memory";

export type ConstellationNodeShape = "portrait" | "document" | "artifact";
export type ConstellationNodeSize = "small" | "medium" | "large";
export type LabelPlacement = "top" | "bottom" | "left" | "right";

export type ThemeRecordPlacement = {
  id: string;
  x: number;
  y: number;
  size: ConstellationNodeSize;
  labelPlacement: LabelPlacement;
  entranceOrder: number;
  trajectoryBias: -1 | 0 | 1;
  driftPhase: number;
};

export type ConstellationNode = {
  id: string;
  shape: ConstellationNodeShape;
  size: ConstellationNodeSize;
  summary: string;
  relatedIds: string[];
};

export type ConstellationTheme = {
  id: ConstellationThemeId;
  title: string;
  shortTitle: string;
  kicker: string;
  summary: string;
  shortIntro: string;
  image: string;
  imageFit: "cover" | "contain";
  recordIds: string[];
  layout: ThemeRecordPlacement[];
  edges: ReadonlyArray<readonly [string, string]>;
  evidenceIds: [string, string, string];
};

export type RecordVoiceAttachment = {
  recordId: string;
  voiceId: string;
  context: string;
};

const networkLayout = (
  ids: string[],
  points: Array<readonly [number, number, LabelPlacement, ConstellationNodeSize, -1 | 0 | 1]>,
): ThemeRecordPlacement[] => {
  return ids.map((id, index) => ({
    id,
    x: points[index][0],
    y: points[index][1],
    labelPlacement: points[index][2],
    size: points[index][3],
    trajectoryBias: points[index][4],
    entranceOrder: index,
    driftPhase: index * 1.047 + (index % 2) * .42,
  }));
};

const createTheme = (
  theme: Omit<ConstellationTheme, "recordIds">,
): ConstellationTheme => ({
  ...theme,
  recordIds: theme.layout.map((placement) => placement.id),
});

const ringEdges = (ids: string[], crossLinks: ReadonlyArray<readonly [string, string]> = []) => [
  ...ids.map((id, index) => [id, ids[(index + 1) % ids.length]] as const),
  ...crossLinks,
];

const housesIds = ["SRM-2026-132", "WOW-2026-002", "WOW-2026-003", "WOW-2026-032", "WOW-2026-005", "WOW-2026-006"];
const midwivesIds = ["SRM-2026-123", "WOW-2026-014", "WOW-2026-016", "WOW-2026-017", "SRM-2026-239", "WOW-2026-019"];
const knowledgeIds = ["WOW-2026-021", "WOW-2026-022", "WOW-2026-008", "WOW-2026-023", "WOW-2026-024", "WOW-2026-028"];
const toolsIds = ["WOW-2026-010", "WOW-2026-009", "WOW-2026-011", "SRM-2026-199", "WOW-2026-018", "WOW-2026-008"];
const journeysIds = ["WOW-2026-012", "WOW-2026-013", "SRM-2026-236", "SRM-2026-638", "WOW-2026-025", "WOW-2026-027"];
const healthIds = ["WOW-2026-015", "SRM-2026-200", "SRM-2026-201", "SRM-2026-202", "WOW-2026-020", "WOW-2026-026"];
const memoryIds = ["WOW-2026-030", "WOW-2026-029", "WOW-2026-007", "SRM-2026-473", "SRM-2026-474", "WOW-2026-031"];

export const constellationThemes: ConstellationTheme[] = [
  createTheme({
    id: "houses",
    title: "The Scott Ford Houses",
    shortTitle: "The Houses",
    kicker: "Place · Home · Preservation",
    summary: "Two houses hold a history of family, property, work, and Black women’s independence in Jackson.",
    shortIntro: "The monument begins with land. At 136 and 138 East Cohea Street, Mary Green Scott turned domestic and laundry labor into property, shelter, and inheritance. The houses, path, washhouse, and chicken house survive as a connected working landscape—evidence that care depended upon rooms, yards, food, income, family proximity, and a durable Black claim to place.",
    image: "/images/site/historic-scott-ford-house.png",
    imageFit: "cover",
    layout: networkLayout(housesIds, [
      [70, 15, "bottom", "large", 1], [87, 38, "left", "small", 1],
      [70, 64, "top", "large", 1], [36, 64, "top", "medium", -1],
      [17, 39, "right", "medium", -1], [36, 16, "bottom", "medium", -1],
    ]),
    edges: ringEdges(housesIds, [["SRM-2026-132", "WOW-2026-005"], ["WOW-2026-003", "WOW-2026-006"], ["WOW-2026-032", "WOW-2026-006"]]),
    evidenceIds: ["WOW-2026-002", "WOW-2026-032", "WOW-2026-003"],
  }),
  createTheme({
    id: "midwives",
    title: "The Midwives",
    shortTitle: "The Midwives",
    kicker: "People · Lineage · Authority",
    summary: "Meet women remembered as practitioners, teachers, family members, and trusted medical authorities.",
    shortIntro: "Virginia Scott Ford belonged to a statewide body of Black women whose work made maternal care available under Jim Crow. Their authority grew through apprenticeship, repeated service, community trust, and an ability to remain through uncertainty. Portraits, permits, and group photographs restore names and collective scale to a history too often reduced to a single stereotype.",
    image: "/images/archive/coll099.jpg",
    imageFit: "cover",
    layout: networkLayout(midwivesIds, [
      [10, 72, "right", "large", -1], [24, 37, "bottom", "large", -1],
      [48, 10, "bottom", "medium", 0], [68, 18, "right", "medium", 0],
      [87, 45, "bottom", "large", 1], [76, 74, "left", "small", 1],
    ]),
    edges: ringEdges(midwivesIds, [["SRM-2026-123", "WOW-2026-014"], ["WOW-2026-016", "WOW-2026-019"]]),
    evidenceIds: ["SRM-2026-123", "WOW-2026-014", "WOW-2026-019"],
  }),
  createTheme({
    id: "knowledge",
    title: "Ways of Knowing",
    shortTitle: "Ways of Knowing",
    kicker: "Learning · Observation · Inheritance",
    summary: "Knowledge moved through apprenticeship, demonstration, manuals, meetings, weather, and memory.",
    shortIntro: "Midwifery knowledge was learned in practice: by watching experienced women, preparing rooms, attending meetings, reading manuals, and responding to the conditions of a particular home. State instruction added procedures and documentation, but it did not create skill from nothing. These records reveal exchange—and the unequal power that determined which forms of knowledge became officially recognizable.",
    image: "/images/interpretive/midwife-training-demonstration.webp",
    imageFit: "cover",
    layout: networkLayout(knowledgeIds, [
      [50, 11, "bottom", "small", 0], [20, 28, "right", "small", -1],
      [80, 28, "left", "large", 1], [30, 59, "right", "medium", -1],
      [70, 59, "left", "medium", 1], [50, 73, "top", "small", 0],
    ]),
    edges: ringEdges(knowledgeIds, [["WOW-2026-021", "WOW-2026-008"], ["WOW-2026-022", "WOW-2026-024"]]),
    evidenceIds: ["WOW-2026-022", "WOW-2026-008", "WOW-2026-024"],
  }),
  createTheme({
    id: "tools",
    title: "Tools of Care",
    shortTitle: "Tools of Care",
    kicker: "Objects · Practice · Preparation",
    summary: "The things midwives carried reveal the material preparation behind intimate and skilled care.",
    shortIntro: "A midwife’s bag condensed an entire portable practice. Linens, soap, scissors, dressings, cord ties, records, and other supplies had to be cleaned, replenished, repaired, and kept ready. Read beside the prepared room and state manual, these objects show care as disciplined labor—not an instinctive gift or sentimental memory detached from technique. Readiness was itself a daily form of care.",
    image: "/images/interpretive/midwife-bag-exterior.webp",
    imageFit: "contain",
    layout: networkLayout(toolsIds, [
      [14, 31, "right", "large", -1], [31, 14, "bottom", "large", -1],
      [50, 9, "bottom", "medium", 0], [69, 14, "bottom", "medium", 1],
      [86, 31, "left", "small", 1], [50, 61, "top", "large", 0],
    ]),
    edges: ringEdges(toolsIds, [["WOW-2026-010", "WOW-2026-011"], ["SRM-2026-199", "WOW-2026-018"]]),
    evidenceIds: ["WOW-2026-010", "WOW-2026-011", "WOW-2026-009"],
  }),
  createTheme({
    id: "journeys",
    title: "Journeys and Networks",
    shortTitle: "Journeys",
    kicker: "Movement · Meetings · Reach",
    summary: "Care crossed roads and thresholds while families transported, supported, gathered, and learned.",
    shortIntro: "Midwifery joined knowledge to movement. A call could require a wagon or automobile, travel through darkness and weather, supplies carried along a dirt road, and someone waiting to bring the practitioner home. Meetings created another geography, connecting household authority to county networks. The journey reveals the family and institutional labor surrounding every birth, every route, and every return.",
    image: "/images/archive/coll200.jpg",
    imageFit: "cover",
    layout: networkLayout(journeysIds, [
      [10, 67, "right", "medium", -1], [27, 47, "right", "small", -1],
      [43, 61, "top", "large", 0], [58, 32, "bottom", "small", 0],
      [75, 46, "left", "medium", 1], [90, 18, "left", "small", 1],
    ]),
    edges: ringEdges(journeysIds, [["WOW-2026-012", "WOW-2026-013"], ["SRM-2026-638", "WOW-2026-025"]]),
    evidenceIds: ["WOW-2026-013", "SRM-2026-236", "WOW-2026-027"],
  }),
  createTheme({
    id: "health",
    title: "Birth, Health, and Community",
    shortTitle: "Health & Community",
    kicker: "Birth · Advocacy · Public Health",
    summary: "Midwifery joined childbirth to a larger struggle for family health, dignity, and community care.",
    shortIntro: "Black midwives were central providers within a medical system structured by segregation and unequal access. Permits, birth certificates, policy files, hospital photographs, and statistics record the growing reach of institutional medicine. Together they also expose what official systems omitted: preparation, trust, aftercare, and the family relationships that made birth survivable, dignified, and meaningful across generations.",
    image: "/images/site/scott-ford-family.png",
    imageFit: "cover",
    layout: networkLayout(healthIds, [
      [20, 16, "right", "large", -1], [50, 11, "bottom", "small", 0],
      [80, 16, "left", "small", 1], [28, 55, "right", "small", -1],
      [72, 55, "left", "medium", 1], [50, 72, "top", "small", 0],
    ]),
    edges: ringEdges(healthIds, [["SRM-2026-200", "WOW-2026-020"], ["SRM-2026-201", "SRM-2026-202"]]),
    evidenceIds: ["WOW-2026-015", "WOW-2026-020", "WOW-2026-026"],
  }),
  createTheme({
    id: "memory",
    title: "Memory and the Archive",
    shortTitle: "Memory & Archive",
    kicker: "Records · Evidence · Stewardship",
    summary: "Buildings, testimony, drawings, exhibitions, and advocacy show what survives—and what remains absent.",
    shortIntro: "The archive did not arrive complete. Descendants, historians, museum workers, architects, students, and community members kept fragments in motion until they could be connected. Saving the houses became another form of care. This constellation asks how preservation, description, exhibition, and public memory can honor what survives without disguising uncertainty, absence, or the work still ahead.",
    image: "/images/site/dr-alferdteen-harrison.png",
    imageFit: "cover",
    layout: networkLayout(memoryIds, [
      [17, 22, "right", "large", -1], [50, 11, "bottom", "medium", 0],
      [83, 27, "left", "large", 1], [74, 61, "left", "small", 1],
      [43, 71, "top", "small", 0], [15, 58, "right", "large", -1],
    ]),
    edges: ringEdges(memoryIds, [["WOW-2026-030", "WOW-2026-029"], ["SRM-2026-473", "SRM-2026-474"]]),
    evidenceIds: ["WOW-2026-030", "SRM-2026-473", "WOW-2026-031"],
  }),
];

const nodeShape = (type: string): ConstellationNodeShape => {
  if (/artifact|structure/i.test(type)) return "artifact";
  if (/photograph|portrait/i.test(type)) return "portrait";
  return "document";
};

const placementById = new Map<string, ThemeRecordPlacement>();
const relationsById = new Map<string, Set<string>>();
for (const theme of constellationThemes) {
  for (const placement of theme.layout) {
    if (!placementById.has(placement.id)) placementById.set(placement.id, placement);
  }
  for (const [from, to] of theme.edges) {
    if (!relationsById.has(from)) relationsById.set(from, new Set());
    if (!relationsById.has(to)) relationsById.set(to, new Set());
    relationsById.get(from)?.add(to);
    relationsById.get(to)?.add(from);
  }
}

export const constellationNodes: ConstellationNode[] = archiveRecords
  .filter((record) => placementById.has(record.accession))
  .map((record) => ({
    id: record.accession,
    shape: nodeShape(record.type),
    size: placementById.get(record.accession)?.size ?? "medium",
    summary: record.significance,
    relatedIds: [...(relationsById.get(record.accession) ?? [])],
  }));

export const recordVoiceAttachments: RecordVoiceAttachment[] = [
  {
    recordId: "WOW-2026-010",
    voiceId: "MWCOH.SF.21.42",
    context: "A family memory of a black leather medical bag brings the material world of midwifery into speech.",
  },
  {
    recordId: "SRM-2026-638",
    voiceId: "MWCOH.SF.18.23",
    context: "A recollection of weather, almanacs, and stars expands this manual’s story of learning and preparation.",
  },
  {
    recordId: "SRM-2026-200",
    voiceId: "MWCOH.SF.18.28",
    context: "Mary Joyce Sanders’s account of observing clinical treatment places regulation beside Black professional authority.",
  },
  {
    recordId: "WOW-2026-015",
    voiceId: "MWCOH.SF.24.51",
    context: "Dr. Robert L. Smith’s conviction that health is a human right extends this history of community medical authority.",
  },
];

export const validConstellationIds = new Set(constellationNodes.map((node) => node.id));

export const pointOnOrbit = (index: number, total: number, radiusX = 42, radiusY = radiusX) => {
  const angle = -Math.PI / 2 + (index / total) * Math.PI * 2;
  return {
    x: 50 + Math.cos(angle) * radiusX,
    y: 50 + Math.sin(angle) * radiusY,
  };
};

export const connectionsForIds = (ids: string[]) => {
  if (ids.length < 2) return [];
  return ids.map((id, index) => [id, ids[(index + 1) % ids.length]] as const);
};
