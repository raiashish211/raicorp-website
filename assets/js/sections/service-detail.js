/* SECTION: service-detail — one service page. URL: service.html?id=<service id>. Content: content/services.js */
RC.section("service-detail", function (el) {
  var E = RC.esc, S = CONTENT.site, all = CONTENT.services.items;
  var s = RC.service(RC.qs("id"));
  if (!s) {
    el.innerHTML = '<div class="wrap"><div class="empty" style="margin:64px 0"><h1>Service not found</h1><a class="btn btn-primary" href="services.html">See all services</a></div></div>';
    return;
  }
  document.body.setAttribute("data-title", s.name);
  var group = CONTENT.services.groups.filter(function (g) { return g.id === s.group; })[0];
  var v = s.visual || { type: "mockup", variant: "home" };
  var owner = v.mock || { id: s.id, title: s.name };
  var visual = v.type === "mockup" ? RC.mockup(owner, v.variant) : RC.media({ title: s.name }, v, "main");
  var price = RC.price(s.startingFrom);
  var related = all.filter(function (x) { return x.group === s.group && x.id !== s.id; }).slice(0, 3);
  var work = CONTENT.portfolio.items.filter(function (p) {
    return s.group === "build" && ((s.id === "mobile-apps" && p.type === "app") || (["custom-software", "crm-erp", "saas-mvp"].indexOf(s.id) > -1 && p.type === "software") || (["websites", "ecommerce", "ui-ux"].indexOf(s.id) > -1 && p.type === "website"));
  }).slice(0, 3);

  el.innerHTML =
    '<section class="s-svc-hero"><div class="wrap">' +
      '<div class="svc-hero-copy"><nav class="crumbs" aria-label="Breadcrumb"><a href="services.html">Services</a><span aria-hidden="true">/</span><span>' + E(group ? group.name : "") + "</span></nav>" +
        '<span class="svc-hero-ico">' + RC.icon(s.icon) + "</span><h1>" + E(s.name) + '</h1><p class="lede">' + RC.tx(s.intro) + "</p>" +
        '<ul class="svc-facts">' + (price ? "<li><span>Starting at</span><strong>" + price + (s.priceSuffix ? " " + E(s.priceSuffix) : "") + "</strong></li>" : "") +
          "<li><span>Timeline</span><strong>" + E(s.timeline) + "</strong></li></ul>" +
        '<div class="actions"><a class="btn btn-primary btn-lg" href="contact.html?plan=' + encodeURIComponent(s.name) + '">Get a free quote</a>' +
          (s.link ? '<a class="btn btn-ghost btn-lg" href="' + s.link + '">How hiring works</a>' : '<a class="btn btn-ghost btn-lg" href="pricing.html?tab=' + E(s.pricingTab || "") + '">See plans</a>') + "</div>" +
      "</div>" +
      '<div class="svc-hero-visual">' + visual + "</div>" +
    "</div></section>" +
    '<section class="section"><div class="wrap svc-detail">' +
      '<div><h2>What you get</h2><ul class="ticks ticks-2">' + RC.list(s.deliverables, function (d) { return "<li>" + RC.icon("check") + E(d) + "</li>"; }) + "</ul></div>" +
      '<div class="svc-outcomes"><h2>What changes for your business</h2>' + RC.list(s.outcomes, function (o) { return "<p>" + E(o) + "</p>"; }) +
        (s.tech && s.tech.length ? '<h3>Tools & technology</h3><p class="p-tech">' + RC.list(s.tech, function (t) { return '<span class="tag">' + E(t) + "</span>"; }) + "</p>" : "") +
        '<a class="btn btn-wa" ' + RC.waAttrs("Hi " + S.company + ", I'd like to know more about " + s.name + ".") + ">" + RC.waIcon() + "Ask on WhatsApp</a>" +
      "</div>" +
    "</div></section>" +
    (work.length ? '<section class="section section-alt"><div class="wrap"><div class="section-head"><h2>Related work</h2></div><div class="grid">' + RC.list(work, RC.workCard) + "</div></div></section>" : "") +
    (related.length ? '<section class="section"><div class="wrap"><div class="section-head"><h2>Often paired with</h2></div><div class="svc-list svc-list-3">' + RC.list(related, function (r) {
      return '<a class="svc" href="' + (r.link || "service.html?id=" + r.id) + '"><span class="svc-ico">' + RC.icon(r.icon) + '</span><span class="svc-body"><span class="svc-name">' + E(r.name) + '</span><span class="svc-short">' + E(r.short) + "</span></span></a>";
    }) + "</div></div></section>" : "");
});
