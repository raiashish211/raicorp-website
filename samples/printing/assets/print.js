/* =====================================================================
   PRINTING TEMPLATE ENGINE — config.js (window.SITE) se poori website banata hai.
   Content badalna ho to config.js. Ye file sirf tab chhuo jab naya section type chahiye.
   Har section = R.<name>(), apne tier se upar hi render hota hai (TIER_OF).
   ===================================================================== */
(function () {
  var S = window.SITE || {}, B = S.business || {}, T = S.theme || {};
  var BASE = S.base || "";
  var RANK = { basic: 1, business: 2, premium: 3 }, tier = RANK[S.tier] || 3;
  var TIER_OF = { topbar: 2, header: 1, hero: 1, ticker: 3, stats: 2, services: 1, estimator: 3, process: 2, work: 2, industries: 3, why: 1, reviews: 2, faq: 2, cta: 2, contact: 1, footer: 1 };

  /* ---------- helpers ---------- */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function em(s) { return esc(s).replace(/\*(.+?)\*/g, "<em>$1</em>"); }
  function list(a, f) { return (a || []).map(f).join(""); }
  function src(p) { return /^(https?:|data:|\/)/.test(p) ? p : BASE + p; }
  function inr(n) { return "₹" + Math.round(n).toLocaleString("en-IN"); }
  function wa(text) { var m = S.sample ? (S.sampleMessage || text) : text; return "https://wa.me/" + (B.whatsapp || "") + (m ? "?text=" + encodeURIComponent(m) : ""); }
  function waA(text) { return 'href="' + wa(text) + '" target="_blank" rel="noopener"'; }
  var I = {
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.3-.4.3-.4.8-1.4a.5.5 0 000-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.7 11.8 11.8 0 004.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 001.8-1.2 2.2 2.2 0 00.2-1.2c-.1-.2-.3-.2-.5-.3z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    calc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };

  /* ---------- illustrations (brand colors se) ---------- */
  var C = { ink: T.ink || "#0E0F13", a: T.accent || "#E6007E", c: T.cyan || "#00A0E3", y: T.yellow || "#FFD200", g: T.glow || "#FF4FB0", p: "#F7F7F5" };
  var NAME = esc((B.signText || B.name || "").toUpperCase());
  var artN = 0;
  function art(kind) {
    var id = "pg" + (++artN), o = "";
    var glow = '<defs><filter id="' + id + '" x="-30%" y="-60%" width="160%" height="220%"><feGaussianBlur stdDeviation="3.2"/></filter></defs>';
    switch (kind) {
      case "card":
        o = '<rect x="58" y="34" width="132" height="80" rx="6" fill="' + C.a + '" transform="rotate(-9 124 74)"/>' +
          '<rect x="46" y="44" width="132" height="80" rx="6" fill="' + C.ink + '"/>' +
          '<circle cx="66" cy="66" r="7" fill="none" stroke="' + C.y + '" stroke-width="3"/><text x="80" y="70" font-size="11" font-weight="800" fill="#fff" font-family="Arial">' + NAME.slice(0, 12) + '</text>' +
          '<rect x="60" y="94" width="60" height="4" rx="2" fill="#ffffff55"/><rect x="60" y="103" width="44" height="4" rx="2" fill="#ffffff33"/>' +
          '<path d="M40 38v-8M40 38h-8M184 38v-8M184 38h8M40 130v8M40 130h-8M184 130v8M184 130h8" stroke="' + C.c + '" stroke-width="1.4"/>';
        break;
      case "sign":
        o = glow + '<rect x="18" y="36" width="204" height="70" rx="6" fill="' + C.ink + '" stroke="#ffffff22"/>' +
          '<text x="120" y="80" text-anchor="middle" font-size="28" font-weight="900" fill="' + C.g + '" filter="url(#' + id + ')" font-family="Arial Black,Arial">' + NAME.slice(0, 9) + '</text>' +
          '<text x="120" y="80" text-anchor="middle" font-size="28" font-weight="900" fill="#fff" font-family="Arial Black,Arial">' + NAME.slice(0, 9) + '</text>' +
          '<rect x="36" y="92" width="168" height="3" rx="1.5" fill="' + C.a + '"/><path d="M52 106v30M188 106v30" stroke="#8a8a92" stroke-width="3"/>';
        break;
      case "flex":
        o = '<rect x="20" y="28" width="200" height="104" fill="' + C.y + '"/><path d="M20 28h120l-60 104H20z" fill="' + C.a + '"/>' +
          '<text x="34" y="74" font-size="26" font-weight="900" fill="#fff" font-family="Arial Black,Arial">SALE</text><text x="130" y="100" font-size="34" font-weight="900" fill="' + C.ink + '" font-family="Arial Black,Arial">50%</text>' +
          list([28, 72, 116, 160, 212], function (x) { return '<circle cx="' + x + '" cy="34" r="3" fill="#fff" stroke="#999"/>'; });
        break;
      case "standee":
        o = '<rect x="84" y="14" width="72" height="124" rx="3" fill="' + C.ink + '"/><rect x="84" y="14" width="72" height="56" fill="' + C.a + '"/>' +
          '<circle cx="120" cy="44" r="16" fill="' + C.y + '"/><rect x="94" y="82" width="52" height="6" rx="3" fill="#ffffffaa"/><rect x="94" y="94" width="40" height="5" rx="2.5" fill="#ffffff55"/>' +
          '<rect x="94" y="112" width="52" height="14" rx="7" fill="' + C.c + '"/><rect x="74" y="138" width="92" height="8" rx="4" fill="#9a9aa2"/>';
        break;
      case "letters":
        o = '<rect x="10" y="20" width="220" height="120" fill="#E9E8E4"/>' +
          '<text x="124" y="102" text-anchor="middle" font-size="54" font-weight="900" fill="' + C.ink + '" font-family="Arial Black,Arial" opacity=".85">' + NAME.slice(0, 4) + '</text>' +
          '<text x="120" y="98" text-anchor="middle" font-size="54" font-weight="900" fill="' + C.a + '" font-family="Arial Black,Arial">' + NAME.slice(0, 4) + '</text>';
        break;
      case "neon":
        o = glow + '<rect x="10" y="14" width="220" height="132" rx="8" fill="#17141c"/>' +
          '<text x="120" y="88" text-anchor="middle" font-size="40" font-style="italic" font-weight="700" fill="' + C.g + '" filter="url(#' + id + ')" font-family="Brush Script MT,Georgia,serif">open</text>' +
          '<text x="120" y="88" text-anchor="middle" font-size="40" font-style="italic" font-weight="700" fill="#ffe6f4" font-family="Brush Script MT,Georgia,serif">open</text>' +
          '<path d="M70 104h100" stroke="' + C.c + '" stroke-width="3" stroke-linecap="round" filter="url(#' + id + ')"/><path d="M70 104h100" stroke="#dff6ff" stroke-width="1.5" stroke-linecap="round"/>';
        break;
      case "sticker":
        o = '<circle cx="100" cy="80" r="52" fill="' + C.a + '"/><circle cx="100" cy="80" r="40" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="4 4"/>' +
          '<text x="100" y="86" text-anchor="middle" font-size="16" font-weight="900" fill="#fff" font-family="Arial Black,Arial">' + NAME.slice(0, 7) + '</text>' +
          '<rect x="150" y="50" width="56" height="56" rx="12" fill="' + C.y + '" transform="rotate(12 178 78)"/><path d="M196 96l-14 6 10 10z" fill="#fff" opacity=".8"/>';
        break;
      case "stationery":
        o = '<rect x="40" y="16" width="104" height="132" rx="2" fill="#fff" stroke="#ddd"/><rect x="40" y="16" width="104" height="8" fill="' + C.a + '"/>' +
          '<circle cx="56" cy="40" r="7" fill="' + C.ink + '"/><rect x="68" y="36" width="50" height="5" rx="2" fill="' + C.ink + '"/>' +
          list([60, 70, 80, 90, 100], function (y) { return '<rect x="52" y="' + y + '" width="' + (y === 100 ? 50 : 80) + '" height="3" rx="1.5" fill="#d5d5d5"/>'; }) +
          '<rect x="120" y="70" width="96" height="62" rx="3" fill="' + C.ink + '" transform="rotate(8 168 101)"/><path d="M124 76l44 28 44-28" stroke="' + C.y + '" stroke-width="2" fill="none" transform="rotate(8 168 101)"/>';
        break;
      case "vehicle":
        o = '<path d="M24 112V64q0-10 10-10h104l30 26h40q10 0 10 10v22z" fill="#fff" stroke="#cfcfcf"/>' +
          '<path d="M24 92h194v12H24z" fill="' + C.a + '"/><path d="M146 58l24 22h-24z" fill="#bfe7f7"/>' +
          '<text x="34" y="84" font-size="15" font-weight="900" fill="' + C.ink + '" font-family="Arial Black,Arial">' + NAME.slice(0, 9) + '</text>' +
          '<circle cx="62" cy="114" r="13" fill="' + C.ink + '"/><circle cx="180" cy="114" r="13" fill="' + C.ink + '"/><circle cx="62" cy="114" r="5" fill="#bbb"/><circle cx="180" cy="114" r="5" fill="#bbb"/>';
        break;
      case "acp":
        o = glow + '<rect x="14" y="20" width="212" height="128" fill="#D8D8D4"/><rect x="14" y="20" width="212" height="40" fill="' + C.ink + '"/>' +
          '<text x="120" y="48" text-anchor="middle" font-size="20" font-weight="900" fill="' + C.y + '" filter="url(#' + id + ')" font-family="Arial Black,Arial">' + NAME.slice(0, 11) + '</text>' +
          '<text x="120" y="48" text-anchor="middle" font-size="20" font-weight="900" fill="#fff" font-family="Arial Black,Arial">' + NAME.slice(0, 11) + '</text>' +
          '<rect x="34" y="72" width="76" height="76" fill="#9fc9dd"/><rect x="130" y="72" width="76" height="76" fill="#9fc9dd"/><path d="M72 72v76M168 72v76" stroke="#fff" stroke-width="2"/>';
        break;
      case "brochure":
        o = '<path d="M40 28l52 10v100l-52-10z" fill="' + C.a + '"/><path d="M92 38l56-10v100l-56 10z" fill="#fff" stroke="#ddd"/><path d="M148 28l52 10v100l-52-10z" fill="' + C.ink + '"/>' +
          '<circle cx="120" cy="66" r="14" fill="' + C.y + '"/><rect x="104" y="90" width="34" height="4" rx="2" fill="#ccc"/><rect x="104" y="100" width="26" height="4" rx="2" fill="#ddd"/>' +
          '<rect x="158" y="62" width="32" height="4" rx="2" fill="#ffffff66"/><rect x="158" y="72" width="24" height="4" rx="2" fill="#ffffff44"/>';
        break;
      case "gift":
        o = '<path d="M34 50h56v70q0 12-12 12H46q-12 0-12-12z" fill="#fff" stroke="#ddd"/><path d="M90 64h10q12 0 12 14t-12 14H90" fill="none" stroke="#ddd" stroke-width="6"/>' +
          '<rect x="44" y="76" width="36" height="22" rx="3" fill="' + C.a + '"/>' +
          '<path d="M128 46l22-12h28l22 12 14 22-18 8-6-8v66h-52V68l-6 8-18-8z" fill="' + C.ink + '"/><circle cx="164" cy="82" r="12" fill="' + C.y + '"/>';
        break;
      default:
        o = '<rect x="20" y="20" width="200" height="120" fill="' + C.a + '"/>';
    }
    return '<svg class="art" viewBox="0 0 240 160" role="img" aria-label="' + esc(kind) + ' illustration">' + o + "</svg>";
  }
  function visual(item, cls) {
    return item.image ? '<img class="' + (cls || "") + '" src="' + esc(src(item.image)) + '" alt="' + esc(item.title || item.name) + '" loading="lazy">' : art(item.art);
  }
  function logo() {
    if (B.logo) return '<img class="logo-img" src="' + esc(src(B.logo)) + '" alt="' + esc(B.name) + '">';
    return '<svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 1v38M1 20h38" stroke="currentColor" stroke-width="1.4"/><circle cx="14" cy="15" r="6" fill="' + C.c + '" opacity=".9"/><circle cx="26" cy="15" r="6" fill="' + C.a + '" opacity=".9"/><circle cx="20" cy="25" r="6" fill="' + C.y + '" opacity=".9"/></svg>';
  }
  function head(eyebrow, title, intro) {
    return '<div class="head rv"><span class="eyebrow">' + esc(eyebrow) + "</span><h2>" + em(title) + "</h2>" + (intro ? "<p>" + esc(intro) + "</p>" : "") + "</div>";
  }
  function btnWA(label, text, cls) { return '<a class="btn ' + (cls || "btn-accent") + '" ' + waA(text) + ">" + I.wa + "<span>" + esc(label) + "</span></a>"; }

  /* ---------- sections ---------- */
  var R = {};
  R.topbar = function () {
    return '<div class="topbar"><div class="wrap"><span>' + I.clock + esc(B.hours) + '</span><span class="tb-r">' + I.pin + esc(B.areas || B.city) + "</span></div></div>";
  };
  R.header = function () {
    var links = [["Services", "#services"]];
    if (tier >= 3) links.push(["Price check", "#estimator"]);
    if (tier >= 2) links.push(["Our work", "#work"], ["FAQ", "#faq"]);
    links.push(["Contact", "#contact"]);
    return '<header class="hdr"><div class="wrap"><a class="brand" href="#top" aria-label="' + esc(B.name) + ' home">' + logo() +
      '<span><b>' + esc(B.name) + "</b><small>" + esc(B.tagline) + "</small></span></a>" +
      '<nav class="nav" aria-label="Main">' + list(links, function (l) { return '<a href="' + l[1] + '">' + esc(l[0]) + "</a>"; }) + "</nav>" +
      '<div class="hdr-cta"><a class="hdr-call" href="tel:' + esc((B.phone || "").replace(/\s/g, "")) + '" aria-label="Call">' + I.phone + "<span>" + esc(B.phone) + "</span></a>" +
      btnWA("Quote", "Hi " + B.name + ", I need a quote.", "btn-accent btn-sm") + "</div></div></header>";
  };
  R.hero = function () {
    var H = S.hero || {};
    return '<section class="hero" id="top"><div class="hero-grid" aria-hidden="true"></div><div class="wrap hero-in">' +
      '<div class="hero-copy"><span class="eyebrow">' + esc(H.eyebrow) + "</span><h1>" + em(H.title) + '</h1><p class="lede">' + esc(H.lede) + "</p>" +
      '<div class="actions">' + btnWA(H.primary || "WhatsApp us", "Hi " + B.name + ", I need a quote for printing / signage.") +
      (H.secondary && tier >= 2 ? '<a class="btn btn-ghost" href="' + esc(H.secondary[1]) + '">' + esc(H.secondary[0]) + "</a>" : '<a class="btn btn-ghost" href="#services">Our services</a>') + "</div>" +
      '<ul class="points">' + list(H.points, function (p) { return "<li>" + I.check + esc(p) + "</li>"; }) + "</ul></div>" +
      '<div class="hero-art">' +
        '<div class="board' + (tier >= 3 ? " board-anim" : "") + '"><div class="board-top"></div><div class="board-face"><span class="board-name">' + NAME + '</span><span class="board-sub">' + esc(B.tagline) + '</span></div><div class="board-legs"></div></div>' +
        '<div class="hero-card card-a"><span class="crop"></span><b>' + esc(B.name) + "</b><i>" + esc(B.phone) + '</i><span class="cmyk"><em></em><em></em><em></em><em></em></span></div>' +
        (tier >= 2 ? '<div class="hero-chip">' + I.clock + "<span><b>Ready in 24 hrs</b>cards & flex</span></div>" : "") +
      "</div></div></section>";
  };
  R.ticker = function () {
    var row = list(S.ticker, function (t) { return "<span>" + esc(t) + "</span><i></i>"; });
    return '<div class="ticker" aria-label="Services"><div class="ticker-track">' + row + row + "</div></div>";
  };
  R.stats = function () {
    return '<section class="stats"><div class="wrap"><dl>' + list(S.stats, function (s) { return '<div class="rv"><dt>' + esc(s[0]) + "</dt><dd>" + esc(s[1]) + "</dd></div>"; }) + "</dl>" +
      (S.sample && S.statsNote ? '<p class="note-s">' + esc(S.statsNote) + "</p>" : "") + "</div></section>";
  };
  R.services = function () {
    if (tier === 1) {
      return '<section class="sec" id="services"><div class="wrap">' + head("What we make", "Everything your business *prints.*") +
        '<ul class="svc-list">' + list(S.products, function (p) { return '<li class="rv"><b>' + esc(p.name) + "</b><span>" + esc(p.desc) + "</span></li>"; }) + "</ul></div></section>";
    }
    var cats = tier >= 3 ? '<div class="filters" role="tablist" aria-label="Category">' + list(S.categories, function (c, i) { return '<button type="button" data-cat="' + c[0] + '" aria-pressed="' + (i === 0) + '">' + esc(c[1]) + "</button>"; }) + "</div>" : "";
    return '<section class="sec" id="services"><div class="wrap">' + head("Products & services", "Everything your business *prints.*", "Starting prices shown. Ask on WhatsApp for your exact size and quantity.") + cats +
      '<div class="cat-grid">' + list(S.products, function (p) {
        return '<article class="prod rv" data-cat="' + esc(p.cat) + '"><div class="prod-vis">' + visual(p) + '</div><div class="prod-body"><h3>' + esc(p.name) + "</h3><p>" + esc(p.desc) + '</p><div class="prod-foot"><span class="from">Starting <b>' + esc(p.from) + "</b></span>" +
          '<a class="prod-ask" ' + waA("Hi " + B.name + ", I need a quote for " + p.name + ".") + ">Quote " + I.arrow + "</a></div></div></article>";
      }) + "</div></div></section>";
  };
  R.estimator = function () {
    var opts = list(S.products, function (p) { return '<option value="' + esc(p.id) + '">' + esc(p.name) + "</option>"; });
    return '<section class="sec sec-ink" id="estimator"><div class="wrap est">' +
      '<div class="est-copy rv"><span class="eyebrow">Instant price check</span><h2>Know the cost <em>before you call.</em></h2><p>Pick a product, enter size or quantity, and get an estimate in seconds. Send it on WhatsApp for the exact quote.</p>' +
      '<p class="est-note">' + esc(S.estimatorNote) + "</p></div>" +
      '<form class="est-form rv" id="est" novalidate><label for="est-p">Product<select id="est-p">' + opts + "</select></label>" +
      '<div class="est-row" data-unit="sqft"><label for="est-w">Width (ft)<input id="est-w" type="number" min="1" step="0.5" value="8" inputmode="decimal"></label><label for="est-h">Height (ft)<input id="est-h" type="number" min="1" step="0.5" value="3" inputmode="decimal"></label></div>' +
      '<div class="est-row" data-unit="inch"><label for="est-l">Letters<input id="est-l" type="number" min="1" value="8" inputmode="numeric"></label><label for="est-i">Height (inch)<input id="est-i" type="number" min="4" value="12" inputmode="numeric"></label></div>' +
      '<label for="est-q">Quantity<input id="est-q" type="number" min="1" value="1" inputmode="numeric"></label>' +
      '<div class="est-out" aria-live="polite"><span>Estimated cost</span><b id="est-v">—</b><small id="est-d"></small></div>' +
      '<p class="est-err" id="est-e" hidden></p>' +
      '<a class="btn btn-accent" id="est-wa" href="#" target="_blank" rel="noopener">' + I.wa + "<span>Get exact quote on WhatsApp</span></a></form></div></section>";
  };
  R.process = function () {
    return '<section class="sec sec-alt"><div class="wrap">' + head("How it works", "From idea to *installed* in four steps.") +
      '<ol class="steps">' + list(S.process, function (p) { return '<li class="rv"><h3>' + esc(p[0]) + "</h3><p>" + esc(p[1]) + "</p></li>"; }) + "</ol></div></section>";
  };
  R.work = function () {
    var cats = tier >= 3 ? '<div class="filters" role="tablist" aria-label="Work category">' + list(S.categories, function (c, i) { return '<button type="button" data-wcat="' + c[0] + '" aria-pressed="' + (i === 0) + '">' + esc(c[1]) + "</button>"; }) + "</div>" : "";
    return '<section class="sec" id="work"><div class="wrap">' + head("Our work", "Boards, prints and brands *we’ve made.*", S.sample ? "Illustrations shown — the shop’s real photos go here." : "") + cats +
      '<div class="work-grid">' + list(S.work, function (w, i) {
        return '<figure class="wk rv" data-cat="' + esc(w.cat) + '">' + (tier >= 3 ? '<button type="button" class="wk-open" data-i="' + i + '" aria-label="Open ' + esc(w.title) + '">' : "<div>") + visual(w) + (tier >= 3 ? "</button>" : "</div>") + "<figcaption>" + esc(w.title) + "</figcaption></figure>";
      }) + "</div></div>" + (tier >= 3 ? '<dialog class="lb" id="lb"><button type="button" class="lb-x" aria-label="Close">×</button><div class="lb-in"></div><p class="lb-cap"></p></dialog>' : "") + "</section>";
  };
  R.industries = function () {
    return '<section class="inds"><div class="wrap"><p>Trusted by</p><ul>' + list(S.industries, function (x) { return "<li>" + esc(x) + "</li>"; }) + "</ul></div></section>";
  };
  R.why = function () {
    return '<section class="sec' + (tier >= 2 ? " sec-alt" : "") + '"><div class="wrap">' + head("Why " + (B.name || "us").split(" ")[0], "One shop for *print, signs and branding.*") +
      '<div class="why">' + list(S.why, function (w, i) { return '<div class="why-i rv"><span class="why-n">0' + (i + 1) + "</span><h3>" + esc(w[0]) + "</h3><p>" + esc(w[1]) + "</p></div>"; }) + "</div></div></section>";
  };
  R.reviews = function () {
    var Rv = S.reviews || {};
    return '<section class="sec"><div class="wrap"><div class="rev rv"><div><span class="stars" aria-hidden="true">★★★★★</span><h2>' + em(Rv.title) + "</h2><p>" + esc(Rv.note) + '</p></div><div class="rev-slots"><div>Google review</div><div>Google review</div><div>Google review</div></div></div></div></section>';
  };
  R.faq = function () {
    return '<section class="sec sec-alt" id="faq"><div class="wrap faq-w">' + head("FAQ", "Questions customers *ask us.*") +
      '<div class="faq">' + list(S.faq, function (f) { return '<details class="rv"><summary>' + esc(f[0]) + "</summary><p>" + esc(f[1]) + "</p></details>"; }) + "</div></div></section>";
  };
  R.cta = function () {
    var c = S.cta || {};
    return '<section class="cta"><div class="wrap"><div class="cta-in rv"><div><h2>' + em(c.title) + "</h2><p>" + esc(c.text) + '</p></div><div class="actions">' +
      btnWA("Send shop photo", "Hi " + B.name + ", here is my shop photo. Please send a board design.") +
      '<a class="btn btn-ghost" href="tel:' + esc((B.phone || "").replace(/\s/g, "")) + '">' + I.phone + "<span>Call now</span></a></div></div></div></section>";
  };
  R.contact = function () {
    var info = '<div class="ci">' +
      '<div class="ci-i">' + I.pin + "<p><b>Visit</b>" + esc(B.address) + (B.mapUrl ? '<br><a href="' + esc(B.mapUrl) + '" target="_blank" rel="noopener">Get directions →</a>' : "") + "</p></div>" +
      '<div class="ci-i">' + I.phone + "<p><b>Call / WhatsApp</b>" + esc(B.phone) + "</p></div>" +
      (B.email ? '<div class="ci-i">' + I.mail + "<p><b>Email</b>" + esc(B.email) + "</p></div>" : "") +
      '<div class="ci-i">' + I.clock + "<p><b>Timings</b>" + esc(B.hours) + "</p></div>" + "</div>";
    var form = tier >= 2 ? '<form class="cform rv" id="cform" novalidate><h3>Send an enquiry</h3>' +
      list(S.contactForm, function (f, i) { return '<label for="cf' + i + '">' + esc(f) + (i === 2 ? '<textarea id="cf' + i + '" name="' + esc(f) + '"></textarea>' : '<input id="cf' + i + '" name="' + esc(f) + '" type="' + (i === 1 ? "tel" : "text") + '"' + (i === 1 ? ' inputmode="tel"' : "") + ">") + "</label>"; }) +
      '<p class="est-err" id="cf-e" hidden></p><button class="btn btn-accent" type="submit">' + I.wa + "<span>Send on WhatsApp</span></button><small>Have a design file? Attach it in WhatsApp after sending.</small></form>" :
      '<div class="cform cform-basic rv"><h3>Get a quote</h3><p>Send your size, quantity and a reference photo on WhatsApp.</p>' + btnWA("WhatsApp us", "Hi " + B.name + ", I need a quote.") + "</div>";
    return '<section class="sec" id="contact"><div class="wrap">' + head("Contact", "Visit the shop or *message us.*") + '<div class="contact">' + info + form + "</div></div></section>";
  };
  R.footer = function () {
    return '<footer class="ftr"><div class="wrap"><div class="ftr-b"><a class="brand brand-inv" href="#top">' + logo() + "<span><b>" + esc(B.name) + "</b><small>" + esc(S.footerNote || B.tagline) + "</small></span></a>" +
      "<p>" + esc(B.address) + "</p>" + (B.gst ? "<p>GSTIN: " + esc(B.gst) + "</p>" : "") + "</div>" +
      '<div class="ftr-l"><p>© ' + new Date().getFullYear() + " " + esc(B.name) + (B.since ? " · Since " + esc(B.since) : "") + '</p><p>Website by <a href="' + esc(S.agencyUrl || "https://raicorp.in") + '">RaiCorp</a></p></div></div></footer>';
  };

  /* ---------- theme ---------- */
  var root = document.documentElement;
  [["--ink", T.ink], ["--paper", T.paper], ["--surface", T.surface], ["--accent", T.accent], ["--cyan", T.cyan], ["--yellow", T.yellow], ["--glow", T.glow], ["--f-display", T.display], ["--f-body", T.body]]
    .forEach(function (v) { if (v[1]) root.style.setProperty(v[0], v[1]); });
  if (T.fonts) { var l = document.createElement("link"); l.rel = "stylesheet"; l.href = "https://fonts.googleapis.com/css2?" + T.fonts + "&display=swap"; document.head.appendChild(l); }
  document.title = B.name + " — " + (B.tagline || "Printing & signage") + (B.city ? " in " + B.city : "");
  root.setAttribute("data-tier", S.tier || "premium");

  /* ---------- render ---------- */
  var html = [];
  if (S.sample) html.push('<div class="sample-bar"><b>Sample website by RaiCorp</b> · ' + esc((S.tier || "premium").replace(/^./, function (c) { return c.toUpperCase(); })) + ' plan · business details are illustrative. <a href="' + esc((S.agencyUrl || "https://raicorp.in") + "/contact.html") + '">Get one like this →</a></div>');
  (S.sections || []).forEach(function (k) { if (R[k] && tier >= (TIER_OF[k] || 1)) html.push(R[k]()); });
  html.push('<a class="wa-float" ' + waA("Hi " + B.name + ", I need a quote.") + ' aria-label="WhatsApp">' + I.wa + "</a>");
  if (tier >= 3) html.push('<nav class="mbar" aria-label="Quick actions"><a href="tel:' + esc((B.phone || "").replace(/\s/g, "")) + '">' + I.phone + "Call</a><a " + waA("Hi " + B.name + ", I need a quote.") + ">" + I.wa + 'WhatsApp</a><a href="#estimator">' + I.calc + "Price</a></nav>");
  document.body.innerHTML = html.join("");

  /* ---------- behaviour ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // category filters (services + work)
  function filter(attr, gridSel) {
    $$("[" + attr + "]").forEach(function (b) {
      b.addEventListener("click", function () {
        var v = b.getAttribute(attr);
        $$("[" + attr + "]").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        $$(gridSel).forEach(function (el) { el.hidden = !(v === "all" || el.getAttribute("data-cat") === v); });
      });
    });
  }
  filter("data-cat", ".cat-grid .prod"); filter("data-wcat", ".work-grid .wk");

  // estimator
  var est = $("#est");
  if (est) {
    var P = {}; S.products.forEach(function (p) { P[p.id] = p; });
    var num = function (id) { return parseFloat($(id).value); };
    var calc = function () {
      var p = P[$("#est-p").value], err = $("#est-e"), out = $("#est-v"), det = $("#est-d"), total, detail;
      $$(".est-row", est).forEach(function (r) { r.hidden = r.getAttribute("data-unit") !== p.unit; });
      var q = num("#est-q");
      if (!(q >= 1)) { err.textContent = "Enter a quantity of 1 or more."; err.hidden = false; out.textContent = "—"; det.textContent = ""; return; }
      if (p.unit === "sqft") {
        var w = num("#est-w"), h = num("#est-h");
        if (!(w > 0 && h > 0)) { err.textContent = "Enter width and height in feet."; err.hidden = false; out.textContent = "—"; det.textContent = ""; return; }
        total = Math.max(p.rate * w * h * q, p.min || 0); detail = w + " × " + h + " ft × " + q + " @ ₹" + p.rate + "/sq ft";
      } else if (p.unit === "inch") {
        var n = num("#est-l"), ih = num("#est-i");
        if (!(n > 0 && ih > 0)) { err.textContent = "Enter number of letters and height in inches."; err.hidden = false; out.textContent = "—"; det.textContent = ""; return; }
        total = Math.max(p.rate * n * ih * q, p.min || 0); detail = n + " letters × " + ih + " in @ ₹" + p.rate + "/inch";
      } else {
        var slab = p.slabs[0]; p.slabs.forEach(function (s) { if (q >= s[0]) slab = s; });
        total = slab[1] * Math.max(q, p.slabs[0][0]); detail = Math.max(q, p.slabs[0][0]) + " pcs @ ₹" + slab[1] + " each" + (q < p.slabs[0][0] ? " (minimum " + p.slabs[0][0] + ")" : "");
      }
      err.hidden = true;
      out.textContent = inr(total * 0.9) + " – " + inr(total * 1.15); det.textContent = detail;
      $("#est-wa").href = wa("Hi " + B.name + ", price check: " + p.name + " — " + detail + ". Estimate " + out.textContent + ". Please send the exact quote.");
    };
    var setQty = function () { var p = P[$("#est-p").value]; $("#est-q").value = p.unit === "pcs" ? p.slabs[0][0] : 1; };
    $("#est-p").addEventListener("change", function () { setQty(); calc(); });
    est.addEventListener("input", calc); est.addEventListener("submit", function (e) { e.preventDefault(); }); setQty(); calc();
  }

  // contact form -> WhatsApp
  var cf = $("#cform");
  if (cf) cf.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = $$("input,textarea", cf), errEl = $("#cf-e");
    if (!f[0].value.trim() || f[1].value.replace(/\D/g, "").length < 10) { errEl.textContent = "Please enter your name and a 10-digit phone number."; errEl.hidden = false; (f[0].value.trim() ? f[1] : f[0]).focus(); return; }
    errEl.hidden = true;
    var msg = "New enquiry\n" + f.map(function (x) { return x.name + ": " + x.value; }).join("\n");
    window.open(wa(msg), "_blank", "noopener");
  });
  cf && cf.addEventListener("input", function () { $("#cf-e").hidden = true; });

  // lightbox
  var lb = $("#lb");
  if (lb && lb.showModal) {
    $$(".wk-open").forEach(function (b) {
      b.addEventListener("click", function () { var w = S.work[+b.getAttribute("data-i")]; $(".lb-in", lb).innerHTML = visual(w); $(".lb-cap", lb).textContent = w.title; lb.showModal(); });
    });
    $(".lb-x", lb).addEventListener("click", function () { lb.close(); });
    lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
  }

  // header shadow + reveal on scroll
  var hdr = $(".hdr");
  var onS = function () { if (hdr) hdr.classList.toggle("scrolled", window.scrollY > 10); };
  window.addEventListener("scroll", onS, { passive: true }); onS();
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    $$(".rv").forEach(function (el) { el.style.setProperty("--d", (Array.prototype.indexOf.call(el.parentNode.children, el) % 4) * 0.07 + "s"); io.observe(el); });
  }
})();
