import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

import theme from "./theme.js";

const __dirname = import.meta.dirname || getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Nicolas's Blog",

  theme,

  description: "Blog surtido de ideas y cosas que salen",
  // Enable it with pwa
  // shouldPrefetch: false,
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components/"),
    }),
    googleAnalyticsPlugin({
      id: "G-4PS1KK2VSN",
    }),
  ],
});
