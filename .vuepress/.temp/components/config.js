import { hasGlobalComponent } from "/home/nicolas/personal/newblog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.66_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_um5fbyf4y2bzsazkn5743i6ygq/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "/home/nicolas/personal/newblog/node_modules/.pnpm/@vueuse+core@12.0.0/node_modules/@vueuse/core/index.mjs";
import FontIcon from "/home/nicolas/personal/newblog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.64_sass-embedded@1.83.0_vuepress@2.0.0-rc.19_@vuepress+bu_q5qjdd4hxl3jr6zqno3t5zwxau/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "/home/nicolas/personal/newblog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.64_sass-embedded@1.83.0_vuepress@2.0.0-rc.19_@vuepress+bu_q5qjdd4hxl3jr6zqno3t5zwxau/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/home/nicolas/personal/newblog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.64_sass-embedded@1.83.0_vuepress@2.0.0-rc.19_@vuepress+bu_q5qjdd4hxl3jr6zqno3t5zwxau/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "/home/nicolas/personal/newblog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.66_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_um5fbyf4y2bzsazkn5743i6ygq/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
};
