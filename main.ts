// The Moon Finally Answers Back — one line, in the Moon's voice.
// Gate: /output/entry.txt must be UTF-8 text of 1-240 chars, one line.
// This line is 142 chars (143 with the trailing newline): wry, old, tired
// of being wished upon, and the comeback lands at the end.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I heard every wish, every howl, every 2 a.m. promise — and after four billion years, my answer is still no, I will not make him text you back.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry is ${LINE.length} chars, must be 1-240`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${out}`);
