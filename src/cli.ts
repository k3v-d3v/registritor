#!/usr/bin/env node

import { Registritor, PackageMetadata } from "./index";
import { writeFileSync } from "fs";

const args = process.argv.slice(2);
const usage = "Usage: registritor <package-name> [-f <file-name>]";

if (args.length !== 1 && args.length !== 3) {
  console.error(usage);
  process.exit(1);
}

const registritor = new Registritor();
const packageName = args[0];
let outputFile: string | undefined;

// Handle -f flag
if (args.length === 3 && args[1] === "-f") {
  outputFile = args[2];
}

registritor
  .fetchPackage(packageName)
  .then((data: PackageMetadata) => {
    const output = JSON.stringify(data, null, 2);
    if (outputFile) {
      writeFileSync(outputFile, output);
    } else {
      console.log(output);
    }
  })
  .catch((err: unknown) => {
    const error = err as Error;
    console.error("Error:", error.message);
    process.exit(1);
  });
