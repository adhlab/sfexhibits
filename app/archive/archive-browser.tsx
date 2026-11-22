"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useRef, useState } from "react";
import { archiveRecords, type ArchiveRecord } from "../archive-data";

export function ArchiveBrowser() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<ArchiveRecord | null>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return archiveRecords;
    return archiveRecords.filter((record) => [record.title, record.type, record.period, record.people, record.description].join(" ").toLowerCase().includes(value));
  }, [query]);

  useEffect(() => {
    if (!selected) return;
    document.body.style.overflow = "hidden";
    const dialog = dialogRef.current;
    const focusable = dialog ? Array.from(dialog.querySelectorAll<HTMLElement>('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])')) : [];
    window.setTimeout(() => focusable[0]?.focus(), 0);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setSelected(null);
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
      openerRef.current?.focus();
    };
  }, [selected]);

  return <>
    <label className="archive-search"><span>Search objects, people, and dates</span><input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Try “Virginia,” “permit,” or “house”…" /></label>
    <p className="archive-result-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? "record" : "records"}</p>
    <div className="archive-grid">{filtered.map((record) => <button key={record.accession} type="button" onClick={(event) => { openerRef.current = event.currentTarget; setSelected(record); }}><span className="archive-card-image"><img src={record.image} alt={record.alt} width="640" height="480" loading="lazy" decoding="async" /></span><span className="archive-card-copy"><small>{record.type} · {record.period || "Undated"}</small><strong>{record.title}</strong><em>{record.accession}</em></span></button>)}</div>
    {selected && <div className="record-overlay archive-record-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}><article ref={dialogRef} className="record-panel archive-record-panel" role="dialog" aria-modal="true" aria-labelledby="archive-record-title"><button className="panel-close" type="button" onClick={() => setSelected(null)} aria-label="Close record">×</button><div className="record-image-wrap"><img src={selected.image} alt={selected.alt} width="1200" height="900" /></div><div className="record-content"><p className="eyebrow">{selected.type} · {selected.period || "Date unknown"}</p><h2 id="archive-record-title">{selected.title}</h2><p className="record-caption">{selected.publicCaption}</p><p className="record-description">{selected.description}</p><p>{selected.significance}</p><dl>{selected.people && <><dt>People</dt><dd>{selected.people}</dd></>}<dt>Collection</dt><dd>{selected.collection}</dd><dt>Accession</dt><dd>{selected.accession}</dd><dt>Credit</dt><dd>{selected.credit}</dd><dt>Source</dt><dd>{selected.source}</dd></dl></div></article></div>}
  </>;
}
