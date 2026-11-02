/* SECTION: about — story, team model, values, stack, locations. Content: content/about.js + site.js */
RC.section("about", function (el) {
  var E = RC.esc, A = CONTENT.about, S = CONTENT.site;
  el.innerHTML =
    '<section class="section"><div class="wrap about">' +
      '<div class="about-story"><h2>' + E(A.storyHeading) + "</h2>" + RC.list(A.story, function (p) { return "<p>" + RC.tx(p) + "</p>"; }) + "</div>" +
      '<aside class="about-card"><p class="big">' + RC.t("{exp}") + "+</p><p>years building production software. " + E(S.company) + " registered in " + E(S.foundedYear) + ".</p>" +
        '<h3><a href="' + E(S.founderUrl || "ashish/index.html") + '">' + E(S.founder) + " ↗</a></h3><p>" + E(S.founderRole) + "</p>" +
        '<h3>Where we work</h3><ul class="about-locs">' + RC.list(S.locations, function (l) { return "<li><strong>" + E(l.city) + "</strong><span>" + E(l.note) + "</span></li>"; }) + "</ul>" +
      "</aside>" +
    "</div></section>" +
    '<section class="section section-dark"><div class="wrap about-team">' +
      "<div><h2>" + E(A.teamHeading) + '</h2><p class="lede">' + RC.tx(A.team) + "</p></div>" +
      '<div class="values">' + RC.list(A.values, function (v) { return '<div class="value"><h3>' + E(v.title) + "</h3><p>" + E(v.text) + "</p></div>"; }) + "</div>" +
    "</div></section>" +
    '<section class="section"><div class="wrap"><div class="section-head"><h2>What we build with</h2></div><p class="stack">' +
      RC.list(A.stack, function (t) { return '<span class="tag tag-lg">' + E(t) + "</span>"; }) + "</p></div></section>";
});
