/* SECTION: journey — "0 to 100" stages. Content: content/home.js -> journey */
RC.section("journey", function (el) {
  var E = RC.esc, J = CONTENT.home.journey;
  el.innerHTML = '<section class="s-journey section section-dark"><div class="wrap">' +
    '<div class="section-head"><h2>' + RC.tx(J.heading) + "</h2><p>" + RC.tx(J.intro) + "</p></div>" +
    '<ol class="journey">' + RC.list(J.stages, function (st) {
      return "<li><h3>" + E(st.name) + "</h3><p>" + E(st.text) + '</p><ul class="journey-svcs">' +
        RC.list(st.services, function (id) { var s = RC.service(id); return s ? '<li><a href="' + (s.link || "service.html?id=" + s.id) + '">' + E(s.name) + "</a></li>" : ""; }) +
        "</ul></li>";
    }) + "</ol>" +
    '<div class="actions"><a class="btn btn-primary" href="contact.html">Plan my journey</a><a class="btn btn-ghost-light" href="services.html">Explore all services</a></div>' +
  "</div></section>";
});
