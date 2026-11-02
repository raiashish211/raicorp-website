/* SECTION: contact — form + direct contact. data-mode="hire" => hiring form.
   Form goes to Formspree if site.formEndpoint is set, otherwise opens WhatsApp with details. */
RC.section("contact", function (el, o) {
  var E = RC.esc, S = CONTENT.site, hire = o.mode === "hire";
  var plan = RC.qs("plan") || "";
  var region = RC.region();
  var opts = function (arr) { return RC.list(arr, function (x) { return "<option" + (x === plan ? " selected" : "") + ">" + E(x) + "</option>"; }); };
  var services = CONTENT.services.items.map(function (s) { return s.name; });
  var budgets = region.id === "IN"
    ? ["Under ₹25,000", "₹25,000 – ₹75,000", "₹75,000 – ₹2,00,000", "₹2,00,000 – ₹5,00,000", "Above ₹5,00,000", "Not sure yet"]
    : ["Under $1,000", "$1,000 – $3,000", "$3,000 – $8,000", "$8,000 – $20,000", "Above $20,000", "Not sure yet"];

  var fields = hire
    ? '<label>Your name<input name="name" autocomplete="name" required></label>' +
      '<label>Company<input name="company" autocomplete="organization"></label>' +
      '<label>Phone / WhatsApp<input name="phone" type="tel" autocomplete="tel" required></label>' +
      '<label>Email<input name="email" type="email" autocomplete="email"></label>' +
      '<label>Role needed<select name="role"><option value="">Choose a role</option>' + opts(CONTENT.hire.roles.map(function (r) { return r.name; })) + "<option>Other</option></select></label>" +
      '<label>How do you want to hire?<select name="model">' + opts(CONTENT.hire.models.map(function (m) { return m.name; })) + "</select></label>" +
      '<label class="full">Skills, experience and start date<textarea name="message" placeholder="e.g. 2 React developers, 3+ years, start next month, remote"></textarea></label>'
    : '<label>Your name<input name="name" autocomplete="name" required></label>' +
      '<label>Business name<input name="company" autocomplete="organization"></label>' +
      '<label>Phone / WhatsApp<input name="phone" type="tel" autocomplete="tel" required></label>' +
      '<label>Email<input name="email" type="email" autocomplete="email"></label>' +
      '<label>What do you need?<select name="service"><option value="">Choose a service</option>' + opts(services) + (plan && services.indexOf(plan) < 0 ? '<option selected>' + E(plan) + "</option>" : "") + "</select></label>" +
      '<label>Budget<select name="budget"><option value="">Choose a range</option>' + opts(budgets) + "</select></label>" +
      '<label>Business type<select name="type"><option value="">Choose your business</option>' + opts(CONTENT.industries.items.map(function (c) { return c.name; })) + "<option>Something else</option></select></label>" +
      '<label>City / country<input name="city" autocomplete="address-level2"></label>' +
      '<label class="full">Tell us about the project<textarea name="message" placeholder="What should it do? Any website or app you like?"></textarea></label>';

  el.innerHTML = '<section class="s-contact section" id="' + (hire ? "hire-form" : "contact") + '"><div class="wrap contact">' +
    '<div class="contact-side"><h2>' + (hire ? E(CONTENT.hire.formHeading) : "Start a project") + "</h2>" +
      "<p>" + E(S.responseTime) + ". Prefer to talk? Reach us directly.</p>" +
      '<div class="contact-direct">' +
        '<a class="btn btn-wa" ' + RC.waAttrs() + ">" + RC.waIcon() + "WhatsApp us</a>" +
        '<a class="contact-line" href="tel:+' + E(S.whatsapp) + '">' + RC.icon("chat") + E(S.phoneDisplay) + "</a>" +
        '<a class="contact-line" href="mailto:' + E(S.email) + '">' + RC.icon("web") + E(S.email) + "</a>" +
        '<p class="contact-line">' + RC.icon("clock") + E(S.hours) + "</p>" +
      "</div>" +
      '<ul class="contact-locs">' + RC.list(S.locations, function (l) { return "<li>" + RC.icon("pin") + "<span><strong>" + E(l.city) + "</strong> " + E(l.note) + "</span></li>"; }) + "</ul>" +
    "</div>" +
    '<form class="form" novalidate><input type="hidden" name="form" value="' + (hire ? "hire" : "project") + '">' + fields +
      '<div class="form-foot"><button class="btn btn-primary btn-lg" type="submit">' + (hire ? "Request profiles" : "Send project details") + '</button><p class="form-status" role="status"></p></div>' +
    "</form></div></section>";

  var form = el.querySelector("form"), status = el.querySelector(".form-status");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = new FormData(form);
    if (!String(d.get("name") || "").trim() || !String(d.get("phone") || "").trim()) {
      status.textContent = "Add your name and phone number so we can reach you.";
      status.className = "form-status is-error";
      (String(d.get("name") || "").trim() ? form.phone : form.name).focus();
      return;
    }
    var lines = ["Hi " + S.company + ","];
    d.forEach(function (v, k) { if (v && k !== "form") lines.push(k.charAt(0).toUpperCase() + k.slice(1) + ": " + v); });
    if (S.formEndpoint) {
      status.textContent = "Sending…"; status.className = "form-status";
      fetch(S.formEndpoint, { method: "POST", body: d, headers: { Accept: "application/json" } })
        .then(function (r) { if (!r.ok) throw new Error(r.status); form.reset(); status.textContent = "Sent. We'll reply within one working day."; })
        .catch(function () { status.textContent = "The form couldn't send. Message us on WhatsApp instead."; status.className = "form-status is-error"; });
    } else {
      window.open(RC.wa(lines.join("\n")), "_blank", "noopener");
      status.textContent = "Opening WhatsApp with your details filled in."; status.className = "form-status";
    }
  });
});
