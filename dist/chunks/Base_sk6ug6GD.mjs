import { c as createComponent, m as maybeRenderHead, h as renderScript, a as renderTemplate, d as createAstro, b as addAttribute, r as renderComponent, i as renderSlot, j as renderHead } from './astro/server_Crksgdxs.mjs';
import 'piccolore';
/* empty css                              */
import 'clsx';

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="theme-toggle" type="button" aria-label="Toggle theme" data-theme-toggle> <svg class="theme-toggle__sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <circle cx="12" cy="12" r="4"></circle> <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path> </svg> <svg class="theme-toggle__moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"></path> </svg> </button> ${renderScript($$result, "/sessions/vigilant-great-turing/mnt/Personal Website/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/sessions/vigilant-great-turing/mnt/Personal Website/src/components/ThemeToggle.astro", void 0);

const $$Astro$1 = createAstro("https://marckayrouz.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const path = Astro2.url.pathname.replace(/\/+$/, "") || "/";
  const links = [
    { href: "/", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/experience", label: "Experience" },
    { href: "/notes", label: "Notes" }
  ];
  function isCurrent(href) {
    if (href === "/") return path === "/";
    return path === href || path.startsWith(href + "/");
  }
  return renderTemplate`${maybeRenderHead()}<header class="site-header"> <div class="wrap site-header__row"> <a class="site-header__brand" href="/" aria-label="Marc Kayrouz, home">
Marc Kayrouz
</a> <nav class="site-nav" aria-label="Primary"> ${links.map((l) => renderTemplate`<a${addAttribute(l.href, "href")}${addAttribute(isCurrent(l.href) ? "page" : void 0, "aria-current")}> ${l.label} </a>`)} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} </nav> </div> </header>`;
}, "/sessions/vigilant-great-turing/mnt/Personal Website/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer"> <div class="wrap site-footer__row"> <span>&copy; ${year} Marc Kayrouz</span> <span> <a href="https://www.linkedin.com/in/marc-kayrouz-7a953735" rel="me noopener" target="_blank">LinkedIn</a> <span aria-hidden="true"> · </span> <a href="mailto:marc_kayrouz@protonmail.com">Email</a> </span> </div> </footer>`;
}, "/sessions/vigilant-great-turing/mnt/Personal Website/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://marckayrouz.com");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    title = "Marc Kayrouz",
    description = "Principal mobile engineer. iOS and Android architecture for myColorado, the State of Colorado's official app.",
    ogTitle,
    canonical
  } = Astro2.props;
  const fullTitle = title === "Marc Kayrouz" ? title : `${title} \u2014 Marc Kayrouz`;
  const canonicalUrl = canonical ?? new URL(Astro2.url.pathname, Astro2.site).toString();
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-5hce7sga> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"', "><title>", '</title><meta name="description"', '><link rel="canonical"', '><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:site_name" content="Marc Kayrouz"><meta name="twitter:card" content="summary"><meta name="twitter:title"', '><meta name="twitter:description"', '><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="alternate icon" href="/favicon.ico"><link rel="sitemap" href="/sitemap-index.xml"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,380..500;1,6..72,380..420&display=swap" rel="stylesheet"><script>\n      // Resolve theme before paint to avoid flash.\n      (() => {\n        try {\n          const stored = localStorage.getItem("theme");\n          if (stored === "dark" || stored === "light") {\n            document.documentElement.dataset.theme = stored;\n          }\n        } catch {}\n      })();\n    <\/script>', '</head> <body data-astro-cid-5hce7sga> <a class="visually-hidden" href="#content" data-astro-cid-5hce7sga>Skip to content</a> ', ' <main id="content" data-astro-cid-5hce7sga> ', " </main> ", "  </body> </html>"])), addAttribute(Astro2.generator, "content"), fullTitle, addAttribute(description, "content"), addAttribute(canonicalUrl, "href"), addAttribute(ogTitle ?? fullTitle, "content"), addAttribute(description, "content"), addAttribute(canonicalUrl, "content"), addAttribute(ogTitle ?? fullTitle, "content"), addAttribute(description, "content"), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-5hce7sga": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5hce7sga": true }));
}, "/sessions/vigilant-great-turing/mnt/Personal Website/src/layouts/Base.astro", void 0);

export { $$Base as $ };
