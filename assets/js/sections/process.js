/* SECTION: process — numbered steps. data-source="hire" => hire page steps. Content: content/home.js -> process */
RC.section("process", function (el, o) {
  var E = RC.esc;
  var P = o.source === "hire"
    ? { heading: CONTENT.hire.stepsHeading, steps: CONTENT.hire.steps }
    : CONTENT.home.process;
  el.innerHTML = '<section class="s-process section"><div class="wrap">' +
    '<div class="section-head"><h2>' + RC.tx(P.heading) + "</h2>" + (P.intro ? "<p>" + RC.tx(P.intro) + "</p>" : "") + "</div>" +
    '<ol class="steps">' + RC.list(P.steps, function (s) { return "<li><h3>" + E(s.title) + "</h3><p>" + E(s.text) + "</p></li>"; }) + "</ol>" +
  "</div></section>";
});
