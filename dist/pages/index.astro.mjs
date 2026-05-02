import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Crksgdxs.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_sk6ug6GD.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const featuredWork = [
    {
      title: "Mobile driver's license, Phase 1",
      year: "2024\u20132025",
      body: "Shipped issuance and presentation of mDL credentials under ISO/IEC 18013-5, integrated with PingOne IAM, ID Dataweb identity proofing, FaceTec biometric liveness, and the SpruceKit credentials runtime. Phase 2 rollout is live and ongoing."
    },
    {
      title: "Crash-free user rate from 98% to 99.99%",
      year: "2022\u20132024",
      body: "Built a release-gating policy and a structured triage protocol on top of Firebase Crashlytics. Sprint reviews catch regressions before phased rollout. The same dashboards now drive customer-support root-cause work."
    },
    {
      title: "Kotlin Multiplatform shared core",
      year: "2025\u2013",
      body: "Phase 1 scaffold for a shared business-logic core across iOS and Android. XCFramework distributed via Azure Blob Storage, Maven AAR via Azure Artifacts, two-stage Azure Pipelines (Linux for JVM/AAR, macOS for XCFramework)."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Marc Kayrouz", "description": "Principal mobile engineer. iOS and Android architecture for myColorado, the State of Colorado's official app." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="wrap hero"> <h1 class="hero__name">Marc Kayrouz</h1> <p class="hero__role">Principal mobile engineer.</p> <p class="hero__lede">
I lead iOS and Android architecture for <a href="https://mycolorado.gov" rel="noopener">myColorado</a>,
      the State of Colorado's official citizen app — about 2M downloads, 610k monthly active users,
      4.8 stars across 144,000+ ratings. The current work covers mobile driver's licenses, verifiable
      credentials, identity, and the long migrations underneath all of it.
</p> <p class="hero__lede">
Three-developer mobile team. Three QA engineers. I cover both platform leads, mentor the iOS and
      Android devs alongside me, and pick up AWS Lambda or legacy PHP when a task crosses the line.
</p> <dl class="hero__meta"> <div> <dt>Role</dt> <dd>Principal Developer · State of Colorado · OIT</dd> </div> <div> <dt>Based</dt> <dd>Greater Denver, CO · Remote</dd> </div> <div> <dt>Reach</dt> <dd> <a href="mailto:marc_kayrouz@protonmail.com">Email</a>,
<a href="https://www.linkedin.com/in/marc-kayrouz-7a953735" rel="me noopener" target="_blank">LinkedIn</a> </dd> </div> </dl> </section> <section class="wrap section"> <span class="eyebrow">Selected work</span> <ul class="work-list"> ${featuredWork.map((w) => renderTemplate`<li> <article class="work"> <header class="work__head"> <h2 class="work__title">${w.title}</h2> <span class="work__year">${w.year}</span> </header> <p class="work__body">${w.body}</p> </article> </li>`)} </ul> <p style="margin-top: 2.5rem;"> <a href="/work">More work →</a> </p> </section> <section class="wrap section"> <span class="eyebrow">How I work</span> <p>
Two-week sprints. The product manager owns prioritization; I add to the backlog. Migration work
      slips first when something has to slip — features second, crashes almost never. Net of that, I
      try to keep the team's options open: fewer dependencies, smaller PRs, and documentation that
      lasts past whoever wrote it.
</p> <p>
I keep an eye on adjacent state mobile-ID rollouts (CA DMV Wallet, LA Wallet, the Apple Wallet
      ID-in-Wallet integrations) as input rather than competition. The standards space around mDL and
      verifiable credentials is moving quickly and I don't want to ship the wrong primitives.
</p> </section> ` })}`;
}, "/sessions/vigilant-great-turing/mnt/Personal Website/src/pages/index.astro", void 0);

const $$file = "/sessions/vigilant-great-turing/mnt/Personal Website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
