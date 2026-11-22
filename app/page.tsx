import Image from "next/image";

const themes = [
  {
    number: "01",
    title: "Care",
    subtitle: "Black midwifery in Mississippi",
    copy: "Across Mississippi and the South, Black midwives sustained generations through skilled care, trusted relationships, and knowledge passed from woman to woman.",
    image: "/images/those-who-stayed/black-midwifery.jpg",
    alt: "Interpretive panel about Black midwifery in Mississippi and the South",
    width: 1600,
    height: 500,
    tone: "blue",
  },
  {
    number: "02",
    title: "Family",
    subtitle: "The Scott-Ford legacy",
    copy: "From William and Charlotte Butler to the generations who established homes and livelihoods on East Cohea Street, family history reveals resilience, property ownership, and community care.",
    image: "/images/those-who-stayed/family-tree.jpg",
    alt: "The Scott-Ford family legacy family tree",
    width: 1046,
    height: 1600,
    tone: "teal",
  },
  {
    number: "03",
    title: "Work",
    subtitle: "Labor, skill, and neighborhood exchange",
    copy: "Porches, yards, kitchens, gardens, fields, and businesses were working spaces. Labor close to home fed families, built livelihoods, and connected rural Mississippi to Farish Street.",
    image: "/images/those-who-stayed/work-close-to-home.jpg",
    alt: "Work Close to Home interpretive panel",
    width: 853,
    height: 1600,
    tone: "rust",
  },
  {
    number: "04",
    title: "Faith",
    subtitle: "More than places of worship",
    copy: "Churches were centers of worship, education, mutual aid, music, civic participation, and collective action—institutions built through repeated acts of care.",
    image: "/images/those-who-stayed/places-of-worship.jpg",
    alt: "More Than Places of Worship interpretive panel",
    width: 914,
    height: 1600,
    tone: "gold",
  },
  {
    number: "05",
    title: "Creativity",
    subtitle: "Performance crossroads",
    copy: "Farish Street connected blues, gospel, jazz, and rhythm and blues with audiences, venues, record makers, and the wider world.",
    image: "/images/those-who-stayed/performance-crossroads.jpg",
    alt: "Performance Crossroads interpretive panel",
    width: 1339,
    height: 1600,
    tone: "violet",
  },
];

const records = [
  { image: "/images/those-who-stayed/virginia-scott-ford.jpg", width: 868, height: 1600, title: "Virginia Scott-Ford", label: "The work of care" },
  { image: "/images/those-who-stayed/canton-midwives.jpg", width: 1600, height: 1013, title: "Midwives of Canton", label: "Community knowledge" },
  { image: "/images/those-who-stayed/richard-beadle.jpg", width: 1600, height: 1600, title: "Richard Henry Beadle", label: "Photographer" },
];

export default function Home() {
  return (
    <main id="main-content" className="tws-page">
      <a className="tws-skip" href="#exhibition">Skip to the exhibition</a>
      <header className="tws-header">
        <a className="tws-mark" href="#top" aria-label="Those Who Stayed home">
          <span>Those Who</span><strong>Stayed</strong>
        </a>
        <nav aria-label="Exhibition navigation">
          <a href="#exhibition">The story</a>
          <a href="#themes">Explore</a>
          <a href="#records">People</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="tws-org" href="https://scottfordhouseinc.com">Scott Ford Houses Inc. ↗</a>
      </header>

      <section id="top" className="tws-hero" aria-labelledby="hero-title">
        <div className="tws-hero-shape shape-one" />
        <div className="tws-hero-shape shape-two" />
        <div className="tws-hero-image" aria-hidden="true">
          <Image src="/images/site/historic-scott-ford-house.png" alt="" fill priority sizes="(max-width: 800px) 100vw, 46vw" />
        </div>
        <div className="tws-hero-copy">
          <p className="tws-kicker">A digital companion to the exhibition</p>
          <h1 id="hero-title"><span>Those Who</span><strong>Stayed</strong></h1>
          <p className="tws-deck">Faith, family, work, creativity, and community in Jackson&apos;s historic Farish Street neighborhood.</p>
          <a className="tws-button" href="#exhibition">Enter the exhibition <span aria-hidden="true">↓</span></a>
        </div>
        <p className="tws-scroll">Jackson, Mississippi <span>•</span> Stories of care across generations</p>
      </section>

      <section id="exhibition" className="tws-intro tws-paper">
        <div className="tws-section-index"><span>About</span><strong>00</strong></div>
        <div className="tws-intro-lead">
          <p>For generations, African American residents of Jackson have built and sustained the relationships, institutions, and networks of care that make community life possible.</p>
        </div>
        <div className="tws-intro-body">
          <p>During the Great Migration, hundreds of thousands of Black Mississippians left the state in search of greater safety, freedom, and economic opportunity. Others remained. Staying could reflect commitment, opportunity, obligation, constraint—or several of these at once.</p>
          <p><em>Those Who Stayed</em> explores how care shaped everyday life: tending to health, sharing resources, raising families, worshipping, passing on knowledge, and creating spaces for rest, pleasure, and belonging.</p>
          <details className="tws-panel-link">
            <summary>View the original introduction panel</summary>
            <Image src="/images/those-who-stayed/intro-panel.jpg" width={984} height={1600} alt="Full Those Who Stayed introductory exhibition panel" />
          </details>
        </div>
      </section>

      <section id="themes" className="tws-themes" aria-labelledby="themes-title">
        <header className="tws-section-heading">
          <p>Five ways into the story</p>
          <h2 id="themes-title">Networks of care</h2>
          <p>Each pathway connects household life to the people, places, and institutions that sustained Black Jackson.</p>
        </header>
        <div className="tws-theme-list">
          {themes.map((theme) => (
            <article className={`tws-theme ${theme.tone}`} key={theme.title}>
              <div className="tws-theme-number">{theme.number}</div>
              <div className="tws-theme-copy">
                <p>{theme.subtitle}</p>
                <h3>{theme.title}</h3>
                <p>{theme.copy}</p>
              </div>
              <details className="tws-theme-panel">
                <summary><span>Open exhibit panel</span><i aria-hidden="true">↗</i></summary>
                <div><Image src={theme.image} width={theme.width} height={theme.height} alt={theme.alt} /></div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section id="records" className="tws-records tws-paper" aria-labelledby="records-title">
        <div className="tws-records-heading">
          <p className="tws-kicker">Lives in the archive</p>
          <h2 id="records-title">People who made community</h2>
          <p>The exhibition&apos;s stories are carried by named people: caregivers, photographers, educators, musicians, workers, entrepreneurs, and neighbors.</p>
        </div>
        <div className="tws-record-grid">
          {records.map((record, index) => (
            <details className="tws-record" key={record.title}>
              <summary>
                <span>0{index + 1}</span>
                <strong>{record.title}</strong>
                <em>{record.label}</em>
                <i aria-hidden="true">View record +</i>
              </summary>
              <Image src={record.image} width={record.width} height={record.height} alt={`${record.title}: ${record.label} exhibit record`} />
            </details>
          ))}
        </div>
      </section>

      <section className="tws-quote" aria-label="Exhibition reflection">
        <p>“Care was practiced in homes, churches, businesses, and neighborhoods.”</p>
        <span>Those Who Stayed</span>
      </section>

      <section id="visit" className="tws-visit" aria-labelledby="visit-title">
        <div>
          <p className="tws-kicker">Continue in person</p>
          <h2 id="visit-title">Visit the exhibition</h2>
        </div>
        <div className="tws-visit-details">
          <p><strong>Smith Robertson Museum</strong><br />528 Bloom Street<br />Jackson, Mississippi 39202</p>
          <p>This digital companion extends the physical exhibition with stories and records you can return to from anywhere.</p>
          <a className="tws-button dark" href="https://www.jacksonms.gov/government/parks-and-recreation/smith-robertson-museum/">Plan your visit ↗</a>
        </div>
      </section>

      <footer className="tws-footer">
        <div className="tws-mark"><span>Those Who</span><strong>Stayed</strong></div>
        <p>Presented by Scott Ford Houses Inc., the African American Digital Humanities Lab, and Monument Lab.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
