/* SECTION: footer — Content: content/site.js (footer, locations, socials, contact) */
RC.section("footer", function (el) {
  var E = RC.esc, S = CONTENT.site, F = S.footer;
  el.innerHTML =
    '<footer class="s-footer"><div class="wrap">' +
      '<div class="foot-top">' +
        '<div class="foot-brand"><a class="logo logo-inverse" href="index.html" aria-label="' + E(S.company) + ' home">' + RC.logo("Software · AI · Talent") + "</a>" +
          "<p>" + RC.tx(F.blurb) + "</p>" +
          '<p class="foot-contact"><a ' + RC.waAttrs() + ">WhatsApp " + E(S.phoneDisplay) + '</a><br><a href="mailto:' + E(S.email) + '">' + E(S.email) + "</a><br>" + E(S.hours) + "</p>" +
        "</div>" +
        RC.list(F.columns, function (c) {
          return '<div class="foot-col"><p class="foot-title">' + E(c.title) + "</p>" + RC.list(c.links, function (l) { return '<a href="' + E(l[1]) + '">' + E(l[0]) + "</a>"; }) + "</div>";
        }) +
      "</div>" +
      '<div class="foot-locs">' + RC.list(S.locations, function (l) {
        return '<p>' + RC.icon("pin") + "<span><strong>" + E(l.city) + "</strong> " + E(l.region) + "</span></p>";
      }) + "</div>" +
      '<div class="foot-bottom"><span>' + RC.tx(F.legal) + "</span>" +
        '<span class="foot-social">' + RC.list(S.socials, function (s) { return '<a href="' + E(s.url) + '" target="_blank" rel="noopener">' + E(s.name) + "</a>"; }) + "</span>" +
      "</div>" +
    "</div></footer>";
});
