# Nokia G-010G-P — a beginner's course & tutorial

A static, plain-English course that teaches how the Nokia G-010G-P fiber modem
works on the inside, and how to explore it safely — starting from zero
experience. Course **and** hands-on tutorial, with quizzes, inline SVG diagrams,
and a full glossary.

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
index.html                 course home + lesson list
glossary.html              every term, in plain English
lessons/                   one HTML file per lesson (multi-page)
  01-introduction.html
  02-inside-the-device.html
css/style.css              shared styles (light + dark, mobile)
js/quiz.js                 progressive-enhancement quizzes
docs/                      ELI11 notes for each script (see quiz.md)
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
up to a remote Git repository — add your remote and push:

```sh
git remote add origin <your-repo-url>
git push -u origin main
```

## License

Not yet chosen. Add one before publishing.
