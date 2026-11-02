/* SECTION: project — one project: main media + side thumbnails + details + feedback CTAs.
   URL: project.html?id=<portfolio id>. Content: content/portfolio.js */
RC.section("project", function (el) {
  var E = RC.esc, S = CONTENT.site, s = RC.sample(RC.qs("id"));
  if (!s) {
    el.innerHTML = '<div class="wrap"><div class="empty" style="margin:64px 0"><h1>Project not found</h1><p>It may have been renamed or removed.</p><a class="btn btn-primary" href="work.html">See all work</a></div></div>';
    return;
  }
  document.body.setAttribute("data-title", s.title);
  var c = RC.category(s.category);
  var media = (s.media && s.media.length ? s.media : [{ type: "mockup", variant: "home", label: "Preview" }]).slice(0, 6);
  var yes = RC.waAttrs("Hi " + S.company + ", I saw \"" + s.title + "\" (" + RC.typeLabel(s) + ", " + (c ? c.name : "") + "). I want something like this for my business.");
  var change = RC.waAttrs("Hi " + S.company + ", about \"" + s.title + "\" — for my business I'd change: ");
  var ul = function (arr) { return "<ul>" + RC.list(arr, function (x) { return "<li>" + E(x) + "</li>"; }) + "</ul>"; };

  el.innerHTML = '<section class="s-project"><div class="wrap">' +
    '<nav class="crumbs" aria-label="Breadcrumb"><a href="work.html">Work</a><span aria-hidden="true">/</span><a href="work.html?cat=' + E(s.category) + '">' + E(c ? c.name : "") + "</a></nav>" +
    '<div class="gallery">' +
      '<figure class="g-main"><div class="g-frame">' + RC.media(s, media[0], "main") + '</div><figcaption class="g-cap">' + E(media[0].label || "") + "</figcaption></figure>" +
      '<div class="g-thumbs" role="tablist" aria-label="Screens">' + RC.list(media, function (m, i) {
        return '<button type="button" role="tab" aria-selected="' + (i === 0) + '" data-i="' + i + '"><span class="g-t">' + RC.media(s, m, "thumb") + '</span><span class="g-l">' + E(m.label || "View " + (i + 1)) + "</span></button>";
      }) + "</div>" +
    "</div>" +
    '<div class="p-info"><div class="p-main">' +
      '<p class="p-meta"><span class="badge badge-' + E(s.status) + '">' + RC.statusLabel(s) + "</span>" + E(RC.typeLabel(s)) + " for " + E(c ? c.name.toLowerCase() : "") + (s.location ? ", " + E(s.location) : "") + "</p>" +
      "<h1>" + E(s.title) + '</h1><p class="lede">' + E(s.summary) + "</p>" +
      (s.status !== "client" ? '<p class="note">' + (s.live ? "A working sample website for this kind of business. Open it live, it works on your phone too. The business name is illustrative." : "A concept project showing what we build for this kind of business. The business name is illustrative.") + "</p>" : "") +
      '<div class="p-cols"><section><h2>' + (s.type === "website" ? "Pages" : "Modules") + "</h2>" + ul(s.pages) + "</section><section><h2>Features</h2>" + ul(s.features) + "</section></div>" +
      (s.software ? '<section class="p-soft"><h2>' + (s.type === "website" ? "Software that can sit behind it" : "Works with") + "</h2><p>" + E(s.software) + "</p></section>" : "") +
      (s.tech && s.tech.length ? '<p class="p-tech">' + RC.list(s.tech, function (t) { return '<span class="tag">' + E(t) + "</span>"; }) + "</p>" : "") +
    "</div>" +
    '<aside class="p-ask"><h2>Is this right for your business?</h2>' + (s.idealFor ? "<p>" + E(s.idealFor) + "</p>" : "") +
      (s.live || s.demoUrl ? '<a class="btn btn-gold btn-lg" href="' + E(s.live || s.demoUrl) + '" target="_blank" rel="noopener">Open live website ↗</a>' : "") +
      '<a class="btn btn-primary" ' + yes + ">Yes, I want one like this</a>" +
      '<a class="btn btn-ghost" ' + change + ">Suggest changes for my business</a>" +
      '<a class="p-quote" href="contact.html?plan=' + encodeURIComponent("Like: " + s.title) + '">Or send your details for a quote</a>' +
    "</aside></div></div></section>";

  var frame = el.querySelector(".g-frame"), cap = el.querySelector(".g-cap"), thumbs = el.querySelector(".g-thumbs");
  function pick(i) {
    frame.innerHTML = RC.media(s, media[i], "main"); cap.textContent = media[i].label || "";
    RC.$all("button", thumbs).forEach(function (b) { b.setAttribute("aria-selected", +b.getAttribute("data-i") === i ? "true" : "false"); });
  }
  thumbs.addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) pick(+b.getAttribute("data-i")); });
  thumbs.addEventListener("keydown", function (e) {
    var k = e.key; if (["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].indexOf(k) < 0) return;
    var btns = RC.$all("button", thumbs), cur = btns.indexOf(document.activeElement); if (cur < 0) return;
    e.preventDefault(); var n = (cur + (k === "ArrowDown" || k === "ArrowRight" ? 1 : -1) + btns.length) % btns.length;
    btns[n].focus(); pick(n);
  });

  // related projects in the same business type
  var rel = document.querySelector("[data-related]");
  if (rel) {
    var more = RC.samplesIn(s.category).filter(function (x) { return x.id !== s.id; });
    if (more.length < 3) more = more.concat(CONTENT.portfolio.items.filter(function (x) { return x.id !== s.id && x.category !== s.category; })).slice(0, 3);
    rel.innerHTML = '<section class="section section-alt"><div class="wrap"><div class="section-head"><h2>More work</h2></div><div class="grid">' + RC.list(more.slice(0, 3), RC.workCard) + "</div></div></section>";
  }
});
