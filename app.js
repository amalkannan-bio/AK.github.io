// ─────────────────────────────────────────────
//  app.js  —  Rendering engine. No need to edit
//  this file for content changes — use data.js.
// ─────────────────────────────────────────────

import { profile, stats, sideCards, projects, publications, skills } from './data.js';

// ── Icons ──────────────────────────────────────
const icons = {
  email: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  linkedin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  phone: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/></svg>`,
  location: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  moon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  sun: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  menu: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
};

// ── Styles ─────────────────────────────────────
function injectStyles() {
  const css = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:        #0a0a0a;
      --surface:   #111111;
      --surface2:  #161616;
      --border:    #1e1e1e;
      --border2:   #262626;
      --text:      #ece9e4;
      --muted:     #5a5754;
      --sub:       #8a8784;
      --accent:    #c9a87c;
      --accent-lo: rgba(201,168,124,0.08);
      --accent-md: rgba(201,168,124,0.18);
      --blue:      #7eb8d4;
      --blue-lo:   rgba(126,184,212,0.08);
      --green:     #7db89a;
      --green-lo:  rgba(125,184,154,0.08);
      --hero-img-opacity: 0.04;
    }
    [data-theme="light"] {
      --bg:        #f7f5f1;
      --surface:   #ffffff;
      --surface2:  #f0ede8;
      --border:    #e4dfd7;
      --border2:   #d4cec5;
      --text:      #18150f;
      --muted:     #a09890;
      --sub:       #6e6660;
      --accent:    #a8722a;
      --accent-lo: rgba(168,114,42,0.07);
      --accent-md: rgba(168,114,42,0.18);
      --blue:      #2e7fa8;
      --blue-lo:   rgba(46,127,168,0.08);
      --green:     #2e7a58;
      --green-lo:  rgba(46,122,88,0.08);
      --hero-img-opacity: 0.06;
    }

    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', sans-serif;
      background: var(--bg); color: var(--text);
      font-size: 15px; line-height: 1.75;
      -webkit-font-smoothing: antialiased;
      transition: background-color 0.3s, color 0.2s;
    }

    /* NAV */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 200;
      height: 54px; display: flex; align-items: center; justify-content: space-between;
      padding: 0 clamp(1.25rem, 5vw, 3.5rem);
      background: rgba(10,10,10,0.88);
      backdrop-filter: blur(16px) saturate(1.4);
      border-bottom: 1px solid var(--border);
      transition: background 0.3s, border-color 0.3s;
    }
    [data-theme="light"] nav { background: rgba(247,245,241,0.88); }
    .nav-wordmark {
      font-size: 0.82rem; font-weight: 500; letter-spacing: 0.1em;
      text-transform: uppercase; color: var(--accent); text-decoration: none;
    }
    .nav-links { display: flex; gap: 2rem; list-style: none; }
    .nav-links a {
      color: var(--muted); font-size: 0.78rem; letter-spacing: 0.07em;
      text-transform: uppercase; text-decoration: none; transition: color 0.2s;
    }
    .nav-links a:hover, .nav-links a.active { color: var(--text); }
    .nav-right { display: flex; align-items: center; gap: 0.75rem; }
    .nav-cta {
      font-size: 0.75rem; letter-spacing: 0.06em; color: var(--accent);
      border: 1px solid rgba(201,168,124,0.35); padding: 0.3rem 0.9rem;
      border-radius: 2px; text-decoration: none; transition: background 0.2s;
    }
    .nav-cta:hover { background: var(--accent-lo); }
    .theme-toggle {
      background: none; border: 1px solid var(--border2); color: var(--muted);
      cursor: pointer; width: 34px; height: 34px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      transition: border-color 0.2s, color 0.2s;
    }
    .theme-toggle:hover { border-color: var(--accent); color: var(--accent); }
    .hamburger {
      display: none; background: none; border: none;
      color: var(--muted); cursor: pointer; padding: 4px;
    }

    /* HERO */
    #hero {
      min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr;
      align-items: center; padding: 54px clamp(1.25rem, 6vw, 5rem) 0;
      gap: 4rem; border-bottom: 1px solid var(--border); position: relative; overflow: hidden;
    }
    #hero::before {
      content: ''; position: absolute; inset: 0;
      background-image: url('https://images.unsplash.com/photo-1530026405186-ed1f139313f3?w=1600&q=60&fit=crop');
      background-size: cover; background-position: center;
      opacity: var(--hero-img-opacity); z-index: 0;
    }
    .hero-left, .hero-right { position: relative; z-index: 1; }
    .hero-avatar {
      width: 90px; height: 90px; border-radius: 50%;
      background: var(--surface); border: 2px solid rgba(201,168,124,0.35);
      box-shadow: 0 0 0 4px rgba(201,168,124,0.07);
      margin-bottom: 1.6rem; overflow: hidden; flex-shrink: 0;
    }
    .hero-avatar img { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; }
    .hero-eyebrow {
      font-size: 0.72rem; letter-spacing: 0.16em; text-transform: uppercase;
      color: var(--accent); margin-bottom: 1.4rem; display: flex; align-items: center; gap: 0.75rem;
    }
    .hero-eyebrow::before { content: ''; display: block; width: 28px; height: 1px; background: var(--accent); }
    h1 {
      font-family: 'Lora', serif; font-size: clamp(3rem, 6vw, 5rem);
      font-weight: 400; line-height: 1.08; color: var(--text); margin-bottom: 1.5rem;
    }
    h1 em { font-style: italic; color: var(--accent); }
    .hero-bio { font-size: 1.05rem; color: var(--sub); line-height: 1.85; max-width: 440px; margin-bottom: 2.5rem; }
    .hero-bio strong { color: var(--text); font-weight: 500; }
    .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
    .btn-primary {
      background: var(--accent); color: #0a0a0a; font-size: 0.78rem; font-weight: 600;
      letter-spacing: 0.08em; text-transform: uppercase; padding: 0.65rem 1.4rem;
      border-radius: 2px; text-decoration: none; transition: opacity 0.2s;
    }
    .btn-primary:hover { opacity: 0.85; }
    .btn-ghost {
      border: 1px solid var(--border2); color: var(--sub); font-size: 0.78rem;
      letter-spacing: 0.06em; text-transform: uppercase; padding: 0.65rem 1.4rem;
      border-radius: 2px; text-decoration: none; transition: border-color 0.2s, color 0.2s;
    }
    .btn-ghost:hover { border-color: var(--sub); color: var(--text); }
    .hero-right {
      display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
      background: var(--border); border: 1px solid var(--border); border-radius: 6px; overflow: hidden;
    }
    .stat-card {
      background: var(--surface); padding: 1.75rem 1.5rem;
      display: flex; flex-direction: column; gap: 0.4rem; transition: background 0.2s;
    }
    .stat-card:hover { background: var(--surface2); }
    .stat-num { font-family: 'Lora', serif; font-size: 2.2rem; color: var(--accent); line-height: 1; }
    .stat-label { font-size: 0.78rem; color: var(--muted); line-height: 1.4; }

    /* SECTIONS */
    .section-wrap {
      max-width: 900px; margin: 0 auto;
      padding: 6rem clamp(1.25rem, 5vw, 2rem); border-bottom: 1px solid var(--border);
    }
    .section-wrap:last-of-type { border-bottom: none; }
    .section-header { display: flex; align-items: baseline; gap: 1.25rem; margin-bottom: 3.5rem; }
    .section-tag { font-size: 0.68rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); flex-shrink: 0; }
    .section-rule { flex: 1; height: 1px; background: var(--border); }
    .section-title { font-family: 'Lora', serif; font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 400; color: var(--text); margin-bottom: 1rem; }
    .section-sub { font-size: 0.95rem; color: var(--sub); max-width: 580px; line-height: 1.8; }

    /* ABOUT */
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 2.5rem; }
    .about-text p { font-size: 0.95rem; color: var(--sub); line-height: 1.9; margin-bottom: 1.1rem; }
    .about-text p:last-child { margin-bottom: 0; }
    .about-text strong { color: var(--text); font-weight: 500; }
    .about-img-wrap { border-radius: 4px; overflow: hidden; border: 1px solid var(--border); margin-bottom: 1rem; height: 200px; background: var(--surface); }
    .about-img-wrap img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.75) saturate(0.6); transition: filter 0.4s; }
    .about-img-wrap:hover img { filter: brightness(0.85) saturate(0.75); }
    .aside-card { background: var(--surface); border: 1px solid var(--border); border-radius: 4px; padding: 1.4rem; margin-bottom: 1rem; }
    .aside-card:last-child { margin-bottom: 0; }
    .aside-label { font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.6rem; }
    .aside-value { font-size: 0.88rem; color: var(--text); font-weight: 500; }
    .aside-desc { font-size: 0.8rem; color: var(--muted); margin-top: 0.2rem; }
    .badge { display: inline-block; background: var(--accent-lo); border: 1px solid var(--accent-md); color: var(--accent); font-size: 0.7rem; letter-spacing: 0.06em; padding: 0.2rem 0.6rem; border-radius: 2px; margin-left: 0.3rem; }

    /* PROJECTS */
    .projects { display: flex; flex-direction: column; gap: 1.25rem; margin-top: 2.5rem; }
    .project-card { background: var(--surface); border: 1px solid var(--border); border-radius: 6px; overflow: hidden; transition: border-color 0.25s; }
    .project-card:hover { border-color: var(--border2); }
    .project-banner {
      width: 100%; height: 195px; background-size: cover; background-position: center;
      position: relative; display: flex; align-items: flex-end; padding: 1.25rem 1.75rem;
    }
    .project-banner::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(to bottom, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.72) 100%);
    }
    .project-banner-meta { position: relative; z-index: 1; display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap; }
    .project-type { font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.2rem 0.6rem; border-radius: 2px; }
    .project-type.genetics { background: rgba(126,184,212,0.18); border: 1px solid rgba(126,184,212,0.3); color: var(--blue); }
    .project-type.insilico { background: rgba(125,184,154,0.18); border: 1px solid rgba(125,184,154,0.3); color: var(--green); }
    .project-type.cell { background: rgba(201,168,124,0.18); border: 1px solid rgba(201,168,124,0.3); color: var(--accent); }
    .project-year-badge { font-size: 0.72rem; color: rgba(236,233,228,0.55); letter-spacing: 0.04em; }
    .project-body { padding: 1.75rem; display: grid; grid-template-columns: 1fr auto; gap: 1.25rem; align-items: start; }
    .project-title { font-family: 'Lora', serif; font-size: 1.15rem; font-weight: 400; color: var(--text); line-height: 1.35; margin-bottom: 0.45rem; }
    .project-inst { font-size: 0.8rem; color: var(--muted); margin-bottom: 1rem; }
    .project-desc { font-size: 0.88rem; color: var(--sub); line-height: 1.8; margin-bottom: 1.25rem; }
    .project-desc strong { color: var(--text); font-weight: 500; }
    .project-finding { background: var(--surface2); border-left: 2px solid var(--accent); padding: 0.75rem 1rem; border-radius: 0 2px 2px 0; font-size: 0.82rem; color: var(--sub); line-height: 1.7; margin-bottom: 1.25rem; }
    .project-finding em { color: var(--accent); font-style: normal; font-weight: 500; }
    .project-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
    .tag { font-size: 0.72rem; color: var(--muted); border: 1px solid var(--border); border-radius: 2px; padding: 0.2rem 0.55rem; transition: color 0.2s, border-color 0.2s; }
    .tag:hover { color: var(--text); border-color: var(--border2); }
    .project-status { font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); white-space: nowrap; }

    /* PUBLICATIONS */
    .pub-list { display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem; }
    .pub-item { display: grid; grid-template-columns: auto 1fr; gap: 1.25rem; align-items: start; padding: 1.5rem; background: var(--surface); border: 1px solid var(--border); border-radius: 4px; transition: border-color 0.2s; }
    .pub-item:hover { border-color: var(--border2); }
    .pub-icon { width: 38px; height: 38px; background: var(--surface2); border: 1px solid var(--border); border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
    .pub-status-pill { display: inline-block; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.15rem 0.55rem; border-radius: 2px; margin-bottom: 0.5rem; }
    .pub-status-pill.presented { background: var(--blue-lo); border: 1px solid rgba(126,184,212,0.2); color: var(--blue); }
    .pub-status-pill.in-prep { background: var(--accent-lo); border: 1px solid var(--accent-md); color: var(--accent); }
    .pub-title { font-family: 'Lora', serif; font-size: 0.95rem; font-style: italic; color: var(--text); line-height: 1.5; margin-bottom: 0.3rem; }
    .pub-venue { font-size: 0.78rem; color: var(--muted); }

    /* SKILLS */
    .skills-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem; margin-top: 2rem; }
    .skill-block { background: var(--surface); border: 1px solid var(--border); border-radius: 4px; padding: 1.5rem; transition: border-color 0.2s; }
    .skill-block:hover { border-color: var(--border2); }
    .skill-block-icon { font-size: 1.3rem; margin-bottom: 0.75rem; }
    .skill-block-title { font-size: 0.8rem; font-weight: 600; color: var(--text); letter-spacing: 0.05em; margin-bottom: 0.75rem; }
    .skill-block-items { display: flex; flex-direction: column; gap: 0.35rem; }
    .skill-item { font-size: 0.8rem; color: var(--sub); }

    /* CONTACT */
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem; }
    .contact-item { display: flex; align-items: center; gap: 0.9rem; background: var(--surface); border: 1px solid var(--border); border-radius: 4px; padding: 1.25rem 1.4rem; text-decoration: none; color: var(--sub); font-size: 0.85rem; transition: border-color 0.2s, color 0.2s; }
    .contact-item:hover { border-color: var(--accent); color: var(--text); }
    .contact-item svg { flex-shrink: 0; color: var(--accent); }
    .contact-label { font-size: 0.68rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.15rem; }
    .contact-val { font-size: 0.85rem; }

    /* FOOTER */
    footer { border-top: 1px solid var(--border); padding: 1.75rem clamp(1.25rem, 5vw, 3.5rem); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
    footer p { font-size: 0.75rem; color: var(--muted); }

    /* FADE */
    .fade { opacity: 0; transform: translateY(20px); transition: opacity 0.55s ease, transform 0.55s ease; }
    .fade.in { opacity: 1; transform: translateY(0); }

    /* MOBILE NAV */
    @media (max-width: 760px) {
      #hero { grid-template-columns: 1fr; gap: 3rem; padding-top: 80px; }
      .hero-right { grid-template-columns: 1fr 1fr; }
      .about-grid { grid-template-columns: 1fr; }
      .skills-grid { grid-template-columns: 1fr 1fr; }
      .contact-grid { grid-template-columns: 1fr; }
      .project-body { grid-template-columns: 1fr; }
      .nav-links { display: none; }
      .nav-links.open {
        display: flex; flex-direction: column; position: fixed; inset: 54px 0 0 0;
        background: var(--bg); z-index: 199; justify-content: center; align-items: center; gap: 2.5rem;
      }
      .nav-cta { display: none; }
      .hamburger { display: flex; }
    }
    @media (max-width: 480px) {
      .skills-grid { grid-template-columns: 1fr; }
      .hero-right { grid-template-columns: 1fr; }
      .project-banner { height: 150px; }
    }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}

// ── Renderers ──────────────────────────────────

function renderNav() {
  const navItems = ['about','research','publications','skills','contact'];
  return `
    <nav>
      <a class="nav-wordmark" href="#hero">${profile.name}</a>
      <ul class="nav-links" id="navLinks">
        ${navItems.map(s => `<li><a href="#${s}">${s.charAt(0).toUpperCase()+s.slice(1)}</a></li>`).join('')}
      </ul>
      <div class="nav-right">
        <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
          <span class="icon-moon">${icons.moon}</span>
          <span class="icon-sun" style="display:none">${icons.sun}</span>
        </button>
        <a class="nav-cta" href="mailto:${profile.email}">Get in touch →</a>
        <button class="hamburger" id="hamburger">${icons.menu}</button>
      </div>
    </nav>`;
}

function renderHero() {
  return `
    <section id="hero">
      <div class="hero-left">
        <div class="hero-avatar">
          <img src="${profile.avatar}" alt="${profile.name}" />
        </div>
        <p class="hero-eyebrow">${profile.role} · ${profile.location}</p>
        <h1>${profile.name.split(' ')[0]}<br><em>${profile.name.split(' ')[1]}</em></h1>
        <p class="hero-bio">${profile.tagline}</p>
        <div class="hero-actions">
          <a class="btn-primary" href="#research">View Research</a>
          <a class="btn-ghost" href="${profile.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>
        </div>
      </div>
      <div class="hero-right">
        ${stats.map(s => `
          <div class="stat-card">
            <span class="stat-num">${s.num}</span>
            <span class="stat-label">${s.label.replace('\n','<br>')}</span>
          </div>`).join('')}
      </div>
    </section>`;
}

function renderAbout() {
  return `
    <div class="section-wrap" id="about">
      <div class="section-header">
        <span class="section-tag">About</span>
        <span class="section-rule"></span>
      </div>
      <h2 class="section-title">A little about me</h2>
      <div class="about-grid">
        <div class="about-text fade">
          ${profile.about.map(p => `<p>${p}</p>`).join('')}
        </div>
        <div class="fade">
          <div class="about-img-wrap">
            <img src="${profile.labPhoto}" alt="Amal Kannan in the research lab" />
          </div>
          ${sideCards.map(c => `
            <div class="aside-card">
              <p class="aside-label">${c.label}</p>
              <p class="aside-value">${c.value}${c.badge ? `<span class="badge">${c.badge}</span>` : ''}</p>
              <p class="aside-desc">${c.desc}</p>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
}

function renderProjects() {
  return `
    <div class="section-wrap" id="research">
      <div class="section-header">
        <span class="section-tag">Research</span>
        <span class="section-rule"></span>
      </div>
      <h2 class="section-title">Projects</h2>
      <p class="section-sub">Each project represents a distinct methodological world — from wet-lab genotyping to network pharmacology to cell biology.</p>
      <div class="projects">
        ${projects.map(p => `
          <div class="project-card fade">
            <div class="project-banner" style="background-image:url('${p.image}');background-color:${p.imgBg}">
              <div class="project-banner-meta">
                <span class="project-type ${p.type}">${p.label}</span>
                <span class="project-year-badge">${p.period}</span>
              </div>
            </div>
            <div class="project-body">
              <div>
                <h3 class="project-title">${p.title}</h3>
                <p class="project-inst">${p.inst}</p>
                <p class="project-desc">${p.desc}</p>
                ${p.finding ? `<div class="project-finding">${p.finding}</div>` : ''}
                <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
              </div>
              <span class="project-status">${p.status}</span>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderPublications() {
  return `
    <div class="section-wrap" id="publications">
      <div class="section-header">
        <span class="section-tag">Publications</span>
        <span class="section-rule"></span>
      </div>
      <h2 class="section-title">Research Output</h2>
      <div class="pub-list">
        ${publications.map(p => `
          <div class="pub-item fade">
            <div class="pub-icon">${p.icon}</div>
            <div>
              <span class="pub-status-pill ${p.status}">${p.label}</span>
              <p class="pub-title">${p.title}</p>
              <p class="pub-venue">${p.venue}</p>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderSkills() {
  return `
    <div class="section-wrap" id="skills">
      <div class="section-header">
        <span class="section-tag">Skills</span>
        <span class="section-rule"></span>
      </div>
      <h2 class="section-title">Technical toolkit</h2>
      <div class="skills-grid">
        ${skills.map(s => `
          <div class="skill-block fade">
            <div class="skill-block-icon">${s.icon}</div>
            <p class="skill-block-title">${s.title}</p>
            <div class="skill-block-items">
              ${s.items.map(i => `<span class="skill-item">${i}</span>`).join('')}
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderContact() {
  const items = [
    { href: `mailto:${profile.email}`, icon: icons.email, label: 'Email',    val: profile.email },
    { href: profile.linkedin,          icon: icons.linkedin, label: 'LinkedIn', val: 'amal-kannan-464393259', target: '_blank' },
    { href: `tel:${profile.phone}`,    icon: icons.phone,  label: 'Phone',   val: profile.phone },
    { href: null,                      icon: icons.location, label: 'Location', val: profile.location },
  ];
  return `
    <div class="section-wrap" id="contact">
      <div class="section-header">
        <span class="section-tag">Contact</span>
        <span class="section-rule"></span>
      </div>
      <h2 class="section-title">Let's connect</h2>
      <p class="section-sub">I'm actively exploring direct PhD programmes in molecular and clinical genomics. If you're working on something at the intersection of genomics, diagnostics, or precision medicine — I'd love to talk.</p>
      <div class="contact-grid">
        ${items.map(i => i.href
          ? `<a class="contact-item" href="${i.href}"${i.target ? ` target="${i.target}" rel="noopener"` : ''}>${i.icon}<div><span class="contact-label">${i.label}</span><span class="contact-val">${i.val}</span></div></a>`
          : `<div class="contact-item" style="pointer-events:none">${i.icon}<div><span class="contact-label">${i.label}</span><span class="contact-val">${i.val}</span></div></div>`
        ).join('')}
      </div>
    </div>`;
}

function renderFooter() {
  return `
    <footer>
      <p>© 2026 ${profile.name} · ${profile.location}</p>
      <p>Seeking PhD in Molecular &amp; Clinical Genomics</p>
    </footer>`;
}

// ── Interactions ────────────────────────────────

function setupThemeToggle() {
  const html   = document.documentElement;
  const btn    = document.getElementById('themeToggle');
  const moon   = btn.querySelector('.icon-moon');
  const sun    = btn.querySelector('.icon-sun');

  const apply = (theme) => {
    html.setAttribute('data-theme', theme);
    moon.style.display = theme === 'light' ? 'none'  : 'block';
    sun.style.display  = theme === 'light' ? 'block' : 'none';
    localStorage.setItem('theme', theme);
  };

  apply(localStorage.getItem('theme') || 'dark');
  btn.addEventListener('click', () => apply(html.getAttribute('data-theme') === 'light' ? 'dark' : 'light'));
}

function setupMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

function setupScrollEffects() {
  // Fade-in on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in'), i * 90);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade').forEach(el => io.observe(el));

  // Active nav link
  const sections = document.querySelectorAll('[id]');
  const anchors  = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 80) current = s.id; });
    anchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }, { passive: true });
}

// ── Boot ───────────────────────────────────────

function init() {
  injectStyles();

  const app = document.getElementById('app');
  app.innerHTML = [
    renderNav(),
    renderHero(),
    renderAbout(),
    renderProjects(),
    renderPublications(),
    renderSkills(),
    renderContact(),
    renderFooter(),
  ].join('');

  setupThemeToggle();
  setupMobileNav();
  setupScrollEffects();
}

init();
