import Vue from "vue";

const components = {
  BaseIcon: () => import("@/components/BaseIcon")
};

Object.entries(components).forEach(([name, component]) =>
  Vue.component(name, component)
);
