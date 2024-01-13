import { c as create_ssr_component, a as subscribe, v as validate_component, b as spread, d as escape_object, f as compute_rest_props, s as setContext, g as escape_attribute_value, h as getContext, i as add_attribute, e as escape, j as compute_slots } from './ssr-Bl8momZ8.js';
import { p as page } from './stores-Fre4rf3r.js';
import { t as twMerge } from './bundle-mjs-AKhiQHOk.js';
import { w as writable } from './index-GhfqK1E8.js';
import { L as Logo } from './logo-_lbNt0Es.js';

const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["activeUrl", "asideClass", "nonActiveClass", "activeClass", "ariaLabel"]);
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
  let { asideClass = "w-64" } = $$props;
  let { nonActiveClass: nonActiveClass2 = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { activeClass: activeClass2 = "flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { ariaLabel = "Sidebar" } = $$props;
  setContext("sidebarContext", { activeClass: activeClass2, nonActiveClass: nonActiveClass2 });
  setContext("activeUrl", activeUrlStore);
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0)
    $$bindings.activeUrl(activeUrl);
  if ($$props.asideClass === void 0 && $$bindings.asideClass && asideClass !== void 0)
    $$bindings.asideClass(asideClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass2 !== void 0)
    $$bindings.nonActiveClass(nonActiveClass2);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass2 !== void 0)
    $$bindings.activeClass(activeClass2);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    {
      activeUrlStore.set(activeUrl);
    }
  }
  return `<aside${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(asideClass, $$props.class))
      },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</aside> `;
});
const SidebarItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let aClass;
  let $$restProps = compute_rest_props($$props, ["href", "label", "spanClass", "activeClass", "nonActiveClass"]);
  let $$slots = compute_slots(slots);
  let { href = "" } = $$props;
  let { label = "" } = $$props;
  let { spanClass = "ms-3" } = $$props;
  let { activeClass: activeClass2 = void 0 } = $$props;
  let { nonActiveClass: nonActiveClass2 = void 0 } = $$props;
  const context = getContext("sidebarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass2 !== void 0)
    $$bindings.activeClass(activeClass2);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass2 !== void 0)
    $$bindings.nonActiveClass(nonActiveClass2);
  active = sidebarUrl ? href === sidebarUrl : false;
  aClass = twMerge(
    active ? activeClass2 ?? context.activeClass : nonActiveClass2 ?? context.nonActiveClass,
    $$props.class
  );
  return `<li><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { class: escape_attribute_value(aClass) }
    ],
    {}
  )}>${slots.icon ? slots.icon({}) : ``} <span${add_attribute("class", spanClass, 0)}>${escape(label)}</span> ${$$slots.subtext ? `${slots.subtext ? slots.subtext({}) : ``}` : ``}</a></li> `;
});
const SidebarDropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["aClass", "href", "label", "activeClass", "active"]);
  let { aClass = "flex items-center p-2 ps-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" } = $$props;
  let { href = "" } = $$props;
  let { label = "" } = $$props;
  let { activeClass: activeClass2 = "flex items-center p-2 ps-11 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { active = false } = $$props;
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass2 !== void 0)
    $$bindings.activeClass(activeClass2);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  return `<li><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(twMerge(active ? activeClass2 : aClass, $$props.class))
      }
    ],
    {}
  )}>${escape(label)}</a></li> `;
});
const SidebarDropdownWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let wrapperClass;
  let $$restProps = compute_rest_props($$props, [
    "btnClass",
    "label",
    "spanClass",
    "ulClass",
    "transitionType",
    "transitionParams",
    "openBgClass",
    "closedBgClass",
    "isOpen"
  ]);
  let $$slots = compute_slots(slots);
  let { btnClass = "flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" } = $$props;
  let { label = "" } = $$props;
  let { spanClass = "flex-1 ms-3 text-left whitespace-nowrap" } = $$props;
  let { ulClass = "py-2 space-y-2" } = $$props;
  let { transitionType = "slide" } = $$props;
  let { transitionParams = {} } = $$props;
  let { openBgClass = "bg-blue-500" } = $$props;
  let { closedBgClass = "bg-white" } = $$props;
  let { isOpen = false } = $$props;
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  if ($$props.openBgClass === void 0 && $$bindings.openBgClass && openBgClass !== void 0)
    $$bindings.openBgClass(openBgClass);
  if ($$props.closedBgClass === void 0 && $$bindings.closedBgClass && closedBgClass !== void 0)
    $$bindings.closedBgClass(closedBgClass);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  wrapperClass = isOpen ? openBgClass : closedBgClass;
  return `<li${add_attribute("class", wrapperClass, 0)}><button${spread(
    [
      escape_object($$restProps),
      { type: "button" },
      {
        class: escape_attribute_value(twMerge(btnClass, $$props.class))
      },
      { "aria-controls": "sidebar-dropdown" }
    ],
    {}
  )}>${slots.icon ? slots.icon({}) : ``} <span${add_attribute("class", spanClass, 0)}>${escape(label)}</span> ${isOpen ? `${$$slots.arrowup ? `${slots.arrowup ? slots.arrowup({}) : ``}` : `<svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg>`}` : `${$$slots.arrowdown ? `${slots.arrowdown ? slots.arrowdown({}) : ``}` : `<svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg>`}`}</button> ${isOpen ? `<ul${add_attribute("class", ulClass, 0)}>${slots.default ? slots.default({}) : ``}</ul>` : ``}</li> `;
});
const SidebarGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ulClass", "borderClass", "border"]);
  let { ulClass = "space-y-2" } = $$props;
  let { borderClass = "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700" } = $$props;
  let { border = false } = $$props;
  if (border) {
    ulClass += " " + borderClass;
  }
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  return `<ul${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(ulClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</ul> `;
});
const SidebarWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass"]);
  let { divClass = "overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div> `;
});
const ArrowRightToBracketSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "arrow right to bracket solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 18 16" }
    ],
    {}
  )}><g fill="currentColor"><path d="M12.923 8.382a1 1 0 0 0-.217-1.09l-4-4a1 1 0 1 0-1.414 1.414L9.586 7H1a1 1 0 0 0 0 2h8.586l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4a.99.99 0 0 0 .216-.325Z"></path><path d="M15 0h-3a1 1 0 1 0 0 2h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z"></path></g></svg> `;
});
const ChartPieSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "chart pie solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 22 21" }
    ],
    {}
  )}><g fill="currentColor"><path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039 1 1 0 0 0-1-1.066h.002Z"></path><path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"></path></g></svg> `;
});
const ShoppingCartSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "shopping cart solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 18 21" }
    ],
    {}
  )}><path fill="currentColor" d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"></path></svg> `;
});
const UserSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "user solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 14 18" }
    ],
    {}
  )}><path fill="currentColor" d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"></path></svg> `;
});
let activeClass = "flex items-center py-3 px-2 text-primary-200 bg-primary-200 dark:bg-[#0c4a6e] rounded-lg border border-sky-800 dark:text-grey-200 dark:hover:border-gray-500 dark:hover:border";
let nonActiveClass = "flex w-full items-center py-3 px-2 border border-gray-700 rounded-md dark:text-white dark:bg-[#383838]/50 dark:hover:bg-gray-700/75 dark:hover:border-gray-700 dark:hover:border";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeUrl;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  activeUrl = $page.url.pathname;
  $$unsubscribe_page();
  return `<div class="w-full h-screen"><div class="grid grid-cols-[auto,1fr] grid-rows-[auto,1fr] h-screen "> <div class="row-span-3 bg-stone-800 dark"><div class="sticky top-0 max-w-full "><div class="flex justify-center p-4">${validate_component(Logo, "Logo").$$render($$result, { width: "150", height: "150" }, {}, {})}</div> ${validate_component(Sidebar, "Sidebar").$$render(
    $$result,
    {
      activeUrl,
      activeClass,
      nonActiveClass,
      class: "rounded-sm ",
      asideClass: "w-[250]"
    },
    {},
    {
      default: () => {
        return `${validate_component(SidebarWrapper, "SidebarWrapper").$$render(
          $$result,
          {
            divClass: "overflow-y-auto py-4 px-3 rounded  bg-stone-800"
          },
          {},
          {
            default: () => {
              return `${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(SidebarItem, "SidebarItem").$$render(
                    $$result,
                    {
                      label: "Dashboard",
                      href: "/user",
                      class: "rounded-md text-base"
                    },
                    {},
                    {
                      icon: () => {
                        return `${validate_component(ChartPieSolid, "ChartPieSolid").$$render(
                          $$result,
                          {
                            class: "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          },
                          {},
                          {}
                        )}`;
                      }
                    }
                  )}  ${validate_component(SidebarDropdownWrapper, "SidebarDropdownWrapper").$$render(
                    $$result,
                    {
                      label: "Analytics",
                      ulClass: "rounded-md py-2 space-y-2 flex flex-col",
                      btnClass: nonActiveClass,
                      closedBgClass: "bg-[#383838]/50 ",
                      openBgClass: "bg-gray-500/10 rounded-md"
                    },
                    {},
                    {
                      icon: () => {
                        return `<svg${spread(
                          [
                            { xmlns: "http://www.w3.org/2000/svg" },
                            { width: "1.25em" },
                            { height: "1.25em" },
                            { viewBox: "0 0 24 24" },
                            escape_object($$props)
                          ],
                          {}
                        )}><path fill="#888888" d="M8 12q-.425 0-.712.288T7 13v3q0 .425.288.713T8 17q.425 0 .713-.288T9 16v-3q0-.425-.288-.712T8 12m8-5q-.425 0-.712.288T15 8v8q0 .425.288.713T16 17q.425 0 .713-.288T17 16V8q0-.425-.288-.712T16 7m-4 7q-.425 0-.712.288T11 15v1q0 .425.288.713T12 17q.425 0 .713-.288T13 16v-1q0-.425-.288-.712T12 14m-7 7q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14zm7 7q.425 0 .713-.288T13 11q0-.425-.288-.712T12 10q-.425 0-.712.288T11 11q0 .425.288.713T12 12"></path></svg> `;
                      },
                      default: () => {
                        return `${validate_component(SidebarDropdownItem, "SidebarDropdownItem").$$render($$result, { class: "mr-4 ", label: "Glens SQL 1" }, {}, {})} ${validate_component(SidebarDropdownItem, "SidebarDropdownItem").$$render($$result, { class: "mr-4", label: "Glens SQL 2" }, {}, {})}`;
                      }
                    }
                  )}  ${validate_component(SidebarDropdownWrapper, "SidebarDropdownWrapper").$$render(
                    $$result,
                    {
                      label: "Incidents",
                      ulClass: "rounded-md py-2 space-y-2 flex flex-col",
                      btnClass: nonActiveClass,
                      closedBgClass: "bg-[#383838]/50 ",
                      openBgClass: "bg-gray-500/10 rounded-md"
                    },
                    {},
                    {
                      icon: () => {
                        return `${validate_component(ShoppingCartSolid, "ShoppingCartSolid").$$render(
                          $$result,
                          {
                            class: "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          },
                          {},
                          {}
                        )} `;
                      },
                      default: () => {
                        return `${validate_component(SidebarDropdownItem, "SidebarDropdownItem").$$render(
                          $$result,
                          {
                            class: "mr-4",
                            label: "Lodge Stock Incident"
                          },
                          {},
                          {}
                        )} ${validate_component(SidebarDropdownItem, "SidebarDropdownItem").$$render(
                          $$result,
                          {
                            class: "mr-4",
                            label: "Incident Management"
                          },
                          {},
                          {}
                        )}`;
                      }
                    }
                  )} ${validate_component(SidebarItem, "SidebarItem").$$render($$result, { label: "Delivery Scheduling", href: "#" }, {}, {
                    icon: () => {
                      return `<svg${spread(
                        [
                          { xmlns: "http://www.w3.org/2000/svg" },
                          { width: "1.25em" },
                          { height: "1.25em" },
                          { viewBox: "0 0 24 24" },
                          escape_object($$props)
                        ],
                        {}
                      )}><path fill="#888888" d="M17 22v-3h-3v-2h3v-3h2v3h3v2h-3v3zM5 20q-.825 0-1.412-.587T3 18V6q0-.825.588-1.412T5 4h1V2h2v2h6V2h2v2h1q.825 0 1.413.588T19 6v6.1q-.5-.075-1-.075t-1 .075V10H5v8h7q0 .5.075 1t.275 1zM5 8h12V6H5zm0 0V6z"></path></svg>`;
                    }
                  })} ${validate_component(SidebarItem, "SidebarItem").$$render($$result, { label: "Customer Management", href: "#" }, {}, {
                    icon: () => {
                      return `${validate_component(UserSolid, "UserSolid").$$render(
                        $$result,
                        {
                          class: "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        },
                        {},
                        {}
                      )}`;
                    }
                  })}  ${validate_component(SidebarItem, "SidebarItem").$$render(
                    $$result,
                    {
                      label: "Standard Operational Procedures",
                      href: "#"
                    },
                    {},
                    {
                      icon: () => {
                        return `${validate_component(ArrowRightToBracketSolid, "ArrowRightToBracketSolid").$$render(
                          $$result,
                          {
                            class: "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          },
                          {},
                          {}
                        )}`;
                      }
                    }
                  )}  ${validate_component(SidebarDropdownWrapper, "SidebarDropdownWrapper").$$render(
                    $$result,
                    {
                      label: "Tools",
                      ulClass: "rounded-md py-2 space-y-2 flex flex-col",
                      btnClass: nonActiveClass,
                      closedBgClass: "bg-[#383838]/50 ",
                      openBgClass: "bg-gray-500/10 rounded-md"
                    },
                    {},
                    {
                      icon: () => {
                        return `${validate_component(ShoppingCartSolid, "ShoppingCartSolid").$$render(
                          $$result,
                          {
                            class: "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          },
                          {},
                          {}
                        )} `;
                      },
                      default: () => {
                        return `${validate_component(SidebarDropdownItem, "SidebarDropdownItem").$$render(
                          $$result,
                          {
                            class: "mr-4",
                            label: "Bibendum PDF Parser",
                            href: "/user/PDFParser"
                          },
                          {},
                          {}
                        )} ${validate_component(SidebarDropdownItem, "SidebarDropdownItem").$$render($$result, { class: "mr-4", label: "CC API Retrieval" }, {}, {})}`;
                      }
                    }
                  )}  ${validate_component(SidebarDropdownWrapper, "SidebarDropdownWrapper").$$render(
                    $$result,
                    {
                      label: "System",
                      ulClass: "rounded-md py-2 space-y-2 flex flex-col",
                      btnClass: nonActiveClass,
                      closedBgClass: "bg-[#383838]/50 ",
                      openBgClass: "bg-gray-500/10 rounded-md"
                    },
                    {},
                    {
                      icon: () => {
                        return `${validate_component(ShoppingCartSolid, "ShoppingCartSolid").$$render(
                          $$result,
                          {
                            class: "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          },
                          {},
                          {}
                        )} `;
                      },
                      default: () => {
                        return `${validate_component(SidebarDropdownItem, "SidebarDropdownItem").$$render($$result, { label: "User Management" }, {}, {})} ${validate_component(SidebarDropdownItem, "SidebarDropdownItem").$$render($$result, { label: "Global Settings" }, {}, {})} ${validate_component(SidebarDropdownItem, "SidebarDropdownItem").$$render($$result, { label: "Logs" }, {}, {})}`;
                      }
                    }
                  )}`;
                }
              })}`;
            }
          }
        )}`;
      }
    }
  )}</div></div> <div class="flex h-16 flex-row justify-end items-center bg-stone-800/50 p-4 sticky top-0 max-w-full z-50" data-svelte-h="svelte-5p12fp"> <a href="https://app.cartoncloud.com/" target="_blank"><button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"><div class="absolute inset-0 w-3 bg-sky-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div> <span class="relative text-black group-hover:text-white">Carton Cloud</span></button></a></div> <div class="bg-stone-200 "><div class="bg-white border m-3 p-8 rounded-lg"> ${slots.default ? slots.default({}) : ``} </div></div> <div class="flex-row col-span-1 bg-slate-300/20 h-16 items-center p-4" data-svelte-h="svelte-9ygano"><div class="flex justify-center">Designed for Outrayjus Pty Ltd 2023 - Evaluation Software</div></div></div></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-GPB8pe9q.js.map
