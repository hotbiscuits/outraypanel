import { c as create_ssr_component, a as subscribe, b as spread, d as escape_object, f as each, h as get_store_value, i as set_current_component, r as run_all, j as current_component } from './ssr-Ideb-60o.js';
import { r as readable, d as derived, a as readonly, w as writable } from './index-ZkT_v0iO.js';

let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
let nanoid = (size = 21) => {
  let id = '';
  let i = size;
  while (i--) {
    id += urlAlphabet[(Math.random() * 64) | 0];
  }
  return id
};

const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate" || key === "push_state" || key === "replace_state") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const goto = /* @__PURE__ */ client_method("goto");
function next(array, index, loop = true) {
  if (index === array.length - 1) {
    return loop ? array[0] : array[index];
  }
  return array[index + 1];
}
function prev(array, currentIndex, loop = true) {
  if (currentIndex <= 0) {
    return loop ? array[array.length - 1] : array[0];
  }
  return array[currentIndex - 1];
}
function last(array) {
  return array[array.length - 1];
}
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
function disabledAttr(disabled) {
  return disabled ? true : void 0;
}
const hiddenInputAttrs = {
  type: "hidden",
  "aria-hidden": true,
  hidden: true,
  tabIndex: -1,
  style: styleToString({
    position: "absolute",
    opacity: 0,
    "pointer-events": "none",
    margin: 0,
    transform: "translateX(-100%)"
  })
};
function lightable(value) {
  function subscribe2(run) {
    run(value);
    return () => {
    };
  }
  return { subscribe: subscribe2 };
}
const hiddenAction = (obj) => {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((key) => key !== "action");
    }
  });
};
const isFunctionWithParams = (fn) => {
  return typeof fn === "function";
};
function builder(name2, args) {
  const { stores, action, returned } = args ?? {};
  const derivedStore = (() => {
    if (stores && returned) {
      return derived(stores, (values) => {
        const result = returned(values);
        if (isFunctionWithParams(result)) {
          const fn = (...args2) => {
            return hiddenAction({
              ...result(...args2),
              [`data-melt-${name2}`]: "",
              action: action ?? noop
            });
          };
          fn.action = action ?? noop;
          return fn;
        }
        return hiddenAction({
          ...result,
          [`data-melt-${name2}`]: "",
          action: action ?? noop
        });
      });
    } else {
      const returnedFn = returned;
      const result = returnedFn?.();
      if (isFunctionWithParams(result)) {
        const resultFn = (...args2) => {
          return hiddenAction({
            ...result(...args2),
            [`data-melt-${name2}`]: "",
            action: action ?? noop
          });
        };
        resultFn.action = action ?? noop;
        return lightable(resultFn);
      }
      return lightable(hiddenAction({
        ...result,
        [`data-melt-${name2}`]: "",
        action: action ?? noop
      }));
    }
  })();
  const actionFn = action ?? (() => {
  });
  actionFn.subscribe = derivedStore.subscribe;
  return actionFn;
}
function createElHelpers(prefix) {
  const name2 = (part) => part ? `${prefix}-${part}` : prefix;
  const attribute = (part) => `data-melt-${prefix}${part ? `-${part}` : ""}`;
  const selector2 = (part) => `[data-melt-${prefix}${part ? `-${part}` : ""}]`;
  const getEl = (part) => document.querySelector(selector2(part));
  return {
    name: name2,
    attribute,
    selector: selector2,
    getEl
  };
}
const isBrowser = typeof document !== "undefined";
function isHTMLElement(element) {
  return element instanceof HTMLElement;
}
function isHTMLInputElement(element) {
  return element instanceof HTMLInputElement;
}
function executeCallbacks(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function noop() {
}
function addEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function addMeltEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  if (typeof handler === "function") {
    const handlerWithMelt = withMelt((_event) => handler(_event));
    events.forEach((_event) => target.addEventListener(_event, handlerWithMelt, options));
    return () => {
      events.forEach((_event) => target.removeEventListener(_event, handlerWithMelt, options));
    };
  }
  return () => noop();
}
function dispatchMeltEvent(originalEvent) {
  const node = originalEvent.currentTarget;
  if (!isHTMLElement(node))
    return null;
  const customMeltEvent = new CustomEvent(`m-${originalEvent.type}`, {
    detail: {
      originalEvent
    },
    cancelable: true
  });
  node.dispatchEvent(customMeltEvent);
  return customMeltEvent;
}
function withMelt(handler) {
  return (event) => {
    const customEvent = dispatchMeltEvent(event);
    if (customEvent?.defaultPrevented)
      return;
    return handler(event);
  };
}
function omit(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
const overridable = (store, onChange) => {
  const update2 = (updater, sideEffect) => {
    store.update((curr) => {
      const next2 = updater(curr);
      let res = next2;
      if (onChange) {
        res = onChange({ curr, next: next2 });
      }
      sideEffect?.(res);
      return res;
    });
  };
  const set = (curr) => {
    update2(() => curr);
  };
  return {
    ...store,
    update: update2,
    set
  };
};
function generateId() {
  return nanoid(10);
}
function generateIds(args) {
  return args.reduce((acc, curr) => {
    acc[curr] = generateId();
    return acc;
  }, {});
}
const kbd = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control",
  ASTERISK: "*",
  A: "a",
  P: "p"
};
function toWritableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    result[propertyKey] = writable(value);
  });
  return result;
}
readable(void 0, (set) => {
  function clicked(event) {
    set(event);
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "pointerup", clicked, {
    passive: false,
    capture: true
  });
  return unsubscribe;
});
readable(void 0, (set) => {
  function keydown(event) {
    if (event && event.key === kbd.ESCAPE) {
      set(event);
    }
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "keydown", keydown, {
    passive: false
  });
  return unsubscribe;
});
const { name, selector } = createElHelpers("pin-input");
const getInputs = (node) => {
  const rootEl = node.closest(selector());
  if (!isHTMLElement(rootEl)) {
    return { inputs: null, el: node, elIndex: -1 };
  }
  const inputs = Array.from(rootEl.querySelectorAll(selector("input"))).filter((input) => isHTMLInputElement(input));
  return {
    elIndex: inputs.indexOf(node),
    inputs
  };
};
const defaults = {
  placeholder: "○",
  disabled: false,
  type: "text",
  name: void 0,
  defaultValue: []
};
const pinInputIdParts = ["root"];
function createPinInput(props) {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "value", "ids"));
  const { placeholder, disabled, type, name: nameStore } = options;
  const valueWritable = withDefaults.value ?? writable(withDefaults.defaultValue);
  const value = overridable(valueWritable, withDefaults?.onValueChange);
  const valueStr = derived(value, (v) => v.join(""));
  const ids = toWritableStores({ ...generateIds(pinInputIdParts), ...withDefaults.ids });
  const root = builder(name(), {
    stores: [value, ids.root],
    returned: ([$value, $rootId]) => {
      return {
        id: $rootId,
        "data-complete": $value.length && $value.every((v) => v.length > 0) ? "" : void 0
      };
    }
  });
  let index = 0;
  const getTotalItems = () => {
    if (!isBrowser)
      return Infinity;
    const rootEl = document.getElementById(get_store_value(ids.root));
    if (!rootEl)
      return Infinity;
    const inputs = Array.from(rootEl.querySelectorAll(selector("input")));
    return inputs.length;
  };
  const input = builder(name("input"), {
    stores: [value, placeholder, disabled, type],
    returned: ([$value, $placeholder, $disabled, $type]) => {
      return () => {
        const totalItems = getTotalItems();
        const currIndex = index % totalItems;
        index = (index + 1) % totalItems;
        const currValue = $value[currIndex] ?? "";
        return {
          "data-complete": $value.length && $value.every((v) => v.length > 0) ? "" : void 0,
          placeholder: $placeholder,
          disabled: disabledAttr($disabled),
          type: $type,
          value: currValue
        };
      };
    },
    action: (node) => {
      const { elIndex } = getInputs(node);
      value.update((v) => {
        v[elIndex] = node.value;
        return v;
      });
      const unsub = executeCallbacks(addMeltEventListener(node, "keydown", (e) => {
        const { inputs, elIndex: elIndex2 } = getInputs(node);
        if (!inputs)
          return;
        if (e.key === "Backspace") {
          e.preventDefault();
          if (node.value) {
            node.value = "";
            tick().then(() => node.placeholder = "");
            value.set(inputs.map((input2) => input2.value.slice(-1) ?? void 0));
          } else {
            const prevEl = prev(inputs, elIndex2, false);
            prevEl.focus();
            prevEl.value = "";
            tick().then(() => prevEl.placeholder = "");
            value.set(inputs.map((input2) => input2.value.slice(-1) ?? void 0));
          }
        }
        if (e.key === "Delete") {
          e.preventDefault();
          node.value = "";
          tick().then(() => node.placeholder = "");
          value.set(inputs.map((input2) => input2.value.slice(-1) ?? void 0));
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          const prevEl = prev(inputs, elIndex2, false);
          prevEl.focus();
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          const nextEl = next(inputs, elIndex2, false);
          nextEl.focus();
        }
        if (e.key === "Home") {
          e.preventDefault();
          inputs[0].focus();
        }
        if (e.key === "End") {
          e.preventDefault();
          last(inputs).focus();
        }
      }), addMeltEventListener(node, "input", (e) => {
        const { inputs, elIndex: elIndex2 } = getInputs(node);
        if (!inputs)
          return;
        const getInputted = (el) => {
          const $value = get_store_value(value);
          const prevElValue = $value[elIndex2];
          const selectionStart = el.selectionStart ?? 1;
          if (!prevElValue)
            return el.value;
          return selectionStart > 1 ? el.value.slice(1) : el.value.slice(0, Math.max(el.value.length - 2, 1));
        };
        const inputted = getInputted(node);
        const inputEvent = e;
        if (inputEvent.inputType === "insertFromPaste") {
          return;
        }
        node.value = inputted.slice(-1);
        if (node.value.length !== 0) {
          const nextEl = next(inputs, elIndex2, false);
          nextEl.focus();
        }
        value.set(inputs.map((input2) => input2.value.slice(-1) ?? void 0));
      }), addMeltEventListener(node, "paste", (e) => {
        e.preventDefault();
        const { inputs, elIndex: elIndex2 } = getInputs(node);
        if (!inputs)
          return;
        const inputEvent = e;
        const clipboardData = inputEvent.clipboardData;
        if (!clipboardData)
          return;
        const pasted = clipboardData.getData("text");
        const initialIndex = pasted.length >= inputs.length ? 0 : elIndex2;
        const lastIndex = Math.min(initialIndex + pasted.length, inputs.length);
        for (let i = initialIndex; i < lastIndex; i++) {
          const input2 = inputs[i];
          input2.value = pasted[i - initialIndex];
          input2.focus();
        }
        inputs[lastIndex]?.focus();
        value.set(inputs.map((input2) => input2.value.slice(-1) ?? void 0));
      }), addMeltEventListener(node, "change", () => {
        const { inputs } = getInputs(node);
        if (!inputs)
          return;
        value.set(inputs.map((input2) => input2.value.slice(-1) ?? void 0));
      }), addMeltEventListener(node, "focus", () => {
        node.setSelectionRange(1, 1);
        node.placeholder = "";
        tick().then(() => {
          node.placeholder = "";
        });
      }), addMeltEventListener(node, "blur", () => {
        node.placeholder = get_store_value(placeholder);
      }));
      return {
        destroy() {
          unsub();
        }
      };
    }
  });
  const hiddenInput = builder(name("hidden-input"), {
    stores: [valueStr, nameStore],
    returned: ([$valueStr, $nameStore]) => ({
      ...hiddenInputAttrs,
      value: $valueStr,
      name: $nameStore
    })
  });
  const clear = () => {
    value.update((v) => {
      v.forEach((_, i) => v[i] = "");
      return v;
    });
  };
  return {
    ids,
    elements: {
      root,
      input,
      hiddenInput
    },
    states: {
      value,
      valueStr: readonly(valueStr)
    },
    helpers: {
      clear
    },
    options
  };
}
const css = {
  code: "body.svelte-u2g9qa{background:radial-gradient(#fc2a05, #ce3972e3, #0d4458, #23d5ab);background-size:400% 400%;animation:svelte-u2g9qa-gradient 15s ease infinite;height:100vh}@keyframes svelte-u2g9qa-gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.invalid.svelte-u2g9qa{border-color:red}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $valueStr, $$unsubscribe_valueStr;
  let $root, $$unsubscribe_root;
  let $input, $$unsubscribe_input;
  const pinInput = createPinInput({ defaultValue: ["", "", "", ""] });
  const { elements: { root, input }, states: { valueStr } } = pinInput;
  $$unsubscribe_root = subscribe(root, (value) => $root = value);
  $$unsubscribe_input = subscribe(input, (value) => $input = value);
  $$unsubscribe_valueStr = subscribe(valueStr, (value) => $valueStr = value);
  $$result.css.add(css);
  {
    if ($valueStr) {
      setTimeout(
        () => {
          if ($valueStr === "1332") {
            goto("/user");
          }
        },
        0
      );
    }
  }
  $$unsubscribe_valueStr();
  $$unsubscribe_root();
  $$unsubscribe_input();
  return `<body class="svelte-u2g9qa"><div class="flex h-screen items-center justify-center"><div class="w-1/3"><div class="m-6 flex min-h-[200px] flex-col items-center justify-center rounded-md bg-white sm:p-8"><p class="pb-2" data-svelte-h="svelte-1405bje">Bibendum Parser Login</p> <div${spread(
    [
      escape_object($root),
      {
        class: "flex w-1/2 items-center justify-center gap-2"
      }
    ],
    { classes: "svelte-u2g9qa" }
  )}>${each(Array.from({ length: 4 }), (_) => {
    let __MELTUI_BUILDER_0__ = $input();
    return ` <input${spread(
      [
        {
          class: "text-magnum-900 square-12 w-12 rounded-md bg-white text-center text-lg shadow-sm"
        },
        escape_object(__MELTUI_BUILDER_0__)
      ],
      { classes: "svelte-u2g9qa" }
    )}>`;
  })}</div></div></div></div> </body>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte--iY-3SEa.js.map
