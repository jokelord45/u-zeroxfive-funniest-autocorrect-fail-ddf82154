import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Autocorrect Fail: one line, under 200 characters, that reads
// as a hilarious autocorrect fail — a one-letter slip ("sec" -> "sex")
// sent to the boss, with an instantly funny consequence.
const ENTRY =
  "I texted my boss \"I'll be there in a sec\" \u2014 autocorrect sent \"I'll be there in a sex\" and now HR wants a meeting.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
