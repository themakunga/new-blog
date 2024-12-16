<template><div><h2 id="como-hice-este-blog" tabindex="-1"><a class="header-anchor" href="#como-hice-este-blog"><span>Como Hice Este Blog</span></a></h2>
<p>Creo que como primer post <strong>Tecnico</strong> dejare unas instrucciones de como fue que<br>
realice este blog. Nota un poco repelente? este post es largo, y para variar<br>
tiene mucho lenguaje tecnico pero si logran sortearlo podran tener su blog libre<br>
de las plataformas actuales.</p>
<h2 id="por-que-elegi-esta-tecnologia" tabindex="-1"><a class="header-anchor" href="#por-que-elegi-esta-tecnologia"><span>Por Que elegi esta tecnologia?</span></a></h2>
<p>simplemente por el control que tengo sobre todo, ademas no tengo que manipular<br>
bases de datos y tendrian que pasar por casi tres autentificaciones de dos pasos<br>
para poder si quiera editar algo en este blog. Si, es por precaucion porque<br>
ociosos hay en todas partes, mas gente que se que les caigo mal... pero creo que<br>
eso puede ir a otro post.</p>
<h2 id="el-stack" tabindex="-1"><a class="header-anchor" href="#el-stack"><span>El stack</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Lo llamamos stack en informatica a un conjunto de servicios o tecnologias</p>
<p>para resolver un problema :::</p>
<p>para realizar este blog use los siguientes servicios tecnologias</p>
<ul>
<li>
<p><strong>Vuepress</strong>: es el core del blog en si, es una plataforma que lee textos en<br>
<a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank" rel="noopener noreferrer"><strong>Markdown</strong></a><br>
para renderizarlos en HTML y dejar unos lindos estaticos.</p>
</li>
<li>
<p><strong>Markdown</strong>: es la forma en la cual se escriben los post aca es un archivo<br>
con &quot;<em>atajos</em>&quot; de formato de texto, la mayoria de las documentaciones online<br>
estan en markdown o similares.</p>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Wikipedia usa uno similar que se llama markup :::</p>
<ul>
<li>
<p><strong>Github</strong>: Si, el blog completo esta alojado en un repositorio, lo tengo<br>
oculto solo porque tendre muchos borradores de post y no quiero que lleguen a<br>
ellos si no estan en el sitio en si.</p>
</li>
<li>
<p><strong>Firebase</strong>: para alojar gratuitamente el sitio estoy usando firebase que me<br>
permite tener staticos y es mucho mas rapido que varios de sus competidores,<br>
aunque un poco limitado, la ventaja es que tengo analytics y posibilidad de<br>
desplegar desde consola inmediatamente cuando haga una actualizacion.</p>
</li>
<li>
<p><strong>plopjs</strong>: Siempre lo he dicho, soy un flojo de mierda asi que para evitar<br>
andar haciendo a cada rato plantillas y tiempo de codigo innecesario he creado<br>
un par de templates y con plopjs simplemente desde mi terminal escribo el tipo<br>
y el nombre y la cosita me deja tranquilamente el blog tal como quiero y solo<br>
me dedico a escribir.</p>
</li>
<li>
<p><strong>travis-ci</strong>: Nuevamente con mi flojera y tambien como seguridad, para evitar<br>
que muchos de mis WIP (work in progress) aparescan en el sitio sin que yo lo<br>
quiera tengo los despliegues y actualizaciones automaticas con travis, que es<br>
un servicio de integracion continua.</p>
</li>
<li>
<p><strong>disqus</strong>: Solo puse esto por si alguien se da la paja de comentar aca.</p>
</li>
</ul>
<hr>
<p>Ahora ustedes se preguntaran..... ¿Como es que hizo todo esto, y para que darse<br>
tanto la paja si es solo un blog?</p>
<p>No se preocupen que dejare un paso a paso de como cree esta maravilla usando<br>
todos esos servicios.</p>
<h1 id="crea-tu-propio-blog" tabindex="-1"><a class="header-anchor" href="#crea-tu-propio-blog"><span>Crea tu propio blog.</span></a></h1>
<p>En los tiempos de dictadura de blogs, tenemos en realidad pocas plataformas y<br>
algunas bastante enfocadas o de nicho, wordpress por ejemplo se volvio un poco<br>
aparatoso y esta hecho en php lo que para mi seria un retroceso nuevamente,<br>
aunque mucha gente es la herramienta ideal ya que solo tiene que preocuparse del<br>
contenido. Siempre puede haber opiniones discordantes pero para eso existen los<br>
debates.</p>
<h3 id="esta-es-una-plataforma-de-nicho" tabindex="-1"><a class="header-anchor" href="#esta-es-una-plataforma-de-nicho"><span>Esta es una plataforma de nicho</span></a></h3>
<p>Si, si lo miran bien es demasiado compleja tecnicamente para que una persona de<br>
a pie vaya y salga con su blog, a mi mismo me tomo cerca de medio dia quedar con<br>
todo lo que necesito.</p>
<h1 id="instrucciones" tabindex="-1"><a class="header-anchor" href="#instrucciones"><span>Instrucciones:</span></a></h1>
<p>Antes de comenzar tengo que aclarar que se debe tener un conocimiento tecnico<br>
para realizar todos estos pasos, aunque siguiendo esta buena guia es posible que<br>
cualquiera pueda hacerlo, tratare de dejarlo lo mas humanamente leible</p>
<h2 id="el-repositorio" tabindex="-1"><a class="header-anchor" href="#el-repositorio"><span>El repositorio</span></a></h2>
<p>Como dije este blog esta hosteado completamente en github (no es una publicidad,<br>
es una necesidad). antes de ponerse a bajar paquetes o editar plataformas<br>
primero hay que crear un repositorio.</p>
<div class="hint-container tip">
<p class="hint-container-title">Ahora github permite tener repositorios privados gratis, pero no son</p>
<p>compatibles con la integracion continua de travis, a menos que pagues una<br>
suscripcion mensual en el segundo. :::</p>
<ul>
<li>Se crean una cuenta en la pagina de github y una vez realizado todo lo que te<br>
pide, lo cual igual es arto, en la esquina superior izquierda del dashboard<br>
tenemos el crear nuevo repositorio.</li>
</ul>
<figure><img src="/img/como_hice_este_blog/imagen1.png" alt="imagen1" tabindex="0" loading="lazy"><figcaption>imagen1</figcaption></figure>
<p>aca la guia puede tomar dos pasos, una es la integracion continua automatica<br>
usando travis o a manito con un poco mas de control, pero mas pajoso. En pro de<br>
hacer la mayor cantida de cosas automaticamente vamos a hacerlo con CI (eso es<br>
integracion continua).</p>
<p>es importante que al crear el repositorio este debe no debe ser privado si no<br>
travis no les va a servir.</p>
<figure><img src="/img/como_hice_este_blog/imagen2.png" alt="imagen2" tabindex="0" loading="lazy"><figcaption>imagen2</figcaption></figure>
<p>ahora una vez creado desde tu computador usando la terminal que mas te acomode<br>
<em>yo uso mac con iTerm2 para la gente con windows siempre puede usar linux<br>
subsystem</em> hay un buen post de como instalarlo<br>
<a href="https://medium.com/karibu-blog/usando-bash-nativo-con-linux-subsystem-for-windows-10-e6d3c49806a" target="_blank" rel="noopener noreferrer">aca</a></p>
<ul>
<li>crear un directorio, inicializarlo con git y conectar el repositorio remoto<br>
(suena complicado pero es mas simple de lo que parece)</li>
</ul>
<p><strong>Comandos:</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [mi </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">directorio]</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [mi </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">directorio]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> init</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> git@github.com:[mi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> usuario]/[mi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> repo].git</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Ejemplo:</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> blog</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> blog</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> init</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> git@github.com:TheYakuza/mi-blog.git</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>es recomendable seguir las buenas practicas y los estandards de como mantener un<br>
repositorio, cada quien sabe donde le aprieta el zapato en eso, yo para<br>
resolverlo uso <a href="https://danielkummer.github.io/git-flow-cheatsheet/" target="_blank" rel="noopener noreferrer">git flow</a>.</p>
<div class="hint-container tip">
<p class="hint-container-title">Ahora todo se va a poner un poco mas tecnico aun a partir de aca todo</p>
<p>tiene que ser desde el directorio que creamos y desde la terminal :::</p>
<h2 id="core-vuepress-markdown" tabindex="-1"><a class="header-anchor" href="#core-vuepress-markdown"><span>Core: vuepress + markdown</span></a></h2>
<p>Vuepress es un framework que une muchas cosas que sirve para poder facilitar<br>
(si, increiblemente) el crear un blog de la forma en la que estoy haciendo. Para<br>
llegar a tener eso es necesario tener <strong>NodeJS</strong> y un gestor de paquetes del<br>
mismo. dependiendo que tanto sabes es recomendable seguir las guias de cada uno</p>
<ul>
<li><a href="https://nodejs.org/es/" target="_blank" rel="noopener noreferrer">install NodeJS</a></li>
<li><a href="https://yarnpkg.com/en/docs/install" target="_blank" rel="noopener noreferrer">install Yarn</a></li>
</ul>
<p>antes de ponerse a instalar paquetes a lo loco es reomendable que uno inicialice<br>
el directorio como proyecto nodejs por lo que debe usar la terminal y realizar<br>
el siguiente comando, asumiendo que tienes yarn.</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> init</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>responder las preguntas que salen en el terminal, usualmente no hay que hacer<br>
muchos cambios en este punto, yo al menos le di <code v-pre>Enter</code> a todo, el inicializador<br>
es inteligente y toma los datos de tu repositorio.</p>
<div class="hint-container tip">
<p class="hint-container-title">Ahora, cuando uno crea un proyecto en node, hay un par de cosas que tiene</p>
<p>que tener en consideracion, uno son las excepciones y lo otro el mitico<br>
<code v-pre>node_modules</code> como directorio, para evitar que lo segundo le suba mucho el peso<br>
de tu proyecto en el servidor es recomendable tener un archivo <code v-pre>.gitignore</code> y<br>
poner todos los archivos, directorios y/o extensiones que no quieres que suban<br>
en el repositorio, no te preocupes, muchos de esos archivos son unos que no los<br>
vas a editar pero ayudan en el funcionamiento del blog, no te preocupes que con<br>
CI se resuelve eso, tambien sirve para no subir archivos sensibles como<br>
contraseñar y nombres privados. Yo uso el stack que te entrega el siguiente<br>
<a href="https://gitignore.io/api/vue,node,linux,macos,windows,firebase" target="_blank" rel="noopener noreferrer">enlace</a> :::</p>
<h3 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress"><span>Vuepress</span></a></h3>
<p>una vez instalado es necesario instalar vuepress, para casos de automatizacion<br>
posterior, voy a instalarlo como dependencia</p>
<p>ese es el nucleo del sitio, el motor por decirlo de una manera mas comoda, yo<br>
uso para este blog el framework <strong>meteorlxy</strong></p>
<p>para instalarlo realizar el siguiente comando</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vuepress-theme-meteorlxy</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">aca tenemos la instalacion de dos paquetes, para instalar paquetes en</p>
<p>nodejs puedes hacerlo en una sola linea separando con espacio a los paquetes.</p>
</div>
</div>
</div>
</div>
</div>
</div>
<h3 id="directorios-y-archivos-de-configuracion" tabindex="-1"><a class="header-anchor" href="#directorios-y-archivos-de-configuracion"><span>Directorios y archivos de configuracion</span></a></h3>
<p>la estrucra de archivos para que funcione correctamente es:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>my-blog</span></span>
<span class="line"><span>├── src # base de donde se encontraran los archivos</span></span>
<span class="line"><span>│   ├── .vuepress # directorio de vuepress</span></span>
<span class="line"><span>│   │   └── config.js # archivo de configuracion</span></span>
<span class="line"><span>│   └── _posts # directorio de posts</span></span>
<span class="line"><span>│       ├── xxx.md</span></span>
<span class="line"><span>│       ...</span></span>
<span class="line"><span>└── package.json</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>el archivo de configuracion es un javascript que contiene parametros estandard<br>
de vuepress asi como especiales para el tema que permite que funcione como<br>
blogs, el mio es parecido a esto:</p>
<details>
<summary>Click to expand the sample config</summary>
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">exports</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  title</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Nicolas's Blog"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  description</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Blog surtido de ideas y cosas que salen"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  locales</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    "/"</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      lang</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "en-US"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  theme</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "meteorlxy"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  port</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  serviceWorker</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  evergreen</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  markdown</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    anchor</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">permalink</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    toc</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">includeLevel</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  themeConfig</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    comments</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    lang</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "en-US"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    personalInfo</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      nickname</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Nicolas"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      description</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Tech Leader&#x3C;/br>FullStack Developer&#x3C;/br>DevOps&#x3C;/br>Blogger"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      email</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      location</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Santiago, RM, Chile"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      avatar</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "/img/avatar.jpg"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      sns</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        github</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          account</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "TheYakuza"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          link</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "https://github.com/TheYakuza/"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        twitter</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          account</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "_makunga"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          link</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "https://twitter.com/_makunga"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        linkedin</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          account</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "nicolas martinez villarroel"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          link</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "https://www.linkedin.com/in/pedro-nicolas-martinez-v/"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        instagram</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          account</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "themakunga"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          link</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "https://instagram.com/themakunga/"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    header</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      background</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        url</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "/img/deader.png"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        useGeo</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      showTitle</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    lastUpdated</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    nav</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">text</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Home"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">link</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "/"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">exact</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">text</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Posts"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">link</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "/posts/"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">exact</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    pagination</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      perPage</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // Default Pages (Optional, the default value of all pages is `true`)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    defaultPages</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // Allow theme to add Home page (url: /)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      home</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // Allow theme to add Posts page (url: /posts/)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      posts</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p>pueden encontrar una guia mucho mas completa y dedicada en el siguiente<br>
<a href="https://vuepress-theme-meteorlxy.meteorlxy.cn/posts/2019/02/27/theme-guide-en.html" target="_blank" rel="noopener noreferrer">link</a></p>
<p>para poder ver como va tu blog tienes que primero crear los &quot;comandos&quot; para<br>
poder visualizar.</p>
<p>en el archivo <code v-pre>package.json</code> en la raiz del sitio hay que agregar los siguientes<br>
scripts.</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">...</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"scripts"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "dev"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vuepress dev src"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "build"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"vuepress build src --dest dist"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>el primer comando hace que uno vea una version en vivo y local del sitio, segun<br>
tu archivo de configuracion puede quedar en el puerto designado, o por defecto<br>
la url es <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">http://localhost:8080</a></p>
<p>el segundo comando crea la version para subir del blog, que convierte todo a<br>
html estatico listo para subir a tu server favorito.</p>
<p>se invocan desde el terminal de la siguiente forma...</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dev</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> #vista en vivo</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> #construir version para subir</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>si dejas la version en vivo puedes ver los cambios a penas guardas los archivos<br>
markdown</p>
<h3 id="archivos-markdown" tabindex="-1"><a class="header-anchor" href="#archivos-markdown"><span>Archivos Markdown</span></a></h3>
<p>En la estructura de directorios dentro de <code v-pre>src/</code> esta la carpeta <code v-pre>_post/</code> ahi<br>
uno deja los archivos con extesion <strong>.md</strong> que serviran como post del blog.</p>
<p>Hay que tener en cuenta dos cosas al respecto:</p>
<p>los nombres de archivos y las cabeceras de estos....</p>
<p><strong>Nombre de Archivo</strong></p>
<p>estos deben ser unicamente de esta forma</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[año]-[mes]-[dia]-[nombre_de_archivo].md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>ejemplo:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>2019-09-04-hola_mundo.md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>esto permite a la plataforma de vuepress, mostrar en el home del sitio los post,<br>
cada archivo es un post.</p>
<p><strong>Cabecera</strong></p>
<p>Antes de ponerse a escribir en el maravilloso markdown, hay que poner unas<br>
cabeceras para que el archivo sea correctamente parseado en el blog.</p>
<p>una cabecera de ejemplo <strong>TIENE</strong> que ser asi:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">---</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vssue:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> false</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> #esto lo dejamos en false porque no estamos usando esta plataforma para los comentarios</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">title:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Hola</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Mundo</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">category:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Blog</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> #agrupenlo como les sea comodo, debe ser solo uno.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">date:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 2019-09-04T19:06:01.386Z</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # puede ser el formato que mas te acomode.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tags:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> blog</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> saludos</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> noticias</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">header-image:</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # opcional pero si pones una url se vera en la cabecera</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">---</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>desde la utima linea segmentada hacia abajo, puede uno escribir en markdown y el<br>
blog lo va a renderizar bonito.</p>
<h2 id="soy-un-flojo-y-no-me-gusta-equivocarme-con-los-archivos" tabindex="-1"><a class="header-anchor" href="#soy-un-flojo-y-no-me-gusta-equivocarme-con-los-archivos"><span>Soy un flojo y no me gusta equivocarme con los archivos</span></a></h2>
<p>es verdad, siempre lo he dicho, si tengo que automatizar cosas lo haré sin<br>
dudarlo, en especial cuando las tareas son repetitivas y tienden a fallar en lo<br>
mas minimo, por lo que para evitar todo eso de crear archivos de post asi mal<br>
estoy usando un template handler que se llama plop (no tiene nada que ver con<br>
condorito).</p>
<h2 id="plopjs" tabindex="-1"><a class="header-anchor" href="#plopjs"><span>Plopjs</span></a></h2>
<p>Es un poco complejo y tiene muchas aristas, pero la verdad que aca solo dejare<br>
como tengo yo funcionando el plop en mi proyecto,</p>
<h3 id="instalarlo" tabindex="-1"><a class="header-anchor" href="#instalarlo"><span>Instalarlo</span></a></h3>
<p>se tiene que instalar como dependendia de desarrollo, para hacer eso ejecutar el<br>
siguiente comando</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> plopjs</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># el -D lo deja en dependencia de dev y eso hace que cuando lo pongas en CI no lo va a instalar, solo lo usaremos de forma local.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>en la raiz del sitio se tiene que crear un archivo <code v-pre>plopfile.js</code> con la<br>
configuracion para que funcione, el que tengo yo es</p>
<details>
<summary> Mostar archivo </summary>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> todayDate</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">toISOString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">slice</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">exports</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> plop</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  plop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setGenerator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"post"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    description</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "new blog post"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    prompts</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        type</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "input"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        message</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "blog post name please"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        type</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "input"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "category"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        message</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "design a category"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        type</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "input"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "tags"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        message</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "list array comma separate"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ],</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    actions</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> d</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">      const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> actions</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">      actions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        type</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "add"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        path</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "src/_posts/"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> todayDate</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "-{{ snakeCase name }}.md"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        templateFile</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "templates/blogpost.md"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          date</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">toUTCString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(),</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          tagsArray</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">split</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">","</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">item</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =></span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> item</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">trim</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      });</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">      return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> actions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  });</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p><strong>Explicacion:</strong> esto hace que en la terminal se te hagan 3 preguntas, el nombre<br>
del post, la cateoria, los tags (separados con comma estos).</p>
<p>crear script para que se ejecute en el archivo <code v-pre>package.json</code></p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"scripts"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">  ...</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "plop"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"plop"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF">  ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">},</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>asi podemos ejecutar el template.</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">➜</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> plop</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> v1.17.0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> plop</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">? blog post name please post de prueba</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">? design a category blog</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">? list array comma separate test, post, estamos probando</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">✔</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  ++</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /src/_posts/2019-09-05-post_de_prueba.md</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">✨</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  Done</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 17.15s.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Archivo template</strong></p>
<p>si se fijan en el archivo <code v-pre>plopfile</code> te esta pidiendo un template que tiene que<br>
estar en el siguiente directorio <code v-pre>templates/</code></p>
<p>el que estoy utilizando es el siguiente:</p>
<details>
<summary> Mostar Archivo </summary>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{{ titleCase name }}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">category</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{{ titleCase category }}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">date</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{{ date }}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{{#each tagsArray}}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{{ this }}</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{{/each}}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">header-image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"># {{ titleCase name}}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">disqus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p>con eso plop va a rellenar la informacion consultada en los tags entre llaves.</p>
<p><em>work in progress, voy a continuar con este mismo post y lo actualizare cuando<br>
tenga un poco mas de tiempo</em></p>
</div></template>


