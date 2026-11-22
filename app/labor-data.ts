export const laborTerms = {
  washing: { label: "Washing", phrase: "water carried, cloth worked, and linens made ready again" },
  gardening: { label: "Gardening", phrase: "soil tended and food and medicine grown over time" },
  repairing: { label: "Repairing", phrase: "worn structures and tools kept useful through skilled attention" },
  traveling: { label: "Traveling", phrase: "distance crossed in darkness, weather, and uncertainty" },
  preparing: { label: "Preparing", phrase: "rooms, hands, supplies, and households made ready for birth" },
  attending: { label: "Attending", phrase: "sustained presence before, during, and after birth" },
  documenting: { label: "Documenting", phrase: "names, births, permissions, and policy committed to record" },
  teaching: { label: "Teaching", phrase: "knowledge demonstrated, practiced, revised, and passed on" },
  preserving: { label: "Preserving", phrase: "material and memory stewarded against loss" },
} as const;

export type LaborTerm = keyof typeof laborTerms;

export const laborByRecordId: Record<string, LaborTerm[]> = {
  "SRM-2026-123": ["attending", "preserving"], "SRM-2026-132": ["washing", "gardening", "preserving"],
  "SRM-2026-199": ["preparing", "repairing", "attending"], "SRM-2026-200": ["attending", "documenting"],
  "SRM-2026-201": ["attending", "documenting"], "SRM-2026-202": ["attending", "documenting"],
  "SRM-2026-236": ["traveling", "attending"], "SRM-2026-239": ["traveling", "attending"],
  "SRM-2026-473": ["documenting", "preserving"], "SRM-2026-474": ["documenting", "preserving"],
  "SRM-2026-638": ["traveling", "teaching", "documenting"],
  "WOW-2026-001": ["traveling", "preserving"], "WOW-2026-002": ["documenting", "preserving"],
  "WOW-2026-003": ["washing", "gardening", "attending", "preserving"], "WOW-2026-004": ["traveling", "attending"],
  "WOW-2026-005": ["washing", "repairing", "preserving"], "WOW-2026-006": ["gardening", "preserving"],
  "WOW-2026-007": ["repairing", "preserving"], "WOW-2026-008": ["preparing", "attending"],
  "WOW-2026-009": ["preparing", "repairing"], "WOW-2026-010": ["traveling", "preparing", "attending"],
  "WOW-2026-011": ["repairing", "preparing"], "WOW-2026-012": ["washing", "gardening", "traveling", "attending"],
  "WOW-2026-013": ["traveling", "repairing"], "WOW-2026-014": ["attending", "teaching"],
  "WOW-2026-015": ["preparing", "attending", "documenting"], "WOW-2026-016": ["teaching", "attending", "documenting"],
  "WOW-2026-017": ["teaching", "attending"], "WOW-2026-018": ["teaching", "documenting"],
  "WOW-2026-019": ["attending", "documenting"], "WOW-2026-020": ["documenting", "teaching"],
  "WOW-2026-021": ["teaching", "documenting"], "WOW-2026-022": ["preparing", "teaching"],
  "WOW-2026-023": ["teaching", "documenting"], "WOW-2026-024": ["teaching", "attending"],
  "WOW-2026-025": ["traveling", "teaching", "attending"], "WOW-2026-026": ["documenting", "preserving"],
  "WOW-2026-027": ["documenting", "preserving"], "WOW-2026-028": ["documenting", "preserving"],
  "WOW-2026-029": ["documenting", "preserving"], "WOW-2026-030": ["repairing", "documenting", "preserving"],
  "WOW-2026-031": ["teaching", "preserving"], "WOW-2026-032": ["gardening", "repairing", "preserving"],
};
