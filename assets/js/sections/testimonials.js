/* SECTION: testimonials — auto-hidden when content/testimonials.js lists are empty */
RC.section("testimonials", function (el) {
  var E = RC.esc, T = CONTENT.testimonials || {};
  var items = T.items || [], logos = T.logos || [];
  if (!items.length && !logos.length) { el.innerHTML = ""; el.hidden = true; return; }
  el.hidden = false;
  el.innerHTML = '<section class="s-testimonials section section-alt"><div class="wrap">' +
    (items.length ? '<div class="section-head"><h2>' + RC.tx(T.heading) + '</h2></div><div class="quotes">' + RC.list(items, function (q) {
      return '<figure class="quote"><blockquote>' + E(q.quote) + "</blockquote><figcaption>" +
        (q.photo ? '<img src="' + E(q.photo) + '" alt="">' : "") + "<span><strong>" + E(q.name) + "</strong>" + E([q.role, q.city].filter(Boolean).join(", ")) + "</span></figcaption></figure>";
    }) + "</div>" : "") +
    (logos.length ? '<p class="logos-head">' + E(T.logosHeading) + '</p><div class="logos">' + RC.list(logos, function (l) { return '<img src="' + E(l.src) + '" alt="' + E(l.name) + '">'; }) + "</div>" : "") +
  "</div></section>";
});
