import { c as create_ssr_component, k as each, e as escape } from './ssr-Bl8momZ8.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let directoryTree = [];
  return ` <ul>${each(directoryTree, (node) => {
    return `<li>${escape(node.name)} ${node.type === "directory" ? `<ul>${each(node.children, (child) => {
      return ``;
    })} </ul>` : ``} </li>`;
  })}</ul>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-QHfczSKt.js.map
