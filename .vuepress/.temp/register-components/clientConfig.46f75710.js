import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Stars", defineAsyncComponent(() => import("/home/nicolas/personal/newblog/.vuepress/components/Stars.vue")))
    
      app.component("YoutubeVideo", defineAsyncComponent(() => import("/home/nicolas/personal/newblog/.vuepress/components/YoutubeVideo.vue")))
  },
}
