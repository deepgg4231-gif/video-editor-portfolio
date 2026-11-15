import { ArrowUpRight, Play, Mail } from 'lucide-react';

const archive = {
  jfk: 'https://commons.wikimedia.org/wiki/Special:FilePath/1942_JFK_uniform_portrait.jpg',
  wwii: 'https://commons.wikimedia.org/wiki/Special:FilePath/British_and_Russian_soldiers_on_the_balcony_of_the_ruined_Chancellery_in_Berlin,_5_July_1945._BU8635.jpg',
  apollo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Photograph_of_the_Apollo_11_Crew_-_NARA_-_4957611.jpg',
  berlin: 'https://commons.wikimedia.org/wiki/Special:FilePath/THE_BERLIN_WALL_1961_-_1989_CT2246.jpg',
};

const projects = [
  {
    number: '01',
    category: 'HISTORY / POLITICS',
    title: 'The Cuban Missile Crisis',
    description: 'A documentary exploring the tense 13 days that brought the world close to nuclear war.',
    duration: 'DOCUMENTARY',
    style: 'missile',
    url: 'https://drive.google.com/file/d/1M9C9-0kOgXIvitzRSDMuP6HnCMkyM0nk/view',
  },
  {
    number: '02',
    category: 'DOCUMENTARY / HISTORY',
    title: 'The Rise and Fall of Waggoner Ranch',
    description: 'A 30-minute historical documentary exploring the story and legacy of one of America’s largest ranches.',
    duration: '30 MIN',
    style: 'ranch',
    thumbnail: 'https://drive.google.com/thumbnail?id=153Av-_59NwfPBoBlDzjoVl3bmpS20Ycu&sz=w1600',
    url: 'https://drive.google.com/file/d/1roY1_TRa0TfmkIJKNN61VihoPGXPvn01/view',
  },
  {
    number: '03',
    category: 'HISTORY / STORYTELLING',
    title: 'The Fuller Brush Man',
    description: 'A historical story brought to life through documentary-style editing and visual storytelling.',
    duration: 'DOCUMENTARY',
    style: 'fuller',
    thumbnail: 'https://drive.google.com/thumbnail?id=1_1RtaocPfA3T2UZZ4XSLQ35GgFChTL4q&sz=w1600',
    url: 'https://drive.google.com/file/d/1-JxNLyGWoGKsJtIVZBU7s0TOb1zdSe5V/view',
  },
];

export default function App() {
  return <main>
    <nav><a className="logo" href="#">ADNAN WORKICHO<span>.</span></a><div className="navlinks"><a href="#work">Work</a><a href="#about">About</a><a href="#approach">Approach</a></div><a className="navbutton" href="#contact">Let’s talk ↗</a></nav>
    <section className="hero">
      <div className="hero-archive hero-jfk" style={{backgroundImage:'url('+archive.jfk+')'}} />
      <div className="hero-archive hero-war" style={{backgroundImage:'url('+archive.wwii+')'}} />
      <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line"/> INDEPENDENT VIDEO EDITOR & STORYTELLER</p><h1>History has<br/>a <em>story.</em></h1><p className="intro">I shape research, archival footage and raw ideas into documentaries that hold attention and bring stories to life.</p><a className="primary" href="#work">Explore selected work <ArrowUpRight size={17}/></a></div>
      <div className="hero-note"><span>01 / 04</span><span>DOCUMENTARY • HISTORY • VISUAL STORYTELLING</span></div><div className="hero-stamp">CUT WITH<br/>PURPOSE<span>✳</span></div>
    </section>
    <section className="manifesto"><div className="manifesto-image" style={{backgroundImage:'url('+archive.apollo+')'}}/><p className="eyebrow">THE IDEA BEHIND THE EDIT</p><h2>Not just footage.<br/><em>A point of view.</em></h2><p className="manifesto-text">Every frame has a purpose. Every cut moves the story forward. The goal is simple: make people stay, feel something, and remember what they watched.</p></section>
    <section id="work" className="work"><div className="section-heading"><div><p className="eyebrow">A FEW STORIES I'VE WORKED ON</p><h2>Selected <em>work.</em></h2></div><p className="section-aside">DOCUMENTARY / YOUTUBE / SHORT-FORM</p></div>
      <div className="project-grid">{projects.map((p)=><a className="project project-link" href={p.url} target="_blank" rel="noreferrer" key={p.number} aria-label={'Watch '+p.title}><div className={'project-image '+p.style} style={p.thumbnail ? {backgroundImage:'linear-gradient(rgba(20,19,17,.12),rgba(20,19,17,.32)),url('+p.thumbnail+')',backgroundSize:'cover',backgroundPosition:'center'} : undefined}><span className="project-number">{p.number}</span><span className="archive-label">SELECTED FILM</span><span className="play-mark"><Play size={19} fill="currentColor"/></span></div><div className="project-info"><div><p className="eyebrow">{p.category}</p><h3>{p.title}</h3><p className="project-description">{p.description}</p></div><span className="duration">{p.duration}</span></div></a>)}</div>
    </section>
    <section id="about" className="about"><div className="about-side"><p className="eyebrow">A LITTLE ABOUT ME</p><span className="about-mark">A.</span></div><div><h2>I believe a good edit should make a story <em>impossible to leave.</em></h2><p>I’m a video editor focused on documentary storytelling, historical content and engaging YouTube videos. I work with archival visuals, animated maps, sound design and thoughtful pacing to bring stories to life.</p></div></section>
    <section id="approach" className="approach"><p className="eyebrow">WHAT I BRING TO THE STORY</p><h2>Craft behind<br/><em>the cut.</em></h2><div className="service-list"><p><span>01</span> Documentary & long-form editing <ArrowUpRight size={17}/></p><p><span>02</span> Historical research visuals & archival footage <ArrowUpRight size={17}/></p><p><span>03</span> Animated maps, titles & motion graphics <ArrowUpRight size={17}/></p><p><span>04</span> Sound design, pacing & YouTube Shorts <ArrowUpRight size={17}/></p></div></section>
    <footer id="contact"><p className="eyebrow">HAVE A STORY TO TELL?</p><h2>Let’s make<br/>it <em>matter.</em></h2><div className="contact-actions"><a className="primary" href="mailto:adnanpubgmethio@gmail.com"><Mail size={17}/> Email me <ArrowUpRight size={17}/></a><a className="upwork-link" href="https://www.upwork.com/freelancers/~01fec14a5f7546a2e8" target="_blank" rel="noreferrer">Find me on Upwork <ArrowUpRight size={16}/></a></div><div className="footer-bottom"><span>ADNAN WORKICHO / VIDEO EDITOR</span><span>© 2026 ALL RIGHTS RESERVED</span></div></footer>
  </main>;
}