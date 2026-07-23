// Self-test quizzes. Progressive enhancement: if this file never loads,
// the questions still read fine as plain text. No dependencies.
//
// Markup each quiz expects:
//   <div class="quiz">
//     <p class="q">Question text?</p>
//     <ul>
//       <li><button data-correct>Right answer</button></li>
//       <li><button>Wrong answer</button></li>
//     </ul>
//     <p class="verdict"></p>
//   </div>

document.querySelectorAll(".quiz").forEach(function (quiz) {
  var verdict = quiz.querySelector(".verdict");
  quiz.querySelectorAll("button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (quiz.hasAttribute("data-done")) return;      // one attempt
      quiz.setAttribute("data-done", "");
      var ok = btn.hasAttribute("data-correct");
      btn.classList.add(ok ? "correct" : "wrong");
      if (!ok) {                                        // also reveal the right one
        var right = quiz.querySelector("button[data-correct]");
        if (right) right.classList.add("correct");
      }
      if (verdict) verdict.textContent = ok ? "Correct ✓" : "Not quite — the green one is right.";
    });
  });
});
