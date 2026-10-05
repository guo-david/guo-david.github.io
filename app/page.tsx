"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import portrait from "@/public/me.png";
import { LINKS } from "@/app/constants";
import publications from "./research-publications.json";
import styles from "./homepage.module.css";

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
            <button type="button" onClick={toggleTheme} className={styles.themeToggle} aria-label={`Switch to ${light ? "dark" : "light"} mode`}><span aria-hidden="true">{light ? "◐" : "☼"}</span><span className={styles.themeLabel}>{light ? "Dark" : "Light"}</span></button>
          </nav>
        </header>
        <main id="main">
          <section className={styles.intro} aria-labelledby="name">
            <div className={styles.bio}>
              <div className={styles.eyebrow}>UNIVERSITY OF TORONTO · MASc</div>
              <h1 id="name">David Guo</h1>
              <p className={styles.discipline}>Machine learning &amp; human–AI interaction</p>
              <p>I’m a MASc student at the University of Toronto, supervised by Prof. Scott Sanner, studying machine learning and human–AI interaction.</p>
              <p>My work spans <strong>conversational recommendation</strong>, <strong>user modeling</strong>, and <strong>memory for AI assistants</strong>.</p>
              <div className={styles.links} aria-label="Professional links">
                <a href={LINKS.cv}>CV <span aria-hidden="true">↗</span></a>
                <a href="#contact">Email</a>
                <a href={LINKS.github}>GitHub <span aria-hidden="true">↗</span></a>
                <a href={LINKS.linkedin}>LinkedIn <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className={styles.portrait}><div className={styles.portraitFrame}><Image src={portrait} alt="David Guo portrait" width={480} height={560} priority /></div><span aria-hidden="true" className={styles.portraitLabel}>TORONTO, ON</span>
            </div>
          </section>
          <section id="publications" className={styles.section} aria-labelledby="publications-title">
            <div className={styles.sectionHeading}><span className={styles.index} aria-hidden="true">01 /</span><h2 id="publications-title">Publications &amp; Preprints</h2></div>
            <div className={styles.papers}>
              {publications.data.map((paper) => (
                <article key={paper.key} className={`${styles.paper} ${paper.status.toLowerCase().startsWith('preprint') ? styles.preprint : ''}`}>
                  <p className={styles.venue}>{paper.venue} <span>· {paper.status}</span></p>
                  <h3>{paper.link ? <a href={paper.link}>{paper.title}</a> : paper.title}</h3>
                  <p className={styles.authors}>{paper.authors.split(/(David Guo)/g).map((part, index) => part === "David Guo" ? <strong key={index}>{part}</strong> : part)}</p>
                  {paper.link && <div className={styles.paperLinks}><a href={paper.link}>Paper <span aria-hidden="true">↗</span></a></div>}
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
              <div className={styles.contactProfiles}><span className={styles.contactLabel}>CV &amp; PROFILES</span><div className={styles.links}><a href={LINKS.cv}>CV</a><a href={LINKS.github}>GitHub</a><a href={LINKS.linkedin}>LinkedIn</a></div></div>
            </div>
          </section>
        </main>
        <footer className={styles.footer}><span>© {new Date().getFullYear()} David Guo</span><span>Toronto, ON</span></footer>
      </div>
    </div>
  );
}
