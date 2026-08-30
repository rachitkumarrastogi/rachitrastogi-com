# Photo upload guide

## Folder structure

```
public/photos/
├── headshot/          → Hero portrait
├── origins/           → Early life (UP)
├── education/         → Pantnagar, IIIT
└── career/
    ├── bangalore/     → SAP Labs era
    ├── cologne/       → AXA Germany
    ├── msg/           → Madison Square Garden
    ├── tda/           → TD Ameritrade
    └── schwab/        → Charles Schwab
```

## Naming rules

- Use **lowercase** and **kebab-case**: `sap-campus.jpg`, not `SAP Campus.JPG`
- Formats: JPG, JPEG, PNG, WebP
- One primary file per slot (extras can use `-2`, `-3` suffixes)

## Resume files

| Path | Purpose |
|------|---------|
| `public/resume/Rachit_Rastogi_Resume.pdf` | Download link on site |
| `assets/resume/Rachit_Rastogi_Resume.docx` | Editable source (not served) |

## Wiring new photos

After uploading, paths are defined in `src/data/journey.ts` under each pin’s `images` array. Ask or edit that file to add more.
