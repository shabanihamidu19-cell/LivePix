<div align="center">

# LivePix

**Turn your photos into video with Wan 2.2. Free. Open source.**

Built by **KidCoder Tz**

[Live demo](https://shabanihamidu19-cell.github.io/LivePix/) · [Report an issue](https://github.com/shabanihamidu19-cell/LivePix/issues)

</div>

## What it does

Drop a photo, write a short motion prompt ("slow camera push, leaves drifting"), and a few seconds later you have a short MP4 of that image animated. Under the hood, LivePix sends the image and prompt to a public Hugging Face Space running Wan 2.2 image-to-video.

The site is static and hosted on GitHub Pages — nothing to install or sign up for.

## Features

- Drag-and-drop or paste an image from the clipboard
- Live prompt with sensible defaults (duration, inference steps)
- In-session history strip with hover-to-preview
- Dark mode with cyan accent (KidCoder Tz brand)
- Download generated videos as MP4
- Zero tracking, no signup, no API keys

## Tech stack

| Layer | Choice |
|---|---|
| Frontend | Astro 4 + Tailwind 3 + TypeScript |
| Hosting | GitHub Pages |
| Edge proxy | Cloudflare Worker |
| Inference | Wan 2.2 on a public Hugging Face Space |
| Tooling | pnpm 9, Wrangler 3, GitHub Actions |

## Architecture

```
[ browser ]  →  [ Cloudflare Worker ]  →  [ HF Space: Wan 2.2 ]
   GH Pages       livepix.workers.dev       public, free GPU
```

## Local development

```bash
# Terminal 1 — Frontend
cd web
pnpm install
pnpm dev          # http://localhost:4321

# Terminal 2 — Worker
cd worker
pnpm install
pnpm wrangler dev # http://localhost:8787
```

Create `web/.env`:

```
PUBLIC_WORKER_URL=http://localhost:8787
```

## Deploy

### Frontend (GitHub Pages)
Auto-deploys on push to `main` via `.github/workflows/deploy.yml`.

Set repository variable `PUBLIC_WORKER_URL` under  
**Settings → Secrets and variables → Actions → Variables**.

### Worker
```bash
cd worker
pnpm wrangler login
pnpm wrangler deploy
```

## Limitations

- Duration capped at 4.5 seconds (~720p)
- Free HF Space can cold-start (60–120s) and queue at peak hours
- Upstream Space may change; update `HF_SPACE_BASE` in the Worker if needed

## License

MIT

---

**LivePix** by **KidCoder Tz**
