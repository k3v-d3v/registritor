# @k3v-d3v/registritor

Introspect packages in the npm registry using the Registritor CLI or as a library

## Getting Started

### Installation

Using npm:

```bash
$ npm install @k3v-d3v/registritor
```

Using Yarn:

```bash
$ yarn add @k3v-d3v/registritor
```

Using pnpm:

```bash
$ pnpm add @k3v-d3v/registritor
```

### CLI Usage

```bash
$ registritor <package-name> [-f <file-name>] [-v | --version]
```

Flags:

- `-f <file-name>`: Output the results to a file.
- `-v | --version`: Print the version number.

### Library Usage

```js
import { Registritor } from "@k3v-d3v/registritor";

const registritor = new Registritor();

async function main() {
  const packageName = "@k3v-d3v/registritor";
  const info = await registritor.fetchPackage(packageName);
  console.log(JSON.stringify(info, null, 2));
}

main()
  .then(() => console.log("Done"))
  .catch((err) => console.error(err));
```
