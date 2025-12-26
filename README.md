# TechNova Inc. — Enterprise Workstation Proposal (Website)

A modern, light-theme, professional project website presenting an enterprise workstation environment proposal:
hardware configuration, BIOS/UEFI plan, Windows 11 + Ubuntu (WSL2) setup, security, networking, protection, testing,
and final deliverables.

## How to Run (A–Z)
1. Download the folder.
2. Open `index.html` in your browser (Chrome/Edge recommended).

### Optional: Run a local server (recommended)
**Windows (PowerShell):**
```powershell
cd technova-workstation
python -m http.server 5500
```
Then visit:
`http://localhost:5500`

## Where to Add Your Own Screenshots
- Put your screenshots in: `assets/images/`
- Update the `<img src="...">` URLs inside `index.html` to point to your local images.

## What to Customize
- Company name/tagline: Header in `index.html`
- Colors: `:root` section in `css/style.css`
- Sections & text: `index.html`
- Interactions: `js/main.js`

## Print / Save as PDF
Use the **Print / Save as PDF** button in the Handover section, or press `Ctrl + P`.
