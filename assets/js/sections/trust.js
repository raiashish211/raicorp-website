/* SECTION: trust — stats bar. Content: content/home.js -> trust. {services} {industries} auto-count. */
RC.section("trust", function (el) {
  var nS = CONTENT.services.items.length, nI = CONTENT.industries.items.length;
  el.innerHTML = '<section class="s-trust"><div class="wrap"><dl>' + RC.list(CONTENT.home.trust.items, function (t) {
    var v = RC.t(t.value).replace("{services}", nS).replace("{industries}", nI);
    return '<div><dt>' + RC.esc(v) + "</dt><dd>" + RC.tx(t.label) + "</dd></div>";
  }) + "</dl></div></section>";
});
