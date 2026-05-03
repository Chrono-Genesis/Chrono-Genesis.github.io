---
title: "Modernize mobile apps without stopping product work"
date: 2026-04-02
summary: "The safest modernization plans do not ask the business to pause. They turn platform migration into a steady habit inside normal delivery."
---

Most production mobile apps do not get a clean rewrite window.

The team still has roadmap commitments, support issues, store deadlines, OS updates, dependency changes, and the occasional urgent fix. A modernization plan that ignores that pressure is mostly a wish.

The approach I prefer is incremental and a little stubborn:

- New screens use the modern framework by default.
- Existing screens move when adjacent feature work makes the cost reasonable.
- Shared utilities migrate before leaf screens when they reduce repeated work.
- The team keeps a visible list of old patterns that are still allowed, discouraged, or blocked.

This keeps modernization attached to delivery instead of competing with it.

There is a tradeoff. Incremental migration means the codebase will hold two patterns for a while. UIKit and SwiftUI may coexist. XML layouts and Jetpack Compose may coexist. Java and Kotlin may coexist longer than anyone likes.

That is acceptable if the boundaries are clear. It is dangerous when every file invents its own transition plan.

The goal is not to make the codebase look modern in one impressive moment. The goal is to make the next change cheaper, safer, and easier to review than the last one.
