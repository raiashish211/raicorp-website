/* SECTION: services — grouped service list.
   data-limit="6" => sirf pehli 6, data-head="off" => heading chhupao. Content: content/services.js */
RC.section("services", function (el, o) {
  var E = RC.esc, S = CONTENT.services;
  var showHead = o.head !== "off";
  var body = RC.list(S.groups, function (g) {
    var items = S.items.filter(function (s) { return s.group === g.id; });
    return '<div class="svc-group"><div class="svc-group-head"><h3>' + E(g.name) + "</h3><p>" + E(g.blurb) + "</p></div>" +
      '<div class="svc-list">' + RC.list(items, function (s) {
        var price = RC.price(s.startingFrom);
        return '<a class="svc" href="' + (s.link || "service.html?id=" + s.id) + '">' +
          '<span class="svc-ico">' + RC.icon(s.icon) + "</span>" +
          '<span class="svc-body"><span class="svc-name">' + E(s.name) + '</span><span class="svc-short">' + E(s.short) + "</span>" +
          (price ? '<span class="svc-price">From ' + price + (s.priceSuffix ? " " + E(s.priceSuffix) : "") + "</span>" : "") +
          "</span></a>";
      }) + "</div></div>";
  });
  el.innerHTML = '<section class="s-services section"><div class="wrap">' +
    (showHead ? '<div class="section-head"><h2>' + RC.tx(S.heading) + "</h2><p>" + RC.tx(S.intro) + "</p></div>" : "") +
    body + "</div></section>";
});
