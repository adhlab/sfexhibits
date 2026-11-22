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
    aspect: "1 / 1",
    position: "50% 50%",
    alt: "Historic portrait of two members of the Scott-Ford family",
    caption: "Studio photographs of the Scott-Ford family.",
    credit: "Caption transcribed from the “Virginia Scott-Ford: The Work of Care” panel.",
    tone: "indigo",
  },
  {
    number: "02",
    id: "fashion",
    eyebrow: "Making an appearance",
    title: "Fashion & Self-Presentation",
    copy: "Clothing carried meaning. What people wore to church, work, celebrations, and portrait studios expressed skill, aspiration, respectability, pleasure, and personal style.",
    prompt: "Notice the details: fabric, hats, posture, and the care involved in being seen.",
    image: "/images/those-who-stayed/zones/fashion-bessie.jpg",
    aspect: "2 / 3",
    position: "50% 42%",
    alt: "Studio portrait of Ms. Bessie Shader wearing a patterned dress and elaborate hat",
    caption: "Ms. Bessie Shader, ca. 1918",
    credit: "Caption transcribed from the “Made, Mended, Worn” panel.",
    tone: "plum",
  },
  {
    number: "03",
    id: "kitchen-table",
    eyebrow: "Care served daily",
    title: "Around the Kitchen Table",
    copy: "The kitchen table was more than a place to eat. Here, families prepared food, stretched resources, exchanged news, raised funds, made plans, and passed knowledge between generations.",
    prompt: "Listen for the conversations that turn an ordinary table into community infrastructure.",
    image: "/images/those-who-stayed/zones/kitchen-barbecue.jpg",
    aspect: "4 / 5",
    position: "50% 42%",
    alt: "A group of women gathered around a table at an outdoor barbecue",
    caption: "Barbecue at “Ms. Mitchell’s” in 1958.",
    credit: "Caption transcribed from the “Around the Kitchen Table” panel.",
    tone: "rust",
  },
  {
    number: "04",
    id: "midwives",
    eyebrow: "Knowledge carried forward",
    title: "Midwives & the Work of Care",
    copy: "Black midwives attended births, cared for mothers and infants, shared supplies, and carried practical knowledge from woman to woman. Their work rested on trust, experience, and enduring relationships.",
    prompt: "Consider care as expertise: Who teaches it, who receives it, and how does it survive?",
    image: "/images/those-who-stayed/zones/midwives-pillars.jpg",
    aspect: "4 / 3",
    position: "52% 58%",
    alt: "Eliza Farish Pillars speaking to a large gathering of Mississippi midwives",
    caption: "Eliza Farish Pillars addressing a gathering of Mississippi midwives, circa 1930s",
    credit: "Pillars worked between state public health and community practice. Caption transcribed from the “Who Could Practice?” panel.",
    tone: "teal",
  },
  {
    number: "05",
    id: "commerce",
    eyebrow: "Provision and exchange",
    title: "Food, Commerce & the Grocery Store",
    copy: "Neighborhood stores supplied daily necessities, extended informal credit, circulated news, and created livelihoods. Commerce on and around Farish Street connected household survival to a wider Black business community.",
    prompt: "A grocery store can also be a network: What moves through it besides goods?",
    image: "/images/those-who-stayed/zones/commerce-juke.jpg",
    aspect: "7 / 10",
    position: "50% 48%",
    alt: "Two patrons dancing together inside a juke joint",
    caption: "Patrons dancing at a Juke Joint, 1939",
    credit: "Caption transcribed from the “Where We Gathered” panel.",
    tone: "gold",
  },
  {
    number: "06",
    id: "barber-beauty",
    eyebrow: "In the chair",
    title: "Barber & Beauty Culture",
    copy: "Barbershops and beauty salons joined enterprise with artistry. They were places to shape an appearance, earn a living, trade information, debate events, and spend time in trusted company.",
    prompt: "Think about the chair as both workplace and gathering place.",
    image: "/images/those-who-stayed/zones/barber-conic.jpg",
    aspect: "1 / 1",
    position: "50% 52%",
    alt: "Historic exterior of Conic’s Beauty-Barber Supply storefront",
    caption: "Conic’s Beauty-Barber Supply storefront",
    credit: "Caption transcribed from the “In the Chair” panel.",
    tone: "blue",
  },
  {
    number: "07",
    id: "labor",
    eyebrow: "Work close to home",
    title: "Labor, Skill & Livelihood",
    copy: "Labor happened across fields, kitchens, yards, washhouses, workshops, and city businesses. Paid and unpaid work sustained families while linking rural Mississippi to Jackson’s neighborhood economy.",
    prompt: "Ask which kinds of labor history records—and which kinds it too often overlooks.",
    image: "/images/those-who-stayed/zones/labor-farish-business.jpg",
    aspect: "6 / 5",
    position: "50% 42%",
    alt: "Workers gathered inside a Farish Street business",
    caption: "Farish Street business interior scene, 20th century",
    credit: "Caption transcribed from the “Work Close to Home” panel.",
    tone: "rust",
  },
  {
    number: "08",
    id: "front-porch",
    eyebrow: "Between home and street",
    title: "The Front Porch",
    copy: "The porch was a threshold: private and public, restful and productive. People shelled vegetables, repaired clothing, watched children, greeted neighbors, exchanged news, and let conversation unfold.",
    prompt: "Pause here. What becomes possible in a space that belongs to both home and community?",
    image: "/images/those-who-stayed/zones/family-automobile.jpg",
    aspect: "3 / 2",
    position: "61% 58%",
    alt: "Children standing beside an automobile outside the Scott-Ford Houses",
    caption: "Carrie-Belle Ford Oatis’s children outside the Scott-Ford Houses",
    credit: "Caption transcribed from the Scott-Ford family photograph panel.",
    tone: "green",
  },
  {
    number: "09",
    id: "churches",
    eyebrow: "Institutions of care",
    title: "Churches as Community Space",
    copy: "Black churches were more than places of worship. They supported education, music, mutual aid, civic participation, organizing, and collective action through repeated acts of care.",
    prompt: "Notice how faith, service, and public life meet in the same space.",
    image: "/images/those-who-stayed/zones/church-group.jpg",
    aspect: "3 / 2",
    position: "53% 48%",
    alt: "Historic photograph of a congregation gathered outside a Black church",
    caption: "Congregants gathered outside a Black church in Jackson.",
    credit: "Shown in “Community Spaces and Churches”; the panel does not identify the congregation.",
    tone: "plum",
  },
  {
    number: "10",
    id: "reflection",
    eyebrow: "What we carry",
    title: "A Final Reflection",
    copy: "These rooms and gathering places reveal care as an everyday practice: feeding, teaching, tending, making, worshipping, listening, and staying connected. The story continues in what descendants and neighbors choose to remember and protect.",
    prompt: "What practice of care will you carry with you from this exhibition?",
    image: "/images/those-who-stayed/zones/harrison-preservation.jpg",
    aspect: "1 / 1",
    position: "50% 48%",
    alt: "Dr. Alferdteen Harrison standing inside a Scott-Ford House before restoration",
    caption: "Dr. Alferdteen Harrison inside the Scott-Ford Houses prior to restoration",
    credit: "Caption transcribed from the “Virginia Scott-Ford: The Work of Care” panel.",
    tone: "indigo",
  },
];

const zoneDetails: Record<string, { story: string[]; highlights: string[]; reveal: string }> = {
  "living-room": {
    story: [
      "A family photograph is never only a record of faces. The setting, clothing, arrangement, and objects in the frame show how people understood themselves and their place in the world. Displayed at home, portraits also introduced one generation to another.",
      "Richard Henry Beadle worked as a photographer in Jackson during the late nineteenth and early twentieth centuries. His portraits form an important visual record of Black life in the city at a time when African Americans were too often reduced to stereotypes in popular images.",
    ],
    highlights: ["Portraits as family memory", "The living room as a place for storytelling", "Black photographers shaping the historical record"],
    reveal: "Choose one photograph nearby. Before reading its label, name three details you notice. What do those details suggest—and what can the photograph not tell you?",
  },
  fashion: {
    story: [
      "Getting dressed could be practical, creative, and political all at once. A carefully made dress, pressed suit, or Sunday hat communicated pride and belonging, even within a society determined to deny Black people dignity.",
      "Much of this style depended on skilled work. Seamstresses, laundresses, milliners, barbers, and beauticians turned knowledge of fabric, fit, grooming, and repair into income. Their labor helped families look their best while building independent livelihoods.",
    ],
    highlights: ["Handmade and altered clothing", "Church, work, and special-occasion dress", "Style as skill, pleasure, and self-definition"],
    reveal: "Find one detail you would wear today. What does your choice say about you? Style can connect generations without making them identical.",
  },
  "kitchen-table": {
    story: [
      "Meals began long before anyone sat down. Growing, buying, preserving, cooking, and serving food required time and knowledge. Families adapted recipes to what was available and made limited resources stretch across households.",
      "Tables also held work that had nothing to do with eating. Bills were counted, lessons completed, clothes mended, church events planned, and neighborhood news exchanged. In this everyday setting, private care could become collective action.",
    ],
    highlights: ["Recipes and knowledge passed by practice", "Food shared beyond one household", "Planning, organizing, and problem-solving"],
    reveal: "Picture a table important to you. Who gathers there? What is exchanged besides food? Add one sound, smell, or phrase to the memory.",
  },
  midwives: {
    story: [
      "For generations, Black midwives provided essential care where hospitals and physicians were inaccessible, unaffordable, or segregated. They traveled to homes, attended births, monitored mothers and infants, and remained trusted advisers after delivery.",
      "Virginia Scott-Ford was part of this tradition in Jackson. Midwifery knowledge grew through experience, apprenticeship, and close relationships. During the twentieth century, new state rules increasingly monitored and restricted Black midwives, even as communities continued to rely on them.",
    ],
    highlights: ["Birth attended in the home", "Knowledge passed from woman to woman", "Care before, during, and after delivery"],
    reveal: "The word “expert” often brings institutions to mind. What changes when expertise is built through practice, trust, and responsibility to neighbors?",
  },
  commerce: {
    story: [
      "In segregated Jackson, Black-owned businesses met needs that white establishments ignored or refused to serve. Grocers, restaurants, drugstores, and street vendors created jobs and kept money circulating within the community.",
      "A neighborhood store depended on relationships. Owners knew customers, sometimes extended credit, and heard local news as people came and went. Farish Street connected these daily exchanges to a larger district of Black enterprise and entertainment.",
    ],
    highlights: ["Food access and informal credit", "Black ownership under segregation", "Stores as neighborhood information hubs"],
    reveal: "Imagine tracing one dollar spent at a neighborhood store. Who might earn it, spend it again, or benefit from it before it leaves the community?",
  },
  "barber-beauty": {
    story: [
      "Personal care businesses offered services, but they also offered time and space. Regular appointments made barbershops and salons dependable places for conversation, humor, advice, and debate.",
      "Owners and workers combined technical skill with entrepreneurship. Their businesses could provide economic independence while allowing customers to define beauty and presentation on their own terms.",
    ],
    highlights: ["Skilled hands and independent business", "Conversation across generations", "Beauty defined within Black communities"],
    reveal: "Why do some conversations happen more easily while our hands are busy? Think of a place where a routine service creates trust over time.",
  },
  labor: {
    story: [
      "The work that sustained Black families crossed the usual boundary between home and job. Farming, hauling, construction, laundry, cooking, childcare, and repair could happen in several places during the same day.",
      "After emancipation, sharecropping and tenant farming kept many families tied to land they did not own through debt. Moving to Jackson could open new opportunities, but domestic service and manual labor often remained poorly paid and publicly unrecognized.",
    ],
    highlights: ["Paid and unpaid work", "Rural knowledge carried into the city", "Labor hidden from official records"],
    reveal: "Look around the room and identify three kinds of work behind what you see. Whose hands made, cleaned, moved, repaired, or preserved it?",
  },
  "front-porch": {
    story: [
      "A porch belongs to a house, but it faces the neighborhood. That position made it useful for greeting visitors, supervising children, cooling off, completing chores, and observing the life of the street.",
      "Porches made connection informal. A person did not always need an invitation or appointment to stop, wave, share news, or ask for help. Repeated encounters turned proximity into relationship.",
    ],
    highlights: ["A threshold between private and public", "Work, rest, and supervision", "Everyday contact building trust"],
    reveal: "Spend thirty seconds simply noticing the space around you. Who can see whom? Where would you sit to welcome a neighbor—or to have a private conversation?",
  },
  churches: {
    story: [
      "Black congregations built institutions in a society that excluded them from many public spaces. Worship was central, but church buildings also hosted lessons, meals, music, meetings, fundraising, and mutual aid.",
      "These spaces helped people practice leadership and organize collective responses to community needs. Their strength came not only from prominent leaders, but from ushers, cooks, musicians, teachers, donors, and volunteers.",
    ],
    highlights: ["Faith expressed through service", "Music, education, and public gathering", "Many small contributions sustaining an institution"],
    reveal: "A community institution is built by more people than history usually names. Choose one overlooked role and imagine what would stop without it.",
  },
  reflection: {
    story: [
      "History is not only what happened. It is also what people save, name, share, and revisit. The survival of the Scott-Ford Houses—and the stories connected to them—depends on descendants, neighbors, researchers, and visitors working together.",
      "The zones in this exhibition are connected by ordinary acts repeated over time. A meal, a photograph, a haircut, a birth, a worship service, or a conversation on the porch can become part of a much larger history of endurance.",
    ],
    highlights: ["Everyday care as historical action", "Preservation as a shared responsibility", "Your own place in the continuing story"],
    reveal: "Choose one word for what you are taking with you. Care? Skill? Memory? Place? Add your own, then tell someone why you chose it.",
  },
};

export default function Home() {
  return (
    <main id="top" className="guide-page">
      <a className="guide-skip" href="#journey">Skip to the journey</a>
      <header className="guide-header">
        <a href="#top" className="guide-logo" aria-label="Those Who Stayed home">
          <Image src={asset("/images/those-who-stayed/wordmark-blue.png")} width={1056} height={274} alt="Those Who Stayed" priority />
        </a>
        <nav aria-label="Exhibition guide">
          <a href="#journey">Journey</a>
          <a href="#living-room">Zones</a>
          <a href="#reflection">Reflect</a>
          <a href="#visit">Visit</a>
        </nav>
      </header>

      <section className="water-threshold water-opening" aria-labelledby="opening-title">
        <div className="water-art" aria-hidden="true"><Image src={asset("/images/those-who-stayed/water-wave.png")} fill alt="" priority sizes="100vw" /></div>
        <div className="water-rings" aria-hidden="true"><i /><i /><i /></div>
        <div className="hero-street" aria-hidden="true"><Image src={asset("/images/those-who-stayed/farish-street-cutout.png")} fill alt="" priority sizes="(max-width: 800px) 80vw, 38vw" /></div>
        <div className="water-copy">
          <p className="guide-kicker">A digital guide to the exhibition</p>
          <h1 id="opening-title" className="visually-hidden">Those Who Stayed</h1>
          <Image className="hero-wordmark" src={asset("/images/those-who-stayed/wordmark-blue.png")} width={1056} height={274} alt="" priority />
          <p className="hero-subtitle">Faith, family, work, creativity, and community in Jackson’s historic Farish Street neighborhood.</p>
          <p>Move through the exhibition zone by zone, explore the stories behind the objects and photographs, and pause with questions to carry into the gallery.</p>
          <a className="guide-enter" href="#journey">Enter the exhibition <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section id="journey" className="guide-intro">
        <Image className="journey-street" src={asset("/images/those-who-stayed/farish-street-cutout.png")} width={401} height={1115} alt="Historic Farish Street with the Booker T sign and parked automobiles" />
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
          const details = zoneDetails[zone.id];
          return (
            <section id={zone.id} className={`guide-zone tone-${zone.tone}`} key={zone.id} aria-labelledby={`${zone.id}-title`}>
              <div className="zone-image" style={{ aspectRatio: zone.aspect }}>
                <Image src={asset(zone.image)} fill sizes="(max-width: 800px) 100vw, 43vw" alt={zone.alt} style={{ objectPosition: zone.position }} />
                <div className="zone-caption"><strong>{zone.caption}</strong><span>{zone.credit}</span></div>
              </div>
              <div className="zone-copy">
                <div className="zone-number"><span>Zone</span>{zone.number}</div>
                <p className="guide-kicker">{zone.eyebrow}</p>
                <h2 id={`${zone.id}-title`}>{zone.title}</h2>
                <p className="zone-text">{zone.copy}</p>
                <div className="zone-deep-dive">
                  {details.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <details className="zone-explore">
                  <summary><span>Explore this zone</span><b aria-hidden="true">+</b></summary>
                  <div className="zone-explore-grid">
                    <section>
                      <h3>Look and listen for</h3>
                      <ul>{details.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                    </section>
                    <section>
                      <h3>Try this</h3>
                      <p>{details.reveal}</p>
                    </section>
                  </div>
                </details>
                <aside><span>While you’re here</span><p>{zone.prompt}</p></aside>
                {next && <a className="zone-next" href={`#${next.id}`}>Next: {next.title} <span aria-hidden="true">↓</span></a>}
              </div>
            </section>
          );
        })}
      </div>

      <section className="water-threshold water-closing" aria-labelledby="closing-title">
        <div className="water-art" aria-hidden="true"><Image src={asset("/images/those-who-stayed/water-wave.png")} fill alt="" sizes="100vw" /></div>
        <div className="water-rings" aria-hidden="true"><i /><i /><i /></div>
        <div className="water-copy">
          <p className="guide-kicker">A final current</p>
          <h2 id="closing-title">The water remembers.</h2>
          <p>At the end of the journey, water comes into focus. It recalls the forced crossing of the Middle Passage, the separations that followed, and the enduring work of making kin, place, and possibility. The current continues through every act of care carried forward.</p>
          <blockquote>What will you remember—and what will you help carry on?</blockquote>
        </div>
      </section>

      <section id="visit" className="guide-visit">
        <Image className="visit-sign" src={asset("/images/those-who-stayed/farish-sign.png")} width={382} height={338} alt="Farish Street Historic District street sign" />
        <div><p className="guide-kicker">Continue in person</p><h2>Visit <em>Those Who Stayed</em></h2></div>
        <div><p><strong>Smith Robertson Museum</strong><br />528 Bloom Street<br />Jackson, Mississippi 39202</p><a href="https://www.jacksonms.gov/government/parks-and-recreation/smith-robertson-museum/">Plan your visit ↗</a></div>
      </section>

      <footer className="guide-footer">
        <Image src={asset("/images/those-who-stayed/wordmark-white.png")} width={1056} height={274} alt="Those Who Stayed" />
        <p>Presented by Scott Ford Houses Inc., the African American Digital Humanities Lab, and Monument Lab.</p>
        <div className="partner-logos" aria-label="Exhibition partners">
          <Image src={asset("/images/those-who-stayed/aadhl-logo.png")} width={109} height={109} alt="The African American Digital Humanities Lab" />
          <Image src={asset("/images/those-who-stayed/scott-ford-logo.png")} width={864} height={574} alt="Scott Ford Houses Inc." />
          <Image src={asset("/images/those-who-stayed/smith-robertson-logo.png")} width={155} height={148} alt="Smith Robertson Museum and Cultural Center" />
        </div>
        <a href="#top">Back to the beginning ↑</a>
      </footer>
    </main>
  );
}
