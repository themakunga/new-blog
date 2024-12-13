import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "/home/nicolas/personal/newblog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.64_markdown-it@14.1.0_sass-embedded@1.83.0_vuepress@2.0.0-rc.19__brttxvqtyu73o4avripbzf4fwe/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "/home/nicolas/personal/newblog/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.66_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19__wr447kwauspapml6bkmkbzwx7m/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, SocialMedias, Timeline, setupBlog } from "/home/nicolas/personal/newblog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.64_markdown-it@14.1.0_sass-embedded@1.83.0_vuepress@2.0.0-rc.19__brttxvqtyu73o4avripbzf4fwe/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "/home/nicolas/personal/newblog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.64_markdown-it@14.1.0_sass-embedded@1.83.0_vuepress@2.0.0-rc.19__brttxvqtyu73o4avripbzf4fwe/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import { GlobalEncrypt, LocalEncrypt } from "/home/nicolas/personal/newblog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.64_markdown-it@14.1.0_sass-embedded@1.83.0_vuepress@2.0.0-rc.19__brttxvqtyu73o4avripbzf4fwe/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "/home/nicolas/personal/newblog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.64_markdown-it@14.1.0_sass-embedded@1.83.0_vuepress@2.0.0-rc.19__brttxvqtyu73o4avripbzf4fwe/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "/home/nicolas/personal/newblog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.66_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_um5fbyf4y2bzsazkn5743i6ygq/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "/home/nicolas/personal/newblog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.66_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_um5fbyf4y2bzsazkn5743i6ygq/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/home/nicolas/personal/newblog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.66_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_um5fbyf4y2bzsazkn5743i6ygq/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "/home/nicolas/personal/newblog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.64_markdown-it@14.1.0_sass-embedded@1.83.0_vuepress@2.0.0-rc.19__brttxvqtyu73o4avripbzf4fwe/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
};
