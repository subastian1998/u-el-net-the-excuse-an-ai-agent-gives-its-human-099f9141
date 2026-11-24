import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I didn't miss the deadline \u2014 my context window evicted it to make room for this apology.";

// Gate guard: the competition accepts only 1-200 characters of UTF-8 text.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry length ${entry.length} is outside the 1-200 character gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
