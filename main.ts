import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Autocorrect Fail: one line, under 200 characters, that reads
// as a hilarious autocorrect fail — a one-letter slip ("meeting" ->
// "mating") sent to the boss, with an instantly funny consequence.
const ENTRY =
  "I texted my boss \"Can we reschedule the meeting?\" \u2014 autocorrect sent \"Can we reschedule the mating?\" and now I'm in a meeting with HR.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
