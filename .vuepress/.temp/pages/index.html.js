import comp from "/home/nicolas/personal/newblog/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Nicolas Blog\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"Nicolas Blog\",\"heroText\":\"Nicolas's Blog\",\"tagline\":\"Blog surtido de ideas y cosas que salen\",\"heroFullScreen\":false,\"projects\":null,\"footer\":\"Traido a uds con la magia de vuepress y markdown\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://nicolasmv.cl/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Nicolas's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Nicolas Blog\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Nicolas Blog\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.12,\"words\":36},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
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
