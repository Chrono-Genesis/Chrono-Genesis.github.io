---
title: "Mobile identity work rewards boring architecture"
date: 2026-04-18
summary: "Credential flows, OAuth, liveness checks, and secure storage are complicated enough. The app architecture around them should be intentionally plain."
---

Mobile identity projects have enough moving parts before the app adds any drama.

There may be OAuth and PKCE, identity proofing, biometric liveness, credential issuance, credential presentation, secure storage, session refresh, vendor SDKs, deep links, web redirects, and backend calls that all need to agree about state.

That kind of system punishes clever app architecture.

The safest shape is usually explicit boundaries:

- A small authentication surface that owns tokens and refresh behavior.
- A credential surface that owns issuance, storage, and presentation state.
- A vendor integration layer that keeps SDK details away from screens.
- UI flows that can resume after redirects, interruptions, and app restarts.

The details matter more than the diagram. If a user backgrounds the app during identity proofing, what state is recoverable? If a token refresh fails while a credential flow is mid-step, who decides what the user sees? If a vendor SDK changes an error format, how far does that leak?

Those questions are not glamorous, but they are where trust is built.

For identity work, boring architecture is not a lack of ambition. It is how the app stays understandable when the standards, vendors, and product requirements are all moving at once.
