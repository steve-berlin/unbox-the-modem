# CLAUDE.md — Nokia G-010G-P course site

Static, dependency-free course site. Beginner audience. Read `TOPIC.md` for the
full brief and `README.md` for layout.

## What this is

- Plain HTML per page + one shared `css/style.css` + one `js/quiz.js` (~30 lines).
- No framework, no build step, no package manager. Files open directly.
- Serves under [pyweb-vanilla](https://github.com/steve-berlin/pyweb-vanilla):
  `SimpleHTTPRequestHandler` from repo root, `/` → `index.html`, subdirs work.
  Use root-absolute asset paths (`/css/style.css`, `/js/quiz.js`).

## Voice & content rules (from TOPIC.md — non-negotiable)

- Plain English, TL;DR-first. No jargon or abstract terms.
- Do NOT call an operating system a "ROM" or "firmware" when it's plainly an OS.
- Explain every new word before use; also add it to `glossary.html`.
- Separate facts from guesses. Safety and backups before any change.
- Course + tutorial, not loose lessons. Beginner profile throughout.

## Lesson page shape (keep consistent)

crumb → `<h1>` + lesson label → TL;DR → simple sections → inline SVG figure(s)
→ Quick quiz (`.quiz` blocks) → optional `<details>` self-test → Next lesson →
`nav.lessons` → `<script src="/js/quiz.js" defer>`.

## Conventions

- Quizzes: correct answer button gets `data-correct`. See `docs/quiz.md`.
- Progress: `js/progress.js` self-injects a "mark done" toggle on lessons and
  fills `#progress` + ticks `ol.toc li.done` on home (localStorage key
  `utm-progress`). Every lesson loads quiz.js AND progress.js. See `docs/progress.md`.
- SVG: inline, `viewBox`, `stroke/fill="currentColor"` so it themes + scales.
- CSS variables drive light/dark; don't hardcode colors in pages.
- Content is fact-checked before publishing. Don't invent hardware-hacking
  steps for this model; mark unwritten lessons `soon` in `index.html`.

## Maintenance duties (per project workflow)

- Keep this file < 200 lines / < 40 KB. Offer lossless compression if it grows.
- After writing/changing any script, update its ELI11 doc in `docs/`.
- Keep the repo backed up to its Git remote.
- Minimalist first: fewest files, lines, dependencies; then best performance.

## State

- Remote: https://github.com/steve-berlin/unbox-the-modem (branch `main`).
- All 20 parts (00-introduction … 19-ethics-safety) + glossary written.
- License: AGPL-3.0 (LICENSE from remote).
