/* SECTION: header — logo, menu, services dropdown, region selector, CTA. Content: content/site.js */
RC.section("header", function (el) {
  var E = RC.esc, S = CONTENT.site, svc = CONTENT.services;
  var here = location.pathname.split("/").pop() || "index.html";
  var region = RC.region();

  function dropdown() {
    return '<div class="mega" role="menu">' + RC.list(svc.groups, function (g) {
      return '<div class="mega-col"><p class="mega-title">' + E(g.name) + "</p>" +
        RC.list(svc.items.filter(function (s) { return s.group === g.id; }), function (s) {
          return '<a role="menuitem" href="' + (s.link || "service.html?id=" + s.id) + '">' + RC.icon(s.icon) + "<span>" + E(s.name) + "</span></a>";
        }) + "</div>";
    }) + '<a class="mega-all" href="services.html">All services</a></div>';
  }

  var links = RC.list(S.nav, function (n) {
    var cur = here === n.href ? ' aria-current="page"' : "";
    if (n.children === "services") {
      return '<div class="nav-item has-mega"><a href="' + n.href + '"' + cur + ">" + E(n.label) + '<svg class="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></a>' + dropdown() + "</div>";
    }
    return '<div class="nav-item"><a href="' + n.href + '"' + cur + ">" + E(n.label) + "</a></div>";
  });

  var regionSel = '<label class="region"><span class="sr">Pricing region</span>' + RC.icon("globe") +
    '<select data-region-select aria-label="Pricing region">' + RC.list(S.regions, function (r) {
      return '<option value="' + r.id + '"' + (r.id === region.id ? " selected" : "") + ">" + E(r.label) + "</option>";
    }) + "</select></label>";

  el.innerHTML =
    '<a class="skip" href="#main">Skip to content</a>' +
    RCBrand.groupBar("dev", { dev: "index.html", rec: S.recruitmentUrl || "recruitment/index.html" }) +
    '<header class="s-header"><div class="wrap">' +
      '<a class="logo" href="index.html" aria-label="' + E(S.company) + ' home">' + RC.logo() + "</a>" +
      '<nav class="nav" id="main-nav" aria-label="Main">' + links +
        '<div class="nav-tools">' + regionSel + '<a class="btn btn-primary" href="' + S.headerCta.href + '">' + E(S.headerCta.label) + "</a></div>" +
      "</nav>" +
      '<button class="nav-toggle" aria-label="Menu" aria-expanded="false" aria-controls="main-nav"><span></span><span></span><span></span></button>' +
    "</div></header>";

  if (!document.querySelector(".wa-float")) {
    var a = document.createElement("a");
    a.className = "wa-float"; a.href = RC.wa(); a.target = "_blank"; a.rel = "noopener"; a.setAttribute("aria-label", "Chat on WhatsApp");
    a.innerHTML = RC.waIcon();
    document.body.appendChild(a);
  }
});

/* shared brand marks */
/* Logo: assets/brand/brand.js (RCBrand) se aata hai — ek jagah badlo, sab jagah badlega */
RC.logo = function (sub) { return RCBrand.lockup(sub); };
RC.waIcon = function () {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3z"/></svg>';
};
