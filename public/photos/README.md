# Photos for rachitrastogi.com

Upload images as **JPG, JPEG, PNG, or WebP**. Subfolders are fine — wire new paths in `src/data/journey.ts`.

## Folder guide

| Folder | Suggested content | Map pin |
|--------|-------------------|---------|
| `headshot/` | `headshot.jpg` — hero portrait | — |
| `origins/` | Early life, UP | Uttar Pradesh |
| `education/` | Pantnagar, IIIT campus | Pantnagar · Prayagraj |
| `career/bangalore/` | SAP Labs, AXA Bangalore | Bangalore |
| `career/cologne/` | AXA Germany | Cologne |
| `career/usa/MSG/` | Madison Square Garden era | New York |
| `career/usa/` or `career/` | Schwab, Edison, Jersey City | New Jersey |

## Currently wired on the site

| Pin | Photos |
|-----|--------|
| Bangalore | `career/bangalore/SAP Campus.JPG`, `SAP 2.jpg` |
| Cologne | `career/cologne/AXA.jpg`, `AXA 2.JPG` |
| New York (MSG) | `career/usa/MSG/MSG.jpg`, `MSG 2.jpg` |

To add more: drop files in the right folder and add paths in `src/data/journey.ts` under the pin’s `images` array.

## Tips

- Spaces in filenames are OK (e.g. `SAP Campus.JPG`).
- Headshot: ~4:5 portrait works best.
- Map uses **OpenStreetMap** — no Google API key required.

## Optional: Google Maps

If you prefer Google Maps styling later, you’ll need a [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/get-api-key) key (billing account). We can swap the tile layer when you have `VITE_GOOGLE_MAPS_API_KEY`.
