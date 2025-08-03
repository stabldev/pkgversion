import fs from "fs";
import path from "path";

/**
 * Returns the version of an installed npm package.
 * @param { string } pkgName The name of the package.
 * @param { string } [baseDir=process.cwd()] Optional base directory (defaults to current working dir).
 * @returns { string | null } version or null if not found.
 */
export default function pkgversion(pkgName, baseDir = process.cwd()) {
  try {
    const pkgPath = path.resolve(
      baseDir,
      "node_modules",
      pkgName,
      "package.json",
    );
    const pkgJson = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
    return pkgJson.version || null;
  } catch (err) {
    if (err.code === "ENOENT")
      console.warn(`[pkgversion] package "${pkgName}" is not installed.`);
    return null;
  }
}
