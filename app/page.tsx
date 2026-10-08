"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IconArrowUpRight, IconMoon, IconSun } from "@tabler/icons-react";
import portrait from "@/public/me.png";
import spacMemTeaser from "@/public/publication-teasers/spac-mem.webp";
import immersiveTeaser from "@/public/publication-teasers/immersive-recommendation.webp";
import vogueTeaser from "@/public/publication-teasers/vogue.webp";
import { LINKS } from "@/app/constants";
import publications from "./research-publications.json";
import styles from "./homepage.module.css";

const teasers = {
  2: { image: spacMemTeaser, alt: "Spatially grounded memory connecting scenes, dialogue, and persistent objects." },
  0: { image: immersiveTeaser, alt: "Shoe-store recommendations highlighted with immersive item labels." },
  1: { image: vogueTeaser, alt: "Five stages of a fashion recommendation conversation." },
};

export default function HomePage() {
  const [light, setLight] = useState(true);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const forced = params.get("theme");
    const saved = window.localStorage.getItem("david-theme");
    const initial = forced || saved || "light";
    setLight(initial ? initial === "light" : !window.matchMedia("(prefers-color-scheme: dark)").matches);
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const followSystem = (event: MediaQueryListEvent) => {
      if (!forced && !window.localStorage.getItem("david-theme")) {
        setLight(!event.matches);
      }
    };
    preference.addEventListener("change", followSystem);
    return () => preference.removeEventListener("change", followSystem);
  }, []);
  function toggleTheme() {
    const next = !light;
    setLight(next);
    window.localStorage.setItem("david-theme", next ? "light" : "dark");
    const url = new URL(window.location.href);
    url.searchParams.set("theme", next ? "light" : "dark");
    window.history.replaceState(null, "", url);
  }
  return (
    <div className={`${styles.site} ${styles.typeSystem} ${styles.cyber} ${light ? styles.light : styles.dark} ${styles.compact}`}>
      <a className={styles.skip} href="#main">Skip to content</a>
      <div className={styles.container}>
        <header className={styles.header}>
          <a className={styles.wordmark} href="#main">DG<span aria-hidden="true">.</span></a>
          <nav aria-label="Main navigation">
            <a href="#publications">Publications</a>
            <a href="#current-research">Current Research</a>
            <a href="#contact">Contact</a>
            <button type="button" onClick={toggleTheme} className={styles.themeToggle} aria-label={`Switch to ${light ? "dark" : "light"} mode`}>{light ? <IconMoon size={18} aria-hidden="true" focusable="false" /> : <IconSun size={18} aria-hidden="true" focusable="false" />}<span className={styles.themeLabel}>{light ? "Dark" : "Light"}</span></button>
          </nav>
        </header>
        <main id="main">
          <section className={styles.intro} aria-labelledby="name">
            <div className={styles.bio}>
              <div className={styles.eyebrow}>UNIVERSITY OF TORONTO · MASc</div>
              <h1 id="name">David Guo</h1>
              <p className={styles.discipline}>Machine learning &amp; human–AI interaction</p>
              <p>I’m a MASc student in the <a href={LINKS.lab}>Data-Driven Decision Making (D3M) Lab</a> at the University of Toronto, supervised by Prof. Scott Sanner, working on machine learning for interactive AI systems.</p>
              <p>My work spans <strong>conversational recommendation</strong>, <strong>user modeling</strong>, and <strong>memory for Agentic systems</strong>, combining empirical studies of interaction with building and evaluating systems.</p>
              <div className={styles.links} aria-label="Professional links">
                <a href={LINKS.cv}>CV <IconArrowUpRight className={styles.linkIcon} size={14} stroke={1.7} aria-hidden="true" focusable="false" /></a>
                <a href="#contact">Email</a>
                <a href={LINKS.github}>GitHub <IconArrowUpRight className={styles.linkIcon} size={14} stroke={1.7} aria-hidden="true" focusable="false" /></a>
                <a href={LINKS.scholar}>Google Scholar <IconArrowUpRight className={styles.linkIcon} size={14} stroke={1.7} aria-hidden="true" focusable="false" /></a>
                <a href={LINKS.linkedin}>LinkedIn <IconArrowUpRight className={styles.linkIcon} size={14} stroke={1.7} aria-hidden="true" focusable="false" /></a>
              </div>
            </div>
            <div className={styles.portrait}><div className={styles.portraitFrame}><Image src={portrait} alt="David Guo portrait" fill sizes="240px" priority /></div><span aria-hidden="true" className={styles.portraitLabel}>TORONTO, ON</span>
            </div>
          </section>
          <section id="publications" className={styles.section} aria-labelledby="publications-title">
            <div className={styles.sectionHeading}><span className={styles.index} aria-hidden="true">01 /</span><h2 id="publications-title">Publications &amp; Preprints</h2></div>
            <div className={styles.papers}>
              {publications.data.map((paper) => (
                <article key={paper.key} className={`${styles.paper} ${paper.status.toLowerCase().startsWith('preprint') ? styles.preprint : ''}`}>
                  <a className={styles.paperFigure} href={paper.link} aria-label={`Read ${paper.title}`}>
                    <Image src={teasers[paper.key as keyof typeof teasers].image} alt={teasers[paper.key as keyof typeof teasers].alt} sizes="(max-width: 640px) calc(100vw - 72px), 220px" />
                  </a>
                  <div className={styles.paperDetails}>
                  <p className={styles.venue}>{paper.venue} <span>· {paper.status}</span></p>
                  <h3>{paper.link ? <a href={paper.link}>{paper.title}</a> : paper.title}</h3>
                  <p className={styles.authors}>{paper.authors.split(/(David Guo)/g).map((part, index) => part === "David Guo" ? <strong key={index}>{part}</strong> : part)}</p>
                  {(paper.link || paper.codeLink) && <div className={styles.paperLinks}>
                    {paper.link && <a href={paper.link}>Paper <IconArrowUpRight className={styles.linkIcon} size={14} stroke={1.7} aria-hidden="true" focusable="false" /></a>}
                    {paper.codeLink && <a href={paper.codeLink}>Code <IconArrowUpRight className={styles.linkIcon} size={14} stroke={1.7} aria-hidden="true" focusable="false" /></a>}
                  </div>}
                  </div>
                </article>
              ))}
            </div>
            <p className={styles.note}>* Equal contribution</p>
          </section>
          <section id="current-research" className={styles.section} aria-labelledby="research-title">
            <div className={styles.sectionHeading}><span className={styles.index} aria-hidden="true">02 /</span><h2 id="research-title">Current Research</h2></div>
            <article className={`${styles.research} ${styles.researchBrief}`}>
              <span className={styles.status}>Ongoing</span>
              <h3>An <strong>XR framework</strong> for interaction research grounded in persistent world state.</h3>
              <ul className={styles.researchTopics}>
                <li>AI assistants in AR/XR</li>
                <li>Memory and personalization</li>
                <li>Learning from visual context</li>
              </ul>
            </article>
          </section>
          <section id="contact" className={`${styles.section} ${styles.contact}`} aria-labelledby="contact-title">
            <div className={styles.sectionHeading}><span className={styles.index} aria-hidden="true">03 /</span><h2 id="contact-title">Contact</h2></div>
            <div className={styles.contactDetails}>
              <div><span className={styles.contactLabel}>UNIVERSITY EMAIL</span><span className={styles.emailAddress}>davidmy [dot] guo [at] mail [dot] utoronto [dot] ca</span></div>
              <div><span className={styles.contactLabel}>LOCATION</span><span>Toronto, ON</span></div>
              <div className={styles.contactProfiles}><span className={styles.contactLabel}>CV &amp; PROFILES</span><div className={styles.links}><a href={LINKS.cv}>CV</a><a href={LINKS.github}>GitHub</a><a href={LINKS.scholar}>Google Scholar</a><a href={LINKS.linkedin}>LinkedIn</a></div></div>
            </div>
          </section>
        </main>
        <footer className={styles.footer}><span>© {new Date().getFullYear()} David Guo</span><span>Toronto, ON</span></footer>
      </div>
    </div>
  );
}
