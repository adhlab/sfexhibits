import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

const zones = [
  {
    number: "01",
    id: "living-room",
    eyebrow: "Home as archive",
    title: "The Living Room & Richard Beadle",
    copy: "Begin in the room where family stories are held and shared. Portraits made by Jackson photographer Richard Henry Beadle gave Black families the power to preserve how they saw themselves—and how they wanted to be remembered.",
    prompt: "Look closely: What can a room, a pose, or a photograph tell us about belonging?",
    image: "/images/interpretive/scott-ford-family-portrait.webp",
    alt: "Historic portrait of members of the Scott-Ford family",
    caption: "The Scott-Ford family archive",
    tone: "indigo",
  },
  {
    number: "02",
    id: "fashion",
    eyebrow: "Making an appearance",
    title: "Fashion & Self-Presentation",
    copy: "Clothing carried meaning. What people wore to church, work, celebrations, and portrait studios expressed skill, aspiration, respectability, pleasure, and personal style.",
    prompt: "Notice the details: fabric, hats, posture, and the care involved in being seen.",
    image: "/images/archive/coll438.jpg",
    alt: "Historic portrait from the Scott-Ford archive",
    caption: "A portrait from the family archive",
    tone: "plum",
  },
  {
    number: "03",
    id: "kitchen-table",
    eyebrow: "Care served daily",
    title: "Around the Kitchen Table",
    copy: "The kitchen table was more than a place to eat. Here, families prepared food, stretched resources, exchanged news, raised funds, made plans, and passed knowledge between generations.",
    prompt: "Listen for the conversations that turn an ordinary table into community infrastructure.",
    image: "/images/site/community-gathering.jpg",
    alt: "Community members gathered together around a table",
    caption: "Gathering, exchange, and collective care",
    tone: "rust",
  },
  {
    number: "04",
    id: "midwives",
    eyebrow: "Knowledge carried forward",
    title: "Midwives & the Work of Care",
    copy: "Black midwives attended births, cared for mothers and infants, shared supplies, and carried practical knowledge from woman to woman. Their work rested on trust, experience, and enduring relationships.",
    prompt: "Consider care as expertise: Who teaches it, who receives it, and how does it survive?",
    image: "/images/those-who-stayed/virginia-portrait.jpg",
    alt: "Portrait of Virginia Scott-Ford, a Jackson midwife",
    caption: "Virginia Scott-Ford, midwife and community caregiver",
    tone: "teal",
  },
  {
    number: "05",
    id: "commerce",
    eyebrow: "Provision and exchange",
    title: "Food, Commerce & the Grocery Store",
    copy: "Neighborhood stores supplied daily necessities, extended informal credit, circulated news, and created livelihoods. Commerce on and around Farish Street connected household survival to a wider Black business community.",
    prompt: "A grocery store can also be a network: What moves through it besides goods?",
    image: "/images/interpretive/farish-street.webp",
    alt: "Historic street scene on Farish Street in Jackson, Mississippi",
    caption: "Farish Street, a center of Black commerce and exchange",
    tone: "gold",
  },
  {
    number: "06",
    id: "barber-beauty",
    eyebrow: "In the chair",
    title: "Barber & Beauty Culture",
    copy: "Barbershops and beauty salons joined enterprise with artistry. They were places to shape an appearance, earn a living, trade information, debate events, and spend time in trusted company.",
    prompt: "Think about the chair as both workplace and gathering place.",
    image: "/images/archive/coll203.jpg",
    alt: "Historic photograph from the Scott-Ford archive",
    caption: "Style, enterprise, and conversation",
    tone: "blue",
  },
  {
    number: "07",
    id: "labor",
    eyebrow: "Work close to home",
    title: "Labor, Skill & Livelihood",
    copy: "Labor happened across fields, kitchens, yards, washhouses, workshops, and city businesses. Paid and unpaid work sustained families while linking rural Mississippi to Jackson’s neighborhood economy.",
    prompt: "Ask which kinds of labor history records—and which kinds it too often overlooks.",
    image: "/images/interpretive/washhouse.webp",
    alt: "Historic washhouse associated with the Scott-Ford property",
    caption: "Domestic labor, skilled work, and neighborhood exchange",
    tone: "rust",
  },
  {
    number: "08",
    id: "front-porch",
    eyebrow: "Between home and street",
    title: "The Front Porch",
    copy: "The porch was a threshold: private and public, restful and productive. People shelled vegetables, repaired clothing, watched children, greeted neighbors, exchanged news, and let conversation unfold.",
    prompt: "Pause here. What becomes possible in a space that belongs to both home and community?",
    image: "/images/interpretive/lula-ford-house-historic.webp",
    alt: "Historic view of a Scott-Ford house and its front porch",
    caption: "The porch as workspace, lookout, and place of welcome",
    tone: "green",
  },
  {
    number: "09",
    id: "churches",
    eyebrow: "Institutions of care",
    title: "Churches as Community Space",
    copy: "Black churches were more than places of worship. They supported education, music, mutual aid, civic participation, organizing, and collective action through repeated acts of care.",
    prompt: "Notice how faith, service, and public life meet in the same space.",
    image: "/images/site/stewardship-gathering.jpeg",
    alt: "Community members gathered in a shared space",
    caption: "Worship, fellowship, mutual aid, and civic life",
    tone: "plum",
  },
  {
    number: "10",
    id: "reflection",
    eyebrow: "What we carry",
    title: "A Final Reflection",
    copy: "These rooms and gathering places reveal care as an everyday practice: feeding, teaching, tending, making, worshipping, listening, and staying connected. The story continues in what descendants and neighbors choose to remember and protect.",
    prompt: "What practice of care will you carry with you from this exhibition?",
    image: "/images/site/houses-preservation.jpeg",
    alt: "The Scott-Ford Houses in Jackson, Mississippi",
    caption: "Preserving place keeps many forms of memory in conversation",
    tone: "indigo",
  },
];

export default function Home() {
  return (
    <main id="top" className="guide-page">
      <a className="guide-skip" href="#journey">Skip to the journey</a>
      <header className="guide-header">
        <a href="#top" className="guide-logo" aria-label="Those Who Stayed home">
          <Image src={asset("/images/those-who-stayed/wordmark-white.png")} width={1056} height={274} alt="Those Who Stayed" priority />
        </a>
        <nav aria-label="Exhibition guide">
          <a href="#journey">Journey</a>
          <a href="#living-room">Zones</a>
          <a href="#reflection">Reflect</a>
          <a href="#visit">Visit</a>
        </nav>
      </header>

      <section className="water-threshold water-opening" aria-labelledby="opening-title">
        <div className="water-rings" aria-hidden="true"><i /><i /><i /></div>
        <div className="water-copy">
          <p className="guide-kicker">A digital guide to the exhibition</p>
          <h1 id="opening-title">Those who stayed<br />made a way.</h1>
          <p>Step into the spaces where Black families in Jackson made home, practiced care, built livelihoods, and sustained community across generations.</p>
          <a className="guide-enter" href="#journey">Enter the exhibition <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section id="journey" className="guide-intro">
        <div>
          <p className="guide-kicker">Those Who Stayed</p>
          <h2>Move through the spaces where community was made.</h2>
        </div>
        <div>
          <p>This guide follows the physical exhibition from room to room. Each zone is a way into the relationships, labor, knowledge, and creativity that sustained Black Jackson.</p>
          <p className="guide-instruction">Scroll in order, or choose a zone below while you move through the gallery.</p>
        </div>
      </section>

      <nav className="zone-index" aria-label="Exhibition zones">
        {zones.map((zone) => <a key={zone.id} href={`#${zone.id}`}><span>{zone.number}</span>{zone.title}</a>)}
      </nav>

      <div className="guide-zones">
        {zones.map((zone, index) => {
          const next = zones[index + 1];
          return (
            <section id={zone.id} className={`guide-zone tone-${zone.tone}`} key={zone.id} aria-labelledby={`${zone.id}-title`}>
              <div className="zone-image">
                <Image src={asset(zone.image)} fill sizes="(max-width: 800px) 100vw, 52vw" alt={zone.alt} />
                <p>{zone.caption}</p>
              </div>
              <div className="zone-copy">
                <div className="zone-number"><span>Zone</span>{zone.number}</div>
                <p className="guide-kicker">{zone.eyebrow}</p>
                <h2 id={`${zone.id}-title`}>{zone.title}</h2>
                <p className="zone-text">{zone.copy}</p>
                <aside><span>While you’re here</span><p>{zone.prompt}</p></aside>
                {next && <a className="zone-next" href={`#${next.id}`}>Next: {next.title} <span aria-hidden="true">↓</span></a>}
              </div>
            </section>
          );
        })}
      </div>

      <section className="water-threshold water-closing" aria-labelledby="closing-title">
        <div className="water-rings" aria-hidden="true"><i /><i /><i /></div>
        <div className="water-copy">
          <p className="guide-kicker">Return to water</p>
          <h2 id="closing-title">The water remembers.</h2>
          <p>The exhibition ends where it began. Water recalls the forced crossing of the Middle Passage, the separations that followed, and the enduring work of making kin, place, and possibility. The current continues through every act of care carried forward.</p>
          <blockquote>What will you remember—and what will you help carry on?</blockquote>
        </div>
      </section>

      <section id="visit" className="guide-visit">
        <div><p className="guide-kicker">Continue in person</p><h2>Visit <em>Those Who Stayed</em></h2></div>
        <div><p><strong>Smith Robertson Museum</strong><br />528 Bloom Street<br />Jackson, Mississippi 39202</p><a href="https://www.jacksonms.gov/government/parks-and-recreation/smith-robertson-museum/">Plan your visit ↗</a></div>
      </section>

      <footer className="guide-footer">
        <Image src={asset("/images/those-who-stayed/wordmark-white.png")} width={1056} height={274} alt="Those Who Stayed" />
        <p>Presented by Scott Ford Houses Inc., the African American Digital Humanities Lab, and Monument Lab.</p>
        <a href="#top">Back to the beginning ↑</a>
      </footer>
    </main>
  );
}
