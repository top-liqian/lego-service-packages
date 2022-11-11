import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()],
  css: {
    preprocessorOptions: {
        less: {
            // modifyVars: {
            //     hack: `true; @import (reference) "${path.resolve("src/assets/css/base.less")}";`,
            // },
            javascriptEnabled: true,
        },
    },
  },
})
