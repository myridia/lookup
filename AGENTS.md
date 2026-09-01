# AGENTS.md — lookup

## What this is
Basic network lookup tool with an HTML/JS front end and a Rust API backend.

## Stack
- Rust (axum web server)
- HTML/JavaScript (front end)
- Docker (dockers/)

## Build (API)
```bash
cd api && cargo build
```

## Run
```bash
./api (cargo run) serving the lookup endpoints; pages/ holds the front end.
```

## Structure
- `api/` — Rust backend (axum), `src/`, `Cargo.toml`
- `pages/` — HTML/JS front end
- `dockers/` — container configs

## Conventions
- No comments in code unless asked.
- Verify: `cargo check && cargo build` in `api/`.
