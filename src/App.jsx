import { ArrowUpRight, Play, Mail } from 'lucide-react';

const archive = {
  jfk: 'https://commons.wikimedia.org/wiki/Special:FilePath/1942_JFK_uniform_portrait.jpg',
  wwii: 'https://commons.wikimedia.org/wiki/Special:FilePath/British_and_Russian_soldiers_on_the_balcony_of_the_ruined_Chancellery_in_Berlin,_5_July_1945._BU8635.jpg',
  apollo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Photograph_of_the_Apollo_11_Crew_-_NARA_-_4957611.jpg',
  berlin: 'https://commons.wikimedia.org/wiki/Special:FilePath/THE_BERLIN_WALL_1961_-_1989_CT2246.jpg',
};

const projects = [
  ['01','DOCUMENTARY / HISTORY','The Waggoner Ranch','A 30-minute historical documentary exploring the story and legacy of one of America’s largest ranches.','30 MIN','ranch'],
  ['02','HISTORY / POLITICS','Project title coming soon','A space for another long-form documentary or historical story.','VIDEO','wwii'],
  ['03','SHORT-FORM / SOCIAL','Project title coming soon','A space to showcase short-form editing, pacing and motion graphics.','SHORT','apollo'],
  ['04','DOCUMENTARY / STORYTELLING','Project title coming soon','A space for another standout piece from your portfolio.','VIDEO','berlin']
];

export default function App() {
  return <main>
    <nav><a className="logo" href="#">ADNAN<span>.</span></a><div className="navlinks"><a href="#work">Work</a><a href="#about">About</a><a href="#approach">Approach</a></div><a className="navbutton" href="#contact">Let’s talk ↗</a></nav>
    <section className="hero">
      <div className="hero-archive hero-jfk" style={{backgroundImage:'url('+archive.jfk+')'}} />
      <div className="hero-archive hero-war" style={{backgroundImage:'url('+archive.wwii+')'}} />
      <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line"/> INDEPENDENT VIDEO EDITOR & STORYTELLER</p><h1>History has<br/>a <em>story.</em></h1><p className="intro">I shape research, archival footage and raw ideas into documentaries that hold attention and bring stories to life.</p><a className="primary" href="#work">Explore selected work <ArrowUpRight size={17}/></a></div>
      <div className="hero-note"><span>01 / 04</span><span>DOCUMENTARY • HISTORY • VISUAL STORYTELLING</span></div><div className="hero-stamp">CUT WITH<br/>PURPOSE<span>✳</span></div>
    </section>
    <section className="manifesto"><div className="manifesto-image" style={{backgroundImage:'url('+archive.apollo+')'}}/><p className="eyebrow">THE IDEA BEHIND THE EDIT</p><h2>Not just footage.<br/><em>A point of view.</em></h2><p className="manifesto-text">Every frame has a purpose. Every cut moves the story forward. The goal is simple: make people stay, feel something, and remember what they watched.</p></section>
    <section id="work" className="work"><div className="section-heading"><div><p className="eyebrow">A FEW STORIES I'VE WORKED ON</p><h2>Selected <em>work.</em></h2></div><p className="section-aside">DOCUMENTARY / YOUTUBE / SHORT-FORM</p></div>
      <div className="project-grid">{projects.map((p)=><article className="project" key={p[0]}><div className={'project-image '+p[5]}><span className="project-number">{p[0]}</span>{p[5]!=='ranch'&&<span className="archive-label">ARCHIVE / VISUAL STUDY</span>}<span className="play-mark"><Play size={19} fill="currentColor"/></span></div><div className="project-info"><div><p className="eyebrow">{p[1]}</p><h3>{p[2]}</h3><p className="project-description">{p[3]}</p></div><span className="duration">{p[4]}</span></div></article>)}</div>
    </section>
    <section id="about" className="about"><div className="about-side"><p className="eyebrow">A LITTLE ABOUT ME</p><span className="about-mark">A.</span></div><div><h2>I believe a good edit should make a story <em>impossible to leave.</em></h2><p>I’m a video editor focused on documentary storytelling, historical content and engaging YouTube videos. I work with archival visuals, animated maps, sound design and thoughtful pacing to bring stories to life.</p></div></section>
    <section id="approach" className="approach"><p className="eyebrow">WHAT I BRING TO THE STORY</p><h2>Craft behind<br/><em>the cut.</em></h2><div className="service-list"><p><span>01</span> Documentary & long-form editing <ArrowUpRight size={17}/></p><p><span>02</span> Historical research visuals & archival footage <ArrowUpRight size={17}/></p><p><span>03</span> Animated maps, titles & motion graphics <ArrowUpRight size={17}/></p><p><span>04</span> Sound design, pacing & YouTube Shorts <ArrowUpRight size={17}/></p></div></section>
    <footer id="contact"><p className="eyebrow">HAVE A STORY TO TELL?</p><h2>Let’s make<br/>it <em>matter.</em></h2><a className="primary" href="mailto:YOUR_EMAIL_HERE"><Mail size={17}/> Get in touch <ArrowUpRight size={17}/></a><div className="footer-bottom"><span>ADNAN. / VIDEO EDITOR</span><span>© 2026 ALL RIGHTS RESERVED</span></div></footer>
  </main>;
}