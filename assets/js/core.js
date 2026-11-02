/*
  CORE — shared helpers jo har section use karta hai.
  Normally ise edit karne ki zarurat nahi padti.
*/
(function () {
  "use strict";
  var C = window.CONTENT = window.CONTENT || {};
  var RC = window.RC = { sections: {} };

  /* ---------- basic helpers ---------- */
  RC.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  RC.$ = function (sel, root) { return (root || document).querySelector(sel); };
  RC.$all = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  RC.qs = function (name) { return new URLSearchParams(location.search).get(name); };
  RC.list = function (arr, fn) { return (arr || []).map(fn).join(""); };
  RC.wa = function (text) {
    var s = C.site || {};
    return "https://wa.me/" + s.whatsapp + "?text=" + encodeURIComponent(text || ("Hi " + s.company + ", I'd like to discuss a project."));
  };
  RC.waAttrs = function (text) { return 'href="' + RC.wa(text) + '" target="_blank" rel="noopener"'; };
  RC.years = function () { return new Date().getFullYear() - ((C.site && C.site.foundedYear) || new Date().getFullYear()); };
  /* {company}, {years}, {founded}, {exp} (founder ka experience) placeholders kisi bhi text me use kar sakte ho */
  RC.t = function (str) {
    var s = C.site || {};
    return String(str == null ? "" : str)
      .replace(/\{company\}/g, s.company || "")
      .replace(/\{years\}/g, RC.years())
      .replace(/\{founded\}/g, s.foundedYear || "")
      .replace(/\{exp\}/g, new Date().getFullYear() - (s.experienceSince || new Date().getFullYear()))
      .replace(/\{year\}/g, new Date().getFullYear());
  };
  RC.tx = function (str) { return RC.esc(RC.t(str)); };

  RC.store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* storage blocked */ } }
  };

  /* ---------- region & pricing ---------- */
  function regions() { return (C.site && C.site.regions) || []; }
  RC.regionById = function (id) { return regions().filter(function (r) { return r.id === id; })[0]; };
  RC.defaultRegion = function () { return regions().filter(function (r) { return r.default; })[0] || regions()[0]; };
  RC.detectRegion = function () {
    var tz = "";
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) { /* old browser */ }
    var hit = regions().filter(function (r) {
      return (r.timezones || []).some(function (t) { return t.slice(-1) === "*" ? tz.indexOf(t.slice(0, -1)) === 0 : t === tz; });
    })[0];
    return hit || RC.defaultRegion();
  };
  RC.region = function () {
    var saved = RC.regionById(RC.store.get("rc-region") || RC.qs("region") || "");
    return saved || RC.detectRegion();
  };
  RC.setRegion = function (id) {
    RC.store.set("rc-region", id);
    RC.mountAll();
  };
  /* price = { IN: 14999, INTL: 399, UK: 349 ... } — jo region missing hai wahan INTL dikhega */
  RC.price = function (price) {
    if (price == null) return "";
    if (typeof price === "string") return RC.esc(price);
    var r = RC.region(), val = price[r.id], region = r;
    if (val == null) { region = RC.defaultRegion(); val = price[region.id]; }
    if (val == null) return "";
    if (typeof val === "string") return RC.esc(val);
    try {
      return new Intl.NumberFormat(region.locale || "en", { style: "currency", currency: region.currency, maximumFractionDigits: 0 }).format(val);
    } catch (e) { return (region.symbol || "") + val; }
  };

  /* ---------- lookups ---------- */
  RC.service = function (id) { return ((C.services && C.services.items) || []).filter(function (s) { return s.id === id; })[0]; };
  RC.category = function (id) { return ((C.industries && C.industries.items) || []).filter(function (c) { return c.id === id; })[0]; };
  RC.sample = function (id) { return ((C.portfolio && C.portfolio.items) || []).filter(function (s) { return s.id === id; })[0]; };
  RC.samplesIn = function (catId) { return ((C.portfolio && C.portfolio.items) || []).filter(function (s) { return s.category === catId; }); };

  /* ---------- icons (simple line icons, name -> svg) ---------- */
  var ICONS = {
    web: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>',
    mobile: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    software: '<path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12"/>',
    crm: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4.5a3 3 0 0 1 0 6M21 20c0-2.6-1.6-4.8-4-5.6"/>',
    erp: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    cart: '<path d="M3 4h2l2.4 11h11L21 7H6.2"/><circle cx="9" cy="19.5" r="1.5"/><circle cx="17" cy="19.5" r="1.5"/>',
    design: '<path d="M12 3a9 9 0 1 0 0 18c1 0 1.5-.8 1.5-1.6 0-1.3-1-1.6-1-2.7 0-.8.7-1.4 1.6-1.4H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>',
    seo: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21M8 11.5l2 2 3.5-4"/>',
    megaphone: '<path d="M3 10v4h3l7 4V6L6 10H3zM16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    users: '<circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2.5 20c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5M14 15.2c.9-.5 1.9-.7 3-.7 2.5 0 4.5 2 4.5 4.5"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 8-8-1.3-1.3a4 4 0 0 1-5-5L13 2.5z" transform="rotate(0)"/><path d="M3 21l6-6"/>',
    rocket: '<path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M9 12l3 3M14.5 4.5c3-1.5 5-1.5 5-1.5s0 2-1.5 5L12 14l-4-4z"/><circle cx="15" cy="9" r="1.2"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M21 20H3"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    brand: '<path d="M12 2l3 6 6 1-4.5 4.3 1 6.2L12 16.6 6.5 19.5l1-6.2L3 9l6-1z" opacity="0"/><path d="M4 7h16M4 12h10M4 17h6"/><circle cx="18" cy="16" r="3"/>',
    hire: '<circle cx="10" cy="8" r="4"/><path d="M3 21c0-3.9 3.1-7 7-7 1.3 0 2.5.3 3.5.9M17 15v6M14 18h6"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/>',
    pin: '<path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'
  };
  RC.icon = function (name, cls) {
    return '<svg class="ico ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || ICONS.software) + "</svg>";
  };

  /* ---------- generated previews (website / app / dashboard) ---------- */
  RC.mockup = function (s, variant) {
    var E = RC.esc;
    var t = s.theme || "#1B2440", a = s.accent || "#C9A45C";
    var name = E(s.title), hero = E(s.heroText || s.title), cta = E(s.cta || "Contact us");
    var rawNav = s.nav || ["Home", "Services", "About", "Contact"];
    var domain = E(s.id) + ".com";
    var o = ['<svg viewBox="0 0 1200 750" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + name + " " + E(variant) + ' preview" font-family="Segoe UI, Helvetica, Arial, sans-serif">', '<rect width="1200" height="750" rx="14" fill="#fff"/>'];
    function fo(x, y, w, h, size, color, txt) {
      return '<foreignObject x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '"><div xmlns="http://www.w3.org/1999/xhtml" style="color:' + color + ";font:700 " + size + 'px/1.15 Segoe UI,Helvetica,Arial,sans-serif">' + txt + "</div></foreignObject>";
    }
    function phone(px, py, scale) {
      var p = [];
      p.push('<g transform="translate(' + px + " " + py + ") scale(" + (scale || 1) + ')">');
      p.push('<rect width="330" height="640" rx="40" fill="#1d2430"/><rect x="14" y="14" width="302" height="612" rx="30" fill="#fff"/>');
      p.push('<text x="34" y="52" font-size="17" font-weight="700" fill="' + t + '">' + name + '</text><rect x="270" y="38" width="26" height="3" fill="#333"/><rect x="270" y="46" width="26" height="3" fill="#333"/><rect x="270" y="54" width="26" height="3" fill="#333"/>');
      p.push('<rect x="14" y="80" width="302" height="230" fill="' + t + '"/>' + fo(34, 100, 262, 120, 24, "#fff", hero));
      p.push('<rect x="34" y="250" width="190" height="42" rx="21" fill="' + a + '"/><text x="129" y="277" font-size="14" font-weight="700" fill="#1d2430" text-anchor="middle">' + cta + "</text>");
      for (var m = 0; m < 3; m++) {
        var my = 330 + m * 92;
        p.push('<rect x="34" y="' + my + '" width="262" height="78" rx="10" fill="' + t + '" opacity=".08"/><rect x="46" y="' + (my + 12) + '" width="54" height="54" rx="8" fill="' + t + '" opacity=".35"/><rect x="114" y="' + (my + 18) + '" width="150" height="12" rx="4" fill="#2b3340" opacity=".7"/><rect x="114" y="' + (my + 40) + '" width="110" height="10" rx="4" fill="#2b3340" opacity=".3"/>');
      }
      p.push('<rect x="14" y="566" width="302" height="60" fill="#f3f5f8"/>');
      for (var n = 0; n < 4; n++) p.push('<circle cx="' + (60 + n * 70) + '" cy="590" r="9" fill="' + (n === 0 ? t : "#b8c0cc") + '"/>');
      p.push("</g>");
      return p.join("");
    }

    if (variant === "phone") {
      return '<svg viewBox="0 0 330 640" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + name + ' app preview" font-family="Segoe UI, Helvetica, Arial, sans-serif">' + phone(0, 0, 1) + "</svg>";
    }
    if (variant === "app") {
      o.push('<rect width="1200" height="750" rx="14" fill="' + t + '" opacity=".12"/>');
      o.push(phone(220, 55, 1));
      o.push('<g opacity=".95">' + phone(650, 95, .88) + "</g>");
      o.push("</svg>");
      return o.join("");
    }
    if (variant === "mobile") {
      o.push('<rect width="1200" height="750" rx="14" fill="' + t + '" opacity=".1"/>');
      o.push('<rect x="80" y="120" width="560" height="380" rx="10" fill="#fff" stroke="#d6dbe3"/><rect x="80" y="120" width="560" height="28" rx="10" fill="#e9edf2"/><rect x="80" y="148" width="560" height="150" fill="' + t + '"/><rect x="110" y="190" width="300" height="22" rx="4" fill="#fff" opacity=".9"/><rect x="110" y="226" width="220" height="12" rx="4" fill="#fff" opacity=".6"/>');
      for (var g0 = 0; g0 < 3; g0++) o.push('<rect x="' + (110 + g0 * 175) + '" y="320" width="150" height="150" rx="8" fill="' + t + '" opacity=".14"/>');
      o.push(phone(760, 60, 1));
      o.push("</svg>");
      return o.join("");
    }
    if (variant === "dashboard") {
      o.push('<rect width="1200" height="750" rx="14" fill="#f4f6f9"/>');
      o.push('<rect width="230" height="750" rx="14" fill="' + t + '"/><rect x="216" width="14" height="750" fill="' + t + '"/>');
      var short = s.appName || (s.title.length > 18 ? s.title.slice(0, 17).trim() + "…" : s.title);
      o.push('<text x="30" y="52" font-size="19" font-weight="700" fill="#fff">' + E(short) + "</text>");
      var menu = s.menu || ["Dashboard", "Leads", "Customers", "Reports", "Settings"];
      menu.forEach(function (mi, i) {
        var y = 110 + i * 52;
        if (i === 0) o.push('<rect x="16" y="' + (y - 26) + '" width="198" height="40" rx="8" fill="#fff" opacity=".16"/>');
        o.push('<rect x="32" y="' + (y - 14) + '" width="16" height="16" rx="4" fill="#fff" opacity=".7"/><text x="60" y="' + y + '" font-size="15" fill="#fff" opacity="' + (i === 0 ? 1 : .75) + '">' + E(mi) + "</text>");
      });
      o.push('<rect x="230" width="970" height="64" fill="#fff"/><rect x="262" y="20" width="300" height="24" rx="12" fill="#f0f2f5"/><circle cx="1150" cy="32" r="16" fill="' + a + '"/>');
      o.push('<text x="262" y="112" font-size="24" font-weight="700" fill="#1d2430">' + E(s.dashTitle || "Overview") + "</text>");
      var kpis = s.kpis || ["New leads", "Follow-ups", "Converted", "Revenue"];
      kpis.slice(0, 4).forEach(function (k, i) {
        var x = 262 + i * 228;
        o.push('<rect x="' + x + '" y="134" width="210" height="104" rx="12" fill="#fff" stroke="#e3e7ed"/><text x="' + (x + 18) + '" y="166" font-size="14" fill="#5b6577">' + E(k) + '</text><rect x="' + (x + 18) + '" y="186" width="' + (70 + i * 12) + '" height="26" rx="5" fill="' + (i === 0 ? t : "#2b3340") + '" opacity="' + (i === 0 ? .9 : .75) + '"/><rect x="' + (x + 150) + '" y="192" width="40" height="14" rx="7" fill="' + (i === 2 ? "#ffd8d2" : "#d6f0e1") + '"/>');
      });
      o.push('<rect x="262" y="258" width="560" height="300" rx="12" fill="#fff" stroke="#e3e7ed"/><text x="282" y="292" font-size="15" font-weight="700" fill="#1d2430">This month</text>');
      var bars = [120, 160, 140, 200, 180, 230, 210, 250, 190, 240, 220, 260];
      bars.forEach(function (h, i) { o.push('<rect x="' + (290 + i * 43) + '" y="' + (535 - h * .85) + '" width="24" height="' + (h * .85) + '" rx="4" fill="' + (i === 11 ? a : t) + '" opacity="' + (i === 11 ? 1 : .75) + '"/>'); });
      o.push('<rect x="842" y="258" width="326" height="300" rx="12" fill="#fff" stroke="#e3e7ed"/><circle cx="1005" cy="408" r="90" fill="none" stroke="#e9edf2" stroke-width="30"/><circle cx="1005" cy="408" r="90" fill="none" stroke="' + t + '" stroke-width="30" stroke-dasharray="380 566" transform="rotate(-90 1005 408)"/><circle cx="1005" cy="408" r="90" fill="none" stroke="' + a + '" stroke-width="30" stroke-dasharray="110 566" stroke-dashoffset="-380" transform="rotate(-90 1005 408)"/>');
      o.push('<rect x="262" y="578" width="906" height="150" rx="12" fill="#fff" stroke="#e3e7ed"/>');
      for (var r = 0; r < 3; r++) {
        var ry = 612 + r * 38;
        o.push('<circle cx="292" cy="' + ry + '" r="12" fill="' + t + '" opacity=".25"/><rect x="316" y="' + (ry - 6) + '" width="180" height="12" rx="4" fill="#2b3340" opacity=".65"/><rect x="560" y="' + (ry - 6) + '" width="120" height="12" rx="4" fill="#2b3340" opacity=".3"/><rect x="760" y="' + (ry - 6) + '" width="140" height="12" rx="4" fill="#2b3340" opacity=".3"/><rect x="1040" y="' + (ry - 11) + '" width="96" height="22" rx="11" fill="' + (r === 1 ? a : "#d6f0e1") + '"/>');
      }
      o.push("</svg>");
      return o.join("");
    }

    if (variant === "social") {
      o.push('<rect width="1200" height="750" rx="14" fill="' + t + '" opacity=".1"/>');
      [[90, 70, 1], [450, 40, 1], [810, 90, 1]].forEach(function (p, i) {
        var x = p[0], y = p[1];
        o.push('<rect x="' + x + '" y="' + y + '" width="300" height="600" rx="18" fill="#fff" stroke="#e3e7ed"/>');
        o.push('<circle cx="' + (x + 30) + '" cy="' + (y + 32) + '" r="14" fill="' + t + '"/><text x="' + (x + 54) + '" y="' + (y + 37) + '" font-size="14" font-weight="700" fill="#1d2430">' + name + "</text>");
        o.push('<rect x="' + x + '" y="' + (y + 60) + '" width="300" height="340" fill="' + (i === 1 ? t : (i === 0 ? a : "#2b3340")) + '" opacity="' + (i === 2 ? .85 : 1) + '"/>');
        if (i === 1) o.push(fo(x + 24, y + 180, 252, 120, 30, "#fff", hero) + '<rect x="' + (x + 24) + '" y="' + (y + 320) + '" width="140" height="40" rx="20" fill="' + a + '"/><text x="' + (x + 94) + '" y="' + (y + 345) + '" font-size="14" font-weight="700" fill="#1d2430" text-anchor="middle">' + cta + "</text>");
        else o.push('<circle cx="' + (x + 150) + '" cy="' + (y + 230) + '" r="60" fill="#fff" opacity=".3"/>');
        o.push('<path d="M' + (x + 26) + " " + (y + 432) + " a9 9 0 0 1 14 -6 a9 9 0 0 1 14 6 c0 9 -14 17 -14 17 s-14 -8 -14 -17z\" fill=\"" + (i === 1 ? "#e0245e" : "none") + '" stroke="#1d2430" stroke-width="2"/><circle cx="' + (x + 86) + '" cy="' + (y + 438) + '" r="10" fill="none" stroke="#1d2430" stroke-width="2"/>');
        o.push('<rect x="' + (x + 24) + '" y="' + (y + 470) + '" width="200" height="12" rx="4" fill="#2b3340" opacity=".7"/><rect x="' + (x + 24) + '" y="' + (y + 494) + '" width="240" height="10" rx="4" fill="#2b3340" opacity=".3"/><rect x="' + (x + 24) + '" y="' + (y + 514) + '" width="170" height="10" rx="4" fill="#2b3340" opacity=".3"/>');
        if (i === 1) o.push('<rect x="' + (x + 24) + '" y="' + (y + 546) + '" width="80" height="22" rx="11" fill="' + t + '" opacity=".15"/><text x="' + (x + 64) + '" y="' + (y + 561) + '" font-size="12" font-weight="700" fill="' + t + '" text-anchor="middle">Sponsored</text>');
      });
      o.push("</svg>");
      return o.join("");
    }
    if (variant === "search") {
      o.push('<rect width="1200" height="44" rx="14" fill="#e9edf2"/><rect y="30" width="1200" height="14" fill="#e9edf2"/><circle cx="26" cy="22" r="7" fill="#ff6058"/><circle cx="48" cy="22" r="7" fill="#ffbd2e"/><circle cx="70" cy="22" r="7" fill="#28c940"/>');
      o.push('<rect x="60" y="80" width="640" height="52" rx="26" fill="#fff" stroke="#d9dee5"/><text x="92" y="113" font-size="18" fill="#3c4450">best ' + E((s.query || "service") ) + ' near me</text>');
      o.push('<rect x="60" y="160" width="640" height="210" rx="12" fill="#f1f4f8"/>');
      for (var pz = 0; pz < 3; pz++) o.push('<circle cx="' + (180 + pz * 170) + '" cy="' + (230 + (pz % 2) * 50) + '" r="' + (pz === 0 ? 16 : 11) + '" fill="' + (pz === 0 ? a : "#c0392b") + '"/>');
      o.push('<path d="M60 300 Q300 240 700 330" stroke="#fff" stroke-width="10" fill="none"/>');
      var rows = [[name, 4.9, true], ["Another business", 4.3, false], ["Third result", 4.1, false]];
      rows.forEach(function (rw, i) {
        var y = 400 + i * 108;
        o.push('<rect x="60" y="' + y + '" width="640" height="94" rx="10" fill="' + (rw[2] ? "#fff8e1" : "#fff") + '" stroke="' + (rw[2] ? a : "#e3e7ed") + '" stroke-width="' + (rw[2] ? 2 : 1) + '"/>');
        o.push('<text x="84" y="' + (y + 34) + '" font-size="19" font-weight="700" fill="#1a4fb4">' + rw[0] + '</text><text x="84" y="' + (y + 62) + '" font-size="15" fill="#5b6577">' + rw[1] + ' ★★★★★ · Open now</text>');
        if (rw[2]) o.push('<rect x="580" y="' + (y + 26) + '" width="96" height="40" rx="20" fill="' + t + '"/><text x="628" y="' + (y + 51) + '" font-size="14" font-weight="700" fill="#fff" text-anchor="middle">Call</text>');
      });
      o.push('<rect x="760" y="80" width="400" height="630" rx="14" fill="#fff" stroke="#e3e7ed"/><text x="790" y="124" font-size="18" font-weight="700" fill="#1d2430">Monthly report</text>');
      [["Calls from Google", "↑"], ["Website visits", "↑"], ["Map views", "↑"]].forEach(function (k, i) {
        var y = 150 + i * 100;
        o.push('<rect x="790" y="' + y + '" width="340" height="84" rx="10" fill="#f4f6f9"/><text x="810" y="' + (y + 32) + '" font-size="15" fill="#5b6577">' + k[0] + '</text><rect x="810" y="' + (y + 46) + '" width="' + (110 + i * 30) + '" height="22" rx="5" fill="' + t + '" opacity=".85"/><text x="1100" y="' + (y + 64) + '" font-size="22" font-weight="700" fill="#1e9e52">' + k[1] + "</text>");
      });
      var pts = [[800, 660], [860, 640], [920, 645], [980, 600], [1040, 590], [1100, 540], [1130, 520]];
      o.push('<polyline points="' + pts.map(function (p) { return p.join(","); }).join(" ") + '" fill="none" stroke="' + a + '" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>');
      o.push("</svg>");
      return o.join("");
    }
    if (variant === "brand") {
      o.push('<rect width="1200" height="750" rx="14" fill="#f4f6f9"/>');
      o.push('<rect x="50" y="50" width="520" height="380" rx="16" fill="' + t + '"/><rect x="240" y="150" width="140" height="140" rx="30" fill="' + a + '" transform="rotate(45 310 220)"/><rect x="275" y="185" width="70" height="70" rx="12" fill="' + t + '" transform="rotate(45 310 220)"/><text x="310" y="380" font-size="30" font-weight="700" fill="#fff" text-anchor="middle">' + name + "</text>");
      [t, a, "#13203A", "#F4F6F9", "#D9E0E8"].forEach(function (c, i) { o.push('<rect x="' + (610 + i * 110) + '" y="50" width="96" height="150" rx="12" fill="' + c + '" stroke="#e3e7ed"/><text x="' + (610 + i * 110 + 10) + '" y="228" font-size="13" fill="#5b6577">' + c + "</text>"); });
      o.push('<rect x="610" y="260" width="540" height="170" rx="16" fill="#fff" stroke="#e3e7ed"/><text x="640" y="330" font-size="56" font-weight="800" fill="#13203A">Aa</text><rect x="760" y="296" width="300" height="16" rx="5" fill="#2b3340" opacity=".7"/><rect x="760" y="326" width="240" height="12" rx="5" fill="#2b3340" opacity=".3"/><rect x="760" y="350" width="270" height="12" rx="5" fill="#2b3340" opacity=".3"/>');
      o.push('<rect x="50" y="470" width="340" height="230" rx="16" fill="#fff" stroke="#e3e7ed"/><rect x="74" y="494" width="140" height="18" rx="5" fill="' + t + '"/><rect x="74" y="530" width="220" height="10" rx="4" fill="#2b3340" opacity=".3"/><rect x="74" y="650" width="120" height="24" rx="6" fill="' + a + '"/>');
      o.push('<rect x="420" y="470" width="230" height="230" rx="16" fill="' + a + '"/><circle cx="535" cy="560" r="44" fill="#fff" opacity=".45"/><rect x="450" y="640" width="170" height="14" rx="5" fill="' + t + '"/>');
      o.push('<rect x="680" y="470" width="230" height="230" rx="16" fill="' + t + '"/><rect x="710" y="510" width="140" height="22" rx="5" fill="#fff" opacity=".9"/><rect x="710" y="546" width="110" height="12" rx="4" fill="#fff" opacity=".5"/><rect x="710" y="640" width="100" height="30" rx="15" fill="' + a + '"/>');
      o.push('<rect x="940" y="470" width="210" height="230" rx="16" fill="#fff" stroke="#e3e7ed"/><circle cx="1045" cy="560" r="40" fill="' + t + '" opacity=".2"/><rect x="980" y="630" width="130" height="12" rx="4" fill="#2b3340" opacity=".5"/>');
      o.push("</svg>");
      return o.join("");
    }
    if (variant === "team") {
      o.push('<rect width="1200" height="750" rx="14" fill="#f4f6f9"/>');
      var roles = [".NET Developer", "React Developer", "Flutter Developer", "UI/UX Designer", "DevOps Engineer", "SEO Specialist"];
      roles.forEach(function (r, i) {
        var x = 60 + (i % 3) * 370, y = 60 + Math.floor(i / 3) * 330;
        o.push('<rect x="' + x + '" y="' + y + '" width="340" height="300" rx="16" fill="#fff" stroke="#e3e7ed"/>');
        o.push('<circle cx="' + (x + 70) + '" cy="' + (y + 70) + '" r="38" fill="' + (i % 2 ? t : a) + '" opacity=".85"/><circle cx="' + (x + 70) + '" cy="' + (y + 60) + '" r="13" fill="#fff" opacity=".85"/><path d="M' + (x + 46) + " " + (y + 95) + " a24 18 0 0 1 48 0\" fill=\"#fff\" opacity=\".85\"/>");
        o.push('<text x="' + (x + 128) + '" y="' + (y + 64) + '" font-size="19" font-weight="700" fill="#1d2430">' + E(r) + '</text><text x="' + (x + 128) + '" y="' + (y + 90) + '" font-size="14" fill="#5b6577">' + (3 + i) + "+ yrs experience</text>");
        for (var k2 = 0; k2 < 3; k2++) o.push('<rect x="' + (x + 30 + k2 * 96) + '" y="' + (y + 140) + '" width="84" height="28" rx="14" fill="' + t + '" opacity=".1"/>');
        o.push('<rect x="' + (x + 30) + '" y="' + (y + 196) + '" width="260" height="10" rx="4" fill="#2b3340" opacity=".25"/><rect x="' + (x + 30) + '" y="' + (y + 216) + '" width="200" height="10" rx="4" fill="#2b3340" opacity=".25"/>');
        o.push('<rect x="' + (x + 30) + '" y="' + (y + 244) + '" width="140" height="36" rx="18" fill="' + t + '"/><text x="' + (x + 100) + '" y="' + (y + 267) + '" font-size="14" font-weight="700" fill="#fff" text-anchor="middle">View profile</text><rect x="' + (x + 230) + '" y="' + (y + 250) + '" width="80" height="24" rx="12" fill="#d6f0e1"/><text x="' + (x + 270) + '" y="' + (y + 267) + '" font-size="12" font-weight="700" fill="#146c3b" text-anchor="middle">Available</text>');
      });
      o.push("</svg>");
      return o.join("");
    }

    // browser-framed website variants
    o.push('<rect width="1200" height="44" rx="14" fill="#e9edf2"/><rect y="30" width="1200" height="14" fill="#e9edf2"/>');
    o.push('<circle cx="26" cy="22" r="7" fill="#ff6058"/><circle cx="48" cy="22" r="7" fill="#ffbd2e"/><circle cx="70" cy="22" r="7" fill="#28c940"/>');
    o.push('<rect x="380" y="10" width="440" height="24" rx="12" fill="#fff"/><text x="600" y="27" font-size="13" fill="#6b7480" text-anchor="middle">' + domain + "</text>");
    o.push('<rect y="44" width="1200" height="64" fill="#fff"/><line x1="0" y1="108" x2="1200" y2="108" stroke="#eceff3"/>');
    o.push('<rect x="40" y="62" width="28" height="28" rx="7" fill="' + t + '"/><text x="80" y="83" font-size="20" font-weight="700" fill="' + t + '">' + name + "</text>");
    var widths = rawNav.map(function (n) { return n.length * 8 + 36; });
    var nx = 1160 - widths.reduce(function (x, y) { return x + y; }, 0) + 36;
    rawNav.forEach(function (n, i) { o.push('<text x="' + nx + '" y="82" font-size="15" fill="#3c4450">' + E(n) + "</text>"); nx += widths[i]; });

    if (variant === "list") {
      o.push('<rect y="108" width="1200" height="642" fill="#f6f8fb"/><rect x="40" y="136" width="250" height="580" rx="12" fill="#fff" stroke="#e3e7ed"/><rect x="62" y="160" width="120" height="16" rx="5" fill="' + t + '"/>');
      for (var f = 0; f < 6; f++) { var fy = 200 + f * 70; o.push('<rect x="62" y="' + fy + '" width="90" height="10" rx="4" fill="#2b3340" opacity=".45"/><rect x="62" y="' + (fy + 20) + '" width="206" height="30" rx="7" fill="#fff" stroke="#dfe4ea"/>'); }
      o.push('<rect x="62" y="640" width="206" height="44" rx="22" fill="' + t + '"/><text x="165" y="668" font-size="15" font-weight="700" fill="#fff" text-anchor="middle">Apply filters</text>');
      for (var g = 0; g < 6; g++) {
        var gx = 320 + (g % 3) * 285, gy = 136 + Math.floor(g / 3) * 295;
        o.push('<rect x="' + gx + '" y="' + gy + '" width="265" height="275" rx="12" fill="#fff" stroke="#e3e7ed"/><rect x="' + gx + '" y="' + gy + '" width="265" height="150" rx="12" fill="' + t + '" opacity="' + (0.12 + (g % 3) * 0.06) + '"/><rect x="' + (gx + 16) + '" y="' + (gy + 168) + '" width="170" height="13" rx="4" fill="#2b3340" opacity=".75"/><rect x="' + (gx + 16) + '" y="' + (gy + 192) + '" width="120" height="10" rx="4" fill="#2b3340" opacity=".3"/><rect x="' + (gx + 16) + '" y="' + (gy + 226) + '" width="90" height="30" rx="15" fill="' + a + '" opacity=".9"/><rect x="' + (gx + 190) + '" y="' + (gy + 232) + '" width="60" height="16" rx="5" fill="' + t + '" opacity=".75"/>');
      }
    } else if (variant === "detail") {
      o.push('<rect x="40" y="136" width="640" height="420" rx="12" fill="' + t + '" opacity=".18"/><circle cx="360" cy="346" r="60" fill="#fff" opacity=".6"/><path d="M345 316 L345 376 L395 346 Z" fill="' + t + '"/>');
      for (var th = 0; th < 4; th++) o.push('<rect x="' + (40 + th * 166) + '" y="574" width="146" height="100" rx="10" fill="' + t + '" opacity="' + (0.1 + th * 0.05) + '"/>');
      o.push(fo(720, 136, 440, 110, 32, "#1d2430", hero) + '<rect x="720" y="262" width="140" height="26" rx="6" fill="' + a + '" opacity=".85"/>');
      for (var l = 0; l < 5; l++) o.push('<rect x="720" y="' + (316 + l * 26) + '" width="' + (420 - (l % 2) * 90) + '" height="11" rx="4" fill="#2b3340" opacity=".3"/>');
      o.push('<rect x="720" y="560" width="420" height="56" rx="28" fill="' + t + '"/><text x="930" y="595" font-size="18" font-weight="700" fill="#fff" text-anchor="middle">' + cta + '</text><rect x="720" y="630" width="420" height="50" rx="25" fill="#fff" stroke="#25D366" stroke-width="2"/><text x="930" y="661" font-size="16" font-weight="700" fill="#1a8f4a" text-anchor="middle">Enquire on WhatsApp</text>');
    } else if (variant === "form") {
      o.push('<rect y="108" width="560" height="642" fill="' + t + '"/>' + fo(60, 180, 440, 200, 40, "#fff", cta));
      for (var b = 0; b < 3; b++) o.push('<circle cx="74" cy="' + (420 + b * 54) + '" r="10" fill="' + a + '"/><rect x="98" y="' + (413 + b * 54) + '" width="' + (300 - b * 40) + '" height="13" rx="5" fill="#fff" opacity=".7"/>');
      o.push('<rect x="620" y="150" width="520" height="560" rx="16" fill="#fff" stroke="#e3e7ed"/>');
      ["Full name", "Phone / WhatsApp", "Preferred date", "Message"].forEach(function (lb, k) {
        var y = 190 + k * 104;
        o.push('<text x="652" y="' + y + '" font-size="15" fill="#3c4450">' + lb + '</text><rect x="652" y="' + (y + 12) + '" width="456" height="' + (k === 3 ? 70 : 46) + '" rx="8" fill="#f7f9fb" stroke="#d9dee5"/>');
      });
      o.push('<rect x="652" y="626" width="456" height="54" rx="27" fill="' + a + '"/><text x="880" y="660" font-size="18" font-weight="700" fill="#1d2430" text-anchor="middle">Submit</text>');
    } else { // home
      o.push('<rect y="108" width="1200" height="340" fill="' + t + '"/><circle cx="1020" cy="270" r="150" fill="#fff" opacity=".08"/><circle cx="1100" cy="180" r="70" fill="' + a + '" opacity=".35"/>');
      o.push(fo(60, 160, 700, 140, 46, "#fff", hero));
      o.push('<rect x="60" y="320" width="420" height="14" rx="5" fill="#fff" opacity=".55"/><rect x="60" y="344" width="320" height="14" rx="5" fill="#fff" opacity=".4"/><rect x="60" y="378" width="240" height="50" rx="25" fill="' + a + '"/><text x="180" y="410" font-size="17" font-weight="700" fill="#1d2430" text-anchor="middle">' + cta + "</text>");
      for (var i = 0; i < 3; i++) {
        var x = 60 + i * 370;
        o.push('<rect x="' + x + '" y="480" width="340" height="230" rx="12" fill="#fff" stroke="#e3e7ed"/><rect x="' + x + '" y="480" width="340" height="130" rx="12" fill="' + t + '" opacity=".15"/><rect x="' + (x + 20) + '" y="630" width="200" height="14" rx="5" fill="#2b3340" opacity=".75"/><rect x="' + (x + 20) + '" y="656" width="260" height="10" rx="4" fill="#2b3340" opacity=".3"/><rect x="' + (x + 20) + '" y="676" width="180" height="10" rx="4" fill="#2b3340" opacity=".3"/>');
      }
    }
    o.push("</svg>");
    return o.join("");
  };

  /* ---------- media (image / video / youtube / mockup) ---------- */
  RC.media = function (owner, m, size) {
    var E = RC.esc;
    if (!m) return "";
    var alt = E((owner.title || "") + (m.label ? " — " + m.label : ""));
    if (m.type === "image") return '<img src="' + E(m.src) + '" alt="' + alt + '" loading="lazy">';
    if (m.type === "video") {
      if (size === "thumb") return (m.poster ? '<img src="' + E(m.poster) + '" alt="">' : '<span class="vid-thumb">Video</span>') + '<span class="play" aria-hidden="true"></span>';
      return '<video src="' + E(m.src) + '"' + (m.poster ? ' poster="' + E(m.poster) + '"' : "") + ' controls playsinline preload="metadata"></video>';
    }
    if (m.type === "youtube") {
      if (size === "thumb") return '<img src="https://img.youtube.com/vi/' + E(m.id) + '/mqdefault.jpg" alt=""><span class="play" aria-hidden="true"></span>';
      return '<iframe src="https://www.youtube-nocookie.com/embed/' + E(m.id) + '" title="' + alt + '" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    }
    return RC.mockup(owner, m.variant || "home");
  };

  /* ---------- portfolio card (work, home, related) ---------- */
  RC.statusLabel = function (s) { return s.status === "client" ? "Client project" : (s.live ? "Live sample" : "Concept"); };
  RC.typeLabel = function (s) { return { website: "Website", app: "Mobile app", software: "Software" }[s.type] || "Website"; };
  RC.workCard = function (s) {
    var E = RC.esc, c = RC.category(s.category), href = "project.html?id=" + encodeURIComponent(s.id);
    return '<article class="work-card' + (s.live ? " has-live" : "") + '">' +
      '<a class="work-card-media" href="' + href + '" tabindex="-1" aria-hidden="true">' + RC.media(s, s.media && s.media[0], "thumb") +
        (s.live ? '<span class="live-pill"><i></i>Live</span>' : "") + "</a>" +
      '<div class="work-card-body"><p class="work-card-cat">' + E(RC.typeLabel(s)) + " for " + E(c ? c.name.toLowerCase() : "") + "</p>" +
      '<h3><a href="' + href + '">' + E(s.title) + "</a></h3><p>" + E(s.summary) + "</p>" +
      '<div class="work-card-meta"><span class="badge badge-' + E(s.status) + (s.live ? " badge-live" : "") + '">' + RC.statusLabel(s) + "</span><span>" + E(s.location || "") + "</span>" +
        (s.live ? '<a class="work-live" href="' + E(s.live) + '" target="_blank" rel="noopener">Open live ↗</a>' : "") + "</div></div></article>";
  };

  /* ---------- section system ---------- */
  RC.section = function (name, render) { RC.sections[name] = render; };
  RC.mount = function (el) {
    var name = el.getAttribute("data-section"), fn = RC.sections[name];
    if (!fn) { console.error('[section:' + name + '] renderer not found — loader.js me add kiya?'); return; }
    var opts = {};
    Array.prototype.forEach.call(el.attributes, function (a) { if (a.name.indexOf("data-") === 0 && a.name !== "data-section") opts[a.name.slice(5)] = a.value; });
    try { fn(el, opts); el.setAttribute("data-ready", "true"); }
    catch (e) { console.error("[section:" + name + "] failed:", e); el.innerHTML = ""; }
  };
  RC.mountAll = function () { RC.$all("[data-section]").forEach(RC.mount); };
})();
