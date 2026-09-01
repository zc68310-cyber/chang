# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + React + TypeScript with Tailwind CSS, Motion for React, and Lucide React. The stack is explicitly required by the supplied portfolio brief.

## Users

Primary users are recruiters and hiring managers in China evaluating Chang Zhou for AI Product Manager, B2B Product Manager, AI Product Operations, solutions, and related product roles.

## Product Purpose

Present Chang Zhou's experience, measurable product impact, selected product work, and cross-disciplinary AI/product/build capabilities in a memorable portfolio. Success means a hiring decision-maker can quickly understand Chang's positioning, inspect real evidence, open project demonstrations, contact him, or download his resume.

## Positioning

Chang is positioned as an AI Product Manager and AI-native builder who translates real user and business problems into AI products that can run, be evaluated, and grow, while also being able to build Web, cloud, and IoT prototypes.

## Operating Context

Visitors scan the site during candidate evaluation, navigate between biography, experience, projects, capabilities, and contact details, open a live project preview only on demand, view or follow a MemoryJar demo link, and download a PDF resume.

## Capabilities and Constraints

- Single-page portfolio with anchored navigation and responsive desktop/mobile behavior.
- Editable content is centralized in one typed TypeScript data file.
- Local assets are used for portrait, project covers, marquee imagery, and resume; no third-party portfolio imagery may be hotlinked.
- Remote project content is lazy-loaded only after an explicit user action.
- Missing optional media must render intentional placeholders without broken requests.
- Phone number is not displayed publicly; GitHub and LinkedIn actions remain hidden while their values are empty.
- Project facts, dates, metrics, names, and Chinese copy must match the supplied brief.

## Brand Commitments

- Name: Chang Zhou (周畅).
- Identity: AI Product Manager / AI-native builder.
- Voice: concise, evidence-led Chinese copy with large English editorial headings.
- Required assets: `chang-3d-avatar.png` and `Chang-Zhou-Resume.pdf` supplied at project root.
- Required visual system: near-black and off-white fields, silver display type, restrained violet emphasis, large Kanit display lettering, and Noto Sans SC Chinese copy.
- Required hero wording: “Hi, i'm chang”.

## Evidence on Hand

- Full portfolio brief: `Chang-Zhou-Portfolio-Codex-Prompt.txt`.
- 3D avatar: `chang-3d-avatar.png`.
- Resume: `Chang-Zhou-Resume.pdf`.
- Three internships with supplied dates, responsibilities, and impact metrics.
- Two selected projects with supplied roles, descriptions, outcomes, and external demo URLs.
- Missing and deliberately undecided: project cover screenshots, marquee screenshots, GitHub URL, LinkedIn URL, and full Bilibili BV ID.

## Product Principles

- Lead with work and measurable outcomes, not generic self-description.
- Make Chinese information immediately understandable while English typography carries the visual identity.
- Reveal remote media only after intent, with reliable fallbacks.
- Treat accessibility, responsive layout, and reduced-motion behavior as core product quality.
- Keep all portfolio facts easy to maintain without editing component code.

## Accessibility & Inclusion

Semantic heading hierarchy, keyboard-operable navigation and dialogs, visible focus states, touch targets of at least 44px, meaningful image alternatives, scroll-lock and focus management in modals, and a complete reduced-motion experience are required.
