// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+@pinia+nuxt@0.4.6_hmuptsblhheur2tugfgucj7gc4/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3").default> &
  InjectionType<typeof import("../components.plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+nuxt@3.1.2_cab3impcqxtipalk2iji3llqnm/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+nuxt@3.1.2_cab3impcqxtipalk2iji3llqnm/node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+nuxt@3.1.2_cab3impcqxtipalk2iji3llqnm/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+@nuxtjs+color-mode@3.2.0/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+@nuxtjs+color-mode@3.2.0/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client").default> &
  InjectionType<typeof import("../unocss").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+@nuxt+content@2.4.3/node_modules/@nuxt/content/dist/runtime/plugins/ws").default> &
  InjectionType<typeof import("../../plugins/i18n").default> &
  InjectionType<typeof import("../../plugins/naive-ui").default> &
  InjectionType<typeof import("../../plugins/piniaPluginPersistedstate.client").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
