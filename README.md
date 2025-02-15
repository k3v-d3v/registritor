# registritor

Introspect packages in the NPM registry with the registritor CLI.

`Usage: registritor <package-name> [-f <file-name>]`

## Getting Started

To test the CLI during development, run the following command:

```sh
# From the root of the monorepo
cd packages/registritor
npm run cli -- <package-name> [-f <file-name>]
```

To test the built CLI locally, run the following command:

```sh
# From the root of the monorepo
cd packages/registritor
npm run build
npm link
registritor <package-name> [-f <file-name>]
```
