import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Crksgdxs.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_sk6ug6GD.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Not found", "description": "The page you're looking for isn't here." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="wrap hero"> <span class="eyebrow">404</span> <h1>Not here.</h1> <p class="lede" style="margin-top: 1.25rem;">
That page doesn't exist, or it moved. Try the
<a href="/">home page</a>, or jump to
<a href="/work">work</a> or
<a href="/experience">experience</a>.
</p> </section> ` })}`;
}, "/sessions/vigilant-great-turing/mnt/Personal Website/src/pages/404.astro", void 0);

const $$file = "/sessions/vigilant-great-turing/mnt/Personal Website/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
