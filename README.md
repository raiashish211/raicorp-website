# RaiCorp website

Static website (HTML/CSS/JS). Koi build step nahi. GitHub Pages pe free host hoti hai, custom domain `raicorp.in` ke saath.

---

## 1. Folder structure — kya kahan hai

```
index.html, services.html, service.html, work.html, project.html,
pricing.html, hire.html, about.html, contact.html, 404.html
        → Pages. Har page me sirf section ke "slots" hain, content nahi.

content/            ← SAARA TEXT, PRICES, PROJECTS yahan (sirf ye edit karna hai)
  site.js           company naam, WhatsApp, email, menu, footer, regions/currency
  services.js       13 services + har service ka detail page
  pricing.js        plans, region-wise prices
  portfolio.js      projects/samples (work page + project detail)
  industries.js     business types (work page filters)
  home.js           home page: hero, stats, journey, showcase, process, why-us, CTA
  pages.js          inner pages ke top heading/intro
  hire.js           hire talent page
  about.js          about page
  faq.js            FAQs (kis page pe dikhe, wo bhi yahin)
  testimonials.js   reviews & client logos (khaali = section hidden)

assets/css/
  theme.css         ← POORI SITE KA DESIGN: colors, fonts, radius, spacing
  base.css          buttons, cards, forms (shared)
  sections.css      har section ka style, naam se block

assets/js/
  loader.js         saari files load karta hai (naya section/content file yahan add)
  core.js           helpers, region detection, auto-preview generator
  boot.js           page start
  sections/*.js     ek file = ek section (header.js, pricing.js, project.js ...)

assets/img/, assets/video/   ← apni images/videos yahan
```

## 2. Sections — ek section theek karna ho to

Har section ka naam teen jagah same hai:

| Section | Content file | Code | Style (sections.css me) |
|---|---|---|---|
| header | content/site.js | sections/header.js | `HEADER` |
| hero | content/home.js → hero | sections/hero.js | `HERO` |
| trust (stats) | content/home.js → trust | sections/trust.js | `TRUST` |
| services | content/services.js | sections/services.js | `SERVICES` |
| journey (0→100) | content/home.js → journey | sections/journey.js | `JOURNEY` |
| showcase | content/home.js → showcase | sections/showcase.js | `SHOWCASE` |
| process | content/home.js → process | sections/process.js | `PROCESS` |
| why | content/home.js → why | sections/why.js | `WHY` |
| pricing | content/pricing.js | sections/pricing.js | `PRICING` |
| work | content/portfolio.js | sections/work.js | `WORK` |
| project | content/portfolio.js | sections/project.js | `PROJECT` |
| service-detail | content/services.js | sections/service-detail.js | `SERVICE-DETAIL` |
| hire | content/hire.js | sections/hire.js | `HIRE` |
| about | content/about.js | sections/about.js | `ABOUT` |
| testimonials | content/testimonials.js | sections/testimonials.js | `TESTIMONIALS` |
| faq | content/faq.js | sections/faq.js | `FAQ` |
| cta | content/home.js → cta | sections/cta.js | `CTA` |
| contact | content/site.js | sections/contact.js | `CONTACT` |
| footer | content/site.js → footer | sections/footer.js | `FOOTER` |

Kisi section me dikkat ho to bas section ka naam batao ("pricing section me ..."), sirf wahi 3 files touch hongi.
Browser console me error aaye to wo bhi section ka naam batata hai: `[section:pricing] failed: ...`

**Page pe section ka order badalna:** page ki HTML me `<div data-section="...">` lines upar-neeche karo.
**Section hatana:** wo line delete karo.

## 3. Pehle ye badlo (`content/site.js`)

- `whatsapp` — 91 + 10 digit, bina + aur space
- `phoneDisplay`, `email`, `hours`
- `foundedYear` (RaiCorp kab bani) aur `experienceSince` (aapka experience kab se) — `{exp}` = experience ke saal.
  Sirf sach likho: "since 2018" / "8 years" jaise claims client ka trust tod dete hain.
- `socials` — LinkedIn/Instagram links (comment hata ke)
- `formEndpoint` — formspree.io ka free endpoint, taki form email pe aaye (khaali = WhatsApp pe jayega)

Kisi bhi text me `{company}`, `{years}`, `{founded}`, `{exp}`, `{year}` likh sakte ho — automatic value aa jayegi.

## 4. Design badalna (`assets/css/theme.css`)

Brand color: `--c-accent`. Dark color: `--c-ink`. Font: `--f-display`, `--f-body`
(font badlo to har HTML ke `<head>` ka Google Fonts link bhi badlo). Aur kahin CSS me color mat likhna.

## 5. Pricing & regions

`content/site.js → regions`: India, UAE & Gulf, UK, Canada, Australia, US/others.
Visitor ka region uske timezone se auto-detect hota hai; header aur pricing me dropdown se badal sakta hai.

`content/pricing.js` me har plan:
```js
price: { IN: 14999, INTL: 399, UK: 349, GCC: 1499, CA: 549, AU: 599 }
```
Jo region missing hai wahan INTL (USD) dikhega. Text bhi chalta hai: `{ IN: "8.33% of CTC", INTL: "Custom" }`.
Services ke "From ₹..." prices `services.js → startingFrom` me hain.

## 6. Images & videos

Files `assets/img/` aur `assets/video/` me daalo, phir content file me path likho.

**Project screenshots (`content/portfolio.js` → `media`):** pehla item = badi main image, baaki 3–5 side thumbnails.
```js
media: [
  { type: "image",   src: "assets/img/aravali-home.jpg",  label: "Home page" },
  { type: "image",   src: "assets/img/aravali-list.jpg",  label: "Listings" },
  { type: "video",   src: "assets/video/aravali.mp4", poster: "assets/img/aravali-home.jpg", label: "Walkthrough" },
  { type: "youtube", id: "dQw4w9WgXcQ", label: "Demo video" },
  { type: "mockup",  variant: "dashboard", label: "Auto preview" }
]
```
Abhi sab projects me `mockup` hai — site khud preview bana deti hai (`home`, `list`, `detail`, `form`, `mobile`, `app`, `dashboard`).
Aravali Homes project me ek sample video link hai (MDN ka flower clip) — sirf ye dikhane ke liye ki video kaise lagta hai; apna video aate hi replace kar dena.

**Screenshot kaise banaye:**
- Size **1200×750** (16:10). Chrome me site kholo → F12 → device toolbar → width 1200, height 750 → `Ctrl+Shift+P` → "Capture screenshot".
- Mobile screenshot: 390×844 pe le kar 1200×750 ke canvas pe (Canva/Figma) center kar do.
- JPG/WebP, 300 KB se kam. tinypng.com se compress karo.
- Videos: 20–60 sec screen recording (OBS / Loom export), MP4, 1280px wide, 15 MB se kam. Bade videos YouTube pe (unlisted) daal ke `youtube` type use karo.

**Service page image (`services.js` → `visual`):** `{ type: "image", src: "assets/img/seo.jpg" }` ya video.
**Home hero (`home.js` → `hero.media`):** `{ type: "stack" }` (default preview) / image / video.

## 7. Naya project / sample add karna (screenshots + Live button)

**Ek baar setup** (is folder me terminal): `npm install` phir `npx playwright install chromium`

**Har naye project ke liye:**
1. Site kahin bhi live karo (client ka domain, ya `samples/` ke andar demo).
2. Screenshots ek command me:
   ```
   npm run snap -- <project-id> <live-url> #section1 #section2
   npm run snap -- sharma-clinic https://sharmaclinic.in #services #contact
   ```
   Ye `assets/img/work/<project-id>/` me home, sections aur mobile (phone frame me) screenshots bana deta hai
   aur terminal me `"live"` + `"media"` ka ready JSON print karta hai.
3. `content/portfolio.js` me koi block copy karo, `id` wahi rakho, printed JSON paste karo.
   - `"live": "https://..."` hoga to card pe **Live** pill + "Open live ↗" aur project page pe "Open live website ↗" aa jata hai.
   - Asli client: `"status": "client"` (badge "Client project"). Apna sample: `"status": "concept"` (live ho to "Live sample").
4. Home page showcase me dikhana ho to `content/home.js → showcase.picks` me id daalo.
5. `assets/js/loader.js` me `?v=` number badhao, phir push.

## 7b. Demo kit — 15 minute me kisi bhi business ka demo (`samples/`)

`samples/kit/` ek config-driven template hai. Har demo = ek folder + ek `index.html` jisme sirf `window.SITE = {...}` config hai.
- Naya demo: `samples/smilecraft-dental/` folder copy karo → naam badlo (jaise `samples/sharma-dental/`) → config me naam, services, prices, colors, fonts badlo.
- Section types: `strip`, `cards` (services/courses; `variant: "listing"` = property cards), `person`, `steps`, `gallery`, `reviews`, `faq`, `cta`, `contact`.
- `sample: true` rakhoge to upar "Sample website by RaiCorp" patti aati hai aur saare WhatsApp buttons aapke number pe `sampleMessage` bhejte hain.
  Client ka real site banate waqt `sample: false` aur client ka `whatsapp` number daalo.
- Demos `noindex` hain (Google me nahi aate). Prospect ko link bhejo: `www.raicorp.in/samples/<folder>/`

## 8. Reviews & client logos

`content/testimonials.js` — jab tak list khaali hai, section hidden rehta hai. Sirf asli clients ke reviews, unki permission se.

## 9. Live karna — GitHub Pages + raicorp.in

1. GitHub pe public repo banao, is folder ki **saari files root me** upload karo (`CNAME` file bhi — usme `www.raicorp.in` hai).
2. Repo → Settings → Pages → Branch `main`, folder `/ (root)` → Save → Custom domain: `www.raicorp.in`.
3. Domain DNS me:
   - `A` → `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` → `www` → `<github-username>.github.io`
4. DNS update ke baad **Enforce HTTPS** tick karo.
5. GitHub profile → Settings → Pages → domain verify (TXT record) — security ke liye.

IPs GitHub docs se ek baar match kar lena: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

**Update ke baad purana content dikhe** to `assets/js/loader.js` me `?v=1` ko `?v=2` kar do.

Local pe dekhna: `index.html` double-click, ya folder me `python -m http.server` chala ke `localhost:8000`.


## 10. Website ke andar do projects

| Address | Kya hai | Folder | Edit kahan |
|---|---|---|---|
| `www.raicorp.in` | Development business | root | `content/*.js`, design: `assets/css/theme.css` |
| `www.raicorp.in/recruitment/` | Recruitment: RaiCorp careers + client hiring (alag look) | `recruitment/` | `recruitment/content/*.js`, design: `recruitment/assets/r.css` |

Dono ek hi repo se ek saath live hote hain. Header ka "Hire talent" recruitment pe jata hai; `hire.html` bhi.
Short links (`development.raicorp.in`, `recruitment.raicorp.in`) optional hain — `subdomain-redirects/README.md`.

## 11. Zaroori — public repo me kya NAHI jaana chahiye

- Office/company ka code (jaise `content/testing.cs`) — `.gitignore` me `*.cs` daala hai, phir bhi wo file is folder se hata do.
- Passwords, API keys, client ke private documents.

## 12. Logo & brand (`assets/brand/`)

Logo ek hi jagah se aata hai: `assets/brand/brand.js` (website ke header, footer, recruitment, upar ki "RaiCorp Group" patti).
| File | Kahan use karo |
|---|---|
| `raicorp-mark.svg` | Main emblem (dark aur light dono background pe) |
| `raicorp-mark-flat.svg` | Favicon, chhote size, app icon |
| `raicorp-logo-light-text.svg` / `-dark-text.svg` | Mark + RAICORP — dark / light background ke liye |
| `raicorp-mark-mono-white.svg` / `-mono-ink.svg` | Ek-color printing (stamp, embroidery, letterhead) |
| `avatar-1080.png` | Instagram, LinkedIn, Facebook, X, WhatsApp, YouTube — profile photo |
| `banner-linkedin-1584x396.png` | LinkedIn company page cover |
| `cover-facebook-1640x624.png` | Facebook page cover |
| `header-x-1500x500.png` | X (Twitter) header |
| `youtube-2560x1440.png` | YouTube channel banner |
| `og-image-1200x630.png`, `og-recruitment-1200x630.png` | WhatsApp/LinkedIn pe link share karne pe jo preview dikhta hai |

Animations: `assets/css/sections.css` → "MOTION & POLISH" block (recruitment: `recruitment/assets/r.css` → "MOTION").
