# RaiCorp Recruitment — www.raicorp.in/recruitment/

Website ke andar apna alag project. Iska look, text aur jobs main site se alag hain; dono ek saath live hote hain.

## Kya kahan edit karna hai
| Kya | File |
|---|---|
| Jobs (add / close / hide) | `content/jobs.js` |
| Hero text, services, industries, process, fees, email, form endpoint | `content/config.js` |
| Colors, fonts, spacing | `assets/r.css` — sabse upar `:root` block |
| Pages ka structure | `assets/r.js` (zaroorat pade tabhi) |

## Naya job
`content/jobs.js` me ek block copy karo, `id` unique, `status: "open"`.
- `org: "raicorp"` = RaiCorp ki apni team. `org: "client"` = kisi aur company ke liye
  (naam chhupana ho to `company: "Mohali-based SaaS company"`).
- Job band: `status: "closed"`. Chhupana: `status: "draft"` (preview: `jobs.html?preview=1`).
- Google Form se apply karwana ho to job me `applyUrl: "https://forms.gle/..."`.

## Applications email pe
formspree.io pe free form banao → endpoint `content/config.js` → `formEndpoint` me paste.
Khaali rahega to form user ke email app me ready message kholta hai.
