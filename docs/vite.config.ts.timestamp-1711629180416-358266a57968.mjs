// docs/vite.config.ts
import { defineConfig } from "file:///C:/Users/Z/Desktop/charles7c.github.io/node_modules/.pnpm/vite@5.0.3/node_modules/vite/dist/node/index.js";
import Components from "file:///C:/Users/Z/Desktop/charles7c.github.io/node_modules/.pnpm/unplugin-vue-components@0.25.2_vue@3.3.9/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ArcoResolver } from "file:///C:/Users/Z/Desktop/charles7c.github.io/node_modules/.pnpm/unplugin-vue-components@0.25.2_vue@3.3.9/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var vite_config_default = defineConfig({
  plugins: [
    Components({
      dirs: [".vitepress/theme/components"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [ArcoResolver({ sideEffect: true, resolveIcons: true })]
    })
  ],
  ssr: { noExternal: ["@arco-design/web-vue"] },
  resolve: {
    alias: {
      "mermaid": "mermaid/dist/mermaid.esm.mjs"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy92aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFpcXFxcRGVza3RvcFxcXFxjaGFybGVzN2MuZ2l0aHViLmlvXFxcXGRvY3NcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1ovRGVza3RvcC9jaGFybGVzN2MuZ2l0aHViLmlvL2RvY3Mvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XHJcbmltcG9ydCB7IEFyY29SZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICBkaXJzOiBbJy52aXRlcHJlc3MvdGhlbWUvY29tcG9uZW50cyddLFxyXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxyXG4gICAgICByZXNvbHZlcnM6IFtBcmNvUmVzb2x2ZXIoeyBzaWRlRWZmZWN0OiB0cnVlLCByZXNvbHZlSWNvbnM6IHRydWUgfSldXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHNzcjogeyBub0V4dGVybmFsOiBbJ0BhcmNvLWRlc2lnbi93ZWItdnVlJ10gfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnbWVybWFpZCc6ICdtZXJtYWlkL2Rpc3QvbWVybWFpZC5lc20ubWpzJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1QsU0FBUyxvQkFBb0I7QUFDNVYsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyxvQkFBb0I7QUFFN0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsV0FBVztBQUFBLE1BQ1QsTUFBTSxDQUFDLDZCQUE2QjtBQUFBLE1BQ3BDLFNBQVMsQ0FBQyxVQUFVLGNBQWMsT0FBTztBQUFBLE1BQ3pDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsWUFBWSxNQUFNLGNBQWMsS0FBSyxDQUFDLENBQUM7QUFBQSxJQUNwRSxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsS0FBSyxFQUFFLFlBQVksQ0FBQyxzQkFBc0IsRUFBRTtBQUFBLEVBQzVDLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFdBQVc7QUFBQSxJQUNiO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
