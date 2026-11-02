/*
  LOADER — har page sirf ye ek script include karta hai.
  Naya content file ya naya section banao to uska naam yahan list me add karo.
*/
(function () {
  var CONTENT = [
    "site", "services", "pricing", "industries", "portfolio",
    "home", "pages", "hire", "about", "faq", "testimonials"
  ];
  var SECTIONS = [
    "header", "footer", "page-head", "hero", "trust", "services", "journey",
    "showcase", "process", "why", "pricing", "industries", "work", "project",
    "service-detail", "hire", "about", "testimonials", "faq", "cta", "contact"
  ];
  var files = []
    .concat(CONTENT.map(function (n) { return "content/" + n + ".js"; }))
    .concat(["assets/brand/brand.js", "assets/js/core.js"])
    .concat(SECTIONS.map(function (n) { return "assets/js/sections/" + n + ".js"; }))
    .concat(["assets/js/boot.js"]);
  var v = "?v=4"; // cache-busting: content update ke baad number badha do (v=2, v=3...)
  files.forEach(function (src) {
    var s = document.createElement("script");
    s.src = src + v;
    s.async = false; // order maintain karta hai
    s.onerror = function () { console.error("Could not load " + src); };
    document.head.appendChild(s);
  });
})();
