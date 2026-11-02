/* BOOT — sab load hone ke baad page ke saare sections render karta hai. */
(function () {
  function start() {
    RC.mountAll();
    var s = window.CONTENT.site || {};
    // page <title>: HTML me data-title="Pricing" doge to "Pricing — RaiCorp" banega
    var t = document.body.getAttribute("data-title");
    document.title = t ? RC.t(t) + " — " + s.company : s.company + " — " + RC.t(s.tagline);
    var d = document.querySelector('meta[name="description"]');
    if (d && !d.content) d.content = RC.t(s.description || "");
    document.documentElement.classList.add("js-ready");
    motion();
  }

  // header blur on scroll + sections animate in when they come into view (CSS: MOTION & POLISH)
  function motion() {
    var hdr = document.querySelector(".s-header");
    var onScroll = function () { if (hdr) hdr.classList.toggle("is-scrolled", window.scrollY > 10); };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    if (!("IntersectionObserver" in window)) return;
    var sel = ".section-head, .svc-group, .work-card, .plan, .steps > li, .journey > li, .why-item, .faq details, .showcase, .p-info, .gallery, .s-trust dl > div";
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.08 });
    document.querySelectorAll(sel).forEach(function (el) {
      var i = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.setProperty("--d", (i % 4) * 0.08 + "s");
      el.classList.add("rv"); io.observe(el);
    });
    window.RC_observe = function (root) { (root || document).querySelectorAll(sel).forEach(function (el) { if (!el.classList.contains("rv")) { el.classList.add("rv", "in"); } }); };
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();

  // global clicks: mobile menu, region switch, accordions
  document.addEventListener("click", function (e) {
    var tog = e.target.closest(".nav-toggle");
    if (tog) {
      var open = document.body.classList.toggle("nav-open");
      tog.setAttribute("aria-expanded", open ? "true" : "false");
    }
  });
  document.addEventListener("change", function (e) {
    if (e.target.matches("[data-region-select]")) RC.setRegion(e.target.value);
  });
})();
