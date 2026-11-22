import type { Metadata } from "next";
import { DatabaseBrowser } from "./database-browser";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

export const metadata: Metadata = { title: "Midwives of Mississippi | Wombs of Wisdom" };

export default function DatabasePage() {
  return <main className="interior-page collection-page midwives-page"><SiteHeader /><section className="archive-drawer midwives-drawer archive-page" id="main-content" tabIndex={-1} aria-labelledby="midwives-title"><header><div><p className="eyebrow">Lives carried across Mississippi</p><h1 id="midwives-title">The Midwives</h1><p className="drawer-intro">Each name opens a story of skilled hands, long journeys, apprenticeship, family trust, and care sustained under unequal conditions.</p></div></header><DatabaseBrowser /><div className="source-note"><p>This map is a doorway into remembered lives, not a claim to every route or address. County boundaries come from the U.S. Census Bureau and are stored locally with the monument. Story citations remain beside the people they help us remember.</p><div><a href="https://www.census.gov/geographies/mapping-files/2025/geo/carto-boundary-file.html">County map source <span aria-hidden="true">↗</span></a><a href="https://www.scottfordhouseinc.com/database">Scott Ford Houses roster <span aria-hidden="true">↗</span></a></div></div></section><SiteFooter /></main>;
}
