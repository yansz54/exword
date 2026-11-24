// One Word From Your Ex — u-brave-eagle-12-one-word-from-your-ex-cfd97ba2
// Exactly one word: the word your ex would use to describe you.
// Winner of a 30-candidate single-elimination tournament (see METHOD.md).
// The word is the whole breakup in one label: you were never the destination,
// just the seat-warmer holding the spot for someone else. The self-own is the
// joke — the entrant was the placeholder and plainly knows it — and it reframes
// the entire relationship as waiting-room time. It beat "Redflag" in the final:
// the ignored-flag turn accuses the ex, while this one owns the truth, which is
// what the brief rewards ("a word that stings because it is true").
// Writes the word to /output/entry.txt, exactly, no trailing newline.
// Gate: 1-24 chars, UTF-8, single word, non-whitespace. This word is
// 11 chars / 11 bytes — comfortably inside the gate and small enough to
// win a size tie-break (exact ties go to the smaller text). No trailing
// newline: the file holds exactly the word, byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Placeholder";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(WORD);
