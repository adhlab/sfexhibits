"use client";

import type { CSSProperties } from "react";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { featuredOralHistories } from "../oral-history-data";
import { oralHistoryQuotes } from "../site-content";
import { CaptionedAudio } from "../components/captioned-audio";

const studentReflections = [
  { id: "brian", name: "Brian", duration: "0:24", audioUrl: "/audio/student-reflections/brian.mp3" },
  { id: "gabby", name: "Gabby", duration: "0:33", audioUrl: "/audio/student-reflections/gabby.mp3" },
  { id: "kinzi", name: "Kinzi", duration: "0:31", audioUrl: "/audio/student-reflections/kinzi.mp3" },
  { id: "makaylen", name: "Makaylen", duration: "0:29", audioUrl: "/audio/student-reflections/makaylen.mp3" },
  { id: "monica", name: "Monica", duration: "0:43", audioUrl: "/audio/student-reflections/monica.mp3" },
  { id: "sydney", name: "Sydney", duration: "0:19", audioUrl: "/audio/student-reflections/sydney.mp3" },
] as const;

function keepSingleVoicePlaying(active: HTMLAudioElement) {
  document.querySelectorAll("audio").forEach((audio) => { if (audio !== active) audio.pause(); });
}

export default function VoicesPage() {
  return <main className="interior-page voices-page"><SiteHeader />
    <section className="voices interior-voices" id="main-content" tabIndex={-1} aria-labelledby="voices-title">
      <header className="voices-heading"><div><p className="eyebrow">Oral histories · In their own voices</p><h1 id="voices-title">The archive speaks.</h1></div><p>Listen to Mississippi memory carried through testimony: remedies, resistance, clinical care, family, and the knowledge surrounding birth.</p></header>
      <div className="oral-history-context"><div><p className="eyebrow">The Granny Midwives Oral History Project</p><p>The project records family members and community residents who were delivered by granny midwives or whose families experienced their care. It asks how midwives shaped childbirth and maternal care—and how their influence reached children, families, and community life.</p><p>These statewide stories expand the historical record and challenge gaps in how Black women&apos;s labor has been represented in archives and museums. Project materials are stewarded through collaborations with the Margaret Walker Center and the Smith Robertson Museum.</p></div><div className="memory-quotes">{oralHistoryQuotes.map((item) => <blockquote key={item.name}><p>“{item.quote}”</p><cite>{item.name}</cite></blockquote>)}</div></div>
      <div className="voice-grid">{featuredOralHistories.map((history, index) => <article className="voice-card" key={history.id}>
        <div className="voice-number" aria-hidden="true">0{index + 1}</div><div className="voice-orbit" aria-hidden="true"><span>{history.initials}</span></div><div className="voice-wave" aria-hidden="true">{Array.from({ length: 22 }, (_, bar) => <i key={bar} style={{ "--wave": `${18 + ((bar * 17 + index * 23) % 68)}%`, "--wave-delay": `${bar * -34}ms` } as CSSProperties} />)}</div>
        <p className="voice-date">Interviewed {history.interviewDate}</p><h3>{history.name}</h3><p className="voice-excerpt">{history.excerpt}</p><p className="voice-credit">Interviewed by {history.interviewer}</p>
        <div className="voice-player"><div className="voice-player-meta"><span>{history.editNote}</span><span>{history.duration}</span></div><CaptionedAudio src={history.audioUrl} ariaLabel={`Edited oral-history excerpt from ${history.name}`} caption={history.excerpt} onPlay={keepSingleVoicePlaying} /><p>Excerpted from: {history.sourceWindows}</p></div>
        <div className="voice-actions"><a className="listen-link" href={history.viewerUrl} target="_blank" rel="noreferrer"><span aria-hidden="true">↗</span> Listen to the complete interview</a><a href={history.transcriptUrl} target="_blank" rel="noreferrer">Read transcript</a><a href={history.sourceUrl} target="_blank" rel="noreferrer">Source record</a></div>
      </article>)}</div>
      <a className="all-voices-link" href="https://grannymidwives.org/items/browse" target="_blank" rel="noreferrer">Explore all oral histories <span aria-hidden="true">↗</span></a>
      <div className="oral-history-links"><a href="https://www.scottfordhouseinc.com/oralhistory" target="_blank" rel="noreferrer">Scott Ford oral-history overview ↗</a><a href="https://bghpn.org/" target="_blank" rel="noreferrer">Black and Global Health podcast network ↗</a></div>
      <section className="student-reflections" aria-labelledby="student-reflections-title">
        <header className="student-reflections-heading">
          <div><p className="eyebrow">Making the monument · Student reflections</p><h2 id="student-reflections-title">Learning through the work.</h2></div>
          <p>These contemporary reflections preserve the voices of students who took part in the collaborative work surrounding <em>Wombs of Wisdom</em>. They are presented separately from the historical oral histories above.</p>
        </header>
        <div className="student-reflection-grid">
          {studentReflections.map((reflection, index) => <article className="student-reflection-card" key={reflection.id}>
            <div className="student-reflection-meta"><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span>{reflection.duration}</span></div>
            <p className="student-reflection-kind">Student reflection</p>
            <h3>{reflection.name}</h3>
            <p className="student-reflection-description">A student voice held within the continuing story of researching, interpreting, and making this monument.</p>
            <CaptionedAudio src={reflection.audioUrl} ariaLabel={`Student reflection from ${reflection.name}`} caption="A written transcript for this contemporary student reflection is in preparation." onPlay={keepSingleVoicePlaying} />
          </article>)}
        </div>
        <p className="student-reflections-note">Contemporary project reflection · Recorded for the Wombs of Wisdom digital monument</p>
      </section>
    </section><SiteFooter />
  </main>;
}
