#!/usr/bin/env node

import { Registritor, PackageMetadata } from "./index";

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error("Usage: registritor <package-name>");
  process.exit(1);
}

const registritor = new Registritor();
const packageName = args[0];

registritor
  .fetchPackage(packageName)
  .then((data: PackageMetadata) => console.log(JSON.stringify(data, null, 2)))
  .catch((err: unknown) => {
    const error = err as Error;
    console.error("Error:", error.message);
    process.exit(1);
  });
