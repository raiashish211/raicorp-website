/* =====================================================================
   RAICORP CLINIC KIT — ENGINE. config.js (window.SITE) se poori site banata hai.
   Content badalna ho to config.js. Ye file sirf naye section type ke liye.
   ===================================================================== */
(function () {
  var S = window.SITE || {}, K = S.clinic || {}, T = S.theme || {}, BASE = S.base || "";
  var RANK = { basic: 1, advanced: 2, pro: 3 }, tier = RANK[S.tier] || 3;
  var TIER_OF = { notice: 3, header: 1, hero: 1, trust: 2, treatments: 1, costs: 3, doctors: 1, visit: 2, beforeafter: 3, gallery: 2, reviews: 2, appointment: 3, tips: 3, faq: 2, contact: 1, footer: 1 };

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function em(s) { return esc(s).replace(/\*(.+?)\*/g, "<em>$1</em>"); }
  function list(a, f) { return (a || []).map(f).join(""); }
  function src(p) { return /^(https?:|data:|\/)/.test(p) ? p : BASE + p; }
  function tel() { return "tel:" + (K.phone || "").replace(/\s/g, ""); }
  function wa(text) { var m = S.sample ? (S.sampleMessage || text) : text; return "https://wa.me/" + (K.whatsapp || "") + (m ? "?text=" + encodeURIComponent(m) : ""); }
  // forms: asli booking message bhejo (sample me "[Demo]" prefix ke saath), taki owner dekh sake booking kaise aati hai
  function waMsg(msg) { return "https://wa.me/" + (K.whatsapp || "") + "?text=" + encodeURIComponent((S.sample ? "[Demo booking from RaiCorp sample]\n" : "") + msg); }
  function waA(text) { return 'href="' + wa(text) + '" target="_blank" rel="noopener"'; }

  var P = {
    tooth: '<path d="M8 3c-2.5 0-4 2-4 4.5 0 3 1.5 4.5 2 7.5.4 2.6 1 6 2.5 6s1.6-4 3.5-4 2 4 3.5 4 2.1-3.4 2.5-6c.5-3 2-4.5 2-7.5C20 5 18.5 3 16 3c-1.8 0-2.6 1-4 1S9.8 3 8 3z"/>',
    implant: '<path d="M7 3h10l-1 6H8z"/><path d="M9 9h6M9.5 12h5M10 15h4M10.5 18h3M12 21v-3"/>',
    braces: '<rect x="3" y="8" width="18" height="8" rx="4"/><path d="M3 12h18M8 8v8M12 8v8M16 8v8"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    crown: '<path d="M3 8l4 4 5-6 5 6 4-4-2 11H5z"/>',
    child: '<circle cx="12" cy="7" r="3.5"/><path d="M5 21v-2a7 7 0 0114 0v2"/><path d="M10 7h.01M14 7h.01"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    root: '<path d="M7 3h10q2 0 2 3c0 3-2 4-2 7l-1 8h-2l-1-6h-2l-1 6H8l-1-8c0-3-2-4-2-7q0-3 2-3z"/>',
    skin: '<circle cx="12" cy="12" r="9"/><path d="M8 10h.01M12 8h.01M15 11h.01M10 14h.01M14 15h.01"/>',
    laser: '<path d="M4 20L14 10M14 10l3-3 3 3-3 3zM8 4v3M4 8h3M11 5l1.5 1.5"/>',
    hair: '<path d="M6 21c0-8 2-15 6-18M12 21c0-8 1-12 4-16M18 21c0-6-1-10-3-13"/>',
    spine: '<path d="M12 2v20"/><rect x="8" y="3" width="8" height="3" rx="1"/><rect x="8" y="8" width="8" height="3" rx="1"/><rect x="8" y="13" width="8" height="3" rx="1"/><rect x="8" y="18" width="8" height="3" rx="1"/>',
    knee: '<path d="M9 2v8a3 3 0 003 3 3 3 0 003 3v6"/><circle cx="12" cy="13" r="2.5"/>',
    hand: '<path d="M7 11V5a1.5 1.5 0 013 0v5M10 10V3.5a1.5 1.5 0 013 0V10M13 10V5a1.5 1.5 0 013 0v7M16 9a1.5 1.5 0 013 0v4a8 8 0 01-8 8 7 7 0 01-6-3l-2.5-4a1.5 1.5 0 012.5-1.6L7 14"/>',
    heart: '<path d="M12 20s-8-4.6-8-10.5A4.5 4.5 0 0112 7a4.5 4.5 0 018 2.5C20 15.4 12 20 12 20z"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3z"/>',
    star: '<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>'
  };
  function ic(n, c) { return '<svg class="' + (c || "ic") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[n] || P.check) + "</svg>"; }
  var WA = '<svg class="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.3-.4.3-.4.8-1.4a.5.5 0 000-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.7 11.8 11.8 0 004.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 001.8-1.2 2.2 2.2 0 00.2-1.2c-.1-.2-.3-.2-.5-.3z"/></svg>';
  function head(eyebrow, title, intro) { return '<div class="head rv"><span class="eyebrow">' + esc(eyebrow) + "</span><h2>" + em(title) + "</h2>" + (intro ? "<p>" + esc(intro) + "</p>" : "") + "</div>"; }
  function initials(n) { return (n || "").replace(/^Dr\.?\s*/i, "").split(" ").filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join(""); }
  function logo() {
    if (K.logo) return '<img class="logo-img" src="' + esc(src(K.logo)) + '" alt="' + esc(K.name) + '">';
    return '<span class="logo-mark" aria-hidden="true">' + ic(K.icon || "tooth") + "</span>";
  }
  function treatmentOptions() { return '<option value="">Select</option>' + list(S.treatments, function (t) { return "<option>" + esc(t.name) + "</option>"; }) + "<option>Other / not sure</option>"; }

  /* ---------- sections ---------- */
  var R = {};
  R.notice = function () { return S.notice ? '<div class="notice">' + ic("sparkle") + "<span>" + esc(S.notice) + "</span></div>" : ""; };
  R.header = function () {
    var links = [["Treatments", "#treatments"], ["Doctors", "#doctors"]];
    if (tier >= 3) links.push(["Costs", "#costs"]);
    if (tier >= 2) links.push(["FAQ", "#faq"]);
    links.push(["Contact", "#contact"]);
    return '<header class="hdr"><div class="wrap"><a class="brand" href="#top" aria-label="' + esc(K.name) + ' home">' + logo() + "<span><b>" + esc(K.name) + "</b><small>" + esc(K.tagline) + "</small></span></a>" +
      '<nav class="nav" aria-label="Main">' + list(links, function (l) { return '<a href="' + l[1] + '">' + esc(l[0]) + "</a>"; }) + "</nav>" +
      '<div class="hdr-cta"><a class="hdr-call" href="' + tel() + '">' + ic("phone") + "<span>" + esc(K.phone) + '</span></a><a class="btn btn-primary btn-sm" href="' + (tier >= 3 ? "#appointment" : "#contact") + '">Book</a></div></div></header>';
  };
  R.hero = function () {
    var H = S.hero || {}, d = (S.doctors || [])[0] || {};
    return '<section class="hero" id="top"><div class="wrap hero-in"><div class="hero-copy"><span class="eyebrow">' + esc(H.eyebrow) + "</span><h1>" + em(H.title) + '</h1><p class="lede">' + esc(H.lede) + "</p>" +
      '<div class="actions"><a class="btn btn-primary" href="' + (tier >= 3 ? "#appointment" : "#contact") + '">' + ic("cal") + "<span>" + esc(H.primary || "Book an appointment") + "</span></a>" +
      '<a class="btn btn-wa" ' + waA("Hi " + K.short + ", I would like to book an appointment.") + ">" + WA + "<span>WhatsApp</span></a></div>" +
      '<ul class="points">' + list(H.points, function (p) { return "<li>" + ic("check") + esc(p) + "</li>"; }) + "</ul></div>" +
      '<div class="hero-art" aria-hidden="true"><div class="ha-panel"><span class="ha-ring r1"></span><span class="ha-ring r2"></span>' + ic(K.icon || "tooth", "ha-tooth") + "</div>" +
        '<div class="ha-card c1"><span class="ha-dot">' + ic("clock") + "</span><p><b>Next slot today</b><span>6:00 pm · " + esc(K.short) + "</span></p></div>" +
        '<div class="ha-card c2"><span class="ha-av">' + esc(initials(d.name)) + "</span><p><b>" + esc(d.name) + "</b><span>" + esc(d.role) + "</span></p></div>" +
        (tier >= 2 ? '<div class="ha-card c3"><span class="ha-stars">' + ic("star", "ic st") + ic("star", "ic st") + ic("star", "ic st") + ic("star", "ic st") + ic("star", "ic st") + "</span><p><b>Google reviews</b><span>shown on the site</span></p></div>" : "") +
      "</div></div></section>";
  };
  R.trust = function () {
    return '<section class="trust"><div class="wrap"><dl>' + list(S.trust, function (t) { return '<div class="rv"><dt>' + esc(t[0]) + "</dt><dd>" + esc(t[1]) + "</dd></div>"; }) + "</dl>" + (S.sample && S.trustNote ? '<p class="fine">' + esc(S.trustNote) + "</p>" : "") + "</div></section>";
  };
  R.treatments = function () {
    return '<section class="sec" id="treatments"><div class="wrap">' + head("Treatments", S.treatmentsTitle || "Care for the whole *family.*", tier >= 2 ? "Clear starting prices. Your " + (K.doctorWord || "doctor") + " explains every option before starting." : S.about) +
      '<div class="tr-grid' + (tier === 1 ? " tr-simple" : "") + '">' + list(S.treatments, function (t) {
        return '<article class="tr rv"><span class="tr-ic">' + ic(t.icon) + "</span><h3>" + esc(t.name) + "</h3><p>" + esc(t.text) + "</p>" +
          (tier >= 2 ? '<div class="tr-foot"><span><b>' + esc(t.price) + "</b>" + (t.time ? "<i>" + esc(t.time) + "</i>" : "") + '</span><a href="' + (tier >= 3 ? "#appointment" : "#contact") + '" data-treat="' + esc(t.name) + '">Book ' + ic("arrow") + "</a></div>" : "") + "</article>";
      }) + "</div></div></section>";
  };
  R.costs = function () {
    return '<section class="sec sec-tint" id="costs"><div class="wrap costs">' + '<div class="rv">' + '<span class="eyebrow">Cost guide</span><h2>Know the cost <em>before you sit in the chair.</em></h2><p class="muted">' + esc(S.costNote) + "</p></div>" +
      '<table class="ctable rv"><thead><tr><th scope="col">Treatment</th><th scope="col">Typical cost</th></tr></thead><tbody>' +
      list(S.costs, function (c) { return '<tr><th scope="row">' + esc(c[0]) + (c[2] ? "<small>" + esc(c[2]) + "</small>" : "") + "</th><td>" + esc(c[1]) + "</td></tr>"; }) + "</tbody></table></div></section>";
  };
  R.doctors = function () {
    var docs = tier === 1 ? (S.doctors || []).slice(0, 1) : S.doctors;
    return '<section class="sec' + (tier === 1 ? " sec-tint" : "") + '" id="doctors"><div class="wrap">' + head(tier === 1 ? "About the clinic" : "Our doctors", tier === 1 ? "Meet your *" + (K.doctorWord || "doctor") + ".*" : (S.doctorsTitle || "Experienced, gentle, *on time.*"), tier === 1 ? "" : S.about) +
      '<div class="docs' + (docs.length === 1 ? " docs-one" : "") + '">' + list(docs, function (d) {
        return '<article class="doc rv"><div class="doc-ph">' + (d.photo ? '<img src="' + esc(src(d.photo)) + '" alt="' + esc(d.name) + '" loading="lazy">' : "<span>" + esc(initials(d.name)) + "</span><small>Doctor's photo</small>") + '</div><div class="doc-b"><h3>' + esc(d.name) + '</h3><p class="doc-r">' + esc(d.role) + "</p><p>" + esc(d.note) + "</p>" + (d.langs ? '<p class="doc-l">Speaks ' + esc(d.langs) + "</p>" : "") +
          (docs.length === 1 && tier === 1 ? '<p class="muted">' + esc(S.about) + "</p>" : "") + "</div></article>";
      }) + "</div></div></section>";
  };
  R.visit = function () {
    return '<section class="sec sec-tint"><div class="wrap">' + head("Your first visit", "Simple, clear, *no surprises.*") +
      '<ol class="steps">' + list(S.visit, function (v) { return '<li class="rv"><h3>' + esc(v[0]) + "</h3><p>" + esc(v[1]) + "</p></li>"; }) + "</ol></div></section>";
  };
  R.beforeafter = function () {
    var B = S.beforeafter || {};
    var teeth = function (after) {
      var fill = after ? "#ffffff" : "#E9D9A8", gum = "#E8939A", out = "";
      for (var i = 0; i < 6; i++) { var x = 30 + i * 40, dy = after ? 0 : [4, -3, 6, -2, 5, -4][i], rot = after ? 0 : [-6, 4, -3, 5, -5, 3][i]; out += '<rect x="' + x + '" y="' + (70 + dy) + '" width="34" height="58" rx="12" fill="' + fill + '" stroke="#cdb" transform="rotate(' + rot + " " + (x + 17) + " 100)\"/>"; }
      return '<svg viewBox="0 0 300 200" class="ba-svg" role="img" aria-label="' + (after ? "After" : "Before") + ' illustration"><rect width="300" height="200" fill="' + (after ? "#0E4F5A" : "#3a3f42") + '"/><path d="M10 60 Q150 20 290 60 L290 90 Q150 55 10 90z" fill="' + gum + '"/>' + out + "</svg>";
    };
    return '<section class="sec" id="results"><div class="wrap ba-w"><div class="rv"><span class="eyebrow">Results</span><h2>' + em(B.title || "Before & after") + '</h2><p class="muted">' + esc(B.note) + '</p><p class="muted">Drag the slider to compare.</p></div>' +
      '<div class="ba rv"><div class="ba-img">' + teeth(true) + '<div class="ba-before" id="ba-b">' + teeth(false) + '</div><span class="ba-line" id="ba-l"></span><span class="ba-tag t1">Before</span><span class="ba-tag t2">After</span></div>' +
      '<label class="sr" for="ba-r">Compare before and after</label><input type="range" id="ba-r" min="0" max="100" value="50"></div></div></section>';
  };
  R.gallery = function () {
    return '<section class="sec sec-tint"><div class="wrap">' + head("The clinic", "Clean, calm and *modern.*", S.sample ? "Illustrations shown — the clinic's real photos go here." : "") +
      '<div class="gal">' + list(S.gallery, function (g, i) {
        var label = typeof g === "string" ? g : g.label, img = typeof g === "string" ? "" : g.image;
        return '<figure class="rv">' + (img ? '<img src="' + esc(src(img)) + '" alt="' + esc(label) + '" loading="lazy">' : '<div class="gal-ph">' + ic(["shield", "tooth", "sparkle", "heart", "child", "clock"][i % 6]) + "</div>") + "<figcaption>" + esc(label) + "</figcaption></figure>";
      }) + "</div></div></section>";
  };
  R.reviews = function () {
    return '<section class="sec"><div class="wrap"><div class="rev rv"><div><span class="eyebrow">Reviews</span><h2>' + em(S.reviewsTitle || "What patients say") + '</h2><p class="muted">The clinic\'s real Google reviews appear here.</p>' +
      '<div class="rev-slots"><div>Google review</div><div>Google review</div><div>Google review</div></div></div>' +
      '<div class="qr-card"><p><b>Visited us?</b>Scan to leave a Google review.</p><div class="qr" id="qr" aria-label="QR code for Google review"></div><a class="btn btn-ghost btn-sm" href="' + esc(K.reviewUrl) + '" target="_blank" rel="noopener">Write a review</a><small>Reviews are optional and never paid for.</small></div></div></div></section>';
  };
  function formFields(kind) {
    return '<input type="text" name="company" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">' +
      '<div class="row2"><label for="' + kind + '-n">Your name<input id="' + kind + '-n" name="name" autocomplete="name" required></label>' +
      '<label for="' + kind + '-p">Mobile number<input id="' + kind + '-p" name="phone" type="tel" inputmode="tel" autocomplete="tel" required></label></div>' +
      '<label for="' + kind + '-t">Treatment<select id="' + kind + '-t" name="treatment">' + treatmentOptions() + "</select></label>";
  }
  function consent(kind) { return '<label class="consent" for="' + kind + '-c"><input type="checkbox" id="' + kind + '-c" name="consent" required> I agree to be contacted about my appointment. Please don\'t share medical reports here.</label>'; }
  R.appointment = function () {
    var A = S.appointment || {}, days = [], d = new Date();
    for (var i = 0; days.length < (A.days || 7) && i < 21; i++) {
      var x = new Date(d.getFullYear(), d.getMonth(), d.getDate() + i);
      if ((A.closed || []).indexOf(x.getDay()) === -1) days.push(x);
    }
    var dn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], mn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return '<section class="sec sec-ink" id="appointment"><div class="wrap appt"><div class="rv"><span class="eyebrow">Appointment</span><h2>Request a slot <em>in 30 seconds.</em></h2><p>' + esc(A.note) + '</p><ul class="appt-alt"><li>' + ic("video") + "Video consultation available on request</li><li>" + ic("phone") + "Prefer calling? " + esc(K.phone) + "</li></ul></div>" +
      '<form class="form appt-f rv" id="appt" data-kind="Appointment request" novalidate><fieldset><legend>Choose a day</legend><div class="days">' +
      list(days, function (x, i) { var v = x.getFullYear() + "-" + (x.getMonth() + 1) + "-" + x.getDate(); return '<label class="chip-r"><input type="radio" name="day" value="' + dn[x.getDay()] + " " + x.getDate() + " " + mn[x.getMonth()] + '"' + (i === 0 ? " checked" : "") + "><span><b>" + dn[x.getDay()] + "</b>" + x.getDate() + " " + mn[x.getMonth()] + "</span></label>"; }) +
      '</div></fieldset><fieldset><legend>Preferred time</legend><div class="slots">' + list(A.slots, function (s, i) { return '<label class="chip-r"><input type="radio" name="slot" value="' + esc(s) + '"' + (i === 0 ? " checked" : "") + "><span>" + esc(s) + "</span></label>"; }) + "</div></fieldset>" +
      formFields("ap") + '<label class="consult"><input type="checkbox" name="video"> Video consultation</label>' + consent("ap") +
      '<p class="err" hidden></p><button class="btn btn-warm" type="submit">' + ic("cal") + "<span>Request appointment</span></button></form></div></section>";
  };
  R.tips = function () {
    return '<section class="sec"><div class="wrap">' + head("Patient tips", S.tipsTitle || "Small things that *make a difference.*") + '<div class="tips">' + list(S.tips, function (t) { return '<article class="tip rv"><h3>' + esc(t[0]) + "</h3><p>" + esc(t[1]) + "</p></article>"; }) + "</div></div></section>";
  };
  R.faq = function () {
    return '<section class="sec sec-tint" id="faq"><div class="wrap faq-w">' + head("FAQ", "Before your *first visit.*") + '<div class="faq">' + list(S.faq, function (f) { return '<details class="rv"><summary>' + esc(f[0]) + "</summary><p>" + esc(f[1]) + "</p></details>"; }) + "</div></div></section>";
  };
  R.contact = function () {
    var info = '<div class="ci">' +
      '<div class="ci-i">' + ic("pin") + "<p><b>Address</b>" + esc(K.address) + '<br><a href="' + esc(K.mapUrl) + '" target="_blank" rel="noopener">Open in Google Maps →</a></p></div>' +
      '<div class="ci-i">' + ic("clock") + "<p><b>Timings</b>" + list(K.hours, function (h) { return "<span>" + esc(h[0]) + ": " + esc(h[1]) + "</span>"; }) + "</p></div>" +
      '<div class="ci-i">' + ic("phone") + "<p><b>Call / WhatsApp</b>" + esc(K.phone) + '<span class="ci-btns"><a href="' + tel() + '">Call now</a><a ' + waA("Hi " + K.short + ", I have a question.") + ">WhatsApp</a></span></p></div>" +
      (K.email && tier >= 2 ? '<div class="ci-i">' + ic("mail") + "<p><b>Email</b>" + esc(K.email) + "</p></div>" : "") + "</div>";
    var form = '<form class="form rv" id="enq" data-kind="Enquiry" novalidate><h3>' + (tier >= 3 ? "Have a question?" : "Book an appointment") + "</h3>" + formFields("cf") +
      '<label for="cf-m"><span>Preferred day / time <span class="opt">(optional)</span></span><input id="cf-m" name="when"></label>' + consent("cf") +
      '<p class="err" hidden></p><button class="btn btn-primary" type="submit">' + (S.formEndpoint ? ic("check") + "<span>Send request</span>" : WA + "<span>Send on WhatsApp</span>") + "</button></form>";
    return '<section class="sec" id="contact"><div class="wrap">' + head("Visit us", "Find the clinic, or *message the front desk.*") + '<div class="contact">' + info + form + "</div></div></section>";
  };
  R.footer = function () {
    return '<footer class="ftr"><div class="wrap"><div><a class="brand brand-inv" href="#top">' + logo() + "<span><b>" + esc(K.name) + "</b><small>" + esc(K.specialty) + " · " + esc(K.city) + "</small></span></a><p>" + esc(K.address) + "</p>" + (K.registration ? "<p>" + esc(K.registration) + "</p>" : "") + "</div>" +
      '<div class="ftr-r"><p>© ' + new Date().getFullYear() + " " + esc(K.name) + '</p><p class="fine">Information on this website is general and not a substitute for a consultation.</p><p>Website by <a href="' + esc(S.agencyUrl) + '">RaiCorp</a></p></div></div></footer>';
  };

  /* ---------- theme + render ---------- */
  var root = document.documentElement;
  [["--primary", T.primary], ["--accent", T.accent], ["--warm", T.warm], ["--ink", T.ink], ["--paper", T.paper], ["--f-display", T.display], ["--f-body", T.body]].forEach(function (v) { if (v[1]) root.style.setProperty(v[0], v[1]); });
  if (T.fonts) { var l = document.createElement("link"); l.rel = "stylesheet"; l.href = "https://fonts.googleapis.com/css2?" + T.fonts + "&display=swap"; document.head.appendChild(l); }
  root.setAttribute("data-tier", S.tier || "pro");
  document.title = K.name + " — " + K.specialty + " in " + K.city;

  var html = [];
  if (S.sample) html.push('<div class="sample-bar"><b>Sample website by RaiCorp</b> · ' + esc((S.tier || "pro").replace(/^./, function (c) { return c.toUpperCase(); })) + ' plan · clinic, doctors and prices are illustrative. <a href="' + esc(S.agencyUrl + "/contact.html") + '">Get one for your clinic →</a></div>');
  (S.sections || []).forEach(function (k) { if (R[k] && tier >= (TIER_OF[k] || 1)) html.push(R[k]()); });
  if (tier >= 2) html.push('<nav class="mbar" aria-label="Quick actions"><a href="' + tel() + '">' + ic("phone") + "Call</a><a " + waA("Hi " + K.short + ", I would like to book an appointment.") + ">" + WA + 'WhatsApp</a><a href="' + (tier >= 3 ? "#appointment" : "#contact") + '">' + ic("cal") + "Book</a></nav>");
  else html.push('<a class="wa-float" ' + waA("Hi " + K.short + ", I would like to book an appointment.") + ' aria-label="WhatsApp">' + WA + "</a>");
  document.body.innerHTML = html.join("");

  var $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var opened = Date.now();

  // treatment "Book" links prefill the form
  $$("[data-treat]").forEach(function (a) { a.addEventListener("click", function () { var sel = $((tier >= 3 ? "#ap-t" : "#cf-t")); if (sel) sel.value = a.getAttribute("data-treat"); }); });

  // forms: validation, spam protection, tracking endpoint or WhatsApp
  $$("form.form").forEach(function (f) {
    var err = $(".err", f);
    f.addEventListener("input", function () { err.hidden = true; });
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var g = function (n) { return f.elements.namedItem(n); };
      if (g("company").value) return;                                // honeypot: bots fill the hidden field
      if (Date.now() - opened < 2500) { err.textContent = "Please wait a moment and try again."; err.hidden = false; return; }
      var name = g("name").value.trim(), phone = g("phone").value.replace(/\D/g, "").slice(-10);
      if (name.length < 2) { err.textContent = "Please enter your name."; err.hidden = false; g("name").focus(); return; }
      if (!/^[6-9]\d{9}$/.test(phone)) { err.textContent = "Please enter a valid 10-digit mobile number."; err.hidden = false; g("phone").focus(); return; }
      if (!g("consent").checked) { err.textContent = "Please tick the consent box so the clinic can contact you."; err.hidden = false; return; }
      var data = { type: f.getAttribute("data-kind"), name: name, phone: phone, treatment: g("treatment").value || "Not specified" };
      if (g("day")) { data.day = (f.querySelector("[name=day]:checked") || {}).value; data.time = (f.querySelector("[name=slot]:checked") || {}).value; data.video = g("video").checked ? "Yes" : "No"; }
      if (g("when")) data.preferred = g("when").value.trim();
      var msg = data.type + " — " + K.name + "\n" + Object.keys(data).filter(function (k) { return k !== "type" && data[k]; }).map(function (k) { return k[0].toUpperCase() + k.slice(1) + ": " + data[k]; }).join("\n");
      var btn = $("button[type=submit]", f);
      var done = function (viaWA) {
        f.innerHTML = '<div class="ok">' + ic("check") + "<h3>Request sent</h3><p>" + (viaWA ? "WhatsApp has opened with your details — press send there. " : "") + "The clinic will confirm on your mobile during working hours.</p></div>";
      };
      if (S.formEndpoint) {
        btn.disabled = true;
        fetch(S.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) })
          .then(function (r) { if (!r.ok) throw 0; done(false); })
          .catch(function () { btn.disabled = false;  err.innerHTML = 'Could not send. Please <a href="' + waMsg(msg) + '" target="_blank" rel="noopener">send on WhatsApp</a> or call ' + esc(K.phone) + "."; err.hidden = false; });
      } else { window.open(waMsg(msg), "_blank", "noopener"); done(true); }
    });
  });

  // before/after slider
  var r = $("#ba-r");
  if (r) { var upd = function () { $("#ba-b").style.clipPath = "inset(0 " + (100 - r.value) + "% 0 0)"; $("#ba-l").style.left = r.value + "%"; }; r.addEventListener("input", upd); upd(); }

  // review QR (advanced+)
  var q = $("#qr");
  if (q) { var s = document.createElement("script"); s.src = BASE + "assets/qrcode.min.js"; s.onload = function () { new QRCode(q, { text: K.reviewUrl, width: 132, height: 132, colorDark: T.ink || "#10262B", colorLight: "#ffffff" }); }; document.body.appendChild(s); }

  // header + reveal
  var hdr = $(".hdr"), onS = function () { hdr && hdr.classList.toggle("scrolled", window.scrollY > 10); };
  window.addEventListener("scroll", onS, { passive: true }); onS();
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    $$(".rv").forEach(function (el) { el.style.setProperty("--d", (Array.prototype.indexOf.call(el.parentNode.children, el) % 4) * 0.07 + "s"); io.observe(el); });
  }
})();
