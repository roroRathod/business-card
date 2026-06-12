// ============================================================================
// Pre-build script: Generates public/contact.vcf from src/config.ts
// Runs automatically before every `npm run build` and `npm run dev`
// ============================================================================

import * as fs from "fs";
import * as path from "path";

// We can't import TS directly from a script, so we parse the config values
// using a dynamic import via tsx/ts-node. Instead, we'll use a simpler approach:
// read the compiled config after tsc, or just re-derive the values here.
// For maximum simplicity, we use ts-node/tsx to import directly.

async function main() {
  // Dynamic import of the config (works with tsx runner)
  const { vcardContent, siteConfig } = await import("../src/config.ts");

  const publicDir = path.join(process.cwd(), "public");

  // Write vCard
  const vcfPath = path.join(publicDir, "contact.vcf");
  fs.writeFileSync(vcfPath, vcardContent, "utf-8");
  console.log(`✓ Generated ${vcfPath}`);
  console.log(`  → Contact: ${siteConfig.personal.fullName} (${siteConfig.contact.email})`);
}

main().catch((err) => {
  console.error("Failed to generate vCard:", err);
  process.exit(1);
});
