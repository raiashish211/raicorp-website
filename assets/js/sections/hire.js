/* SECTION: hire — roles + engagement models. Content: content/hire.js */
RC.section("hire", function (el) {
  var E = RC.esc, H = CONTENT.hire, S = CONTENT.site;
  el.innerHTML =
    '<section class="section"><div class="wrap">' +
      '<div class="section-head"><h2>' + E(H.rolesHeading) + "</h2></div>" +
      '<div class="roles">' + RC.list(H.roles, function (r) {
        return '<div class="role">' + RC.icon(r.icon) + "<h3>" + E(r.name) + '</h3><p class="p-tech">' + RC.list(r.skills, function (k) { return '<span class="tag">' + E(k) + "</span>"; }) + "</p>" +
          '<a ' + RC.waAttrs("Hi " + S.company + ", I'm looking to hire: " + r.name + ".") + ">Ask for profiles</a></div>";
      }) + "</div>" +
    "</div></section>" +
    '<section class="section section-alt"><div class="wrap">' +
      '<div class="section-head"><h2>' + E(H.modelsHeading) + "</h2></div>" +
      '<div class="plans">' + RC.list(H.models, function (m, i) {
        return '<div class="plan' + (i === 0 ? " plan-hi" : "") + '"><h3>' + E(m.name) + '</h3><p class="plan-for">' + E(m.text) + "</p>" +
          '<p class="plan-price"><strong>' + RC.price(m.price) + "</strong>" + (m.suffix ? "<span>" + E(m.suffix) + "</span>" : "") + "</p>" +
          '<ul class="ticks">' + RC.list(m.points, function (p) { return "<li>" + RC.icon("check") + E(p) + "</li>"; }) + "</ul>" +
          '<a class="btn ' + (i === 0 ? "btn-primary" : "btn-ghost") + '" href="#hire-form">Start hiring</a></div>';
      }) + "</div>" +
    "</div></section>";
});
