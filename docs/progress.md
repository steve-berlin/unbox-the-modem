# `js/progress.js` explained (ELI11)

## What it is

A small helper (~50 lines, no libraries) that remembers which parts of the
course you've finished, and shows that progress two ways:

- On each lesson: a **"Mark this part as done"** button.
- On the home page: a **progress bar** and a **✓** next to every finished part.

## Where the memory lives

In your browser's own private notebook, called *localStorage*. It stays on your
computer — nothing is sent anywhere, and other people's browsers don't see it.
If you clear your browser data, the ticks reset. That's fine and expected.

## Why the site still works without it

Everything is written in the HTML first. If `progress.js` never loads, or your
browser blocks storage, every page still reads perfectly — you just don't see
the bar or the ticks. This "works even if the script fails" idea is called
*progressive enhancement*.

## How it works, step by step

1. When a page loads, the script reads the saved list of finished parts.
2. **If the page is a lesson** (its address starts with `/lessons/`): it creates
   the "Mark this part as done" button and drops it in just above the
   previous/next links. Clicking it flips this part between done and not-done and
   saves the change. Done shows green.
3. **If the page is the home page**: it looks at every part in the list, counts
   how many are marked done, fills the bar to that fraction, writes
   "X of 20 parts done", and adds a green ✓ after each finished part's link.

## How a part is identified

By its web address (for example `/lessons/05-how-embedded-linux-boots.html`).
The home-page links use the same addresses, so a part marked done in a lesson
shows its ✓ back on the home page automatically.

## If you add a new lesson

1. Give it its own file in `lessons/` and link it from the list in `index.html`
   (same as always).
2. Make sure the lesson loads the script near the end of the page:
   `<script src="/js/progress.js" defer></script>`.

No build step, nothing to install.
