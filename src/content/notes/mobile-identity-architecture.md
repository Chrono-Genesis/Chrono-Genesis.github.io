---
title: "Mobile identity work needs plain architecture"
date: 2026-04-18
summary: "Credential flows, OAuth, liveness checks, and secure storage are complicated enough without clever app architecture around them."
---

Mobile identity projects have enough moving parts before the app adds any drama.

There may be OAuth and PKCE, identity proofing, biometric liveness, credential issuance,
credential presentation, secure storage, session refresh, vendor SDKs, deep links, web
redirects, and backend calls that all need to agree about state.

That kind of system is easier to maintain when the app boundaries are plain.

The boundaries I want are explicit:

- A small authentication surface that owns tokens and refresh behavior.
- A credential surface that owns issuance, storage, and presentation state.
- A vendor integration layer that keeps SDK details away from screens.
- UI flows that can resume after redirects, interruptions, and app restarts.

The diagram does not answer the questions that show up in production. If a user backgrounds
the app during identity proofing, what state is recoverable? If a token refresh fails while a
credential flow is mid-step, who decides what the user sees? If a vendor SDK changes an error
format, how far does that leak?

Those questions decide whether the flow can recover cleanly.

For identity work, I want code that is easy to trace when standards, vendors, and product
requirements are all moving at once.
