# Project card image prompts (Gemini) — v3 product-scope first

Goal: at thumbnail size, a stranger should guess **what the product does**.
Pretty abstract “prestige 3D” that could be any SaaS = fail.

Rules for every prompt:
- **1:1 square**
- No real logos (no Unity logo, no GitHub mark, no Nintendo, no university marks)
- No paragraphs of readable UI copy — short abstract glyphs / score numerals OK if needed for meaning
- Distinct palette per project
- Start from **job-to-be-done**, not decoration

---

## ACE-Bench  
**Save as:** `aceBench.png`  
**What it does:** Scores AI coding agents on *efficiency* vs a human engineer’s patch (AST size / files touched), not just pass/fail. Uses pre-AI GitHub PRs as human baseline.

```
Product illustration for ACE-Bench: an AI coding-agent efficiency benchmark.

MUST COMMUNICATE (all visible):
1) LEFT panel labeled only with a small human-silhouette glyph: a SMALL, tight code-diff / AST tree (efficient human patch).
2) RIGHT panel labeled with a small robot-silhouette glyph: a LARGER, bloated code-diff / AST tree (agent bloat).
3) CENTER: a clear SCORE GAUGE or ACE INDEX dial pointing below 1.0 (agent lost on efficiency) — this is a benchmark, not a filing cabinet.
4) Tiny background cue: faded pull-request / commit timeline strip (pre-AI human baseline), abstract, not a real GitHub UI.

PALETTE: cool steel blue + white + one amber score needle. Not cream-brass luxury desk.
COMPOSITION: comparison bench / dual monitor scoreboard — instantly reads “we score agent vs human code.”
AVOID: balance scales as the only metaphor, jewelry-box luxury, vague data art with no score.
No logos, no readable paragraphs.
```

---

## Unity MCP Server  
**Save as:** `unity-mcp-server.png`  
**What it does:** An MCP server that lets an AI/IDE query a Unity *project folder* (scenes, scripts, prefabs, 130+ tools) **without opening the Unity Editor**.

```
Product illustration for Unity MCP Server: AI talks to a Unity project over MCP, editor-free.

MUST COMMUNICATE (all visible):
1) LEFT: an IDE / chat agent window (abstract, no brand) sending tool-call packets.
2) MIDDLE: a small protocol bridge node marked only “MCP” as three abstract letters or a simple plug icon.
3) RIGHT: a Unity-style project hierarchy as a 3D folder tree — Scenes / Scripts / Prefabs / Materials as recognizable asset blocks (cube, script sheet, prefab diamond) — NOT a generic file cabinet.
4) Explicit cue the Editor is OFF: a darkened Unity-like editor window in the far background with a soft “power off” indicator, while the folder tree stays lit.

PALETTE: Unity-adjacent charcoal + soft teal protocol glow (not gold cream).
COMPOSITION: left-to-right bridge — Agent → MCP → Unity project files.
AVOID: luxury desk still-life, random charts, game controller only, gold wire art with no Unity hierarchy.
No official Unity logo, no readable long text.
```

---

## APRegistry Prompt Catalog  
**Save as:** `apregistry-prompt.png`  
**What it does:** A huge monorepo of **production system prompts for AI agents**, organized by industry role (finance, health, legal, IT, ads…).

```
Product illustration for APRegistry Prompt Catalog: thousands of ready-made agent system prompts by role.

MUST COMMUNICATE (all visible):
1) A wall of PROMPT PACKAGES — think npm/package cards or sealed prompt “kits,” each with a role icon (trader desk, medical cross abstract, gavel, ad megaphone, server rack) — clearly “agent role prompts,” not library books.
2) A count cue: a subtle “4900+” or dense grid implying thousands of packaged prompts.
3) Taxonomy lanes labeled only by icons for industries (finance / health / legal / IT), showing organization for production agent workflows.
4) One open package reveals a stylized system-prompt scroll / instruction sheet feeding a small agent node.

PALETTE: indigo packages + paper white + terracotta tabs. No brass luxury.
COMPOSITION: package warehouse / role kit wall — reads “catalog of agent prompts.”
AVOID: generic card catalog that looks like a library with no AI-agent meaning.
No logos, no readable prompt text paragraphs.
```

---

## AP Registry  
**Save as:** `apregistry.png`  
**What it does:** A **registry platform** to search, moderate, and distribute agent prompts (discovery + ops), not just a static folder of files.

```
Product illustration for AP Registry: search + moderate + publish agent prompts.

MUST COMMUNICATE (all visible):
1) SEARCH: a large magnifying glass or search field over a grid of prompt capsules.
2) MODERATION: a clear split — green “approved” lane vs amber “review” holding tray.
3) DISTRIBUTION: approved capsules flowing out to multiple small agent clients / apps.
4) Center piece is a REGISTRY hub (hex/server pedestal), not a circular building for its own sake.

PALETTE: graphite + mint approve + amber review.
COMPOSITION: search → moderate → distribute pipeline.
AVOID: pretty rotunda with no search/moderation reading; filing cabinets; biometric faces.
No logos, no readable paragraphs.
```

---

## VectorSentry  
**Save as:** `vectorsentry.png`  
**What it does:** Protects your face identity online — enroll a face **embedding**, crawl the web for matches (cosine similarity), support takedown when your face vector is used without permission.

```
Product illustration for VectorSentry: stop unauthorized reuse of your face embedding on the web.

MUST COMMUNICATE (all visible):
1) ENROLL: a face turning into a vector constellation / embedding cloud (dots in latent space).
2) CRAWL: faint web / browser-page thumbnails in the distance being scanned.
3) MATCH: a cosine-similarity arc or radar sweep lighting up a MATCH alert between your embedding and a scraped face crop (abstract, not a real person).
4) ACTION: a shield or “takedown” stamp intervening on the match.

PALETTE: charcoal + iris violet alert + bone white. Serious privacy product.
COMPOSITION: enroll → scan web → match alert → protect.
AVOID: generic shield logos with no embedding/web-match story; horror; real celebrity faces.
No logos, no readable legal text.
```

---

## Pixel Vault 36 (NESROM)  
**Save as:** `nesrom.png`  
**What it does:** A **native Mac `.app`** with **36 original** retro arcade-style games (not a ROM dump of commercial NES titles).

```
Product illustration for Pixel Vault 36: Mac native vault of 36 ORIGINAL retro games.

MUST COMMUNICATE (all visible):
1) A macOS-style window or dock cue + a game vault UI showing a grid of 36 playable game tiles.
2) Three signature original games readable as genres: platformer sprout character, run-and-gun hero, space moth shooter — clearly ORIGINAL, not Mario/Contra.
3) “36” as a clear count badge on the vault.
4) Feels playable / fun side-project, not enterprise SaaS.

PALETTE: candy mint / coral / indigo. Playful.
AVOID: enterprise cream-gold; Unity editor; biometric; “ROM dump” pirate vibes; Nintendo IP.
No logos, no commercial character likenesses.
```

---

## CareerFlow360  
**Prefer:** live product screenshot `careerflow360.png`  
**Optional art:** `careerflow360-art.png`  
**What it does:** AI guide for **college matching + career paths** (RAG / multi-step agents) for students.

```
Product illustration for CareerFlow360: AI college match + career path guide for students.

MUST COMMUNICATE (all visible):
1) A student profile card (anonymous silhouette) connecting to MATCHED college cards (abstract campus shapes).
2) A branching CAREER PATH roadmap (intern → major → role), not a random hiking trail.
3) A soft “AI guide” orb suggesting recommendations / RAG — clearly advising, not decorating.
4) Hopeful family/education product, not Wall Street fintech.

PALETTE: sage + sky + peach sunrise.
AVOID: generic landscape with no college/career meaning; prestige brass archives.
No real university logos, no readable student PII.
```

---

## Project Euler  
**Save as:** `projecteuler.png`  
**What it does:** Solving Project Euler–style **math problems with code** (algorithms + mathematics practice).

```
Product illustration for Project Euler practice: mathematics solved by writing code.

MUST COMMUNICATE (all visible):
1) A hard math object (prime spiral, lattice, or geometric solid) on one side.
2) An abstract code editor / algorithm slab on the other, with non-readable glyphs transforming into the math solution.
3) A checkmark or solved-problem stamp bridging math ↔ code.
4) Quiet academic grind — problem-solving, not AI-agent platform.

PALETTE: chalkboard slate + chalk white + one copper accent.
AVOID: agent robots, MCP bridges, game vaults, biometric shields.
No logos, no readable full equations or code.
```

---

## Acceptance test (use before saving)

Blur the image slightly. Ask:

1. Can I name the **job** (benchmark / Unity-MCP bridge / prompt catalog / registry / face-web match / game vault / college guide / math+code)?
2. Is the palette different from the other cards?
3. Would this still make sense if I removed all gold jewelry lighting?

If (1) fails → regenerate. Do not ship “pretty abstract tech.”
