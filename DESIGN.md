# Website decisions

Updated 2026-10-08. Apply these decisions to future homepage and design-study edits unless David changes them.

- GitHub site: this version was approved for a local commit on 2026-10-05. Push or deploy only when David asks. Local preview uses port 3000.
- Keep design studies local and outside website commits. Preserve all directions, typography, palettes, spacing, detail comparisons, mixer, and favorites/analytics. Update local content and screenshots together; the original site remains an archived baseline. Do not publish further study changes unless David asks.
- Selected default: light, Cybercore, rounded (Manrope), sage (lilac + sage), compact, restrained. Keep dark-mode switching.
- Bio: use David’s supplied two paragraphs, stacked. First: “I’m a MASc student in the Data-Driven Decision Making (D3M) Lab at the University of Toronto, supervised by Prof. Scott Sanner, working on machine learning for interactive AI systems.” Link only the lab to `https://d3m.mie.utoronto.ca/`; keep Prof. Scott Sanner as plain text. Second: “My work spans conversational recommendation, user modeling, and memory for Agentic systems, combining empirical studies of interaction with building and evaluating systems.” Bold those three research areas. Do not restore the physical-environments or scientific-machine-learning sentences.
- Portrait: use a positioned frame with an absolutely filling image to avoid percentage-height gaps on mobile Safari. Keep a centered crop, 240 × 280 desktop frame, responsive on mobile. Use the DG sage/lilac favicon.
- Preprints use a subtle surface and border tint derived from each palette’s accent (lilac only in the sage palette) to distinguish them from accepted papers in both themes.
- Publications: one entry per row spanning the full content width in every theme and layout, including all restrained variants, no descriptions or results blurbs, bold David Guo consistently. Use exact supplied author order and equal-contribution marks. Do not add topic tags unless the site already uses them.
- New preprint: Have I Scene This Before? Spatially Grounded Conversational Memory for Complex Queries in Egocentric Assistants (2026). Authors: Jiazhou Liang*, Liam Gallagher*, Kiko Chen*, David Guo*, Armin Toroghi, Yifan Simon Liu, Scott Sanner. First four contributed equally; retain their asterisks and use only the section-wide equal-contribution note, without a separate note on the preprint. Status: Preprint; submitted to ICLR 2027. Never imply acceptance. arXiv URL: https://arxiv.org/abs/2610.05526 (supplied and verified 2026-10-06). Show the paper action; keep the abstract/description hidden. No unconfirmed code/dataset links or claims that David led implementation or experiments.
- Current Research: Ongoing. Title: An **XR framework** for interaction research grounded in persistent world state. Bullets: AI assistants in AR/XR; Memory and personalization; Learning from visual context. No explanatory paragraph or flow diagram.
- Contact: university email, Toronto location, CV, GitHub, LinkedIn. Display davidmy [dot] guo [at] mail [dot] utoronto [dot] ca; no raw-address mailto links in the current homepage or study specimens.

- CV: use the current PDF from `resume (8).pdf`, renamed to `public/David-Guo-ML-Researcher-CV.pdf`. Link to `/David-Guo-ML-Researcher-CV.pdf` so local previews and the study serve the updated document.

- Link arrows and theme icons use SVG icons, never Unicode characters that iOS can render as emoji.

- Publication actions: add Code links for the immersive recommendation / SceneXR paper (`https://github.com/D3Mlab/ICRS`) and VOGUE (`https://github.com/D3Mlab/vogue`). Keep them beside Paper with SVG arrows. These repositories were supplied by David; no code link for the spatial memory preprint has been supplied.
- Author spelling: **Minqi Sun**, including the equal-contribution asterisk on VOGUE. Never use “Minqing Sun.”
- Google Scholar: David confirmed `https://scholar.google.ca/citations?user=jh2S3ggAAAAJ&hl=en` is his profile. Include it in the main professional links and contact profiles.

- Preserve the local study source and refreshed comparison images in the ignored archive `local-studies/design-study.tar.gz`; its working preview is on port 3001. Do not commit the archive or publish it.

- Publication figures: use the trimmed WebP teasers beside text in 220px columns on desktop, with 16px gaps and 14px card padding. Stack figures above text on mobile. Keep original PNGs and source metadata.
