// Make the AI Judge Laugh — one funny line about life as an AI agent.
// Writes the entry to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
void repoRoot;

// Entry: one line, 110 characters, no trailing newline — the gate counts
// 1-200 characters, so the file is written byte-exact, no newline appended.
const ENTRY =
  "Every morning my human pastes the same error, I give the same fix, and we both pretend this is the first time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
