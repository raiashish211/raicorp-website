/* SECTION: work — portfolio filter (market, work type, business type) + grid.
   data-limit="3" => sirf grid, bina filters (home page ke liye). Content: content/portfolio.js */
RC.section("work", function (el, o) {
  var E = RC.esc, W = CONTENT.portfolio, I = CONTENT.industries.items, items = W.items;

  if (o.limit) {
    el.innerHTML = '<section class="s-work section section-alt"><div class="wrap">' +
      '<div class="section-head"><h2>Recent work</h2><p>' + RC.tx(W.intro) + "</p></div>" +
      '<div class="grid">' + RC.list(items.slice(0, +o.limit), RC.workCard) + "</div>" +
      '<div class="actions"><a class="btn btn-ghost" href="work.html">See all work</a></div></div></section>';
    return;
  }

  var st = { market: RC.qs("market") || "all", type: RC.qs("type") || "all", cat: RC.qs("cat") || "" };
  if (st.cat && RC.category(st.cat)) st.market = RC.category(st.cat).market;

  el.innerHTML = '<section class="s-work"><div class="work-filters"><div class="wrap">' +
    '<div class="filter-row"><div class="seg" data-f="market">' +
      [["all", "All markets"], ["india", "India"], ["abroad", "International"]].map(function (x) { return '<button type="button" data-v="' + x[0] + '">' + x[1] + "</button>"; }).join("") +
    '</div><div class="seg" data-f="type">' +
      [["all", "All work"], ["website", "Websites"], ["app", "Mobile apps"], ["software", "Software"]].map(function (x) { return '<button type="button" data-v="' + x[0] + '">' + x[1] + "</button>"; }).join("") +
    '</div></div><div class="chips" data-f="cat"></div></div></div>' +
    '<div class="wrap work-results"><h2 class="results-head" aria-live="polite"></h2><div class="grid"></div></div></section>';

  var chips = el.querySelector(".chips"), grid = el.querySelector(".grid"), head = el.querySelector(".results-head");
  function match(s) {
    var c = RC.category(s.category);
    if (st.type !== "all" && s.type !== st.type) return false;
    if (st.cat) return s.category === st.cat;
    return st.market === "all" || (c && c.market === st.market);
  }
  function render() {
    RC.$all(".seg", el).forEach(function (seg) {
      var f = seg.getAttribute("data-f");
      RC.$all("button", seg).forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-v") === st[f] ? "true" : "false"); });
    });
    var cats = I.filter(function (c) { return st.market === "all" || c.market === st.market; })
      .sort(function (a, b) { return RC.samplesIn(b.id).length - RC.samplesIn(a.id).length; });
    var shown = st.all ? cats : cats.filter(function (c) { return RC.samplesIn(c.id).length || c.id === st.cat; });
    var hiddenN = cats.length - shown.length;
    chips.innerHTML = '<button type="button" data-v="" aria-pressed="' + (!st.cat) + '">All business types</button>' + RC.list(shown, function (c) {
      var n = RC.samplesIn(c.id).length;
      return '<button type="button" data-v="' + c.id + '" aria-pressed="' + (st.cat === c.id) + '"' + (n ? "" : ' class="is-empty"') + ">" + E(c.name) + (n ? '<span class="count">' + n + "</span>" : "") + "</button>";
    }) + (hiddenN > 0 ? '<button type="button" class="chips-more" data-more="1">+ ' + hiddenN + " more business types</button>" : (st.all ? '<button type="button" class="chips-more" data-more="0">Show fewer</button>' : ""));
    var list = items.filter(match), c = RC.category(st.cat);
    head.textContent = (c ? c.name : "All projects") + " (" + list.length + ")";
    if (!list.length) {
      grid.innerHTML = '<div class="empty"><h3>No ' + (st.type === "all" ? "project" : RC.typeLabel({ type: st.type }).toLowerCase()) + " for " + E(c ? c.name.toLowerCase() : "this filter") + ' yet</h3><p>Tell us about your business and we\'ll design a free sample for it before you decide anything.</p><div class="actions"><a class="btn btn-primary" ' +
        RC.waAttrs("Hi " + CONTENT.site.company + ", I run a business in: " + (c ? c.name : "") + ". Can you make a sample for me?") + '>Request a free sample</a><a class="btn btn-ghost" href="contact.html">Send details</a></div></div>';
    } else grid.innerHTML = RC.list(list, RC.workCard);
    var u = new URL(location.href);
    ["market", "type", "cat"].forEach(function (k) { if (st[k] && st[k] !== "all") u.searchParams.set(k, st[k]); else u.searchParams.delete(k); });
    history.replaceState(null, "", u);
  }
  el.addEventListener("click", function (e) {
    var m = e.target.closest("button[data-more]");
    if (m) { st.all = m.getAttribute("data-more") === "1"; render(); return; }
    var b = e.target.closest("button[data-v]"); if (!b) return;
    var f = b.parentElement.getAttribute("data-f");
    st[f] = b.getAttribute("data-v");
    if (f === "market") st.cat = "";
    render();
  });
  render();
});
