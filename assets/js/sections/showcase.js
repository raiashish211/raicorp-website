/* SECTION: showcase — "pick your business, see the website". Content: content/home.js -> showcase (portfolio ids) */
RC.section("showcase", function (el) {
  var E = RC.esc, SH = CONTENT.home.showcase;
  var picks = (SH.picks || []).map(RC.sample).filter(Boolean);
  if (!picks.length) { el.innerHTML = ""; return; }
  el.innerHTML = '<section class="s-showcase section"><div class="wrap">' +
    '<div class="section-head"><h2>' + RC.tx(SH.heading) + "</h2><p>" + RC.tx(SH.intro) + "</p></div>" +
    '<div class="showcase">' +
      '<div class="sc-picks" role="tablist" aria-label="Business type">' + RC.list(picks, function (s, i) {
        var c = RC.category(s.category);
        return '<button type="button" role="tab" aria-selected="' + (i === 0) + '" data-id="' + E(s.id) + '"><span class="sc-type">' + E(RC.typeLabel(s)) + "</span>" + E(c ? c.name : s.title) + "</button>";
      }) + '<a class="sc-all" href="work.html">See all business types</a></div>' +
      '<div class="sc-stage"><div class="sc-frame" aria-live="polite"></div><div class="sc-cap"><div><p class="sc-title"></p><p class="sc-sum"></p></div><div class="sc-btns"><a class="btn btn-gold sc-live" href="#" target="_blank" rel="noopener">Open live ↗</a><a class="btn btn-ghost sc-more" href="#">Details</a></div></div></div>' +
    "</div></div></section>";
  var frame = el.querySelector(".sc-frame"), title = el.querySelector(".sc-title"), sum = el.querySelector(".sc-sum"), link = el.querySelector(".sc-more"), live = el.querySelector(".sc-live");
  function show(id) {
    var s = RC.sample(id); if (!s) return;
    frame.innerHTML = RC.media(s, s.media[0], "main");
    title.textContent = s.title + (s.location ? ", " + s.location : "");
    sum.textContent = s.summary;
    link.href = "project.html?id=" + encodeURIComponent(s.id);
    live.hidden = !s.live; if (s.live) live.href = s.live;
    RC.$all(".sc-picks button", el).forEach(function (b) { b.setAttribute("aria-selected", b.getAttribute("data-id") === id ? "true" : "false"); });
  }
  el.querySelector(".sc-picks").addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) show(b.getAttribute("data-id")); });
  show(picks[0].id);
});
