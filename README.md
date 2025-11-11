# @taskvox/shared-schemas

Shared TypeScript schemas, interfaces and DTOs for TaskVox projects.

This package provides centralized Mongoose schemas, TypeScript interfaces, enums and (optionally) DTOs used across TaskVox services. The library is authored in TypeScript and built to `dist/` for consumption by other projects.

## What’s inside

- `src/schemas/` — Mongoose/JSON schemas for domain models (users, campaigns, calls, workflows, voice galleries, etc.).
- `src/interfaces/` — TypeScript interfaces that describe the shapes used by the schemas.
- `src/dtos/` — Data Transfer Objects (if present) used for validation and transformation.
- `src/enums/` — Shared enums used across models.
- `src/index.ts` — Re-exports enums, interfaces and schemas so consumers can import from the package root.

The package `main` points to `dist/index.js` and type definitions are emitted to `dist/index.d.ts`.

## Install

If this package is published to your registry (see `package.json` `publishConfig`), install it like any other package:

```powershell
npm install @taskvox/shared-schemas
```

For local development, clone this repo and run:

```powershell
npm install
npm run build
```

The `prepublishOnly` script runs the build step automatically when publishing.

## Build

This project uses TypeScript. Build with:

```powershell
npm run build
```

That runs `tsc -p tsconfig.json` and emits `dist/` containing compiled JS and d.ts files.

## Usage

After installing the package (or building locally), import schemas/interfaces from the package root. The library re-exports its parts from `src/index.ts` so consumers can import what they need from the package name:

Published package example:

```ts
import { UserSchema, IUser } from '@taskvox/shared-schemas';

// Use with mongoose
// mongoose.model<IUser>('User', UserSchema);
```

Local usage (during development after `npm run build`):

```ts
// If you linked the package or referenced the built files
import { UserSchema } from '../taskvox-schema/dist/schemas/user.schema';
```

Adjust import paths depending on your project layout. The recommended approach for other TaskVox projects is to depend on the published package and import from `@taskvox/shared-schemas`.

## Notes on dependencies

The package depends on:

- `mongoose` — schema definitions
- `class-validator`, `class-transformer` — DTO validation/transform when used
- `moment` — date utilities (used by some schemas/utilities)

Peer dependencies include `@nestjs/mongoose` and `reflect-metadata` for NestJS projects that integrate these schemas.

## Contributing

1. Fork the repo and create a feature branch.
2. Add/update schemas/interfaces in `src/`.
3. Run `npm run build` and add tests if relevant.
4. Open a PR describing your change.

Keep changes small and focused. Adding or changing an exported interface or schema is a breaking change — bump the package version accordingly.

## License

MIT — see `package.json` for author and license metadata.

---

If you want, I can also:

- add a short example project that imports and uses one of the schemas,
- add a tiny CI workflow to run `npm run build` on PRs, or
- generate a more detailed API docs page listing all exported symbols.

Tell me which of those you'd like next.