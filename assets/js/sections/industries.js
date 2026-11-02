/* SECTION: industries — business types grid linking to work filter. Content: content/industries.js */
RC.section("industries", function (el, o) {
  var E = RC.esc, I = CONTENT.industries;
  var nI = I.items.length;
  function block(market, label) {
    return '<div class="ind-col"><h3>' + label + '</h3><ul class="ind-list">' + RC.list(I.items.filter(function (c) { return c.market === market; }), function (c) {
      var n = RC.samplesIn(c.id).length;
      return '<li><a href="work.html?cat=' + c.id + '">' + E(c.name) + (n ? '<span class="count">' + n + "</span>" : "") + "</a></li>";
    }) + "</ul></div>";
  }
  el.innerHTML = '<section class="s-industries section"><div class="wrap">' +
    '<div class="section-head"><h2>' + RC.tx(I.heading) + "</h2><p>" + RC.tx(I.intro).replace("{count}", nI) + "</p></div>" +
    '<div class="ind">' + block("india", "India") + block("abroad", "International") + "</div>" +
  "</div></section>";
});
