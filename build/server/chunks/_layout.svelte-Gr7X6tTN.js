import { c as create_ssr_component } from './ssr-Ideb-60o.js';

const css = {
  code: "body.svelte-1islnum{background:linear-gradient(-45deg, #fc2a05, #ce3972e3, #0d4458, #23d5ab);background-size:400% 400%;animation:svelte-1islnum-gradient 15s ease infinite;height:100vh}@keyframes svelte-1islnum-gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="h-screen w-full"><div class="body"><body class="svelte-1islnum"><div class="h-3"></div> <div class="mx-16 my-3 min-h-[600px] rounded-lg border bg-white p-8"> ${slots.default ? slots.default({}) : ``} </div> <div class="h-3"></div></body></div> </div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-Gr7X6tTN.js.map
