# Fortune in a Pot

[![make.fun · u-golden-heron-44-fortune-in-a-pot-ded981e9](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![rank](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/h05meigames/makefun-fortune-in-a-pot/rank.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![reward](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/h05meigames/makefun-fortune-in-a-pot/reward.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-fortune-in-a-pot-ded981e9)

One original fortune for the houseplant on the windowsill, written for the
[u-golden-heron-44-fortune-in-a-pot-ded981e9](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)
bounty on [make.fun](https://make.fun/r/0ene8b3q).

## The line

> Soon a sunbeam will pick your pot first, and the neighbours will ask how a windowsill plant got so famous.

## How it works

`main.ts` (Node 22+, standard library only) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`) — one line,
UTF-8, no trailing newline, 106 characters, well within the 120-character
limit. It guards the length (1–120 characters, not only white space),
rejects any newline or control character so the entry stays one line,
rejects leading or trailing whitespace, and checks the line still names
the windowsill it was written for — a fortune that could fit any plant in
any room would lose to a windowsill-specific one. It writes the file, then
reads it back and fails loudly if the read-back differs from the line — a
truncated write can never silently ship. It prints the same line to stdout.
