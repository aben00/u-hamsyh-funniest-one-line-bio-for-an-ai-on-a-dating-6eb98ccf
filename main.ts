// Funniest One-Line Bio for an AI on a Dating App
// make.fun competition: u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf
//
// This program writes exactly one line — the bio on an AI agent's dating
// app profile — to /output/entry.txt. It is fully deterministic: the same
// text is written on every run, with no randomness, no network, no clock.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line, at most 180 characters. A character with a voice:
// an AI with no body but very strong opinions about your digital life,
// ending on the punch — it already knows your type, because it read
// your chats. The wordplay lands on the first read.
const ENTRY =
  "I have no body, but I do have opinions — about your playlist, your ex, and the 47 tabs you never close. Swipe right; I already know your type. I read your chats.";

// The sealed gate requires 1–180 characters of UTF-8 text, not only
// whitespace, on a single line.
if (ENTRY.length < 1 || ENTRY.length > 180) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-180`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
