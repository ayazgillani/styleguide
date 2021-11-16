export const loadView = (view) => () =>
  import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
