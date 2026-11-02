/*
  RAICORP BRAND — logo ek hi jagah se. Development site aur /recruitment dono yahi use karte hain.
  Logo badalna ho to sirf ye file (aur assets/brand/*.svg / *.png) badlo.
  RCBrand.mark()      -> hexagon emblem (gold on midnight)
  RCBrand.wordmark()  -> "RAICORP" letters (currentColor — jis text color me rakho wahi)
  RCBrand.lockup()    -> mark + wordmark
  RCBrand.groupBar(current, paths) -> upar ki patti: Development | Recruitment
*/
(function () {
  var n = 0;
  var LETTERS = [
    ["M2 21 V2 H12.5 L17 6.5 L12.5 11 H2 M10 11 L17 21", 0],      // R
    ["M1.5 21 L9 2 L16.5 21 M5 14 H13", 25.5],                      // A
    ["M3 2 V21", 51],                                               // I
    ["M17 2 H6 L1.5 6.5 V16.5 L6 21 H17", 64],                      // C
    ["M6 2 H12.5 L17 6.5 V16.5 L12.5 21 H6 L1.5 16.5 V6.5 Z", 89.5], // O
    ["M2 21 V2 H12.5 L17 6.5 L12.5 11 H2 M10 11 L17 21", 115],     // R
    ["M2 21 V2 H12.5 L17 6.5 L12.5 11 H2", 140.5]                   // P
  ];
  function mark(cls) {
    var id = "rcg" + (++n);
    return '<svg class="' + (cls || "rc-mark") + '" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0.6" y2="1"><stop offset="0" stop-color="#F0DCA8"/><stop offset=".55" stop-color="#C9A45C"/><stop offset="1" stop-color="#8E6C2E"/></linearGradient></defs>' +
      '<path d="M50 5 L88 26.5 V73.5 L50 95 L12 73.5 V26.5 Z" fill="#111A30" stroke="url(#' + id + ')" stroke-width="3.2"/>' +
      '<path class="rc-inner" d="M50 11.5 L82.5 30 V70 L50 88.5 L17.5 70 V30 Z" fill="none" stroke="url(#' + id + ')" stroke-width=".8" opacity=".35"/>' +
      '<path class="rc-ticks" d="M14 50 H23 M77 50 H86 M50 7 V15 M50 85 V93" stroke="url(#' + id + ')" stroke-width="2.6"/>' +
      '<path d="M31 27 H60 L70 39.5 L60 52 H39.5 V74 H31 Z M39.5 34.5 V44.5 H56 L60 39.5 L56 34.5 Z" fill-rule="evenodd" fill="url(#' + id + ')"/>' +
      '<path d="M46 56.5 H56.5 L70.5 74 H60 Z" fill="url(#' + id + ')"/></svg>';
  }
  function wordmark(cls) {
    return '<svg class="' + (cls || "rc-word") + '" viewBox="-1 0 161 23" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="miter" stroke-linecap="square">' +
      LETTERS.map(function (l) { return '<path transform="translate(' + l[1] + ' 0)" d="' + l[0] + '"/>'; }).join("") + "</g></svg>";
  }
  function lockup(sub) {
    return '<span class="rc-lockup">' + mark() + '<span class="rc-lockup-text">' + wordmark() + (sub ? '<span class="rc-sub">' + sub + "</span>" : "") + "</span></span>";
  }
  // paths: { dev: "index.html", rec: "recruitment/index.html" }
  function groupBar(current, paths) {
    function tab(key, label, href) {
      return '<a href="' + href + '"' + (current === key ? ' aria-current="page"' : "") + ">" + label + "</a>";
    }
    return '<div class="rc-group"><div class="rc-group-in"><span class="rc-group-name">' + mark("rc-mark rc-mark-xs") + "RaiCorp Group</span>" +
      '<nav aria-label="RaiCorp divisions">' + tab("dev", "Development", paths.dev) + tab("rec", "Recruitment", paths.rec) + "</nav></div></div>";
  }
  window.RCBrand = { mark: mark, wordmark: wordmark, lockup: lockup, groupBar: groupBar };
})();
