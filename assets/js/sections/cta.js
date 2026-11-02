/* SECTION: cta — closing call-to-action band. Content: content/home.js -> cta */
RC.section("cta", function (el) {
  var E = RC.esc, C = CONTENT.home.cta, S = CONTENT.site;
  el.innerHTML = '<section class="s-cta"><div class="wrap">' +
    "<div><h2>" + RC.tx(C.title) + "</h2><p>" + RC.tx(C.text) + "</p></div>" +
    '<div class="actions"><a class="btn btn-primary btn-lg" href="' + C.primary.href + '">' + E(C.primary.label) + '</a><a class="btn btn-wa btn-lg" ' + RC.waAttrs() + ">" + RC.waIcon() + E(C.whatsapp) + "</a></div>" +
    '<p class="cta-meta">' + E(S.responseTime) + ". " + E(S.hours) + ".</p>" +
  "</div></section>";
});
