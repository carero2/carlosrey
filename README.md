# Carlos Rey — personal academic website

Static site (HTML + CSS + a little JS), no build step. Works as-is on GitHub Pages.

## Publish on GitHub Pages
1. Create a repo named `<your-username>.github.io` (or any name for a project site).
2. Push these files to the `main` branch.
3. Settings → Pages → Source: "Deploy from a branch" → `main` / root.

## Before publishing
- Add a **public** CV to `assets/CarlosReyRomero_CV.pdf` (the current CV is marked "Internal" and contains a phone number).
- Replace the example project cards in `index.html` (section `#projects`) with real ones; use `data-tags` (`nlp`, `modelling`, `tools`) for the filter.
- Add a GitHub / Google Scholar link next to ORCID and LinkedIn when available.

## Heavy projects
Interactive demos that need a server (Streamlit, Shiny, Hugging Face Spaces, etc.) can be hosted elsewhere and linked or embedded from a project card.
