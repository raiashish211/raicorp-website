/*
  SNAP — kisi bhi website ke portfolio screenshots ek command me.

  Ek baar setup (is folder me):
    npm install
    npx playwright install chromium

  Use:
    npm run snap -- <project-id> <url> [#section ...]

  Example:
    npm run snap -- smilecraft-dental https://www.raicorp.in/samples/smilecraft-dental/ #services #about
    npm run snap -- sharma-clinic https://sharmaclinic.in

  Output: assets/img/work/<project-id>/
    1-home.jpg        upar ka hissa (1200x750)
    2-*.jpg           har #section ka screenshot
    9-mobile.jpg      phone view, frame me
  Aur terminal me "media" ka ready JSON print hota hai — content/portfolio.js me paste kar do.
*/
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

(async () => {
  const [id, url, ...sections] = process.argv.slice(2);
  if (!id || !url) {
    console.log("Use: npm run snap -- <project-id> <url> [#section ...]");
    process.exit(1);
  }
  const outDir = path.join(__dirname, "..", "assets", "img", "work", id);
  fs.mkdirSync(outDir, { recursive: true });
  const rel = (f) => "assets/img/work/" + id + "/" + f;
  const media = [];
  const browser = await chromium.launch();

  // desktop
  const page = await browser.newPage({ viewport: { width: 1200, height: 750 }, deviceScaleFactor: 1.5 });
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.evaluate(() => document.fonts && document.fonts.ready);
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, "1-home.jpg"), type: "jpeg", quality: 78 });
  media.push({ type: "image", src: rel("1-home.jpg"), label: "Home page" });

  let n = 2;
  for (const sel of sections) {
    const el = await page.$(sel);
    if (!el) { console.warn("Section nahi mila:", sel); continue; }
    await el.evaluate((e) => window.scrollTo(0, e.getBoundingClientRect().top + window.scrollY - 70));
    await page.waitForTimeout(400);
    const name = n + "-" + sel.replace(/[^a-z0-9]+/gi, "") + ".jpg";
    await page.screenshot({ path: path.join(outDir, name), type: "jpeg", quality: 78 });
    const label = await el.evaluate((e) => { const h = e.querySelector("h2, h1"); return h ? h.textContent.trim() : ""; });
    media.push({ type: "image", src: rel(name), label: label || sel.replace("#", "") });
    n++;
  }
  await page.close();

  // mobile, placed in a phone frame on a 1200x750 canvas
  const phone = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await phone.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await phone.waitForTimeout(800);
  const shot = (await phone.screenshot({ type: "jpeg", quality: 85 })).toString("base64");
  await phone.close();
  const frame = await browser.newPage({ viewport: { width: 1200, height: 750 }, deviceScaleFactor: 1.5 });
  await frame.setContent(
    '<body style="margin:0;height:750px;display:grid;place-items:center;background:#E9EAEE">' +
    '<div style="width:300px;height:650px;border-radius:44px;background:#0D1321;padding:12px;box-shadow:0 40px 80px -30px rgba(0,0,0,.5)">' +
    '<img src="data:image/jpeg;base64,' + shot + '" style="width:100%;height:100%;object-fit:cover;object-position:top;border-radius:34px;display:block"></div></body>'
  );
  await frame.screenshot({ path: path.join(outDir, "9-mobile.jpg"), type: "jpeg", quality: 80 });
  media.push({ type: "image", src: rel("9-mobile.jpg"), label: "On mobile" });
  await browser.close();

  console.log("\nScreenshots saved in assets/img/work/" + id + "/\n");
  console.log('Paste in content/portfolio.js (is project ke andar):\n');
  console.log('"live": ' + JSON.stringify(url) + ",");
  console.log('"media": ' + JSON.stringify(media, null, 2));
})();
