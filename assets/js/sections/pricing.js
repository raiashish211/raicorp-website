/* SECTION: pricing — tabbed plans, prices in visitor's region currency.
   data-tab="software" => default tab. URL ?tab=growth bhi chalta hai. Content: content/pricing.js */
RC.section("pricing", function (el, o) {
  var E = RC.esc, P = CONTENT.pricing, S = CONTENT.site, region = RC.region();
  var current = RC.qs("tab") || el.getAttribute("data-current") || o.tab || P.tabs[0].id;
  if (!P.tabs.some(function (t) { return t.id === current; })) current = P.tabs[0].id;
  var tab = P.tabs.filter(function (t) { return t.id === current; })[0];
  var note = P.notes[region.id] || P.notes["default"];

  el.innerHTML = '<section class="s-pricing section"><div class="wrap">' +
    (o.head !== "off" ? '<div class="section-head"><h2>' + RC.tx(P.heading) + "</h2><p>" + RC.tx(P.intro) + "</p></div>" : "") +
    '<div class="pr-bar"><div class="tabs" role="tablist" aria-label="Plan type">' + RC.list(P.tabs, function (t) {
      return '<button type="button" role="tab" aria-selected="' + (t.id === current) + '" data-tab="' + t.id + '">' + E(t.label) + "</button>";
    }) + "</div>" +
    '<label class="pr-region">Prices for <select data-region-select>' + RC.list(S.regions, function (r) {
      return '<option value="' + r.id + '"' + (r.id === region.id ? " selected" : "") + ">" + E(r.label) + "</option>";
    }) + "</select></label></div>" +
    '<div class="plans">' + RC.list(tab.plans, function (p) {
      var href = "contact.html?plan=" + encodeURIComponent(tab.label + " — " + p.name);
      return '<div class="plan' + (p.highlight ? " plan-hi" : "") + '">' +
        (p.highlight ? '<p class="plan-badge">Most chosen</p>' : "") +
        "<h3>" + E(p.name) + '</h3><p class="plan-for">' + E(p.for) + "</p>" +
        '<p class="plan-price"><span class="plan-from">Starting at</span><strong>' + RC.price(p.price) + "</strong>" + (p.suffix ? "<span>" + E(p.suffix) + "</span>" : "") + "</p>" +
        '<ul class="ticks">' + RC.list(p.features, function (f) { return "<li>" + RC.icon("check") + E(f) + "</li>"; }) + "</ul>" +
        '<a class="btn ' + (p.highlight ? "btn-primary" : "btn-ghost") + '" href="' + href + '">' + E(p.cta || "Get started") + "</a>" +
        '<a class="plan-wa" ' + RC.waAttrs("Hi " + S.company + ", I'm interested in the " + p.name + " plan (" + tab.label + ").") + ">Ask on WhatsApp</a>" +
      "</div>";
    }) + "</div>" +
    '<p class="pr-note">' + E(note) + ' Need something different? <a href="contact.html">Get a custom quote</a>.</p>' +
  "</div></section>";

  el.querySelector(".tabs").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    el.setAttribute("data-current", b.getAttribute("data-tab"));
    var u = new URL(location.href); u.searchParams.set("tab", b.getAttribute("data-tab")); history.replaceState(null, "", u);
    RC.mount(el);
  });
});
