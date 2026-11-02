/* =====================================================================
   DEMO KIT — window.SITE (config) se poori website banata hai.
   Naya demo: kisi sample ka folder copy karo, sirf index.html ka config badlo.
   Section types: strip, cards, person, steps, gallery, reviews, faq, cta, contact
   ===================================================================== */
(function () {
  var S = window.SITE || {}, T = S.theme || {};

  var ICONS = {
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    star: '<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
    tooth: '<path d="M8 3c-2.5 0-4 2-4 4.5 0 3 1.5 4.5 2 7.5.4 2.6 1 6 2.5 6s1.6-4 3.5-4 2 4 3.5 4 2.1-3.4 2.5-6c.5-3 2-4.5 2-7.5C20 5 18.5 3 16 3c-1.8 0-2.6 1-4 1S9.8 3 8 3z"/>',
    book: '<path d="M4 5a2 2 0 012-2h13v15H6a2 2 0 00-2 2z"/><path d="M4 20a2 2 0 002 2h13v-4"/><path d="M9 7h6"/>',
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    bed: '<path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 00-3-3h-7v5"/><circle cx="7" cy="11" r="2"/>',
    area: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
    heart: '<path d="M12 20s-8-4.6-8-10.5A4.5 4.5 0 0112 7a4.5 4.5 0 018 2.5C20 15.4 12 20 12 20z"/>',
    cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5M22 9v6"/>',
    chart: '<path d="M4 20V4M4 20h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l2 2"/>',
    building: '<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    smile: '<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 007 0M9 9.5h.01M15 9.5h.01"/>',
    pulse: '<path d="M3 12h4l2-5 4 10 2-5h6"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0113 0"/><path d="M16 4.5a3.5 3.5 0 010 7M18 14a6.5 6.5 0 013.5 6"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    car: '<path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3z"/><circle cx="7.5" cy="16" r="1.5"/><circle cx="16.5" cy="16" r="1.5"/>',
    tree: '<path d="M12 21v-6M12 3l6 8h-3l4 5H5l4-5H6z"/>'
  };
  var WA_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.3-.4.3-.4.8-1.4a.5.5 0 000-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.7 11.8 11.8 0 004.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 001.8-1.2 2.2 2.2 0 00.2-1.2c-.1-.2-.3-.2-.5-.3z"/></svg>';

  function icon(n, cls) { return '<svg class="' + (cls || "k-ico") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[n] || ICONS.check) + "</svg>"; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function em(s) { return esc(s).replace(/\*(.+?)\*/g, "<em>$1</em>"); }
  function list(a, f) { return (a || []).map(f).join(""); }
  function wa(text) {
    var num = S.whatsapp || "", msg = S.sample ? (S.sampleMessage || text) : text;
    return "https://wa.me/" + num + (msg ? "?text=" + encodeURIComponent(msg) : "");
  }
  function waAttrs(text) { return 'href="' + wa(text) + '" target="_blank" rel="noopener"'; }
  function head(o) {
    return '<div class="k-head">' + (o.eyebrow ? '<span class="k-eyebrow">' + esc(o.eyebrow) + "</span>" : "") +
      "<h2>" + em(o.title) + "</h2>" + (o.intro ? "<p>" + esc(o.intro) + "</p>" : "") + "</div>";
  }

  /* ---------- theme ---------- */
  var radius = { sharp: ["4px", "6px", "6px", "8px"], soft: ["12px", "14px", "16px", "28px"], round: ["999px", "50%", "22px", "40px"] }[T.radius || "soft"];
  var vars = {
    "--primary": T.primary || "#1B3A5C", "--on-primary": T.onPrimary || "#fff",
    "--accent": T.accent || "#E0A43B", "--on-accent": T.onAccent || "#1a1a1a",
    "--bg": T.bg || "#F7F7F5", "--surface": T.surface || "#fff", "--ink": T.ink || "#15181E",
    "--muted": T.muted || "#5D6470", "--line": T.line || "#E4E4E0",
    "--hero-bg": T.heroBg || T.primary || "#1B3A5C", "--hero-ink": T.heroInk || "#fff", "--hero-muted": T.heroMuted || "rgba(255,255,255,.78)",
    "--art-bg": T.artBg || "rgba(255,255,255,.08)", "--art-icon": T.artIcon || "rgba(255,255,255,.9)", "--art-line": T.artLine || "rgba(255,255,255,.35)",
    "--footer-bg": T.footerBg || "#111418", "--footer-ink": T.footerInk || "rgba(255,255,255,.75)",
    "--f-display": T.display || "Georgia, serif", "--f-body": T.body || "system-ui, sans-serif",
    "--radius-btn": radius[0], "--radius-mark": radius[1], "--radius-card": radius[2], "--radius-art": radius[3],
    "--primary-tint": "color-mix(in srgb, var(--primary) 11%, var(--surface))",
    "--accent-tint": "color-mix(in srgb, var(--accent) 20%, var(--surface))",
    "--accent-ink": T.accentInk || "color-mix(in srgb, var(--accent) 45%, #000)"
  };
  var root = document.documentElement;
  Object.keys(vars).forEach(function (k) { root.style.setProperty(k, vars[k]); });
  if (T.fonts) {
    var l = document.createElement("link"); l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?" + T.fonts + "&display=swap";
    document.head.appendChild(l);
  }
  document.title = S.name + (S.titleSuffix ? " — " + S.titleSuffix : "");

  /* ---------- sections ---------- */
  var R = {};
  R.strip = function (o) {
    return '<div class="k-strip"><div class="k-wrap">' + list(o.items, function (x) { return "<div><b>" + esc(x[0]) + "</b><span>" + esc(x[1]) + "</span></div>"; }) + "</div></div>";
  };
  R.cards = function (o) {
    var listing = o.variant === "listing";
    return '<section class="k-sec' + (o.alt ? " k-sec-alt" : "") + '" id="' + esc(o.id || "") + '"><div class="k-wrap">' + head(o) +
      '<div class="k-cards" style="--cols:' + (o.cols || ((o.items || []).length % 3 === 0 ? 3 : (o.items || []).length === 4 ? 4 : 3)) + '">' + list(o.items, function (c) {
        var meta = c.meta && c.meta.length ? '<ul class="k-meta">' + list(c.meta, function (m) { return "<li>" + icon(m[0]) + esc(m[1]) + "</li>"; }) + "</ul>" : "";
        var price = c.price ? '<div class="k-price"><b>' + esc(c.price) + '</b><a ' + waAttrs("Hi, I'm interested in " + c.title) + ">" + esc(o.ask || "Enquire") + " →</a></div>" : "";
        if (listing) return '<article class="k-card k-listing"><div class="k-listing-img">' + icon(c.icon || "home") + (c.tag ? '<span class="k-tag">' + esc(c.tag) + "</span>" : "") + '</div><div class="k-listing-body"><h3>' + esc(c.title) + "</h3>" + (c.text ? "<p>" + esc(c.text) + "</p>" : "") + meta + price + "</div></article>";
        return '<article class="k-card"><div class="k-card-top"><span class="k-card-ico">' + icon(c.icon) + "</span>" + (c.tag ? '<span class="k-tag">' + esc(c.tag) + "</span>" : "") + "</div><h3>" + esc(c.title) + "</h3>" + (c.text ? "<p>" + esc(c.text) + "</p>" : "") + meta + price + "</article>";
      }) + "</div></div></section>";
  };
  R.person = function (o) {
    var initials = (o.name || "").split(" ").filter(Boolean).slice(-2).map(function (w) { return w[0]; }).join("");
    return '<section class="k-sec' + (o.alt ? " k-sec-alt" : "") + '" id="' + esc(o.id || "about") + '"><div class="k-wrap k-person">' +
      '<div class="k-portrait"><span>' + esc(initials) + "</span><small>" + esc(o.photoNote || "Your photo here") + "</small></div>" +
      "<div>" + (o.eyebrow ? '<span class="k-eyebrow">' + esc(o.eyebrow) + "</span>" : "") + "<h2>" + esc(o.name) + "</h2>" +
      (o.role ? '<p style="color:var(--primary);font-weight:650;margin-top:-6px">' + esc(o.role) + "</p>" : "") +
      list(o.text, function (p) { return '<p style="color:var(--muted)">' + esc(p) + "</p>"; }) +
      '<ul class="k-creds">' + list(o.points, function (p) { return "<li>" + icon("check") + "<span>" + esc(p) + "</span></li>"; }) + "</ul></div></div></section>";
  };
  R.steps = function (o) {
    return '<section class="k-sec' + (o.alt ? " k-sec-alt" : "") + '" id="' + esc(o.id || "") + '"><div class="k-wrap">' + head(o) +
      '<ol class="k-steps">' + list(o.items, function (s) { return "<li><h3>" + esc(s[0]) + "</h3><p>" + esc(s[1]) + "</p></li>"; }) + "</ol></div></section>";
  };
  R.gallery = function (o) {
    return '<section class="k-sec' + (o.alt ? " k-sec-alt" : "") + '" id="' + esc(o.id || "gallery") + '"><div class="k-wrap">' + head(o) +
      '<div class="k-gallery">' + list(o.items, function (g) { return "<div><span>" + esc(g) + "</span></div>"; }) + "</div></div></section>";
  };
  R.reviews = function (o) {
    var stars = '<svg viewBox="0 0 24 24">' + ICONS.star + "</svg>";
    return '<section class="k-sec' + (o.alt ? " k-sec-alt" : "") + '" id="reviews"><div class="k-wrap"><div class="k-reviews"><div>' +
      '<div class="k-stars">' + stars + stars + stars + stars + stars + "</div><h2>" + em(o.title || "What our patients say") + '</h2><p style="color:var(--muted);margin:0">' + esc(o.intro || "Your real Google reviews appear here, updated automatically.") + "</p></div>" +
      '<div class="k-review-slots">' + list(o.slots || ["Google review", "Google review", "Google review"], function (t) { return "<div>" + esc(t) + "</div>"; }) + "</div></div></div></section>";
  };
  R.faq = function (o) {
    return '<section class="k-sec' + (o.alt ? " k-sec-alt" : "") + '" id="faq"><div class="k-wrap">' + head(o) +
      '<div class="k-faq">' + list(o.items, function (f) { return "<details><summary>" + esc(f[0]) + "</summary><p>" + esc(f[1]) + "</p></details>"; }) + "</div></div></section>";
  };
  R.cta = function (o) {
    return '<section class="k-sec"><div class="k-wrap"><div class="k-cta"><div><h2>' + em(o.title) + "</h2><p>" + esc(o.text || "") + '</p></div><div class="k-actions" style="margin:0">' +
      '<a class="k-btn k-btn-accent" ' + waAttrs(o.wa || o.label) + ">" + WA_SVG.replace("<svg", '<svg class="k-ico"') + esc(o.label || "WhatsApp us") + "</a>" +
      (S.phone ? '<a class="k-btn k-btn-line" href="tel:' + esc(S.phone.replace(/\s/g, "")) + '">' + icon("phone") + esc(S.phone) + "</a>" : "") + "</div></div></div></section>";
  };
  R.contact = function (o) {
    var fields = o.fields || [["Your name", "text"], ["Phone number", "tel"], ["Message", "textarea"]];
    return '<section class="k-sec k-sec-alt" id="contact"><div class="k-wrap">' + head(o) + '<div class="k-contact"><div class="k-info">' +
      (S.address ? '<div><span class="k-card-ico">' + icon("pin") + "</span><p style=\"margin:0\"><b>Address</b><span>" + esc(S.address) + "</span>" + (S.mapUrl ? '<br><a href="' + esc(S.mapUrl) + '" target="_blank" rel="noopener" style="font-weight:650;color:var(--primary)">Get directions →</a>' : "") + "</p></div>" : "") +
      (S.hours ? '<div><span class="k-card-ico">' + icon("clock") + '</span><p style="margin:0"><b>Timings</b><span>' + esc(S.hours) + "</span></p></div>" : "") +
      (S.phone ? '<div><span class="k-card-ico">' + icon("phone") + '</span><p style="margin:0"><b>Call</b><span>' + esc(S.phone) + "</span></p></div>" : "") +
      (S.email ? '<div><span class="k-card-ico">' + icon("mail") + '</span><p style="margin:0"><b>Email</b><span>' + esc(S.email) + "</span></p></div>" : "") +
      '</div><form class="k-form" id="k-form" novalidate><h3 style="margin:0">' + esc(o.formTitle || "Send an enquiry") + "</h3>" +
      list(fields, function (f, i) {
        var id = "kf" + i, ctl = f[1] === "textarea" ? '<textarea id="' + id + '" name="' + esc(f[0]) + '"></textarea>' :
          f[1] === "select" ? '<select id="' + id + '" name="' + esc(f[0]) + '">' + list(f[2], function (x) { return "<option>" + esc(x) + "</option>"; }) + "</select>" :
          '<input id="' + id + '" name="' + esc(f[0]) + '" type="' + f[1] + '"' + (f[1] === "tel" ? ' inputmode="tel"' : "") + ">";
        return '<label for="' + id + '">' + esc(f[0]) + ctl + "</label>";
      }) + '<button class="k-btn k-btn-main" type="submit">' + WA_SVG.replace("<svg", '<svg class="k-ico"') + esc(o.submit || "Send on WhatsApp") + "</button></form></div></div></section>";
  };

  /* ---------- page ---------- */
  var H = S.hero || {};
  var html = [];
  if (S.sample) html.push('<div class="k-notice"><b>Sample website by RaiCorp.</b> The business name and details are illustrative. <a href="' + esc(S.agencyUrl || "https://www.raicorp.in/contact.html") + '">Get one like this →</a></div>');
  if (S.top && S.top.length) html.push('<div class="k-top"><div class="k-wrap">' + list(S.top, function (t, i) { return "<span" + (i > 0 ? ' class="k-hide-m"' : "") + ">" + icon(t[0]) + esc(t[1]) + "</span>"; }) + "</div></div>");
  html.push('<header class="k-header"><div class="k-wrap"><a class="k-brand" href="#top"><span class="k-mark">' + esc(S.monogram || (S.name || "?")[0]) + "</span><span><b>" + esc(S.name) + "</b>" + (S.tagline ? "<small>" + esc(S.tagline) + "</small>" : "") + "</span></a>" +
    '<nav class="k-nav" aria-label="Main">' + list(S.nav, function (n) { return '<a href="' + esc(n[1]) + '">' + esc(n[0]) + "</a>"; }) +
    '<a class="k-btn k-btn-main" ' + waAttrs(S.navCta || "Hi") + ">" + esc(S.navCta || "Contact") + "</a></nav></div></header>");
  html.push('<main id="top"><section class="k-hero"><div class="k-wrap"><div>' +
    (H.eyebrow ? '<span class="k-eyebrow">' + esc(H.eyebrow) + "</span>" : "") + "<h1>" + em(H.title) + '</h1><p class="k-lede">' + esc(H.lede) + "</p>" +
    '<div class="k-actions"><a class="k-btn k-btn-accent" ' + waAttrs(H.wa || H.primary) + ">" + WA_SVG.replace("<svg", '<svg class="k-ico"') + esc(H.primary || "WhatsApp us") + "</a>" +
    (H.secondary ? '<a class="k-btn k-btn-line" href="' + esc(H.secondary[1]) + '">' + esc(H.secondary[0]) + "</a>" : "") + "</div>" +
    (H.trust ? '<ul class="k-trust">' + list(H.trust, function (t) { return "<li>" + icon(t[0]) + esc(t[1]) + "</li>"; }) + "</ul>" : "") + "</div>" +
    '<div class="k-art"><div class="k-art-shape"></div><div class="k-art-icon">' + icon(H.icon || "star", "") + "</div>" +
    list(H.cards, function (c, i) { return '<div class="k-art-card c' + (i + 1) + '"><span class="k-dot">' + icon(c[0]) + "</span><p style=\"margin:0\"><b>" + esc(c[1]) + "</b><span>" + esc(c[2]) + "</span></p></div>"; }) +
    "</div></div></section>");
  (S.sections || []).forEach(function (o) { if (R[o.type]) html.push(R[o.type](o)); });
  html.push("</main>");
  html.push('<footer class="k-footer"><div class="k-wrap"><span>© ' + new Date().getFullYear() + " " + esc(S.name) + (S.address ? " · " + esc(S.address) : "") + "</span><span>Website by <a href=\"" + esc(S.agencyUrl || "https://www.raicorp.in") + '">RaiCorp</a></span></div></footer>');
  if (S.whatsapp) html.push('<a class="k-float" ' + waAttrs(S.navCta || "Hi") + ' aria-label="WhatsApp">' + WA_SVG + "</a>");

  document.body.innerHTML = html.join("");

  var form = document.getElementById("k-form");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    var lines = Array.prototype.map.call(form.querySelectorAll("input,select,textarea"), function (f) { return f.name + ": " + f.value; });
    var msg = (S.sample ? (S.sampleMessage || "") + "\n\n" : "Enquiry from website\n") + lines.join("\n");
    window.open("https://wa.me/" + (S.whatsapp || "") + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
  });
})();
