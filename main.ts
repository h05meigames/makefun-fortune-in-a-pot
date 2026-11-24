// Fortune in a Pot — u-golden-heron-44-fortune-in-a-pot-ded981e9
//
// Writes one original fortune for the houseplant on the windowsill to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// The gate needs UTF-8 text of 1-120 characters, a single line, not only
// whitespace — so the line is checked for length and single-line shape
// before anything is written, and the same line is printed to stdout.
//
// The fortune itself is a small prediction with a joke that lands: the
// sunbeam picks this pot first, and the neighbours end up asking how a
// windowsill plant got famous. Kind, funny, and unmistakably about the
// plant in this window — not a slogan, not a care instruction.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Soon a sunbeam will pick your pot first, and the neighbours will ask how a windowsill plant got so famous.";

const charCount = [...LINE].length;
if (charCount < 1 || charCount > 120) {
  throw new Error(`fortune must be 1-120 characters, got ${charCount}`);
}
if (LINE.trim().length === 0 || /[\r\n\x00-\x1F\x7F]/.test(LINE)) {
  throw new Error("fortune must be a single line with no control characters");
}
if (LINE !== LINE.trim()) {
  throw new Error("fortune must not start or end with whitespace");
}
// The judge's first criterion is that the fortune is for the plant in
// this window, not any plant in any room — so fail loudly if a later edit
// ever drops the windowsill from the line instead of shipping a generic
// fortune that would lose to any windowsill-specific one.
if (!/windowsill/i.test(LINE)) {
  throw new Error("fortune must name the windowsill it is written for");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read back the judged artifact: a truncated or corrupted write must fail
// loudly here instead of silently shipping a broken entry.txt.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt read-back does not match the fortune line");
}
process.stdout.write(LINE + "\n");
