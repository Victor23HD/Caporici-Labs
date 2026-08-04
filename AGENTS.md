# AGENTS.md

## Cursor Cloud specific instructions

This repository is a single, dependency-free static website (the "CAN Frame
Explorer" demo under Caporici Labs). It is plain HTML/CSS/JS with **no** package
manager, build step, backend, tests, or linter configuration.

- Source files: `index.html`, `app.js`, `styles.css`. All logic runs
  client-side in `app.js` (vanilla JS, no imports).
- Run in development: serve the repo root over HTTP and open it in a browser.
  Example (Python is preinstalled): `python3 -m http.server 8000`, then visit
  `http://localhost:8000/`. Opening `index.html` via `file://` also works, but a
  local HTTP server gives a cleaner testing context.
- There is nothing to install/build: no `npm install`, no bundler, no compile
  step. Do not add one unless the task explicitly asks for it.
- There are currently no automated tests and no lint config. "Testing" means
  loading the page and exercising the CAN Frame Explorer form (enter an
  arbitration ID + payload bytes, click "Inspect frame", verify the results
  panel updates).
