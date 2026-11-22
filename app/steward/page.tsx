import type { Metadata } from "next";
import { StewardConsole } from "./steward-console";

export const metadata: Metadata = { title: "Steward Review | Wombs of Wisdom", robots: { index: false, follow: false } };
export default function StewardPage() { return <main className="steward-page"><StewardConsole /></main>; }
