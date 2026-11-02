/* SECTION: hero — home page top. Content: content/home.js -> hero */
RC.section("hero", function (el) {
  var E = RC.esc, H = CONTENT.home.hero;
  var m = H.media || { type: "stack" }, visual;
  if (m.type === "image") visual = '<img class="hero-img" src="' + E(m.src) + '" alt="">';
  else if (m.type === "video") visual = '<video class="hero-img" src="' + E(m.src) + '"' + (m.poster ? ' poster="' + E(m.poster) + '"' : "") + " autoplay muted loop playsinline></video>";
  else {
    visual = '<div class="hero-stack">' +
      '<div class="hs-web">' + RC.mockup({ id: "yourbusiness", title: "Your Business", theme: "#1B2440", accent: "#C9A45C", heroText: "Book a visit in 30 seconds", cta: "Book now", nav: ["Services", "Work", "Pricing", "Contact"] }, "home") + "</div>" +
      '<div class="hs-dash">' + RC.mockup({ id: "crm", title: "Your CRM", theme: "#0D1321", accent: "#C9A45C", dashTitle: "This week", menu: ["Dashboard", "Leads", "Orders", "Reports"], kpis: ["Leads", "Orders", "Follow-ups", "Revenue"] }, "dashboard") + "</div>" +
      '<div class="hs-app">' + RC.mockup({ id: "app", title: "Your App", theme: "#34466B", accent: "#C9A45C", heroText: "Order again in one tap", cta: "Reorder" }, "phone") + "</div>" +
      "</div>";
  }
  el.innerHTML = '<section class="s-hero"><div class="wrap">' +
    '<div class="hero-copy">' +
      "<h1>" + RC.tx(H.title).replace(/\*(.+?)\*/g, "<em>$1</em>") + "</h1>" +
      '<p class="lede">' + RC.tx(H.lede) + "</p>" +
      '<div class="actions"><a class="btn btn-primary btn-lg" href="' + H.primaryCta.href + '">' + E(H.primaryCta.label) + '</a><a class="btn btn-ghost btn-lg" href="' + H.secondaryCta.href + '">' + E(H.secondaryCta.label) + "</a></div>" +
      '<ul class="hero-chips">' + RC.list(H.chips, function (id) {
        var s = RC.service(id); if (!s) return "";
        return '<li><a href="' + (s.link || "service.html?id=" + s.id) + '">' + RC.icon(s.icon) + E(s.name) + "</a></li>";
      }) + "</ul>" +
    "</div>" +
    '<div class="hero-visual">' + visual + "</div>" +
  "</div></section>";
});
