# ADA Site Scan

**Description**
ADA Site Scan is an accessibility auditing tool that analyzes websites for ADA Title III and Section 508 compliance, produces a report (TXT/PDF), and provides voice announcements. The repository contains frontend and backend logic, prompts used for Readdy AI integration, and analysis documentation.

**Files**
- `src/` — Source code (frontend & backend)
- `docs/` — Uploaded prompts and analysis docs. See `ADA_Site_Scan_all_codes.docx` and `ADA_Site_Scan_all_prompts.docx`. :contentReference[oaicite:4]{index=4} :contentReference[oaicite:5]{index=5}
- `README.md` — This file
- `LICENSE` — Project license

**How to run**
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`

**Notes**
- The audit code is heuristic-based (DOM parsing & scoring). For details about AI/ML usage see `ADA_Site_Scan_AI_ML_Analysis.docx`. :contentReference[oaicite:6]{index=6}
