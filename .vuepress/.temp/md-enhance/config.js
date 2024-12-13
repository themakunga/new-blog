import CodeDemo from "/home/nicolas/personal/newblog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.64_markdown-it@14.1.0_sass-embedded@1.83.0_vuepress@2.0.0_ezhs7w56x7c6ix5hp32u7ixjpe/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/home/nicolas/personal/newblog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.64_markdown-it@14.1.0_sass-embedded@1.83.0_vuepress@2.0.0_ezhs7w56x7c6ix5hp32u7ixjpe/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
