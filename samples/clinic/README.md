# RaiCorp Clinic Kit — Basic / Advanced / Pro

Dental, skin, physio aur chhote independent clinics ke liye website. **Poori site `config.js` se chalti hai.**

## Live demos
- Basic: https://raicorp.in/samples/clinic/basic/
- Advanced: https://raicorp.in/samples/clinic/advanced/
- Pro: https://raicorp.in/samples/clinic/pro/

## Naya clinic — onboarding (30–45 min)
1. Ye `clinic/` folder copy karo (naya repo ya `samples/<clinic-naam>/`).
2. `config.js` me badlo:
   - `tier`: `"basic"` · `"advanced"` · `"pro"`, aur `sample: false`
   - `clinic`: naam, specialty, logo, address, map link, phone, WhatsApp, email, timings, **Google review link** (`reviewUrl`)
   - `theme`: `primary`, `accent`, `warm` colors
   - `treatments` (naam, icon, text, price, time), `doctors` (photo `img/` me), `costs`, `faq`, `gallery`
   - Skin clinic icons: `skin`, `laser`, `hair` · Physio: `spine`, `knee`, `hand`
3. **Enquiry tracking:** `formEndpoint` me Formspree ya Google Apps Script ka URL → har enquiry email/Google Sheet me.
   Khaali chhodoge to enquiry seedha clinic ke WhatsApp pe jati hai, kuch store nahi hota.
4. Client ko `index.html` wala version do. `basic/ advanced/ pro/` sirf demo ke liye hain.

## Kis plan me kya
| Feature | Basic | Advanced | Pro |
|---|---|---|---|
| Hero, treatments list, doctor, timings, map, call/WhatsApp, enquiry form | ✓ | ✓ | ✓ |
| Multiple doctors, treatment prices & duration, first-visit guide, gallery, FAQ | | ✓ | ✓ |
| Reviews section + Google review QR, mobile Call/WhatsApp/Book bar, enquiry tracking | | ✓ | ✓ |
| Appointment request (day + time slot + video consult), cost guide with EMI, before/after slider, patient tips, notice bar | | | ✓ |

## Privacy & safety (zaroori)
- Form sirf naam, mobile, treatment, preferred time leta hai. **Medical reports ya history kabhi mat maango.**
- Consent checkbox, honeypot spam trap, 10-digit mobile validation built-in.
- Before/after: sirf patient ki likhit consent ke saath real photos lagao.
- Reviews: kabhi fake ya paid review nahi. QR sirf genuine patients ko dikhao.
- Domain aur Google Business Profile hamesha clinic ke naam pe.
