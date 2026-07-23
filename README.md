# Unbox the Modem — a beginner's Nokia G-010G-P course

A static, plain-English course that teaches how the Nokia G-010G-P fiber modem
works on the inside, and how to explore it safely — starting from zero
experience. Course **and** hands-on tutorial: 20 parts (Introduction + Parts
1–19) plus a 130-term glossary, with quizzes, "try it yourself" exercises,
inline SVG diagrams, light/dark theme and no build step.

Backed up at <https://github.com/steve-berlin/unbox-the-modem>.

## Tech

Plain HTML + one shared CSS file + one ~30-line JavaScript file for quizzes.
**No frameworks, no build step, no dependencies.** Every page is a normal file
you can open directly.

## Run it locally

Any static file server works. It's built for
[pyweb-vanilla](https://github.com/steve-berlin/pyweb-vanilla) — run that from
the repo root and it serves `index.html`. Or, with Python already installed:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Layout

```
index.html                 course home + full lesson list
glossary.html              every term, in plain English (~130)
lessons/                   one HTML file per part (multi-page)
  00-introduction.html
  01-whats-inside.html
  02-uart-hidden-console.html
  … through …
  19-ethics-safety.html
css/style.css              shared styles (light + dark, mobile)
js/quiz.js                 progressive-enhancement quizzes
js/progress.js             per-part "done" marks + home progress bar (localStorage)
docs/                      ELI11 notes for each script (quiz.md, progress.md)
TOPIC.md                   the course brief / spec
CLAUDE.md                  guidance for AI assistants working on this repo
```

## Adding a lesson

1. Copy an existing file in `lessons/` as your template.
2. Keep the shape: crumb → TL;DR → simple explanation → figure(s) → quiz → next.
3. Add the lesson to the list in `index.html` (change its `soon` row to a link).
4. Define any new term in `glossary.html`.

## Editing conventions

- Plain English, no jargon. Prefer "permanent storage" over "flash", etc.
- Explain before doing. Facts and guesses stay clearly separate.
- Safety and backups come before any change to hardware or software.

## Hosting & backups

Hosting/deploy is managed by the site owner (pyweb-vanilla). The repo is backed
up to <https://github.com/steve-berlin/unbox-the-modem>:

```sh
git push origin main
```

## License

AGPL-3.0 — see [`LICENSE`](LICENSE).
