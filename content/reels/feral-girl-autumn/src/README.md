# Feral Girl Autumn — faceless reel renderer

Renders a 1080x1920, 43.6s, 30fps text-motion reel. No face, no stock footage:
the background is a procedural lux-neon gradient field with film grain.

## Render

```
node shoot.js preview   # stills at key timecodes -> preview/
node shoot.js full      # all frames -> frames/
ffmpeg -framerate 30 -i frames/%05d.jpg -c:v libx264 -profile:v high \
  -pix_fmt yuv420p -preset slow -crf 19 -movflags +faststart feral-girl-autumn.mp4
```

Requires Playwright + Chromium and an ffmpeg with libx264.

## Editing copy

All cards live in the `S` array in `reel.html`: `{a: start, b: end, fs: size, L: [lines]}`.
Lines auto-shrink to fit the 924px safe width, so you can't break the layout by
writing a longer line — it just gets smaller. Colour spans: `.pink` `.cy` `.yl`.

Fonts (Anton, Inter) are embedded as base64 in `fonts.js` so rendering is offline
and deterministic.
