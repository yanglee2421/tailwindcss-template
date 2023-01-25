import { u as o, P as _ } from "./class-snow-4baa1627.js";
import {
  d as i,
  h as l,
  c as p,
  i as c,
  a as f,
  u as r,
  o as u,
} from "./index-7a2162de.js";
import { _ as d } from "./dark-switch.vue_vue_type_script_setup_true_lang-0ec013e5.js";
import { _ as m } from "./plugin-vue_export-helper-c27b6911.js";
const v = { class: "particle-content" },
  b = { inheritAttrs: !0 },
  h = i({
    ...b,
    __name: "particle",
    setup(x) {
      const s = l(),
        n = o((t) => {
          const a = r(s);
          if (!a) return;
          Object.assign(a, t);
          const e = new _(a, (t.width / 1920) * 120, 110);
          return e.animate(), () => e.abortAnimate();
        });
      return (t, a) => (
        u(),
        p(
          "div",
          { ref: (e) => (n.value = e), class: "particle-box" },
          [
            c(
              "canvas",
              { ref: (e) => (s.value = e), class: "particle-canvas" },
              null,
              512
            ),
            c("div", v, [f(r(d))]),
          ],
          512
        )
      );
    },
  });
const w = m(h, [["__scopeId", "data-v-14caf0bd"]]);
export { w as default };
