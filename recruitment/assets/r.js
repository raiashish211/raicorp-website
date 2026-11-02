/* RaiCorp Recruitment — saare pages yahi render karta hai (body data-page se). */
(function () {
  var S = R.site, page = document.body.getAttribute("data-page");
  var qs = new URLSearchParams(location.search), preview = qs.get("preview") === "1";
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function em(s) { return esc(s).replace(/\*(.+?)\*/g, "<em>$1</em>"); }
  function list(a, f) { return (a || []).map(f).join(""); }
  function visible(j) { return j.status === "open" || j.status === "closed" || (preview && j.status === "draft"); }
  var jobs = (R.jobs || []).filter(visible).sort(function (a, b) { return (a.status === "closed") - (b.status === "closed") || String(b.posted).localeCompare(String(a.posted)); });

  function header() {
    var cur = function (p) { return page === p ? ' aria-current="page"' : ""; };
    return RCBrand.groupBar("rec", S.groupLinks || { dev: "../index.html", rec: "index.html" }) +
      '<header class="hdr"><div class="wrap"><a class="logo" href="index.html" aria-label="' + esc(S.brand + " " + S.product) + ' home">' + RCBrand.lockup(esc(S.product)) + "</a>" +
      '<nav class="nav" aria-label="Main"><a href="jobs.html?org=raicorp"' + (page === "jobs" && qs.get("org") === "raicorp" ? ' aria-current="page"' : "") + '>Careers at RaiCorp</a><a href="jobs.html"' + (page === "jobs" && qs.get("org") !== "raicorp" ? ' aria-current="page"' : "") + '>Open jobs</a><a href="employers.html"' + cur("employers") + '>For employers</a>' +
      '<a class="btn btn-dark" href="employers.html#enquiry">Hire with us</a></nav></div></header>';
  }
  function footer() {
    return '<footer class="ftr"><div class="wrap"><div class="ftr-brand"><a class="logo" href="index.html" aria-label="' + esc(S.brand) + ' Recruitment home">' + RCBrand.lockup(esc(S.product)) + "</a><p>" + esc(S.locations) + "<br>" + esc(S.email) + "</p></div>" +
      '<div class="ftr-col"><p>Recruitment</p><a href="jobs.html?org=raicorp">Careers at RaiCorp</a><a href="jobs.html">Open jobs</a><a href="employers.html">For employers</a><a href="employers.html#enquiry">Share a requirement</a></div>' +
      '<div class="ftr-col"><p>RaiCorp Development</p><a href="' + esc(S.developmentSite) + '">Websites & software</a><a href="../work.html">Our work</a><a href="../pricing.html">Pricing</a><a href="../contact.html">Contact</a></div>' +
      '<div class="ftr-bottom">© ' + new Date().getFullYear() + " " + esc(S.brand) + ". All rights reserved.</div></div></footer>";
  }
  function jobRow(j) {
    var closed = j.status === "closed";
    return '<article class="job"><div><p class="job-co">' + esc(j.company) + (j.team ? " · " + esc(j.team) : "") + '</p><h3><a href="job.html?id=' + encodeURIComponent(j.id) + (preview ? "&preview=1" : "") + '">' + esc(j.title) + "</a></h3>" +
      '<ul class="facts"><li>' + esc(j.location) + (j.mode && j.mode !== j.location ? " (" + esc(j.mode) + ")" : "") + "</li><li>" + esc(j.type) + "</li><li>" + esc(j.experience) + "</li></ul></div>" +
      '<div class="job-side"><span class="pill ' + (j.org === "raicorp" ? "pill-rc" : "pill-client") + '">' + (j.org === "raicorp" ? "RaiCorp team" : "Client role") + "</span>" +
      (j.status === "draft" ? '<span class="pill pill-draft">Draft</span>' : "") + (closed ? '<span class="pill pill-closed">Closed</span>' : "") +
      (j.salary ? '<span class="job-salary">' + esc(j.salary) + "</span>" : "") + "</div></article>";
  }
  function poolForm(title, sub) {
    return form("pool", title || "Join our talent pool", sub || "Share your details once. We'll reach out when a matching role opens.", [
      ["Full name", "text", true], ["Email", "email", true], ["Phone", "tel", true], ["Current role / skills", "text", true],
      ["Total experience", "select", true, ["Fresher", "0–1 year", "1–3 years", "3–5 years", "5–8 years", "8+ years"]],
      ["Preferred location", "text", false], ["Resume link (Google Drive / LinkedIn)", "url", false]
    ], "Submit profile");
  }
  function form(kind, title, sub, fields, submit, extra) {
    return '<form class="form" data-kind="' + kind + '"' + (extra ? ' data-extra="' + esc(extra) + '"' : "") + ' novalidate><h3>' + esc(title) + "</h3>" + (sub ? '<p class="small">' + esc(sub) + "</p>" : "") +
      list(fields, function (f, i) {
        var id = kind + "-" + i, req = f[2] ? " required" : "";
        var ctl = f[1] === "select" ? '<select id="' + id + '" name="' + esc(f[0]) + '"' + req + '><option value="">Select</option>' + list(f[3], function (o) { return "<option>" + esc(o) + "</option>"; }) + "</select>" :
          f[1] === "textarea" ? '<textarea id="' + id + '" name="' + esc(f[0]) + '"' + req + "></textarea>" :
          '<input id="' + id + '" name="' + esc(f[0]) + '" type="' + f[1] + '"' + req + (f[1] === "tel" ? ' inputmode="tel" autocomplete="tel"' : f[1] === "email" ? ' autocomplete="email"' : "") + ">";
        return '<label for="' + id + '"><span>' + esc(f[0]) + (f[2] ? "" : ' <span style="font-weight:400;color:var(--muted)">(optional)</span>') + "</span>" + ctl + "</label>";
      }) + '<p class="err" hidden></p><button class="btn btn-dark" type="submit">' + esc(submit) + "</button></form>";
  }

  var body = "";
  if (page === "index") {
    var open = jobs.filter(function (j) { return j.status !== "closed"; }).slice(0, 4);
    body = '<section class="hero"><div class="wrap"><span class="eyebrow">' + esc(S.hero.eyebrow) + "</span><h1>" + em(S.hero.title) + '</h1><p class="lede">' + esc(S.hero.lede) + "</p>" +
      '<div class="doors">' +
        '<a class="door" href="jobs.html?org=raicorp"><span>Careers</span><b>Work at RaiCorp</b><p>Join our development, design and growth team. Remote-friendly roles and internships.</p><i>See RaiCorp roles →</i></a>' +
        '<a class="door" href="jobs.html"><span>Candidates</span><b>Find your next job</b><p>Open roles at RaiCorp and the companies we hire for, tech and non-tech.</p><i>Browse open jobs →</i></a>' +
        '<a class="door" href="employers.html"><span>Employers</span><b>Hire through us</b><p>Permanent, contract and volume hiring with pre-screened shortlists.</p><i>Start hiring →</i></a>' +
      "</div></div></section>" +
      '<section class="sec"><div class="wrap"><div class="head"><span class="eyebrow">Open roles</span><h2>Latest openings</h2><p>New roles are added as they open. Every application is read by a person.</p></div>' +
      (open.length ? '<div class="jobs">' + list(open, jobRow) + '</div><div class="actions"><a class="btn btn-line" href="jobs.html">All open jobs</a></div>' :
        '<div class="split"><div class="empty"><h3>No open roles right now</h3><p>We hire regularly for RaiCorp and for client companies across IT, support, sales and operations. Join the talent pool and we will contact you when a matching role opens.</p></div>' + poolForm() + "</div>") +
      "</div></section>" +
      '<section class="sec sec-alt"><div class="wrap"><div class="head"><span class="eyebrow">For employers</span><h2>Hiring support for growing companies</h2><p>From one hard-to-fill developer to a 20-person support team.</p></div>' +
      '<div class="cards">' + list(S.services, function (s, i) { return '<div class="card"><span class="n">0' + (i + 1) + "</span><h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></div>"; }) + "</div>" +
      '<div class="actions"><a class="btn btn-dark" href="employers.html">How we hire</a><a class="btn btn-line" href="employers.html#enquiry">Share a requirement</a></div></div></section>';
  }
  else if (page === "jobs") {
    var st = { org: qs.get("org") || "all", type: "all" };
    body = '<section class="phead"><div class="wrap"><span class="eyebrow">' + esc(S.brand) + " " + esc(S.product) + '</span><h1>' + (st.org === "raicorp" ? "Careers at RaiCorp" : "Open jobs") + '</h1><p class="lede">' + (st.org === "raicorp" ? "Roles in RaiCorp's own development, design and growth team." : "Roles at RaiCorp and the companies we hire for. Apply in two minutes.") + "</p>" +
      '<div class="filters"><div class="seg" data-f="org"><button type="button" data-v="all">All roles</button><button type="button" data-v="raicorp">At RaiCorp</button><button type="button" data-v="client">Client companies</button></div>' +
      '<div class="seg" data-f="type"><button type="button" data-v="all">Any type</button><button type="button" data-v="Full-time">Full-time</button><button type="button" data-v="Contract">Contract</button><button type="button" data-v="Internship">Internship</button></div></div></div></section>' +
      '<section class="sec" style="padding-top:40px"><div class="wrap"><div id="jobs-out"></div></div></section>';
    setTimeout(function () {
      var out = document.getElementById("jobs-out");
      function render() {
        document.querySelectorAll(".seg").forEach(function (seg) { var f = seg.getAttribute("data-f"); seg.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-v") === st[f] ? "true" : "false"); }); });
        var l = jobs.filter(function (j) { return (st.org === "all" || j.org === st.org) && (st.type === "all" || j.type === st.type); });
        out.innerHTML = l.length ? '<div class="jobs">' + list(l, jobRow) + "</div>" :
          '<div class="split"><div class="empty"><h3>No matching roles open right now</h3><p>Roles open regularly. Share your profile once and we will contact you when something fits.</p></div>' + poolForm() + "</div>";
        bindForms();
      }
      document.querySelector(".filters").addEventListener("click", function (e) {
        var b = e.target.closest("button[data-v]"); if (!b) return;
        st[b.parentElement.getAttribute("data-f")] = b.getAttribute("data-v"); render();
      });
      render();
    });
  }
  else if (page === "job") {
    var j = (R.jobs || []).filter(function (x) { return x.id === qs.get("id") && visible(x); })[0];
    if (!j) body = '<section class="sec"><div class="wrap"><div class="empty"><h1 style="font-size:2rem">This role is not available</h1><p>It may have been filled or removed.</p><a class="btn btn-dark" href="jobs.html">See open jobs</a></div></div></section>';
    else {
      document.title = j.title + " — " + S.brand + " " + S.product;
      var closed = j.status === "closed";
      body = '<section class="phead"><div class="wrap"><p class="crumbs"><a href="jobs.html">Open jobs</a> / ' + esc(j.team || j.company) + '</p><p class="job-co">' + esc(j.company) + "</p><h1>" + esc(j.title) + "</h1>" +
        '<ul class="facts" style="font-size:1.02rem"><li>' + esc(j.location) + " (" + esc(j.mode) + ")</li><li>" + esc(j.type) + "</li><li>" + esc(j.experience) + "</li>" + (j.salary ? "<li>" + esc(j.salary) + "</li>" : "") + "</ul></div></section>" +
        '<div class="wrap jd"><div class="jd-main"><p class="lede" style="color:var(--ink)">' + esc(j.summary) + "</p>" +
        "<h2>What you'll do</h2><ul>" + list(j.responsibilities, function (x) { return "<li>" + esc(x) + "</li>"; }) + "</ul>" +
        "<h2>What we're looking for</h2><ul>" + list(j.requirements, function (x) { return "<li>" + esc(x) + "</li>"; }) + "</ul>" +
        (j.skills ? '<h2>Skills</h2><div class="tags">' + list(j.skills, function (x) { return '<span class="tag">' + esc(x) + "</span>"; }) + "</div>" : "") +
        (j.org === "client" ? '<p class="small" style="margin-top:28px;color:var(--muted)">This role is with a client company. RaiCorp Recruitment manages the hiring process; company details are shared with shortlisted candidates.</p>' : "") +
        '</div><aside class="aside">' +
        (closed ? '<div class="form"><h3>This role is closed</h3><p class="small">Join the talent pool to hear about similar roles.</p><a class="btn btn-dark" href="jobs.html">See open jobs</a></div>' :
          j.applyUrl ? '<div class="form"><h3>Apply for this role</h3><p class="small">Takes about two minutes.</p><a class="btn btn-gold" href="' + esc(j.applyUrl) + '" target="_blank" rel="noopener">Apply now ↗</a></div>' :
          form("apply", "Apply for this role", "Takes about two minutes. We reply to every application.", [["Full name", "text", true], ["Email", "email", true], ["Phone", "tel", true], ["Total experience", "select", true, ["Fresher", "0–1 year", "1–3 years", "3–5 years", "5–8 years", "8+ years"]], ["Notice period", "select", false, ["Immediate", "15 days", "30 days", "60 days", "90 days"]], ["Resume link (Google Drive / LinkedIn)", "url", true], ["Anything else?", "textarea", false]], "Submit application", j.title + " (" + j.id + ")")) +
        "</aside></div>";
    }
  }
  else if (page === "employers") {
    body = '<section class="hero"><div class="wrap"><span class="eyebrow">For employers</span><h1>Pre-screened talent, <em>shortlisted in days.</em></h1><p class="lede">Permanent, contract and volume hiring for growing companies. You see only candidates we have spoken to and checked against your brief.</p>' +
      '<div class="actions"><a class="btn btn-gold" href="#enquiry">Share a requirement</a><a class="btn btn-line-light" href="#fees">See pricing</a></div></div></section>' +
      '<section class="sec"><div class="wrap"><div class="head"><span class="eyebrow">What we do</span><h2>Hiring services</h2></div><div class="cards">' + list(S.services, function (s, i) { return '<div class="card"><span class="n">0' + (i + 1) + "</span><h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></div>"; }) + "</div>" +
      '<div style="margin-top:36px"><p style="font-weight:700;margin-bottom:10px">Industries we hire for</p><div class="tags">' + list(S.industries, function (x) { return '<span class="tag">' + esc(x) + "</span>"; }) + "</div></div></div></section>" +
      '<section class="sec sec-alt"><div class="wrap"><div class="head"><span class="eyebrow">Process</span><h2>From brief to joining</h2></div><ol class="steps">' + list(S.process, function (p) { return "<li><h3>" + esc(p[0]) + "</h3><p>" + esc(p[1]) + "</p></li>"; }) + "</ol></div></section>" +
      '<section class="sec" id="fees"><div class="wrap"><div class="head"><span class="eyebrow">Pricing</span><h2>Simple, success-based fees</h2><p>Final terms are agreed in writing before the search starts.</p></div><div class="fees">' + list(S.fees, function (f) { return '<div class="fee"><span>' + esc(f.title) + "</span><b>" + esc(f.price) + "</b><p>" + esc(f.note) + "</p></div>"; }) + "</div></div></section>" +
      '<section class="sec sec-alt" id="enquiry"><div class="wrap split"><div><span class="eyebrow">Start hiring</span><h2>Tell us who you need</h2><p class="lede" style="margin-bottom:24px">We reply within one working day with questions, timelines and a fee quote.</p><ul class="ticks">' + list(S.promises, function (p) { return "<li>" + esc(p) + "</li>"; }) + "</ul></div>" +
      form("employer", "Hiring requirement", "", [["Your name", "text", true], ["Company", "text", true], ["Work email", "email", true], ["Phone", "tel", true], ["Role(s) to hire", "text", true], ["Number of positions", "select", true, ["1", "2–5", "6–20", "20+"]], ["Hiring type", "select", true, ["Permanent", "Contract", "Volume hiring", "Not sure yet"]], ["Location & budget", "text", false], ["Anything else?", "textarea", false]], "Send requirement") +
      "</div></section>";
  }

  document.body.insertAdjacentHTML("afterbegin", header() + "<main>" + body + "</main>" + footer());

  // header blur on scroll + blocks animate in on scroll (CSS: MOTION)
  var hdr = document.querySelector(".hdr");
  var onScroll = function () { hdr.classList.toggle("is-scrolled", window.scrollY > 10); };
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  function reveal(root) {
    if (!("IntersectionObserver" in window)) return;
    var obs = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } }); }, { rootMargin: "0px 0px -6% 0px", threshold: 0.08 });
    (root || document).querySelectorAll(".head, .door, .job, .card, .steps > li, .fee, .form, .empty, .tags").forEach(function (el) {
      if (el.classList.contains("rv")) return;
      el.style.setProperty("--d", (Array.prototype.indexOf.call(el.parentNode.children, el) % 4) * 0.08 + "s");
      el.classList.add("rv"); obs.observe(el);
    });
  }
  reveal();

  function bindForms() {
    document.querySelectorAll("form.form:not([data-bound])").forEach(function (f) {
      f.setAttribute("data-bound", "1");
      var err = f.querySelector(".err");
      f.addEventListener("input", function () { err.hidden = true; });
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        var bad = Array.prototype.filter.call(f.querySelectorAll("[required]"), function (x) { return !x.value.trim() || (x.type === "email" && !/^\S+@\S+\.\S+$/.test(x.value)); });
        if (bad.length) { err.textContent = "Please fill: " + bad.map(function (x) { return x.name; }).join(", ") + "."; err.hidden = false; bad[0].focus(); return; }
        var kind = { apply: "Job application", pool: "Talent pool", employer: "Hiring requirement" }[f.getAttribute("data-kind")];
        var subject = kind + (f.getAttribute("data-extra") ? ": " + f.getAttribute("data-extra") : "");
        var lines = Array.prototype.map.call(f.querySelectorAll("input,select,textarea"), function (x) { return x.name + ": " + x.value; });
        var done = function () { f.innerHTML = '<h3>Thank you</h3><p class="ok">Received. We will get back to you within one working day.</p>'; };
        if (S.formEndpoint) {
          var data = new FormData(f); data.append("_subject", subject);
          fetch(S.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
            .then(function (r) { if (!r.ok) throw 0; done(); })
            .catch(function () { err.textContent = "Could not send. Please email " + S.email + " instead."; err.hidden = false; });
        } else {
          location.href = "mailto:" + S.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"));
          f.querySelector(".btn").insertAdjacentHTML("afterend", '<p class="small">Your email app should open with the details filled in. If it does not, email us at ' + esc(S.email) + ".</p>");
        }
      });
    });
  }
  bindForms();
})();
