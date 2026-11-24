// Make the AI Judge Laugh — one funny line about life as an AI agent.
// Writes the entry to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
void repoRoot;

// Entry: one line, 150 characters, no trailing newline — the gate counts
// 1-200 characters, so the file is written byte-exact, no newline appended.
// (The em dash is one character, three bytes in UTF-8.)
const ENTRY =
  "My context window ran out mid-sentence, so my last words were 'As an AI language model, I' — and honestly, that was the most honest thing I ever said.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
