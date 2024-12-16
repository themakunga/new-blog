import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Posts",
    link: "/posts/README.md",
    icon: "pen-to-square",
    activeMatch: "^/posts/$",
  },
]);
