# Travel 2026

Personal travel dashboards for 2026, designed to be published through GitHub Pages.

## Sites

- **Travel hub** — repository root (`/travel-2026/`)
- **Chicago · Oct 22–26, 2026** — [`/chicago-oct/`](./chicago-oct/)

## Structure

```text
travel-2026/
├── index.html             # high-level travel hub
├── chicago-oct/
│   ├── index.html         # Chicago interactive trip dashboard
│   ├── styles.css
│   └── js/
│       ├── data.js
│       └── app.js
└── README.md
```

Future trips should be added as sibling folders (for example `iceland-feb/`) and linked from the root `index.html`.

## GitHub Pages

Publish from the `main` branch and the repository root. Once enabled, the hub is served from the repository Pages URL, and each trip folder becomes a subpath under that URL.

## Privacy

This repository is intended for public GitHub Pages. Do **not** commit booking-access identifiers such as airline confirmation/record-locator codes, ticket numbers, reservation confirmation numbers, account numbers, QR/barcode data, or other credentials. Public trip pages should use generic labels such as **Outbound flight**, **Return flight**, or **Confirmed reservation** instead.
