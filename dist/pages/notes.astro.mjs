import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Crksgdxs.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_sk6ug6GD.mjs';
import { g as getCollection } from '../chunks/_astro_content_BrUgoKsM.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const notes = (await getCollection("notes", ({ data }) => !data.draft )).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const fmt = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Notes", "description": "Short writing on mobile architecture, mDL and verifiable credentials, framework migrations, and the long-running work behind a state app." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="wrap hero"> <span class="eyebrow">Notes</span> <h1>Notes</h1> <p class="lede" style="margin-top: 1.25rem;">
Short writing on mobile architecture, mDL and verifiable credentials, framework migrations,
      and the long-running work behind a state app.
</p> </section> <section class="wrap section"> ${notes.length === 0 ? renderTemplate`<div class="empty-state">No posts yet. Soon.</div>` : renderTemplate`<ul class="notes-list"> ${notes.map((n) => renderTemplate`<li class="note-card"> <a${addAttribute(`/notes/${n.id}/`, "href")}> <span class="note-card__date">${fmt.format(n.data.date)}</span> <span class="note-card__title">${n.data.title}</span> ${n.data.summary && renderTemplate`<span class="note-card__summary">${n.data.summary}</span>`} </a> </li>`)} </ul>`} </section> ` })}`;
}, "/sessions/vigilant-great-turing/mnt/Personal Website/src/pages/notes/index.astro", void 0);
const $$file = "/sessions/vigilant-great-turing/mnt/Personal Website/src/pages/notes/index.astro";
const $$url = "/notes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
