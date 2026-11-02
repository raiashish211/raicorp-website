# Printing & Signage website template (RaiCorp)

Printing press, flex / sign-board makers, branding & gifting shops ke liye premium website.
**Poori site ek file se chalti hai: `config.js`.** Code chhune ki zarurat nahi.

## Naya client — 15 minute
1. Ye poora `printing/` folder copy karo (naya repo ya `samples/<client-naam>/`).
2. `config.js` me badlo:
   - `tier`: `"basic"` (₹4,999) · `"business"` (₹7,999) · `"premium"` (₹11,999)
   - `sample: false` (upar ki "Sample website" patti hat jayegi)
   - `business`: naam, board pe naam (`signText`), logo, address, phone, WhatsApp, email, timings, GST
   - `theme`: `accent` (main color), `glow` (board ki LED), `cyan`/`yellow`, fonts
   - `products`: naam, description, starting price, aur price-check ke rates
     - `unit: "sqft"` → `rate` per sq ft + `min` (minimum bill)
     - `unit: "inch"` → 3D letters, `rate` per inch per letter
     - `unit: "pcs"` → `slabs: [[qty, price each], ...]`
   - `work`: client ke kaam ki photos — `img/` me daalo, `image: "img/kaam-1.jpg"`
   - `sections`: order badlo / koi section hatao
3. Client ko `index.html` wala version do (wo `config.js` ka `tier` use karta hai).
   `basic/`, `business/`, `premium/` folders sirf demo ke liye hain (teen plan saath dikhane ko).

## Kya kis plan me aata hai
| Section | Basic | Business | Premium |
|---|---|---|---|
| Hero with lit sign board, services, why us, contact, WhatsApp | ✓ | ✓ | ✓ |
| Top bar, product catalog with prices, process, work gallery, reviews, FAQ, CTA, enquiry form | | ✓ | ✓ |
| Instant price estimator, category filters, full-screen gallery, industries, ticker, animated board, mobile Call/WhatsApp/Price bar | | | ✓ |

## Images
Product ya work ka `image` khaali ho to site brand colors me illustration khud banati hai.
Real photos: 1200×800 (product), 1200×900 (work), JPG/WebP, 300 KB se kam.
Logo: PNG/SVG transparent background, `business.logo: "img/logo.png"`.

## Files
`config.js` content · `assets/print.css` design · `assets/print.js` engine (naya section type chahiye tabhi) · `img/` photos
