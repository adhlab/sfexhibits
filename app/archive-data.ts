import { laborByRecordId, type LaborTerm } from "./labor-data";

export type ArchiveRecord = {
  accession: string;
  title: string;
  shortTitle: string;
  type: string;
  period: string;
  people: string;
  collection: string;
  description: string;
  significance: string;
  image: string;
  publicCaption: string;
  alt: string;
  credit: string;
  source: string;
  rights: string;
  review: string;
  labor: LaborTerm[];
};

type ArchiveRecordInput = Omit<ArchiveRecord, "publicCaption" | "alt" | "credit" | "source" | "labor"> &
  Partial<Pick<ArchiveRecord, "publicCaption" | "alt" | "credit" | "source">>;

const previewRecord = (
  record: Omit<ArchiveRecordInput, "rights" | "review"> & Partial<Pick<ArchiveRecordInput, "rights" | "review">>,
): ArchiveRecordInput => ({
  rights: "Authorized for the current public preview from the supplied Wombs of Wisdom project publication",
  review: "Source and rights notes remain attached to each public record.",
  ...record,
});

const archiveRecordInputs: ArchiveRecordInput[] = [
  {
    accession: "SRM-2026-123",
    title: "Portrait clipping of Virginia Scott (Scott Ford Houses)",
    shortTitle: "Virginia Scott",
    type: "Archive",
    period: "20th century",
    people: "Virginia Scott",
    collection: "Scott Ford Houses Collection",
    description: "Printed halftone portrait clipping showing Virginia Scott in a fur stole.",
    significance: "Supports biographical research, community memory, and the documentation of residents connected to the Scott Ford Houses.",
    image: "/images/archive/coll099.jpg",
    rights: "Rights status unknown",
    review: "Identification and display rights require curatorial confirmation",
  },
  {
    accession: "SRM-2026-132",
    title: "Portrait photograph of Mary Scott (Scott Ford Houses)",
    shortTitle: "Mary Scott",
    type: "Photograph",
    period: "20th century",
    people: "Mary Scott",
    collection: "Scott Ford Houses Collection",
    description: "Portrait photograph of Mary Scott in a framed studio-style image.",
    significance: "Adds an identified portrait connected to the Scott Ford Houses and helps document community residents through the museum's photograph holdings.",
    image: "/images/archive/coll108.jpg",
    rights: "Rights status unknown",
    review: "Date, biography, and display rights require curatorial confirmation",
  },
  {
    accession: "SRM-2026-199",
    title: "Midwife obstetrical scissors or angled birth tool",
    shortTitle: "A tool of care",
    type: "Artifact",
    period: "20th century",
    people: "",
    collection: "Scott Ford Houses Collection",
    description: "Photograph of a metal angled cutting tool associated with childbirth or midwife practice.",
    significance: "Supports interpretation of maternal care and domestic health history connected to the Scott Ford story path.",
    image: "/images/archive/coll163.jpg",
    rights: "Rights status unknown",
    review: "Object identification requires curatorial confirmation",
  },
  {
    accession: "SRM-2026-200",
    title: "Mississippi State Board of Health midwife permit for T. J. Handy",
    shortTitle: "T. J. Handy's permit",
    type: "Archive",
    period: "1973–1974",
    people: "T. J. Handy",
    collection: "Scott Ford Houses Collection",
    description: "Mississippi State Board of Health midwife permit issued to T. J. Handy of Hazlehurst in Copiah County for 1973–1974.",
    significance: "Documents licensed midwife practice and maternal care history relevant to the Scott Ford story path.",
    image: "/images/archive/coll164.jpg",
    rights: "Rights status unknown",
    review: "Permit transcription and display rights require curatorial confirmation",
  },
  {
    accession: "SRM-2026-201",
    title: "Mississippi birth certificate for Laverne Brown",
    shortTitle: "Laverne Brown",
    type: "Archive",
    period: "1927",
    people: "Laverne Brown; Annie L. Brown",
    collection: "Scott Ford Houses Collection",
    description: "Certified copy of a Mississippi birth certificate for Laverne Brown filed in 1927 and signed in the attending physician or midwife section.",
    significance: "Documents childbirth registration and maternal care history connected to the Scott Ford midwife-related materials.",
    image: "/images/archive/coll165.jpg",
    rights: "Rights status unknown",
    review: "Personal information and display rights require curatorial confirmation",
  },
  {
    accession: "SRM-2026-202",
    title: "Standard certificate of birth for Bobbie May Jefferson",
    shortTitle: "Bobbie May Jefferson",
    type: "Archive",
    period: "1934",
    people: "Bobbie May Jefferson; Josephine Jefferson",
    collection: "Scott Ford Houses Collection",
    description: "Mississippi standard certificate of birth for Bobbie May Jefferson with attending physician or midwife certification.",
    significance: "Documents childbirth registration and family history within the Scott Ford midwife-related record group.",
    image: "/images/archive/coll166.jpg",
    rights: "Rights status unknown",
    review: "Personal information and display rights require curatorial confirmation",
  },
  {
    accession: "SRM-2026-236",
    title: "African American midwife walking to visit a client near Siloam, Georgia",
    shortTitle: "The journey",
    type: "Photograph",
    period: "1941",
    people: "Unidentified midwife",
    collection: "Smith Robertson Photograph Collection",
    description: "An African American midwife walks along a dirt road carrying her equipment and kit to visit a client near Siloam, Georgia.",
    significance: "Provides comparative context for Black midwife practice, mobility, and maternal care work in the Jim Crow South.",
    image: "/images/archive/coll200.jpg",
    rights: "Reference image; source attribution accompanies the record.",
    review: "Credit line, source record, and reuse permission require confirmation",
  },
  {
    accession: "SRM-2026-239",
    title: "Aunt Sally, midwife of Gee’s Bend",
    shortTitle: "Aunt Sally",
    type: "Photograph",
    period: "circa 1939",
    people: "Aunt Sally",
    collection: "Smith Robertson Photograph Collection",
    description: "Reference photograph of Aunt Sally, an elderly midwife described as the only doctor or nurse ever heard of in Gee’s Bend.",
    significance: "Provides comparative context for Black midwife practice and community maternal care in the rural South.",
    image: "/images/archive/coll203.jpg",
    rights: "Reference image; source attribution accompanies the record.",
    review: "Credit line, source record, and reuse permission require confirmation",
  },
  {
    accession: "SRM-2026-473",
    title: "Scott Ford Houses architectural elevation for 136 East Cohea Street",
    shortTitle: "136 East Cohea",
    type: "Architectural drawing",
    period: "20th century",
    people: "",
    collection: "Scott Ford Houses Collection",
    description: "Architectural elevation sheet showing four views of the Scott Ford Houses residence at 136 East Cohea Street.",
    significance: "Documents the built environment associated with the Scott Ford Houses and domestic history on Farish Street.",
    image: "/images/archive/coll437.jpg",
    rights: "Rights status unknown",
    review: "Provenance and display rights require curatorial confirmation",
  },
  {
    accession: "SRM-2026-474",
    title: "Scott Ford Houses architectural elevation for 138 East Cohea Street",
    shortTitle: "138 East Cohea",
    type: "Architectural drawing",
    period: "20th century",
    people: "",
    collection: "Scott Ford Houses Collection",
    description: "Architectural elevation sheet showing four views of the Scott Ford Houses residence at 138 East Cohea Street.",
    significance: "Pairs with the 136 East Cohea Street sheet to document the Scott Ford Houses site and surrounding domestic landscape.",
    image: "/images/archive/coll438.jpg",
    rights: "Rights status unknown",
    review: "Provenance and display rights require curatorial confirmation",
  },
  {
    accession: "SRM-2026-638",
    title: "Manual for Midwives page titled “Traveling to the Midwife Meeting”",
    shortTitle: "Traveling to the meeting",
    type: "Archive",
    period: "20th century",
    people: "Midwives; public health nurses",
    collection: "Dr. S. D. Redmond Collection",
    description: "Page from a Manual for Midwives describing the aims of the manual and showing an image captioned “Traveling to the Midwife Meeting.”",
    significance: "Directly supports interpretation of Black maternal care, public health education, and midwifery practice in Mississippi.",
    image: "/images/archive/coll602.jpg",
    rights: "Rights reserved; contact Smith Robertson Museum",
    review: "Provenance and display authorization require curatorial confirmation",
  },
  previewRecord({
    accession: "WOW-2026-001", title: "Farish Street in Jackson", shortTitle: "Farish Street", type: "Photograph", period: "1947", people: "Jackson residents", collection: "Wombs of Wisdom project archive",
    description: "A street view of Farish Street, the center of Black commercial, institutional, and neighborhood life in Jackson.",
    significance: "Places the Scott Ford Houses within the Black social world that supported work, worship, education, enterprise, and mutual aid.",
    image: "/images/interpretive/farish-street.webp", publicCaption: "Farish Street made visible the institutions and everyday relationships through which Black Jackson sustained itself under Jim Crow.", alt: "Historic street scene on Farish Street with pedestrians, cars, and storefronts", credit: "Charles C. Mosley, Farish Street, 1947", source: "Wombs of Wisdom project publication, page 6",
  }),
  previewRecord({
    accession: "WOW-2026-002", title: "Reciprocal East Cohea Street property transfers", shortTitle: "The land notice", type: "Newspaper record", period: "July 30, 1891", people: "Mary G. Scott; Virginia L. Ford", collection: "Wombs of Wisdom project archive",
    description: "A newspaper notice recording reciprocal ten-dollar transfers that divided a portion of Lot 3 between Mary G. Scott and Virginia L. Ford.",
    significance: "Documents two Black women acting within Jackson's legal property system only a generation after emancipation.",
    image: "/images/interpretive/land-transfer-1891.webp", publicCaption: "The brief notice records legal ownership; the houses and family history reveal what that ground made possible.", alt: "Narrow 1891 newspaper column listing real-estate transfers between Mary Scott and Virginia Ford", credit: "The Clarion-Ledger, July 30, 1891", source: "Wombs of Wisdom project publication, page 8",
  }),
  previewRecord({
    accession: "WOW-2026-003", title: "The Scott Ford Houses at 136 and 138 East Cohea Street", shortTitle: "The two houses", type: "Photograph", period: "Current preservation period", people: "Scott-Ford family", collection: "Scott Ford Houses, Inc.",
    description: "The Mary Green Scott House and Lula Ford House standing together within Jackson's Farish Street historic landscape.",
    significance: "The paired houses preserve related histories of landownership, household work, kinship, midwifery, and stewardship.",
    image: "/images/site/scott-ford-houses.jpg", publicCaption: "Two neighboring homes anchor a much larger history of Black women's labor and care.", alt: "The two gray Scott Ford Houses with front porches and a shared drive", credit: "Scott Ford Houses, Inc.", source: "Wombs of Wisdom project publication, pages 5 and 9", review: "Authorized Scott Ford Houses project image",
  }),
  previewRecord({
    accession: "WOW-2026-004", title: "Path between the Scott Ford Houses", shortTitle: "The shared path", type: "Photograph", period: "Current preservation period", people: "Scott-Ford family", collection: "Scott Ford Houses, Inc.",
    description: "A narrow path links the two houses and the working spaces behind them.", significance: "Makes family proximity and the circulation of work, food, news, and care visible in the landscape.",
    image: "/images/interpretive/path-between-houses.webp", publicCaption: "The historical unit is not a single building but a connected family landscape.", alt: "Leaf-covered path running between two wood-frame houses", credit: "Scott Ford Houses, Inc.", source: "Wombs of Wisdom project publication, page 5", review: "Authorized Scott Ford Houses project image",
  }),
  previewRecord({
    accession: "WOW-2026-005", title: "Washhouse associated with 138 East Cohea Street", shortTitle: "The washhouse", type: "Historic structure", period: "circa 1920", people: "Mary Green Scott; Scott-Ford family", collection: "Scott Ford Houses, Inc.",
    description: "A surviving outbuilding associated with the laundry work that supported the family economy.", significance: "Preserves rare architectural evidence of Black women's paid domestic labor and economic independence.",
    image: "/images/interpretive/washhouse.webp", publicCaption: "Laundry required water, fuel, tools, strength, and specialized knowledge; the washhouse made that enterprise part of the site.", alt: "Small weathered washhouse standing behind the Scott Ford Houses", credit: "Scott Ford Houses, Inc.", source: "Wombs of Wisdom project publication, page 10", review: "Authorized Scott Ford Houses project image",
  }),
  previewRecord({
    accession: "WOW-2026-006", title: "Chicken house associated with 138 East Cohea Street", shortTitle: "The chicken house", type: "Historic structure", period: "circa 1920", people: "Scott-Ford family", collection: "Scott Ford Houses, Inc.",
    description: "A small surviving structure that supported poultry raising and food production.", significance: "Extends the monument beyond birth work to the household economy that made family and community care possible.",
    image: "/images/interpretive/chicken-house.webp", publicCaption: "Food production, laundry, transportation, and caregiving formed one connected working landscape.", alt: "Small green chicken house in a wooded yard", credit: "Scott Ford Houses, Inc.", source: "Wombs of Wisdom project publication, page 12", review: "Authorized Scott Ford Houses project image",
  }),
  previewRecord({
    accession: "WOW-2026-007", title: "Historic exterior of the Lula Ford House", shortTitle: "Lula Ford House", type: "Photograph", period: "Date unknown", people: "Virginia Scott Ford; John Ford; Lula Ford", collection: "Scott Ford Houses, Inc.",
    description: "Historic view of the screened porch and façade at 138 East Cohea Street.", significance: "Documents a family home adapted across generations and associated with Virginia Scott Ford's practice.",
    image: "/images/interpretive/lula-ford-house-historic.webp", publicCaption: "The house was an inhabited place shaped by kinship, work, repeated use, and changing needs.", alt: "Historic black-and-white exterior of the Lula Ford House", credit: "Scott Ford Houses, Inc.; photographer unknown", source: "Wombs of Wisdom project publication, pages 12 and 32",
  }),
  previewRecord({
    accession: "WOW-2026-008", title: "Interpretive domestic birth-room display", shortTitle: "The prepared room", type: "Interpretive photograph", period: "Contemporary display", people: "Midwife figure", collection: "Scott Ford Houses project materials",
    description: "A museum display showing a bed, midwife figure, bag, and domestic room prepared to evoke home birth.", significance: "Helps visitors imagine the collective labor of preparing a room for delivery and postpartum recovery.",
    image: "/images/interpretive/model-birth-room.webp", publicCaption: "This is an interpretive display, not a documentary photograph of a specific birth at the Scott Ford Houses.", alt: "Interpretive domestic room with a bed, a standing midwife figure, and a medical bag", credit: "Scott Ford Houses project materials", source: "Wombs of Wisdom project publication, page 15",
  }),
  previewRecord({
    accession: "WOW-2026-009", title: "Exhibit of midwife supplies", shortTitle: "Supplies for care", type: "Artifact display", period: "20th-century objects", people: "Mississippi midwives", collection: "Smith Robertson Museum and Cultural Center",
    description: "An exhibit grouping a midwife's bag with bottles, dressings, and other materials associated with maternal care.", significance: "Shows that midwifery required organized equipment that had to be cleaned, replenished, carried, and kept ready.",
    image: "/images/interpretive/midwife-supplies-display.webp", publicCaption: "The bag represents preparation and skilled labor, not merely a sentimental relic.", alt: "Museum display containing a midwife bag, bottles, dressings, and medical supplies", credit: "Smith Robertson Museum and Cultural Center", source: "Wombs of Wisdom project publication, pages 16 and 49",
  }),
  previewRecord({
    accession: "WOW-2026-010", title: "Surviving midwife bag", shortTitle: "The midwife's bag", type: "Artifact", period: "20th century", people: "Unidentified practitioner", collection: "Scott Ford Houses project materials",
    description: "A worn black leather medical bag associated with the history of community midwifery.", significance: "Makes visible the portable practice through which care moved from one household to another.",
    image: "/images/interpretive/midwife-bag-exterior.webp", publicCaption: "A working bag joined knowledge to movement: supplies had to remain clean, complete, and ready for calls at any hour.", alt: "Worn black leather midwife bag on a dark background", credit: "Scott Ford Houses project materials", source: "Wombs of Wisdom project publication, page 16",
  }),
  previewRecord({
    accession: "WOW-2026-011", title: "Internal stitching repair in the midwife bag", shortTitle: "A repair inside", type: "Artifact detail", period: "20th century", people: "Unidentified practitioner", collection: "Scott Ford Houses project materials",
    description: "Close view of a hand-stitched repair inside a surviving medical bag.", significance: "Records maintenance, reuse, and the practical effort required to keep essential equipment in service.",
    image: "/images/interpretive/midwife-bag-repair.webp", publicCaption: "Repair is evidence of use: the bag was maintained because the work had to continue.", alt: "Close-up of worn leather and stitching inside a medical bag", credit: "Scott Ford Houses project materials", source: "Wombs of Wisdom project publication, page 16",
  }),
  previewRecord({
    accession: "WOW-2026-012", title: "Scott-Ford family portrait", shortTitle: "The family network", type: "Photograph", period: "Date unknown", people: "Scott-Ford family", collection: "Scott Ford Houses family history",
    description: "Family portrait reproduced in the project history of Virginia Scott Ford and John Ford.", significance: "Prevents the work of care from being reduced to one heroic individual by restoring the family network around it.",
    image: "/images/interpretive/scott-ford-family-portrait.webp", publicCaption: "Transportation, food, laundry, child care, and household organization surrounded every call to attend a birth.", alt: "Historic portrait of two members of the Scott-Ford family", credit: "Scott-Ford family; date and photographer unknown", source: "Wombs of Wisdom project publication, page 17",
  }),
  previewRecord({
    accession: "WOW-2026-013", title: "Oldsmobile associated with the Scott-Ford story", shortTitle: "The Oldsmobile", type: "Artifact image", period: "Early 20th century", people: "John Ford; Virginia Scott Ford", collection: "Smith Robertson Museum digital archive",
    description: "Image of an early automobile associated with family accounts of transporting Virginia Scott Ford to clients.", significance: "Places roads, distance, weather, and supporting labor within the history of community birth work.",
    image: "/images/interpretive/oldsmobile.webp", publicCaption: "A midwife's reach depended upon transportation and the people prepared to carry her through the night.", alt: "Early open-top Oldsmobile automobile", credit: "Smith Robertson Museum and Cultural Center, SRM-2026-198", source: "Wombs of Wisdom project publication, page 17",
  }),
  previewRecord({
    accession: "WOW-2026-014", title: "Mississippi lay midwives at a county courthouse", shortTitle: "Canton midwives", type: "Photograph", period: "1920s", people: "Mississippi lay midwives", collection: "Mississippi public-health archive",
    description: "A large gathering of Mississippi lay midwives photographed in front of the county courthouse in Canton.", significance: "Restores collective scale to a history too often represented through the solitary stereotype of the granny midwife.",
    image: "/images/interpretive/canton-midwives.webp", publicCaption: "These practitioners formed a distributed community health system across Mississippi.", alt: "Large group of Black lay midwives gathered on courthouse steps in Canton, Mississippi", credit: "Repository and photographer not identified in the publication", source: "Wombs of Wisdom project publication, page 20",
  }),
  previewRecord({
    accession: "WOW-2026-015", title: "Women's ward at the Zachary T. Hubert Health Center", shortTitle: "The Hubert ward", type: "Photograph", period: "After 1944", people: "Patients and clinical staff", collection: "Jackson State University history",
    description: "A women's ward in the twenty-four-bed health center that served students and Jackson's Black community during segregation.", significance: "Documents a Black institution responding to exclusion from white hospitals and unequal medical care.",
    image: "/images/interpretive/hubert-health-center.webp", publicCaption: "Home-based midwifery, Black nurses and physicians, clinics, and community institutions formed overlapping responses to medical segregation.", alt: "Historic hospital ward with women in beds and medical staff", credit: "Zachary T. Hubert Health Center; photographer not identified", source: "Wombs of Wisdom project publication, page 21",
  }),
  previewRecord({
    accession: "WOW-2026-016", title: "Portrait of Eliza Farish Pillars", shortTitle: "Eliza Farish Pillars", type: "Photograph", period: "20th century", people: "Eliza Farish Pillars", collection: "Mississippi public-health history",
    description: "Portrait of Mississippi's first Black public-health nurse, appointed in 1926.", significance: "Pillars worked between state public health and community practice, bringing maternal-health instruction into underserved Black communities.",
    image: "/images/interpretive/eliza-farish-pillars.webp", publicCaption: "Pillars's career complicates any simple opposition between community midwives and institutional medicine.", alt: "Black-and-white portrait of Eliza Farish Pillars", credit: "Repository and photographer not identified in the publication", source: "Wombs of Wisdom project publication, page 22",
  }),
  previewRecord({
    accession: "WOW-2026-017", title: "Eliza Farish Pillars addressing Mississippi midwives", shortTitle: "Teaching and exchange", type: "Photograph", period: "circa 1930s", people: "Eliza Farish Pillars; Mississippi midwives", collection: "Mississippi public-health archive",
    description: "Pillars addresses a gathering of Black midwives during a public-health meeting.", significance: "Shows community expertise meeting the procedures and documentation demanded by the state.",
    image: "/images/interpretive/pillars-addressing-midwives.webp", publicCaption: "Training was not a one-way transfer: midwives arrived with knowledge gained through apprenticeship and repeated practice.", alt: "Eliza Farish Pillars speaking to a seated group of Black midwives", credit: "Repository and photographer not identified in the publication", source: "Wombs of Wisdom project publication, page 22",
  }),
  previewRecord({
    accession: "WOW-2026-018", title: "Instruction page from the Manual for Midwives", shortTitle: "The state manual", type: "Public-health document", period: "20th century", people: "Mississippi midwives; public-health nurses", collection: "Mississippi State Board of Health history",
    description: "A manual page combining practical maternity instruction with rules governing lay practice.", significance: "Shows how the state translated community care into standardized procedures and professional limits.",
    image: "/images/interpretive/manual-for-midwives-section.webp", publicCaption: "The manual offered resources while defining the midwife's relationship to physicians and public-health authority.", alt: "Printed page from a Mississippi Manual for Midwives", credit: "Mississippi State Board of Health", source: "Wombs of Wisdom project publication, page 23",
  }),
  previewRecord({
    accession: "WOW-2026-019", title: "Midwife permit issued to Freddie Speed", shortTitle: "Freddie Speed's permit", type: "Permit", period: "1949", people: "Freddie Speed", collection: "Mississippi State Board of Health history",
    description: "Annual permit authorizing Freddie Speed of Bay St. Louis, Hancock County, to practice midwifery.", significance: "Makes one practitioner visible to the state while leaving her training, relationships, journeys, and reputation largely unrecorded.",
    image: "/images/interpretive/freddie-speed-permit.webp", publicCaption: "The permit records authorization, not the full life of a practice.", alt: "Mississippi State Board of Health midwife permit issued to Freddie Speed in 1949", credit: "Collection not identified in the publication", source: "Wombs of Wisdom project publication, page 24",
  }),
  previewRecord({
    accession: "WOW-2026-020", title: "Policies regarding midwife supervision", shortTitle: "Supervision policies", type: "Public-health document", period: "1948", people: "Mississippi midwives; county nurses; health officers", collection: "Mississippi Department of Health records",
    description: "Policies specifying interviews, examinations, observation, training, equipment inspection, and annual approval.", significance: "Reveals supervision's double character: resources and standards were joined to extensive state control over entry and continuation.",
    image: "/images/interpretive/midwife-supervision-policies.webp", publicCaption: "Officials evaluated not only technique but appearance, education, health, home, and whether they believed a community needed another midwife.", alt: "Typed 1948 policy document concerning Mississippi midwife supervision", credit: "Mississippi Department of Health records", source: "Wombs of Wisdom project publication, page 25",
  }),
  previewRecord({
    accession: "WOW-2026-021", title: "Safe Maternity Care outline", shortTitle: "Safe maternity care", type: "Public-health document", period: "20th century", people: "Midwives; mothers; infants", collection: "Mississippi public-health archive",
    description: "An instructional outline summarizing preparation, cleanliness, observation, and medical referral.", significance: "Shows how public-health expectations entered the domestic room where birth occurred.",
    image: "/images/interpretive/safe-maternity-care.webp", publicCaption: "The prepared room was both a practical environment and a place where the state defined what safe care should look like.", alt: "Typed outline titled Safe Maternity Care", credit: "Repository not identified in the publication", source: "Wombs of Wisdom project publication, page 26",
  }),
  previewRecord({
    accession: "WOW-2026-022", title: "Penny Sylvania Skipper's model delivery-room description", shortTitle: "Skipper's model room", type: "Letter", period: "September 20, 1942", people: "Penny Sylvania Skipper", collection: "Mississippi public-health archive",
    description: "A midwife's written description of preparing a demonstration room with linens, basins, water, soap, scissors, dressings, cord ties, and an infant doll.", significance: "Documents a practitioner presenting herself as a knowledgeable midwife and public-health educator.",
    image: "/images/interpretive/penny-skipper-letter.webp", publicCaption: "The model room was classroom, demonstration, and inspection site at once.", alt: "Typed 1942 letter by Penny Sylvania Skipper describing a model delivery room", credit: "Repository not identified in the publication", source: "Wombs of Wisdom project publication, page 27",
  }),
  previewRecord({
    accession: "WOW-2026-023", title: "Archive montage of Mississippi midwife training", shortTitle: "Training photographs", type: "Photograph group", period: "circa 1930s-1950s", people: "Unidentified Mississippi midwives", collection: "Mississippi public-health archive",
    description: "Mounted photographs showing practitioners at meetings, demonstrations, and public-health events.", significance: "Makes training visible while exposing how often institutional photographs preserved events but not women's names.",
    image: "/images/interpretive/midwife-training-montage.webp", publicCaption: "An unidentified woman should not become a generic illustration; her missing name is part of the archival history.", alt: "Mounted archival photographs of Mississippi midwives at training events", credit: "Names, dates, and repository not identified in the publication", source: "Wombs of Wisdom project publication, page 28",
  }),
  previewRecord({
    accession: "WOW-2026-024", title: "Midwife training and demonstration photographs", shortTitle: "Learning together", type: "Photograph group", period: "circa 1930s-1950s", people: "Mississippi midwives; public-health nurses", collection: "Mississippi public-health archive",
    description: "A group of mounted photographs showing instruction and collective participation.", significance: "Challenges the idea that midwifery knowledge was isolated by showing organized gatherings and exchange.",
    image: "/images/interpretive/midwife-training-demonstration.webp", publicCaption: "Meetings brought apprenticeship knowledge, practical demonstration, and public-health requirements into conversation.", alt: "Archival photo board showing midwives participating in instruction and demonstrations", credit: "Names, dates, and repository not identified in the publication", source: "Wombs of Wisdom project publication, page 28",
  }),
  previewRecord({
    accession: "WOW-2026-025", title: "County gathering of Mississippi midwives", shortTitle: "A county gathering", type: "Photograph", period: "circa 1930s-1950s", people: "Unidentified Mississippi midwives", collection: "Mississippi public-health archive",
    description: "A mounted group photograph documenting midwives assembled for a county meeting or public-health event.", significance: "Records the social and institutional networks through which practitioners traveled, learned, and were supervised.",
    image: "/images/interpretive/midwife-county-gathering.webp", publicCaption: "The meeting was part of the midwife's working geography, connecting homes to county and state systems.", alt: "Mounted black-and-white group photograph of Mississippi midwives", credit: "County, names, date, and photographer not identified in the publication", source: "Wombs of Wisdom project publication, page 28",
  }),
  previewRecord({
    accession: "WOW-2026-026", title: "Live births by county table", shortTitle: "Births by county", type: "Statistical record", period: "1973", people: "Mississippi mothers, infants, midwives, and physicians", collection: "Mississippi public-health archive",
    description: "County-level table distinguishing institutional and midwife-attended births.", significance: "Allows the changing geography and contraction of lay-midwife practice to be traced across the state.",
    image: "/images/interpretive/live-births-table.webp", publicCaption: "Statistics show systemic change, but each number also stands for a birth, family, attendant, and place.", alt: "Tall statistical table titled Live Births by County", credit: "Mississippi public-health records", source: "Wombs of Wisdom project publication, page 29",
  }),
  previewRecord({
    accession: "WOW-2026-027", title: "Mississippi midwife districts and county distribution", shortTitle: "The shrinking map", type: "Map", period: "circa 1975", people: "Registered Mississippi lay midwives", collection: "Mississippi public-health archive",
    description: "Administrative map showing midwife districts and county distribution near the end of the state program.", significance: "Makes visible the geographic contraction produced by retirement, institutional delivery, insurance policy, and permit restrictions.",
    image: "/images/interpretive/midwife-district-map.webp", publicCaption: "By 1975 only 259 registered lay midwives remained in Mississippi; by 1982, thirteen remained.", alt: "Black-and-white map of Mississippi counties and midwife districts", credit: "Mississippi public-health records", source: "Wombs of Wisdom project publication, page 29",
  }),
  previewRecord({
    accession: "WOW-2026-028", title: "A Salute to the Retired Midwives", shortTitle: "A complicated tribute", type: "Printed tribute", period: "1956", people: "Retired Mississippi midwives; Fannie Shaw", collection: "Mississippi State Department of Health manual",
    description: "Printed tribute from a state-sponsored culture of midwife retirement.", significance: "Shows women being praised for endurance and service at the moment the system withdrew permission to continue practicing.",
    image: "/images/interpretive/retired-midwives-tribute.webp", publicCaption: "The ceremonies combined recognition with removal: public honor marked the contraction of a profession.", alt: "Cover page titled A Salute to the Retired Midwives", credit: "Fannie Shaw; Mississippi State Department of Health, 1956", source: "Wombs of Wisdom project publication, page 30",
  }),
  previewRecord({
    accession: "WOW-2026-029", title: "Dr. Alferdteen Brown Harrison at History Is Lunch", shortTitle: "History spoken aloud", type: "Photograph", period: "21st century", people: "Dr. Alferdteen Brown Harrison", collection: "Mississippi Department of Archives and History",
    description: "Dr. Harrison speaks at the Mississippi Department of Archives and History's History Is Lunch program.", significance: "Represents the historical and institutional leadership that established the houses as significant sites of Black women's history.",
    image: "/images/interpretive/harrison-history-is-lunch.webp", publicCaption: "Stewardship required making the houses legible to institutions and publics that had long overlooked Black women's places of work.", alt: "Dr. Alferdteen Brown Harrison speaking at a podium during a History Is Lunch program", credit: "Mississippi Department of Archives and History", source: "Wombs of Wisdom project publication, page 33",
  }),
  previewRecord({
    accession: "WOW-2026-030", title: "Dr. Alferdteen Brown Harrison inside a house before restoration", shortTitle: "Harrison in the house", type: "Photograph", period: "Current preservation era", people: "Dr. Alferdteen Brown Harrison", collection: "Scott Ford Houses, Inc.",
    description: "Dr. Harrison stands within a deteriorated historic structure during the preservation campaign.", significance: "Connects scholarly interpretation to the physical, difficult work of keeping an endangered place alive.",
    image: "/images/site/dr-alferdteen-harrison.png", publicCaption: "Harrison understood the houses not merely as old buildings but as places where land, labor, family, and community care could be interpreted together.", alt: "Dr. Alferdteen Brown Harrison standing inside a deteriorated wood-frame house", credit: "Scott Ford Houses, Inc.", source: "Wombs of Wisdom project publication, page 33", review: "Authorized Scott Ford Houses project image",
  }),
  previewRecord({
    accession: "WOW-2026-031", title: "Wombs of Wisdom exhibition at Smith Robertson Museum", shortTitle: "The museum extends the houses", type: "Exhibition photograph", period: "Current project era", people: "Mississippi midwives", collection: "Smith Robertson Museum and Cultural Center",
    description: "Interpretive installation bringing a bed, midwife's bag, artifacts, documents, and testimony into public space.", significance: "Extends the houses while restoration continues and creates a place where visitors can recognize faces, names, objects, and stories.",
    image: "/images/interpretive/smith-robertson-exhibit.webp", publicCaption: "The museum is not only where the project is displayed; it is one of the places where the record continues to be researched.", alt: "Museum installation containing midwife supplies and interpretive materials", credit: "Smith Robertson Museum and Cultural Center", source: "Wombs of Wisdom project publication, page 49",
  }),
  {
    accession: "WOW-2026-032", title: "Oyster-shell concrete garden-bed edge", shortTitle: "The working garden", type: "Material witness · documentary photograph", period: "Current documentation · construction date unknown", people: "Scott-Ford family", collection: "Scott Ford Houses working landscape",
    description: "Oyster shells embedded in concrete form garden-bed edges behind the Scott Ford Houses. The surviving material belongs to a landscape used for food, household work, family life, and care.", significance: "The garden makes domestic labor visible as infrastructure: land, nourishment, reuse, and practical knowledge helped sustain the household from which Virginia Scott Ford carried care into the community.",
    image: "/images/site/oyster-shell-garden-documentary.webp", publicCaption: "The surviving garden beds reveal oyster shells bound into concrete around soil once used for vegetables and herbs—an ordinary material practice preserved here as monumental evidence.", alt: "Back garden behind the Scott Ford Houses with low oyster-shell concrete planting-bed edges, dark soil, fallen leaves, and a small green outbuilding", credit: "Scott Ford Houses project documentation", source: "Shell construction and garden use: site knowledge provided by Scott Ford Houses, Inc. Gardening and food production context: Wombs of Wisdom project publication, pages 5, 6, 10, and 12.", rights: "Provided for the Wombs of Wisdom digital monument public preview", review: "The construction date and maker are unknown; the publication documents gardening but does not itself identify the shell construction",
  },
];

export const archiveRecords: ArchiveRecord[] = archiveRecordInputs.map((record) => ({
  publicCaption: record.description,
  alt: record.title,
  credit: record.collection,
  source: "Smith Robertson Museum and Cultural Center digital archive",
  labor: laborByRecordId[record.accession] ?? ["preserving"],
  ...record,
}));
