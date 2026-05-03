---
title: "Release gates should be easy to use"
date: 2026-05-01
summary: "A mobile release gate should help the team decide whether to widen, hold, or investigate a rollout."
---

Mobile reliability work can get theatrical fast. Dashboards multiply, thresholds become
political, and the team eventually learns that the process is easier to perform than to use.

The release gate I trust is smaller than that. It answers three questions before a rollout widens:

- Are crash-free users holding above the agreed threshold?
- Did the new release introduce a top crash or a login/session regression?
- Does every active regression have an owner and a next action?

That is not the whole reliability program. It is the minimum bar for deciding whether the
release deserves more traffic.

For mobile teams, the gate also needs to respect phased rollout mechanics. A release can look
clean at 1 percent and change shape at 25 percent. I do not want one check before shipping; I
want the same check at each traffic step.

The most important part is ownership. A dashboard without named owners becomes wallpaper. A
crash with an owner, a reproduction note, a suspected area, and a decision about rollout is
operational work.

The gate should be short enough to use during a busy sprint review.
