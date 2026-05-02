import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Crksgdxs.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_sk6ug6GD.mjs';
export { renderers } from '../renderers.mjs';

const $$Work = createComponent(($$result, $$props, $$slots) => {
  const work = [
    {
      title: "Mobile driver's license & verifiable credentials",
      year: "2024\u2013present",
      body: "Phase 1 shipped: issuance and presentation of an ISO/IEC 18013-5 mobile driver's license, alongside a generic verifiable-credential issuance flow. Integrated with PingOne IAM (OAuth 2.0 / PKCE), ID Dataweb identity proofing, FaceTec biometric liveness, and the SpruceKit credentials runtime. Also contributed to the law-enforcement Portal app that accepts these credentials at traffic stops. Phase 2 rollout is in production.",
      tags: [
        "ISO/IEC 18013-5",
        "OpenID4VC",
        "PingOne",
        "FaceTec",
        "SpruceKit",
        "ID Dataweb"
      ]
    },
    {
      title: "Crash-free user rate from 98% to 99.99%",
      year: "2022\u20132024",
      body: "A release-gating policy and a structured triage protocol on top of Firebase Crashlytics. Each sprint review walks the dashboards, every regression has a named owner, and phased rollouts hold until the rate clears the gate. The same surface is now where the team and customer support meet to investigate login and session issues.",
      tags: ["Firebase Crashlytics", "Release gating", "Sprint review"]
    },
    {
      title: "Kotlin Multiplatform shared core",
      year: "2025\u2013present",
      body: "Phase 1 scaffold for shared business logic across iOS and Android. XCFramework distributed via Azure Blob Storage with a SAS URL (consumed by Swift Package Manager); Maven AAR distributed via an Azure Artifacts feed. CI is two-stage Azure Pipelines: Linux for lint, JVM tests, and AAR; macOS for XCFramework. Local dev uses sibling-folder overrides \u2014 Xcode drag-in for SPM, Gradle composite build for Android.",
      tags: [
        "Kotlin Multiplatform",
        "XCFramework",
        "Azure Pipelines",
        "Swift Package Manager",
        "Maven"
      ]
    },
    {
      title: "iOS network-surface catalog",
      year: "2025",
      body: "A team-internal source of truth for the iOS app's network surface: ~95 endpoints with request shapes, Codable response models, and a reverse index from call site to endpoint. Surfaced four cleanup candidates in the process \u2014 duplicate authorize calls, a refresh-token path outside the shared helper, dual insurance-upload routes, and dead legacy functions.",
      tags: ["iOS", "API documentation", "Codable", "Reverse index"]
    },
    {
      title: "UIKit \u2192 SwiftUI and XML \u2192 Jetpack Compose, in production",
      year: "2022\u2013present",
      body: "Two framework migrations on a citizen-facing app, sequenced so they don't block feature delivery. New UI lands in the new framework by default; old screens get rewritten when an adjacent change makes it cheap. Migration work is the first thing to slip when a sprint runs hot, which keeps the rule honest.",
      tags: ["SwiftUI", "Jetpack Compose", "UIKit", "Android XML"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Work", "description": "Selected mobile engineering work \u2014 mDL and verifiable credentials, crash reduction, Kotlin Multiplatform, framework migrations." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="wrap hero"> <span class="eyebrow">Selected work</span> <h1>Work</h1> <p class="lede" style="margin-top: 1.25rem;">
A short list, not a complete one. Most of this is on myColorado, the State of Colorado's
      official app.
</p> </section> <section class="wrap section"> <ul class="work-list"> ${work.map((w) => renderTemplate`<li> <article class="work"> <header class="work__head"> <h2 class="work__title">${w.title}</h2> <span class="work__year">${w.year}</span> </header> <p class="work__body">${w.body}</p> <ul class="work__tags" aria-label="Stack"> ${w.tags.map((t) => renderTemplate`<li>${t}</li>`)} </ul> </article> </li>`)} </ul> </section> ` })}`;
}, "/sessions/vigilant-great-turing/mnt/Personal Website/src/pages/work.astro", void 0);

const $$file = "/sessions/vigilant-great-turing/mnt/Personal Website/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Work,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
