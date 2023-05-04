import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import path from 'path'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  integrations: [
    sitemap(),
    vue({
      jsx: true
    })
  ],
  // 部署域名
  site: 'https://www.adicw.com',
  vite: {
    plugins: [
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz'
      })
    ],
    css: {
      preprocessorOptions: {
        // 全局less配置
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${path.resolve(
              'src/styles/utils.less'
            )}";`
          },
          javascriptEnabled: true
        }
      }
    }
  },
  server: {
    port: 1422
  }
})
