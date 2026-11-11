# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Course website for AIAP (AI accelerated programming), Astro + Starlight, all content in Swedish `.mdx` under `src/content/docs/`. Modelled on `dbwebb-jsux.github.io`.

## Commands

- `npm run dev` – dev server
- `npm run build` – production build (also the only check; there is no linter or test suite)

## Notes

- The sidebar in `astro.config.mjs` is the source of truth for page order; add new pages there.
- In `.mdx`, comments must be `{/* ... */}`; HTML `<!-- -->` comments break the build.
- Unfinished spots are marked `{/* TODO: ... */}` and have a matching entry in `../QUESTIONS.md`.
- Student starter repos (`../aiap-part1-hobby`, `../aiap-part2-webapp`, `../aiap-part3-critical`) are referenced from `del1`–`del3`; keep them consistent. Part 0 has no starter repo.
- Do not add the jsux anti-AI mechanisms (hidden prompt, agent-policy CI); AI use is required in this course.
