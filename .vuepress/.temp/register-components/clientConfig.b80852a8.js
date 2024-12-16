import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Youtube", defineAsyncComponent(() => import("/home/nicolas/personal/newblog/.vuepress/components/YoutubeVideo.vue")))
    
      app.component("Stars", defineAsyncComponent(() => import("/home/nicolas/personal/newblog/.vuepress/components/Stars.vue")))
  },
}
