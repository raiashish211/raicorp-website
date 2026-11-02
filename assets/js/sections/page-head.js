/* SECTION: page-head — inner page title band. Content: content/pages.js (data-page="key") */
RC.section("page-head", function (el, o) {
  var p = (CONTENT.pages || {})[o.page] || {};
  el.innerHTML = '<section class="s-page-head"><div class="wrap">' +
    "<h1>" + RC.tx(p.heading || p.title) + "</h1>" +
    (p.intro ? '<p class="lede">' + RC.tx(p.intro) + "</p>" : "") +
    "</div></section>";
});
