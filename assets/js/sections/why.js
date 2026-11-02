/* SECTION: why — reasons to choose us. Content: content/home.js -> why */
RC.section("why", function (el) {
  var E = RC.esc, W = CONTENT.home.why;
  el.innerHTML = '<section class="s-why section section-alt"><div class="wrap">' +
    '<div class="section-head"><h2>' + RC.tx(W.heading) + "</h2></div>" +
    '<div class="why">' + RC.list(W.items, function (w) {
      return '<div class="why-item">' + RC.icon(w.icon) + "<h3>" + E(w.title) + "</h3><p>" + E(w.text) + "</p></div>";
    }) + "</div></div></section>";
});
