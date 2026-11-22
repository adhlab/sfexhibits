import type { Metadata } from "next";
/* eslint-disable @next/next/no-img-element -- static export uses curated local archival derivatives */
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { projectLeads, projectTeam } from "../site-content";

export const metadata: Metadata = { title: "The Project | Wombs of Wisdom" };

export default function ProjectPage() {
  return <main className="interior-page light-page project-page"><SiteHeader />
    <section className="project-story interior-project" id="main-content" tabIndex={-1} aria-labelledby="project-title">
      <header className="section-heading"><p className="eyebrow">Wombs of Wisdom · Midwives’ Archives and Equity Project</p><h1 id="project-title">The monument is a process.</h1><p>Led by Scott Ford Houses, Inc. with Monument Lab and the Smith Robertson Museum and Cultural Center, Wombs of Wisdom centers care, memory, and Black women&apos;s knowledge. It joins gatherings, preserved spaces, oral history, digital archives, and a permanent exhibit.</p></header>
      <section className="monument-framework" aria-labelledby="monument-framework-title">
        <div><p className="eyebrow">What becomes monumental</p><h2 id="monument-framework-title">Not a figure on a pedestal, but a landscape of care.</h2></div>
        <div><p><strong>The monument is the labor that held life together.</strong> This work treats ordinary houses, tools, gardens, repeated labor, and testimony as evidence worthy of public memory. The bag is a threshold and vessel for care carried from home to home. The constellation holds people, places, knowledge, and interdependence in relation. The oyster-shell garden bed is a ground of memory: discarded material transformed by labor into a structure that held living soil.</p><p>These forms do not replace the archive or resolve its silences. They create a ceremonial threshold through which underrepresented histories can be encountered with attention, context, and respect. The project does not assign unknown labor to named hands: the surviving shell construction is attributed to present Scott Ford Houses site knowledge until documentary evidence establishes its maker.</p><p>Each record asks what work was required, who made it possible, what survives, and what the archive cannot tell. Repetition, skill, time, physical demand, unequal conditions, and mutual dependence matter more here than generic heroism.</p><a href="https://monumentlab.com/projects/regeneration-2026" target="_blank" rel="noreferrer">A Monument Lab Re:Generation 2026 project · Major support for Re:Generation is provided by the Mellon Foundation ↗</a></div>
      </section>
      <div className="project-pillars">
        <article><img src="/images/site/community-gathering.jpg" alt="Community members gathered on the porch of a Scott Ford House" width="1400" height="950" /><div><small>01 · Gather</small><h3>Community gatherings and story circles</h3><p>Elders, families, birth workers, historians, artists, and students share memories of granny midwives, maternal care, and community health traditions.</p></div></article>
        <article><img src="/images/site/houses-preservation.jpeg" alt="The Scott Ford Houses with painted portraits visible on their boarded windows" width="1400" height="920" /><div><small>02 · Preserve</small><h3>The houses as sites of care</h3><p>Preservation recognizes the homes not simply as structures, but as places where birth, women&apos;s labor, and community health knowledge were sustained.</p></div></article>
        <article><img src="/images/site/stewardship-gathering.jpeg" alt="Scott Ford Houses stewards gathered beside the historic-site stabilization marker" width="1400" height="1000" /><div><small>03 · Interpret</small><h3>A permanent museum exhibit</h3><p>Oral histories, artifacts, and community memory place Black midwives within Mississippi&apos;s African American history and Jackson&apos;s Farish Street story.</p></div></article>
      </div>
      <div className="project-credits"><div><p className="eyebrow">Project leads</p>{projectLeads.map((lead) => <p key={lead}>{lead}</p>)}</div><div><p className="eyebrow">Project team</p>{projectTeam.map((member) => <p key={member}>{member}</p>)}</div><div><p className="eyebrow">Public history in action</p><p>The work treats history as an active resource for education, reflection, healing, health equity, and justice.</p><a href="https://www.scottfordhouseinc.com/wombsofwisdom" target="_blank" rel="noreferrer">Project source page ↗</a></div></div>
    </section><SiteFooter />
  </main>;
}
