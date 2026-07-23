// Progress tracking. Remembers which parts you've finished (in this browser
// only), shows a "mark done" toggle on each lesson, and a progress bar with
// checkmarks on the home page. Progressive enhancement: if this never loads,
// or the browser blocks storage, every page still works — you just don't get
// the ticks. No dependencies.

(function () {
  var KEY = "utm-progress";

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch (e) { return {}; }
  }
  function save(d) {
    try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {}
  }

  var done = load();

  // --- On a lesson page: add a toggle button before the prev/next nav. ---
  if (location.pathname.indexOf("/lessons/") === 0) {
    var key = location.pathname;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "mark-done";
    function render() {
      var on = !!done[key];
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.textContent = on ? "✓ Done — click to undo" : "Mark this part as done";
    }
    btn.addEventListener("click", function () {
      if (done[key]) delete done[key]; else done[key] = true;
      save(done); render();
    });
    render();
    var nav = document.querySelector("nav.lessons");
    if (nav && nav.parentNode) nav.parentNode.insertBefore(btn, nav);
    else document.body.appendChild(btn);
    return;
  }

  // --- On the home page: tick finished parts and fill the bar. ---
  var links = document.querySelectorAll('ol.toc a[href^="/lessons/"]');
  if (!links.length) return;
  var total = links.length, count = 0;
  links.forEach(function (a) {
    if (done[a.getAttribute("href")]) {
      count++;
      var li = a.closest("li");
      if (li) li.classList.add("done");
    }
  });
  var box = document.getElementById("progress");
  if (box) {
    var fill = box.querySelector(".fill");
    var label = box.querySelector(".label");
    if (fill) fill.style.width = Math.round((count / total) * 100) + "%";
    if (label) label.textContent = count + " of " + total + " parts done";
  }
})();
