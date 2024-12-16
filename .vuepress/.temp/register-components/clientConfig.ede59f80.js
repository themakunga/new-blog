import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Youtube", defineAsyncComponent(() => import("/components/YoutubeVideo.vue")))
    
      app.component("Stars", defineAsyncComponent(() => import("/components/Stars.vue")))
  },
}
