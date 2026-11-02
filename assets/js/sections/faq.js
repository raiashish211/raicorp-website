/* SECTION: faq — accordion. data-page="pricing" => sirf us page ke sawal. Content: content/faq.js */
RC.section("faq", function (el, o) {
  var E = RC.esc, F = CONTENT.faq;
  var items = F.items.filter(function (q) { return !o.page || !q.pages || q.pages.indexOf(o.page) > -1; });
  if (!items.length) { el.innerHTML = ""; return; }
  el.innerHTML = '<section class="s-faq section"><div class="wrap faq-wrap">' +
    '<div class="section-head"><h2>' + RC.tx(F.heading) + '</h2><p>Something else? <a ' + RC.waAttrs("Hi, I have a question:") + ">Ask us on WhatsApp</a>.</p></div>" +
    '<div class="faq">' + RC.list(items, function (q) {
      return "<details><summary>" + E(q.q) + "</summary><p>" + RC.tx(q.a) + "</p></details>";
    }) + "</div></div></section>";
});
