// The Router Confesses — make.fun entry
//
// Writes the single-line entry to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// The entry text below is a fixed constant: it must never be edited,
// since the submitted entry is judged byte-for-byte.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I saw the killer's face before you did and I panicked. I dropped everything \u2014 including you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

// Guard: the entry must be a single non-empty line, so a bad edit
// fails loudly here instead of silently writing a broken entry.
if (ENTRY.length === 0 || ENTRY.includes("\n")) {
  throw new Error("ENTRY must be a single non-empty line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length} chars to ${outPath}`);
