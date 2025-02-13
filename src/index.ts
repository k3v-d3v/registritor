import https from "https";

export type PackageMetadata = Record<string, unknown>;

export class Registritor {
  private registryUrl: string;

  constructor(registryUrl: string = "https://registry.npmjs.org") {
    this.registryUrl = registryUrl;
  }

  fetchPackage(packageName: string): Promise<PackageMetadata> {
    return new Promise((resolve, reject) => {
      const url = `${this.registryUrl}/${encodeURIComponent(packageName)}`;

      https
        .get(url, (res) => {
          let data = "";
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => {
            try {
              resolve(JSON.parse(data) as PackageMetadata);
            } catch (err) {
              reject(new Error("Failed to parse response"));
            }
          });
        })
        .on("error", reject);
    });
  }
}
