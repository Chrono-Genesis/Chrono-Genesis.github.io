import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Crksgdxs.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_sk6ug6GD.mjs';
export { renderers } from '../renderers.mjs';

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const roles = [
    {
      when: "Jun 2020 \u2013 present",
      title: "Principal Developer",
      org: "State of Colorado \xB7 Office of Information Technology",
      desc: "Lead mobile architecture for myColorado across iOS (Swift, SwiftUI, UIKit) and Android (Kotlin, Jetpack Compose, XML). Cover both platform leads, mentor the iOS and Android devs, and set technical direction for the 3-developer mobile team supported by 3 QA engineers. Drove the crash-free rate from 98% to 99.99%, shipped Phase 1 of mDL and verifiable credentials, and architected the Kotlin Multiplatform shared core."
    },
    {
      when: "Mar 2019 \u2013 Apr 2020",
      title: "Mobile Engineer",
      org: "GetSwift",
      desc: "Maintained and shipped iOS and Android apps for a delivery scheduling, route-optimization, and payments platform. Drove the iOS migration from Objective-C to Swift and the Android migration from Java to Kotlin. Owned App Store and Play Store submissions and rejection resolution. Localized the iOS app for international markets, including right-to-left layout via AutoLayout. Picked up server-side C# / .NET to support mobile feature work."
    },
    {
      when: "Jan 2017 \u2013 Mar 2019",
      title: "Senior iOS Developer",
      org: "Verizon (via Matlen Silver)",
      desc: "Shipped on the prepaid product line of the My Verizon iOS app, on a 10-engineer iOS team. Led the UI rebrand and redesigned the dashboard, login, and onboarding flows. Mentored junior iOS engineers on Swift conventions. Executed the Swift 3 \u2192 Swift 4 migration, integrated Face ID, and adapted layouts for the iPhone X notch. Tuned NSOperation performance \u2014 reworked, cancelled, and grouped operations to cut wasted work."
    },
    {
      when: "2012 \u2013 2016",
      title: "Earlier roles",
      org: "Project Roots \xB7 Soft Solutions \xB7 Eurisko",
      desc: "Project Roots (D.C., 2016): JavaFX desktop app, SQL persistence, SMTP newsletter pipeline. Soft Solutions (Lebanon, 2013\u20132015): SQL queries, stored procedures, and DB objects for line-of-business apps. Eurisko (Lebanon, 2012\u20132013): BlackBerry and Android apps with REST/SOAP integration via XML/JSON parsers."
    }
  ];
  const education = {
    when: "2010",
    title: "B.E., Computer & Communication Engineering",
    org: "Notre Dame University \xB7 Zouk Mosbeh, Lebanon"
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Experience", "description": "Roles, dates, and what shipped \u2014 from State of Colorado OIT back to early-career engineering." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="wrap hero"> <span class="eyebrow">Experience</span> <h1>Roles &amp; dates</h1> <p class="lede" style="margin-top: 1.25rem;">
The compact version. The work pages have detail; the resume has more.
</p> </section> <section class="wrap section"> <ol class="timeline" aria-label="Roles"> ${roles.map((r) => renderTemplate`<li class="role"> <div class="role__when">${r.when}</div> <div> <div class="role__title">${r.title}</div> <div class="role__org">${r.org}</div> <p class="role__desc">${r.desc}</p> </div> </li>`)} </ol> </section> <section class="wrap section"> <span class="eyebrow">Education</span> <ol class="timeline"> <li class="role"> <div class="role__when">${education.when}</div> <div> <div class="role__title">${education.title}</div> <div class="role__org">${education.org}</div> </div> </li> </ol> </section> ` })}`;
}, "/sessions/vigilant-great-turing/mnt/Personal Website/src/pages/experience.astro", void 0);

const $$file = "/sessions/vigilant-great-turing/mnt/Personal Website/src/pages/experience.astro";
const $$url = "/experience";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Experience,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
