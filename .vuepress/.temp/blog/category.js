export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"Review":{"path":"/category/review/","indexes":[0,1,2,3]},"Blog":{"path":"/category/blog/","indexes":[4,5]}}}},"tag":{"/":{"path":"/tag/","map":{"ducktales":{"path":"/tag/ducktales/","indexes":[0]},"woohoo":{"path":"/tag/woohoo/","indexes":[0]},"series":{"path":"/tag/series/","indexes":[0,1]},"tv":{"path":"/tag/tv/","indexes":[0,1]},"review":{"path":"/tag/review/","indexes":[0,1,3]},"feminismo":{"path":"/tag/feminismo/","indexes":[4]},"machismo":{"path":"/tag/machismo/","indexes":[4]},"comentarios":{"path":"/tag/comentarios/","indexes":[4]},"opinion":{"path":"/tag/opinion/","indexes":[4]},"texto largo":{"path":"/tag/texto-largo/","indexes":[4]},"blog":{"path":"/tag/blog/","indexes":[5]},"saludos":{"path":"/tag/saludos/","indexes":[5]},"noticias":{"path":"/tag/noticias/","indexes":[5]},"IT":{"path":"/tag/it/","indexes":[3]},"pennywise":{"path":"/tag/pennywise/","indexes":[3]},"movie":{"path":"/tag/movie/","indexes":[3]},"pelicula":{"path":"/tag/pelicula/","indexes":[3]},"malcolm in the middle":{"path":"/tag/malcolm-in-the-middle/","indexes":[2]},"malcolm":{"path":"/tag/malcolm/","indexes":[2]},"tv series":{"path":"/tag/tv-series/","indexes":[2]},"import":{"path":"/tag/import/","indexes":[1,2]},"the it crowd":{"path":"/tag/the-it-crowd/","indexes":[1]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

