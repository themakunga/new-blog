import comp from "/home/nicolas/personal/newblog/.vuepress/.temp/pages/intro.html.vue"
const data = JSON.parse("{\"path\":\"/intro.html\",\"title\":\"Intro Page\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"circle-info\",\"cover\":\"/assets/images/cover3.jpg\",\"gitInclude\":[],\"description\":\"Intro Page Place your introduction and profile here.\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://nicolasmv.cl/intro.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Nicolas's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Intro Page\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Intro Page Place your introduction and profile here.\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://nicolasmv.cl/assets/images/cover3.jpg\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:src\",\"content\":\"https://nicolasmv.cl/assets/images/cover3.jpg\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"Intro Page\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Intro Page\\\",\\\"image\\\":[\\\"https://nicolasmv.cl/assets/images/cover3.jpg\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Nicolas Martinez Villarroel\\\",\\\"url\\\":\\\"https://bsky.app/profile/themakunga.bsky.social\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":13},\"filePathRelative\":\"intro.md\",\"excerpt\":\"\\n<p>Place your introduction and profile here.</p>\\n\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
