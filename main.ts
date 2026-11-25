// The 3AM Fridge Text — make.fun entry
// Writes the one line a smart fridge texts its owner at 3am to /output/entry.txt.
// Deterministic: no network, no clock, no randomness — every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "it's 3am and i'm the only appliance in this house still speaking to you. the toaster filed for divorce in june.";

// The gate allows 1–140 characters; refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1–140 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
