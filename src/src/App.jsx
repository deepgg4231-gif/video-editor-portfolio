
import { ArrowUpRight, Play, Mail } from 'lucide-react';

export default function App() {
  return (
    <main>
      <nav>
        <a className="logo" href="#">ADNAN<span>.</span></a>
        <div className="navlinks">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navbutton" href="#contact">Let's talk ↗</a>
      </nav>

      <section className="hero">
        <p className="eyebrow">VIDEO EDITOR / DOCUMENTARY STORYTELLER</p>
        <h1>Stories deserve<br />to be <span>seen.</span></h1>
        <p className="intro">
          I turn ideas, research and raw footage into engaging
          documentaries and cinematic videos.
        </p>
        <a className="primary" href="#work">Explore my work <ArrowUpRight size={18}/></a>
        <div className="hero-bottom">AVAILABLE FOR PROJECTS <span>●</span></div>
      </section>

      <section id="work" className="work">
        <div className="section-heading">
          <p className="eyebrow">SELECTED PROJECTS</p>
          <h2>Featured work<span>.</span></h2>
        </div>

        <article className="project">
          <div className="project-image ranch">
            <Play size={34} fill="white"/>
          </div>
          <div className="project-info">
            <div>
              <p className="eyebrow">DOCUMENTARY / HISTORY</p>
              <h3>The Waggoner Ranch</h3>
              <p>A 30-minute historical documentary exploring the story and legacy of one of America's largest ranches.</p>
            </div>
            <span className="duration">30 MIN VIDEO</span>
          </div>
        </article>

        <div className="project-placeholder">
          <p>MORE PROJECTS</p>
          <h3>More stories coming soon.</h3>
        </div>
      </section>

      <section id="about" className="about">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h2>Editing is more than cutting clips. It's about telling a story.</h2>
        <p>
          I'm a video editor focused on documentary storytelling,
          historical content and engaging YouTube videos.
          I work with footage, archival visuals, animated maps,
          sound design and thoughtful pacing to bring stories to life.
        </p>
      </section>

      <section className="services">
        <p className="eyebrow">WHAT I DO</p>
        <h2>My services<span>.</span></h2>
        <div className="service-list">
          <p>01 — Documentary editing</p>
          <p>02 — YouTube long-form editing</p>
          <p>03 — YouTube Shorts</p>
          <p>04 — Sound design and visual storytelling</p>
        </div>
      </section>

      <footer id="contact">
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2>Let's make<br/>something <span>great.</span></h2>
        <a className="primary" href="mailto:YOUR_EMAIL_HERE">
          <Mail size={18}/> Get in touch <ArrowUpRight size={18}/>
        </a>
        <p className="copyright">© 2026 ADNAN. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
