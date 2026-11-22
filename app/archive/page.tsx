import type { Metadata } from "next";
import { ArchiveBrowser } from "./archive-browser";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

export const metadata: Metadata = { title: "Archive | Wombs of Wisdom" };

export default function ArchivePage() {
  return <main className="interior-page collection-page archive-route"><SiteHeader /><section className="archive-drawer archive-page" id="main-content" tabIndex={-1} aria-labelledby="archive-title"><header><div><p className="eyebrow">Smith Robertson Museum + Cultural Center</p><h1 id="archive-title">Explore the inaugural archive</h1><p className="drawer-intro">Objects, documents, photographs, and evidence gathered around the Scott Ford Houses and Mississippi midwifery.</p></div></header><ArchiveBrowser /><a className="database-link" href="/database/">Meet the midwives of Mississippi <span aria-hidden="true">→</span></a></section><SiteFooter /></main>;
}
