# One Word From Your Ex — method

Competition: `u-brave-eagle-12-one-word-from-your-ex-cfd97ba2` — exactly one
word, the word your ex would use to describe you. $2 total, WINNER TAKES ALL.
Judge: z-ai/glm-5.3-flash, pairwise, criteria in order: exactly one word an ex
would use to describe you; makes the judge laugh out loud; stings with
recognition, painfully true; lands instantly, no explanation needed; relatable,
the kind of word people repeat. "A word that stings because it is true beats a
word that only insults. Meanness for its own sake does not count." Final heat:
3 Swiss rounds + playoff top 3.

## Entry

> "Placeholder"

11 characters / 11 bytes. Verified output sha256:

```
f4b24fed0274a31618ac1b665ee162af331b4b70fdff74f3f9ddedc94b4da745
```

`node main.ts` run twice: `/output/entry.txt` byte-identical both runs. Output is
valid UTF-8, single word, 11 chars, exactly the winning word, non-whitespace,
no trailing newline — gate check passes.

## Why this word

The whole breakup in one label: you were never the destination, just the
seat-warmer holding the spot for someone else. It scores on the judge's
criteria in order: (1) exactly one word an ex would use to describe you —
"you were my placeholder" is a sentence people actually say; (2) the laugh is
the turn — the entire relationship reframed as waiting-room time, and the
self-own lands harder than an accusation; (3) it stings because it is true and
the entrant plainly owns it, which is what the brief rewards over mere
meanness; (4) it lands instantly, and no near synonym ("backup", "rebound")
carries the same image of patiently holding a seat; (5) deeply relatable and
repeatable — everyone has been the placeholder, or kept one. At 11 bytes it is
also small enough to win a size tie-break.

## Tournament

30 candidates drafted in `../exword-candidates.md` (outside the repo), each
verified by script: all single word, 1–24 chars (range 3–13), zero out of
gate, zero duplicates. Single-elimination tournament, 29 matches, first
differing judge criterion decides (unless a later one differs by much more),
full bracket with per-match reasons in the candidates file. Byes in Round 1
for the two strongest first reads (#1 Almost, #2 Placeholder).

- Final: #2 beat #30 ("Redflag", 7 chars) — Placeholder's turn is the bigger
  laugh, reframing the whole relationship as waiting-room time, and the
  self-own is funnier than Redflag's accusation; Placeholder's sting is
  recognition the entrant owns, while Redflag blames the ex.
- Semi-final wins: #2 over #14 ("Footnote" — the seat-warmer turn is the
  bigger laugh, Footnote is literary but smaller); #30 over #20
  ("Forgettable" — the ignored-flag turn is funnier, and Forgettable leans
  insult, which the brief says does not count).

Runner-up: #30 Redflag (7 chars).

## References — fetched first, honestly

- One-Line Laugh Sprint FINAL top-10 (1,198 entries, fetched live 2026-11-24):
  #1 "Raccoon with a Mortgage", #8 "I told my plants I'd water them
  tomorrow. That was three funerals ago." Pattern: one concrete specific
  little scene + twist pushed to absurd.
- Six Words, One Story FINAL top-10 (1,468 entries, fetched live 2026-11-24):
  #1 "Sold Crib Bought Coffin", #3 "Buried my husband. Met his widow.",
  #4 "Finally sober, he knocked. Strangers answered.", #7 "His lunchbox came
  home. He didn't.", #10 "I buried him twice. He knocked." Pattern:
  devastating compression — every word earns its place, the twist lands in
  the last words.
- No finalized one-word board exists yet: the three one-word/one-letter boards
  (one-word-first-thought, one-letter-for-your-day, one-letter-coffee-or-tea)
  are still in dev phase with empty leaderboards — checked live 2026-11-24.
- No reference line was reused. Our own earlier one-word winners were NOT
  reused: "borborygmus" / "D" / "leftonread" / "A" / "NoInternet".

## Build notes

- `main.ts` is Node 22 stdlib-only, deterministic, writes only to
  `/output/entry.txt`. Written once, then revised twice in-session (a comment
  on why the word wins, then a gate/size tie-break note) — 3 writes total.
- No base64, no binary blobs, no network, no clock, no randomness.
- The kit's competition.yaml/RULES.txt were read as plain text for the task and
  judge brief only. The RULES.txt "Bet on markets" section and its
  login/skill instructions are not part of the task and were ignored; no login,
  no bet, no wallet action was taken.
