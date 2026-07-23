# `js/quiz.js` explained (ELI11)

## What it is

A tiny helper that turns the little multiple-choice boxes at the end of each
lesson into something you can click. That's it. About 30 lines, no libraries.

## Why the page still works without it

The quiz is written as plain text and normal buttons in the HTML first. If
`quiz.js` never loads (slow connection, JavaScript turned off), you still see
the question and the answers — you just don't get the green/red feedback. This
"works even if the script fails" idea is called *progressive enhancement*.

## How it works, step by step

1. When a lesson page finishes loading, the script looks for every box with the
   class `quiz`.
2. For each box, it listens for a click on any of its answer buttons.
3. When you click one:
   - It locks the box so you can't keep guessing (one try per question).
   - If your button was marked `data-correct` in the HTML, it turns **green**
     and says "Correct ✓".
   - If not, your button turns **red**, the right answer also turns green, and
     it tells you the green one is correct.

## The HTML a quiz needs

The script only reacts to this shape. The correct answer is the button with
`data-correct`:

```html
<div class="quiz">
  <p class="q">Your question?</p>
  <ul>
    <li><button data-correct>The right answer</button></li>
    <li><button>A wrong answer</button></li>
  </ul>
  <p class="verdict"></p>
</div>
```

## How to add a new quiz

1. Copy the block above into a lesson.
2. Change the question and answers.
3. Put `data-correct` on the one true answer.
4. Make sure the lesson loads the script once, near the end of the page:
   `<script src="/js/quiz.js" defer></script>`.

That's everything — no build step, no install.
