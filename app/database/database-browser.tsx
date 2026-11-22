"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { midwives, type MidwifeRecord } from "../midwife-data";
import { MISSISSIPPI_MAP_VIEWBOX, mississippiCountyShapes } from "../mississippi-county-map";

const countiesFor = (midwife: MidwifeRecord) => midwife.county
  .replace(/ Counties$/, " County")
  .split("/")
  .map((county) => county.trim().replace(/ County$/, ""));

const slugFor = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const mappedCountyNames = new Set(mississippiCountyShapes.map((county) => county.name));

function sourceKindFor(midwife: MidwifeRecord) {
  const source = `${midwife.sourceTitle ?? ""} ${midwife.sourceLocator ?? ""}`.toLowerCase();
  if (/clarion|herald|press|ledger|newspaper|enterprise|tocsin/.test(source)) return "newspaper reporting";
  if (/oral|interview|family|remember/.test(source)) return "oral history and community memory";
  if (/permit|board of health|report|certificate|state record/.test(source)) return "public-health records";
  if (/book|history|folklife|scholar/.test(source)) return "published history";
  return "a surviving public record";
}

function Portrait({ midwife }: { midwife: MidwifeRecord }) {
  if (!midwife.imageSrc) return null;
  return <span className="midwife-portrait-frame">
    <Image
      src={midwife.imageSrc}
      alt={midwife.imageAlt ?? ""}
      fill
      sizes="(max-width: 700px) 92vw, 48vw"
      unoptimized
      style={{
        objectPosition: midwife.imagePosition,
        transform: midwife.imageScale ? `scale(${midwife.imageScale})` : undefined,
        transformOrigin: midwife.imageOrigin,
      }}
    />
  </span>;
}

export function DatabaseBrowser() {
  const [query, setQuery] = useState("");
  const [era, setEra] = useState<"All" | "Historical" | "Contemporary">("All");
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);
  const [hoveredCounty, setHoveredCounty] = useState<string | null>(null);
  const [openStory, setOpenStory] = useState<string | null>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const storyTriggerRef = useRef<HTMLButtonElement | null>(null);

  const searchFiltered = useMemo(() => {
    const value = query.trim().toLowerCase();
    return midwives.filter((midwife) =>
      (era === "All" || midwife.era === era)
      && (!value || [midwife.name, midwife.county, midwife.community, midwife.practice, midwife.contribution]
        .join(" ")
        .toLowerCase()
        .includes(value)),
    );
  }, [era, query]);

  const countyGroups = useMemo(() => {
    const groups = new Map<string, MidwifeRecord[]>();
    for (const midwife of searchFiltered) {
      for (const county of countiesFor(midwife)) {
        if (mappedCountyNames.has(county)) groups.set(county, [...(groups.get(county) ?? []), midwife]);
      }
    }
    return groups;
  }, [searchFiltered]);

  const filtered = useMemo(() => selectedCounty
    ? searchFiltered.filter((midwife) => countiesFor(midwife).includes(selectedCounty))
    : searchFiltered,
  [searchFiltered, selectedCounty]);

  const activeCounty = selectedCounty ?? hoveredCounty;
  const activeCountyMidwives = activeCounty ? countyGroups.get(activeCounty) ?? [] : [];
  const expandedStory = midwives.find((midwife) => midwife.name === openStory) ?? null;
  const representedCounties = new Set(filtered.flatMap(countiesFor));
  const countyNames = [...countyGroups.keys()].sort();

  const replaceUrlState = (county: string | null, person: string | null) => {
    const params = new URLSearchParams(window.location.search);
    if (county) params.set("county", slugFor(county)); else params.delete("county");
    if (person) params.set("person", slugFor(person)); else params.delete("person");
    const search = params.toString();
    window.history.replaceState({}, "", `${window.location.pathname}${search ? `?${search}` : ""}`);
  };

  useEffect(() => {
    const restoreState = () => {
      const params = new URLSearchParams(window.location.search);
      const county = mississippiCountyShapes.find((item) => slugFor(item.name) === params.get("county"))?.name ?? null;
      const person = midwives.find((item) => slugFor(item.name) === params.get("person"))?.name ?? null;
      setSelectedCounty(county);
      setOpenStory(person);
    };
    restoreState();
    window.addEventListener("popstate", restoreState);
    return () => window.removeEventListener("popstate", restoreState);
  }, []);

  const chooseCounty = (county: string) => {
    if (selectedCounty === county) {
      setSelectedCounty(null);
      setOpenStory(null);
      replaceUrlState(null, null);
      return;
    }
    setSelectedCounty(county);
    setOpenStory(null);
    replaceUrlState(county, null);
  };

  const clearCounty = () => {
    setSelectedCounty(null);
    setOpenStory(null);
    replaceUrlState(null, null);
  };

  const enterStory = (midwife: MidwifeRecord, trigger?: HTMLButtonElement) => {
    if (trigger) storyTriggerRef.current = trigger;
    setOpenStory(midwife.name);
    replaceUrlState(selectedCounty, midwife.name);
  };

  const closeStory = () => {
    setOpenStory(null);
    replaceUrlState(selectedCounty, null);
  };

  useEffect(() => {
    if (!expandedStory) return;
    document.body.style.overflow = "hidden";
    const dialog = dialogRef.current;
    const focusable = dialog ? Array.from(dialog.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])')) : [];
    window.setTimeout(() => focusable[0]?.focus(), 0);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeStory();
        return;
      }
      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      storyTriggerRef.current?.focus();
    };
  // closeStory intentionally follows the current county state without changing dialog lifecycle.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expandedStory]);

  const moveStory = (direction: -1 | 1) => {
    if (!expandedStory || !filtered.length) return;
    const index = filtered.findIndex((midwife) => midwife.name === expandedStory.name);
    setOpenStory(filtered[(index + direction + filtered.length) % filtered.length].name);
    replaceUrlState(selectedCounty, filtered[(index + direction + filtered.length) % filtered.length].name);
  };

  return <>
    <section className="midwife-map-shell" aria-labelledby="midwife-map-title">
      <div className="midwife-map-frame">
        <div className="midwife-map-heading">
          <div><p className="eyebrow">A statewide field of care</p><h2 id="midwife-map-title">Across Mississippi</h2></div>
          <p>Choose an illuminated county. The map will open a local chapter and introduce the women remembered there.</p>
        </div>

        <svg className="midwife-map" viewBox={MISSISSIPPI_MAP_VIEWBOX} role="group" aria-labelledby="midwife-map-svg-title midwife-map-svg-description">
          <title id="midwife-map-svg-title">Mississippi counties represented in these midwives’ stories</title>
          <desc id="midwife-map-svg-description">Counties connected to a public story are illuminated. Selecting one opens an accessible county chapter and filters the story directory.</desc>
          <g className="midwife-county-shapes">
            {mississippiCountyShapes.map((county) => {
              const count = countyGroups.get(county.name)?.length ?? 0;
              const isSelected = selectedCounty === county.name;
              const isHovered = hoveredCounty === county.name;
              return <path key={county.fips} d={county.path} className={`midwife-county${count ? " has-records" : ""}${isSelected ? " is-selected" : ""}${isHovered ? " is-hovered" : ""}${selectedCounty && !isSelected ? " is-muted" : ""}`} role={count ? "button" : undefined} tabIndex={count ? 0 : undefined} aria-label={count ? `${county.name} County, ${count} ${count === 1 ? "story" : "stories"}. ${isSelected ? "Close county chapter" : "Open county chapter"}.` : undefined} aria-pressed={count ? isSelected : undefined} aria-hidden={count ? undefined : true} onClick={count ? () => chooseCounty(county.name) : undefined} onFocus={count ? () => setHoveredCounty(county.name) : undefined} onBlur={count ? () => setHoveredCounty(null) : undefined} onMouseEnter={count ? () => setHoveredCounty(county.name) : undefined} onMouseLeave={count ? () => setHoveredCounty(null) : undefined} onKeyDown={count ? (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); chooseCounty(county.name); } } : undefined} />;
            })}
          </g>
          <g className="midwife-map-markers" aria-hidden="true">
            {mississippiCountyShapes.map((county) => {
              const count = countyGroups.get(county.name)?.length ?? 0;
              if (!count) return null;
              return <g key={county.fips} className={selectedCounty && selectedCounty !== county.name ? "is-muted" : ""} transform={`translate(${county.centerX} ${county.centerY})`}><circle r={selectedCounty === county.name ? 18 : 14} /><text y="1">{count}</text></g>;
            })}
          </g>
        </svg>

        <p className="midwife-map-caption">County placement identifies a documented county or service area, never a private home address.</p>
        <details className="midwife-county-index">
          <summary>Browse represented counties as a list</summary>
          <div>{countyNames.map((county) => <button key={county} type="button" aria-pressed={selectedCounty === county} onClick={() => chooseCounty(county)}>{county} <span>{countyGroups.get(county)?.length}</span></button>)}</div>
        </details>
      </div>

      <aside className={`midwife-map-reading${selectedCounty ? " has-selection" : ""}`} aria-live="polite">
        {activeCounty && activeCountyMidwives.length ? <>
          <p className="eyebrow">{selectedCounty ? "A county chapter" : "County in view"}</p>
          <h3>{activeCounty} County</h3>
          {selectedCounty ? <>
            <p className="county-chapter-intro">The public record currently connects {activeCountyMidwives.length === 1 ? "one woman" : `${activeCountyMidwives.length} women`} to this place. {activeCountyMidwives.length === 1 ? "Her story survives" : "Their stories survive"} through {Array.from(new Set(activeCountyMidwives.map(sourceKindFor))).slice(0, 2).join(" and ")}.</p>
            <nav aria-label={`Midwives remembered in ${activeCounty} County`}>
              <ol className="county-name-list">{activeCountyMidwives.map((midwife) => <li key={midwife.name}><button type="button" onClick={(event) => enterStory(midwife, event.currentTarget)}><strong>{midwife.name}</strong><span>{midwife.community} · {midwife.period ?? midwife.practice}</span><i aria-hidden="true">Open record →</i></button></li>)}</ol>
            </nav>
            <button className="county-clear" type="button" onClick={clearCounty}>Return to all counties</button>
          </> : <p>{activeCountyMidwives.length} {activeCountyMidwives.length === 1 ? "story is" : "stories are"} held here. Select the county to open its chapter.</p>}
        </> : <>
          <p className="eyebrow">How to read this map</p>
          <h3>Every name belongs to a place.</h3>
          <p>These marks lead to stories of care documented across Mississippi. They do not claim an exact route, residence, or place of birth.</p>
          <p>Some women crossed county lines. Others are remembered through one letter, permit, photograph, or family account.</p>
        </>}
        <div className="midwife-map-legend" role="group" aria-label="Map legend"><span><i className="has-records" aria-hidden="true" /> County represented</span><span><i aria-hidden="true" /> No public record yet</span></div>
      </aside>
    </section>

    <section className="midwife-browse" aria-labelledby="midwife-browse-title">
      <div className="midwife-browse-heading"><p className="eyebrow">Find a midwife</p><h2 id="midwife-browse-title">Enter a remembered life.</h2><p>Search by name, place, or work. Each doorway opens a focused account rather than reducing a life to a row in a registry.</p></div>
      <div className="midwife-toolbar">
        <label className="archive-search"><span>Search names, places, and remembered work</span><input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Try “Hinds,” “Jackson,” or “apprenticeship”…" /></label>
        <div className="era-filter" role="group" aria-label="Filter midwives by era">{(["All", "Historical", "Contemporary"] as const).map((option) => <button key={option} className={era === option ? "is-active" : ""} type="button" onClick={() => setEra(option)}>{option}</button>)}</div>
      </div>

      <div className="midwife-stats" aria-live="polite"><p><strong>{filtered.length}</strong> {filtered.length === 1 ? "life" : "lives"} held here</p><p><strong>{representedCounties.size}</strong> {representedCounties.size === 1 ? "place" : "places"} remembered</p>{selectedCounty && <button type="button" onClick={clearCounty}>Clear {selectedCounty} County</button>}</div>

      <div className="midwife-story-directory" aria-label="Stories of Mississippi midwives">
        {filtered.map((midwife, index) => <article key={midwife.name} className="midwife-story-entry">
          <span className="midwife-entry-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <p className="midwife-entry-meta">{midwife.era} · {midwife.practice}</p>
          <button type="button" className="midwife-entry-name" onClick={(event) => enterStory(midwife, event.currentTarget)} aria-label={`Open the record for ${midwife.name}`}><span>{midwife.name}</span><i aria-hidden="true">↗</i></button>
          <p className="midwife-entry-place">{midwife.community} · {midwife.county}</p>
          <p className="midwife-entry-story">{midwife.story ?? midwife.contribution}</p>
        </article>)}
      </div>

      {!filtered.length && <div className="midwife-empty"><p>No stories match these filters.</p><button type="button" onClick={() => { setQuery(""); setEra("All"); clearCounty(); }}>Show all names</button></div>}
    </section>

    {expandedStory && <div className="record-overlay memorial-overlay midwife-record-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeStory(); }}>
      <article ref={dialogRef} className={`record-panel memorial-record-panel midwife-record-panel${expandedStory.imageSrc ? "" : " has-no-image"}`} role="dialog" aria-modal="true" aria-labelledby="midwife-record-title">
        <button className="panel-close" type="button" onClick={closeStory} aria-label={`Close the record for ${expandedStory.name}`}>×</button>
        {expandedStory.imageSrc && <div className="record-image-wrap midwife-record-image"><Portrait midwife={expandedStory} /><div className="record-image-inscription"><span>Held in public memory</span><strong>{expandedStory.name}</strong></div></div>}
        <div className="record-content midwife-record-content">
          <p className="eyebrow">{expandedStory.community} · {expandedStory.county}</p>
          <h2 id="midwife-record-title">{expandedStory.name}</h2>
          <p className="midwife-record-role">{expandedStory.period ?? expandedStory.practice}</p>
          <section className="midwife-record-known"><p className="eyebrow">What is known</p><p>{expandedStory.story ?? expandedStory.contribution}</p></section>
          {expandedStory.sourceTitle && <footer className="midwife-reader-source"><span>Remembered through</span>{expandedStory.sourceUrl ? <a href={expandedStory.sourceUrl} target="_blank" rel="noreferrer">{expandedStory.sourceTitle} ↗</a> : <strong>{expandedStory.sourceTitle}</strong>}{expandedStory.sourceLocator && <small>{expandedStory.sourceLocator}</small>}{expandedStory.imageSrc && <a href={expandedStory.imageSrc} target="_blank" rel="noreferrer">View source image ↗</a>}</footer>}
          <div className="midwife-reader-navigation"><button type="button" onClick={() => moveStory(-1)}>← Previous name</button><button type="button" onClick={() => moveStory(1)}>Next name →</button></div>
        </div>
      </article>
    </div>}

    <section className="record-pathways" aria-labelledby="record-pathways-title">
      <div className="record-pathways-intro"><p className="eyebrow">How the record found them</p><h2 id="record-pathways-title">A newspaper is not a whole life.</h2><p>Black midwives often entered newspapers when an institution looked at them: a health department inspected a bag, a court requested testimony, an official enforced a rule, or a community marked a retirement or death. These reports can confirm a woman’s name, place, and practice. They cannot stand in for her voice, her full working life, or the families who trusted her.</p></div>
      <div className="record-pathways-grid"><article><span>01</span><h3>Presence and practice</h3><p>Stories lead with what a source can establish: a name, community, period of work, training, births attended, or recognition by families.</p></article><article><span>02</span><h3>Policing and regulation</h3><p>Arrest reports, court notices, permit rules, inspections, and fines are interpreted together as evidence of how Black midwifery was watched and constrained. Allegations are never treated as proven biography.</p></article><article><span>03</span><h3>Silence and uncertainty</h3><p>The archive rarely preserves the midwife’s own account. Conflicting spellings, missing outcomes, and absent family testimony remain visible rather than being filled with certainty.</p></article></div>
      <p className="record-pathways-note">Published portraits appear where the clipping clearly identifies the person. Exact street addresses remain withheld, and each image stays connected to its newspaper citation.</p>
    </section>

    <section className="midwife-scale-evidence" aria-labelledby="midwife-scale-title">
      <div className="midwife-scale-heading"><p className="eyebrow">The scale behind the names</p><h2 id="midwife-scale-title">The surviving names are only a fraction of the field.</h2><p>State totals make visible the breadth of work that individual records can only begin to describe.</p></div>
      <div className="midwife-scale-facts">
        <article><strong>4,000+</strong><p>midwives were recorded in Mississippi’s 1921 survey; 99 percent of those surveyed were African American.</p></article>
        <article><strong>7,868</strong><p>Mississippi births were attended by midwives in 1967.</p></article>
        <article><strong>32.7%</strong><p>of births to Black mothers were attended by midwives in 1967. The state report used the historical term “nonwhite.”</p></article>
      </div>
      <p className="midwife-scale-source">Sources: oral-history thesis supplied to the project; Mississippi State Board of Health, <cite>Vital Statistics Mississippi 1967</cite>, Table B.</p>
    </section>

    <section className="midwife-research-expansion" aria-labelledby="midwife-research-title"><p className="eyebrow">Help memory travel farther</p><h2 id="midwife-research-title">A name can reopen a history.</h2><p>These stories come through permits, letters, reports, photographs, published histories, and family testimony. If a midwife cared for your family, your knowledge can restore detail, correct a spelling, identify a face, or return a woman to the place where her work was known.</p><a href="mailto:scott.ford.houses@gmail.com?subject=Midwife%20history%20contribution">Share a name, photograph, correction, or family memory <span aria-hidden="true">↗</span></a></section>
  </>;
}
