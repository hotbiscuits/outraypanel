import { c as create_ssr_component, v as validate_component, f as compute_rest_props, i as add_attribute } from './ssr-Bl8momZ8.js';
import { t as twMerge } from './bundle-mjs-AKhiQHOk.js';
import { F as Frame } from './Frame-ngrBIYYy.js';
import './names-vZutHuxZ.js';

const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerPadding;
  let $$restProps = compute_rest_props($$props, ["href", "horizontal", "reverse", "img", "padding", "size"]);
  let { href = void 0 } = $$props;
  let { horizontal = false } = $$props;
  let { reverse = false } = $$props;
  let { img = void 0 } = $$props;
  let { padding = "lg" } = $$props;
  let { size = "sm" } = $$props;
  const paddings = {
    none: "p-0",
    sm: "p-4 sm:p-6 md:p-8",
    md: "p-4 sm:p-5",
    lg: "p-4 sm:p-6",
    xl: "p-4 sm:p-8"
  };
  const sizes = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-screen-xl"
  };
  let cardClass;
  let imgClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  innerPadding = paddings[padding];
  cardClass = twMerge(
    "flex",
    sizes[size],
    reverse ? "flex-col-reverse" : "flex-col",
    horizontal && (reverse ? "md:flex-row-reverse md:max-w-xl" : "md:flex-row md:max-w-xl"),
    href && "hover:bg-gray-100 dark:hover:bg-gray-700",
    !img && innerPadding,
    $$props.class
  );
  imgClass = twMerge(reverse ? "rounded-b-lg" : "rounded-t-lg", horizontal && "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none", horizontal && (reverse ? "md:rounded-e-lg" : "md:rounded-s-lg"));
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: href ? "a" : "div" }, { rounded: true }, { shadow: true }, { border: true }, { href }, $$restProps, { class: cardClass }), {}, {
    default: () => {
      return `${img ? `<img${add_attribute("class", imgClass, 0)}${add_attribute("src", img, 0)} alt=""> <div${add_attribute("class", innerPadding, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })} `;
});
const TextPlaceholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let outDivclass;
  const sizes = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    xxl: "max-w-2xl"
  };
  let { divClass = "space-y-2.5 animate-pulse" } = $$props;
  let { size = "sm" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  outDivclass = twMerge(sizes[size], divClass, $$props.class);
  return `<div role="status"${add_attribute("class", outDivclass, 0)}><div class="flex items-center space-x-2 rtl:space-x-reverse w-full" data-svelte-h="svelte-1f9rnui"><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></div> <div class="flex items-center space-x-2 rtl:space-x-reverse w-11/12" data-svelte-h="svelte-fhr9rh"><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div></div> <div class="flex items-center space-x-2 rtl:space-x-reverse w-9/12" data-svelte-h="svelte-zhoz82"><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div> <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></div> <div class="flex items-center space-x-2 rtl:space-x-reverse w-11/12" data-svelte-h="svelte-fhr9rh"><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div></div> <div class="flex items-center space-x-2 rtl:space-x-reverse w-10/12" data-svelte-h="svelte-14jklk4"><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div> <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></div> <div class="flex items-center space-x-2 rtl:space-x-reverse w-8/12" data-svelte-h="svelte-1ps0jc7"><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div> <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div> <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></div> <span class="sr-only" data-svelte-h="svelte-1wtojot">Loading...</span></div> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex justify-center pb-8" data-svelte-h="svelte-1v9bbwb"><h1 class="h1 font-sans">Outrayjus Web Dashboard</h1></div> <div class="grid grid-cols-4 grid-rows-1 gap-4 pb-6 ">${validate_component(Card, "Card").$$render(
    $$result,
    {
      href: "/user",
      class: "bg-[#1f2937] flex items-center hover:bg-slate-600 border-2 hover:border-indigo-200 hover:border-2"
    },
    {},
    {
      default: () => {
        return `${validate_component(TextPlaceholder, "TextPlaceholder").$$render($$result, { size: "sm", class: "w-5/6" }, {}, {})}`;
      }
    }
  )} <div class="flex flex-col justify-center items-center">${validate_component(Card, "Card").$$render(
    $$result,
    {
      href: "/user/PDFParser",
      class: "bg-[#1f2937]  flex items-center hover:bg-slate-600 border-2 hover:border-indigo-200 hover:border-2"
    },
    {},
    {
      default: () => {
        return `<h5 class="mb-2 text-2xl font-bold tracking-tight text-white/90" data-svelte-h="svelte-1o5euq">Bibendum PDF Parser</h5> <p class="font-normal text-white/50 leading-tight" data-svelte-h="svelte-1izj8pd">Extract delivery consignments from the Bibendum manifest as a CSV to be imported to CartonCloud.</p>`;
      }
    }
  )} <p class="text-xl font-extrabold justify-center items-center drop-shadow-[0_1.2px_1.2px_rgba(50,50,100,0.5)]" data-svelte-h="svelte-cydf5v">NOW WITH ITEMS</p></div> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      href: "/user",
      class: "bg-[#1f2937] flex items-center hover:bg-slate-600 border-2 hover:border-indigo-200 hover:border-2"
    },
    {},
    {
      default: () => {
        return `${validate_component(TextPlaceholder, "TextPlaceholder").$$render($$result, { size: "sm", class: "w-5/6" }, {}, {})}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      href: "/user",
      class: "bg-[#1f2937] flex items-center hover:bg-slate-600 border-2 hover:border-indigo-200 hover:border-2"
    },
    {},
    {
      default: () => {
        return `${validate_component(TextPlaceholder, "TextPlaceholder").$$render($$result, { size: "sm", class: "w-5/6" }, {}, {})}`;
      }
    }
  )}</div> <div class="flex items-center justify-center gap-8 mt-4" data-svelte-h="svelte-5hrszb"><div class="w-1/2 border rounded-md p-2"><canvas id="chart-options-example"></canvas></div> <div class="h-max w-1/2 border rounded-md p-2"><canvas id="line-chart"></canvas></div></div> <div class="flex flex-row items-center text-center justify-center gap-8 mb-6" data-svelte-h="svelte-1y2c0ql"><div class="w-1/2 p-2"><p class="text-sm">Dynamically loaded &amp; reactive charts #bar</p></div> <div class="w-1/2 p-2"><p class="text-sm">Dynamically loaded &amp; reactive charts #line</p></div></div>



Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.

Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.

Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus.

Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit magna, hendrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa. Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede.

Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Proin ullamcorper urna et felis. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-dBLJpVZ9.js.map
