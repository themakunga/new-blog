import comp from "/home/nicolas/personal/newblog/.vuepress/.temp/pages/tag/blog/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/blog/\",\"title\":\"Tag: blog\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Tag: blog\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"category\",\"name\":\"blog\",\"key\":\"tag\"},\"layout\":\"BlogCategory\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://nicolasmv.cl/tag/blog/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Nicolas's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Tag: blog\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Tag: blog\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
