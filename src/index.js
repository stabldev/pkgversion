import fs from "fs";
import path from "path";

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
