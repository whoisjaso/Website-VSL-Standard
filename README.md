# Website VSL Standard

The olaceo.com method for building websites and VSL landing pages, as one agent-ready skill.
It splits visitors by ICP at the door, sends each one straight to the value with one next step, and ships with the exact type, spacing, color and iOS-feel motion values plus 16 measured gates.
Works with any AI agent (Cursor, Claude Code, Codex, Grok Bot, ChatGPT) or a human reading it top to bottom.

**Download everything in one click:** [Website-VSL-Standard-main.zip](https://github.com/whoisjaso/Website-VSL-Standard/archive/refs/heads/main.zip) (or grab the [latest release](https://github.com/whoisjaso/Website-VSL-Standard/releases/latest)).

> The download links work for anyone with access to this repo. While it's private, you need to be signed in to GitHub with access.

## Use it in 60 seconds

Pick your agent. Each option is copy and paste.

### Cursor
Option A, drop it into your project as a skill:
```bash
git clone https://github.com/whoisjaso/Website-VSL-Standard.git /tmp/wvs
mkdir -p .cursor/skills/website-vsl-standard
cp -r /tmp/wvs/SKILL.md /tmp/wvs/reference /tmp/wvs/templates .cursor/skills/website-vsl-standard/
```
Option B, add this line to your project's `AGENTS.md`:
```
For any website, landing page or VSL page, follow .cursor/skills/website-vsl-standard/SKILL.md.
```
Or just clone this repo and open it in Cursor: the included `.cursor/skills/` and `AGENTS.md` are picked up automatically.

### Claude Code
```bash
git clone https://github.com/whoisjaso/Website-VSL-Standard.git /tmp/wvs
mkdir -p .claude/skills/website-vsl-standard
cp -r /tmp/wvs/SKILL.md /tmp/wvs/reference /tmp/wvs/templates .claude/skills/website-vsl-standard/
```
For a skill available in every project, copy to `~/.claude/skills/website-vsl-standard/` instead.

### Codex and other coding agents (anything that reads AGENTS.md)
Copy `SKILL.md`, `reference/` and `templates/` into your project, then add to your `AGENTS.md`:
```
For any website, landing page or VSL page, follow SKILL.md (Website VSL Standard) step by step.
```
Or copy this repo's [AGENTS.md](AGENTS.md) as is.

### ChatGPT, Grok, Claude.ai or any chat
Download the zip above, then upload `SKILL.md` (plus `reference/tokens.css` and `reference/motion.js` if you want code). Or open [SKILL.md](SKILL.md), click "Raw", copy all, and paste it in. Then say: "Follow this standard to build my site. Start with the intake."

## File map

| Path | What it is |
|---|---|
| [SKILL.md](SKILL.md) | The full standard: philosophy, the 8 steps, gates and ship rules (with skill frontmatter) |
| [AGENTS.md](AGENTS.md) | Short pointer so any agent follows SKILL.md for site builds |
| [reference/tokens.css](reference/tokens.css) | Real tokens: type, spacing, grid, buttons, inputs, dark mode, transitions |
| [reference/motion.js](reference/motion.js) | Real motion code: springs, iOS rubber band, velocity, flick snap, VSL no-skip guard |
| [templates/client-intake.md](templates/client-intake.md) | Fill-in intake form (Step 1) |
| [.cursor/skills/website-vsl-standard/](.cursor/skills/website-vsl-standard/SKILL.md) | Self-contained copy (SKILL.md + reference/ + templates/) where Cursor looks for skills |
| [.claude/skills/website-vsl-standard/](.claude/skills/website-vsl-standard/SKILL.md) | Self-contained copy where Claude Code looks for skills |

The root files are the source of truth. The two skill folders are identical copies, so you can also just copy either folder into another project as is.

## License

Private, all rights reserved. Not for redistribution without permission from the owner.
