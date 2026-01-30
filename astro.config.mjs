// // @ts-check

// import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';
// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({
// 	site: 'https://example.com',
// 	integrations: [mdx(), sitemap()],
// });
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// 引入这两个数学插件
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  markdown: {
    // 在这里配置插件
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
