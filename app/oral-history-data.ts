export type OralHistory = {
  id: string;
  name: string;
  initials: string;
  interviewDate: string;
  interviewer: string;
  excerpt: string;
  audioUrl: string;
  duration: string;
  editNote: string;
  sourceWindows: string;
  sourceUrl: string;
  viewerUrl: string;
  transcriptUrl: string;
};

export const featuredOralHistories: OralHistory[] = [
  {
    id: "MWCOH.SF.21.42",
    name: "Bessie Lee Gardner & John Matthews, Jr.",
    initials: "BG",
    interviewDate: "July 30, 2021",
    interviewer: "Dr. Janice K. Neal Vincent",
    excerpt: "They remember Bertha Henderson Matthews’s black leather medical bag—carried with the authority of her practice, and later lost to the family’s knowledge.",
    audioUrl: "/audio/black-medical-bag.mp3",
    duration: "0:35",
    editNote: "Continuous edited excerpt",
    sourceWindows: "16:56.3–17:31.3",
    sourceUrl: "https://grannymidwives.org/items/show/45",
    viewerUrl: "https://ohms.grannymidwives.org/viewer.php?cachefile=MWCOH.SF.21.42.xml",
    transcriptUrl: "https://grannymidwives.org/files/original/200d7b05645b184c108ec2a1d23bc731.txt",
  },
  {
    id: "MWCOH.SF.18.23",
    name: "Glorya Robins",
    initials: "GR",
    interviewDate: "Date not listed",
    interviewer: "Mattie T. Stevens",
    excerpt: "She describes midwives following weather, almanacs, and stars so they could anticipate a birth and be ready in every kind of situation.",
    audioUrl: "/audio/studied-the-stars.mp3",
    duration: "0:42",
    editNote: "Edited montage · two passages",
    sourceWindows: "09:05.5–09:30.0 · 09:33.0–09:50.5",
    sourceUrl: "https://grannymidwives.org/items/show/40",
    viewerUrl: "https://ohms.grannymidwives.org/viewer.php?cachefile=MWCOH.SF.18.23.xml",
    transcriptUrl: "https://grannymidwives.org/files/original/1d2ccc428e6e040e754d1c65bc9cb860.txt",
  },
  {
    id: "MWCOH.SF.18.28",
    name: "Mary Joyce Sanders",
    initials: "MS",
    interviewDate: "February 27, 2018",
    interviewer: "Mattie T. Stevens",
    excerpt: "Sanders asserts her authority and explains her charge: to observe whether a clinic treated Black and white babies differently.",
    audioUrl: "/audio/i-was-there-to-observe.mp3",
    duration: "0:43",
    editNote: "Edited montage · two passages",
    sourceWindows: "12:53.6–13:15.7 · 13:26.0–13:46.8",
    sourceUrl: "https://grannymidwives.org/items/show/30",
    viewerUrl: "https://ohms.grannymidwives.org/viewer.php?cachefile=MWCOH.SF.18.28.xml",
    transcriptUrl: "https://grannymidwives.org/files/original/cc389a0d917722dbf7380872cde66b6e.txt",
  },
  {
    id: "MWCOH.SF.24.51",
    name: "Dr. Robert L. Smith",
    initials: "RS",
    interviewDate: "2024",
    interviewer: "Alissa Rae Funderburk",
    excerpt: "Dr. Smith recalls harassment for providing care and his conviction that health is a human right.",
    audioUrl: "/audio/health-is-a-human-right.mp3",
    duration: "0:48",
    editNote: "Continuous edited excerpt",
    sourceWindows: "03:16–04:04 in supplied edit",
    sourceUrl: "https://grannymidwives.org/items/show/52",
    viewerUrl: "https://ohms.grannymidwives.org/viewer.php?cachefile=MWCOH.SF.24.51.xml",
    transcriptUrl: "https://grannymidwives.org/files/original/32961ac2ff6cc88e456608985d63ca09.txt",
  },
];
