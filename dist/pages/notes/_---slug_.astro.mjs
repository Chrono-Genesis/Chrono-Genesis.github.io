import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Crksgdxs.mjs';
import 'piccolore';
import { $ as $$Base } from '../../chunks/Base_sk6ug6GD.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_BrUgoKsM.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://marckayrouz.com");
async function getStaticPaths() {
  const notes = await getCollection("notes", ({ data }) => !data.draft );
  return notes.map((n) => ({ params: { slug: n.id }, props: { note: n } }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { note } = Astro2.props;
  const { Content } = await renderEntry(note);
  const fmt = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": note.data.title, "description": note.data.summary ?? `A note by Marc Kayrouz, posted ${fmt.format(note.data.date)}.` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="wrap hero"> <p class="note-card__date" style="margin-bottom: 0.75rem;"> <a href="/notes" style="text-decoration: none; color: inherit;">Notes</a> <span aria-hidden="true"> · </span> <time${addAttribute(note.data.date.toISOString(), "datetime")}>${fmt.format(note.data.date)}</time> </p> <h1>${note.data.title}</h1> ${note.data.summary && renderTemplate`<p class="lede" style="margin-top: 1.25rem;">${note.data.summary}</p>`} </article> <section class="wrap section"> <div class="prose"> ${renderComponent($$result2, "Content", Content, {})} </div> </section> ` })}`;
}, "/sessions/vigilant-great-turing/mnt/Personal Website/src/pages/notes/[...slug].astro", void 0);
const $$file = "/sessions/vigilant-great-turing/mnt/Personal Website/src/pages/notes/[...slug].astro";
const $$url = "/notes/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
