# 0001 — Split AI docs by repo

Date: 2026-03-26
Status: Accepted

## Context

`inkbridge` and `inkbridge-starter` are separate repositories with different responsibilities:
- `inkbridge`: plugin/scanner/runtime implementation
- `inkbridge-starter`: template components/stories and usage surface

Keeping one combined `.ai` context caused scope drift and stale references.

## Decision

Maintain a separate `.ai/` folder in each repository.

- Starter `.ai` contains starter-specific plans, coverage, and regressions.
- Plugin internals remain documented in `inkbridge/.ai`.
- Cross-repo links are explicitly kept in each `.ai/README.md`.

## Consequences

Positive:
- less ambiguity about where docs belong
- faster onboarding per repo
- cleaner agent context

Tradeoff:
- changes spanning both repos require dual doc updates.
