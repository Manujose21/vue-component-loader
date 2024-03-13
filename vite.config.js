import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { format, resolve } from 'path'

export default defineConfig({
  plugins: [vue()],

  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/main.js'),
      name: "vue-component-loader",
      fileName: (format) => `vue-component-loader.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  }
})
