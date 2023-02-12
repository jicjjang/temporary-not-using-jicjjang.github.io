(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{COYA:function(e,t,l){"use strict";var a;l.d(t,"a",(function(){return n})),l.d(t,"b",(function(){return r})),l.d(t,"c",(function(){return s}));var n={HOME:"/",ARCHIVE:"/archive",RESUME:"/resume",PRESENTATION:"/presentation",PRESENTATION_1:"/presentation/1",PRESENTATION_2:"/presentation/2",PRESENTATION_3:"/presentation/3",PRESENTATION_4:"/presentation/4",PRESENTATION_5:"/presentation/5",PRESENTATION_6:"/presentation/6",PRESENTATION_7:"/presentation/7",PRESENTATION_8:"/presentation/8",PRESENTATION_9:"/presentation/9",PRESENTATION_10:"/presentation/10"},r=((a={})[n.PRESENTATION_1]={title:"React.js basic - NHN벅스 팀 세미나 발표 자료",date:"Nov, 23, 2016",tags:["react","nhn","bugs"]},a[n.PRESENTATION_2]={title:"Vue.js basic - NHN벅스 팀 세미나 발표 자료",date:"Apr, 08, 2017",tags:["vue","nhn","bugs"]},a[n.PRESENTATION_3]={title:"현실적인 개발로 먹고살기",date:"July, 15, 2017",tags:["developer","kookmin","university"]},a[n.PRESENTATION_4]={title:"How to use RxJs - NHN벅스 팀 세미나 발표 자료",date:"Nov, 30, 2017",tags:["rxjs","nhn","bugs"]},a[n.PRESENTATION_5]={title:"Vue pwa 시작하기 - Vuetiful korea 3rd 발표자료",date:"Nov, 30, 2017",tags:["vue","pwa","vuetifulkorea","3rd"]},a[n.PRESENTATION_6]={title:"Graphql 시작하기 (server) - NHN벅스 팀 세미나 발표 자료",date:"Mar, 05, 2018",tags:["graphql","server","nhn","bugs"]},a[n.PRESENTATION_7]={title:"Graphql 시작하기 (client) - NHN벅스 팀 세미나 발표 자료",date:"Mar, 06, 2018",tags:["graphql","client","nhn","bugs"]},a[n.PRESENTATION_8]={title:"Apollo로 알아보는 Vue in the GraphQL - Vuetiful korea 4th 발표자료",date:"Apr, 16, 2018",tags:["vue","graphql","apollo","vuetifulkorea","4th"]},a[n.PRESENTATION_9]={title:"Vuetiful korea 5회 세미나 내용 정리",date:"Aug, 15, 2018",tags:["vue","vuetifulkorea","5th"]},a[n.PRESENTATION_10]={title:"Sentry - Kakaopay FE 세미나",date:"Jul, 09, 2020",tags:["react","sentry","sourcemap"]},a),s=function(e){return e.endsWith("/")?e.slice(0,-1):e}},sO21:function(e,t,l){"use strict";l.r(t),l.d(t,"default",(function(){return r}));var a=l("q1tI"),n=l("xbwu");function r(e){var t=e.location,l=e.data.site.siteMetadata.social.linkedin||void 0;return a.createElement(n.a,{pathname:t.pathname},a.createElement("div",{className:"slides"},a.createElement("section",null,a.createElement("h2",null,"GraphQL 시작하기 1"),a.createElement("h3",null,"NHN Bugs"),a.createElement("p",null,a.createElement("small",null,"Created by"," ",a.createElement("a",{href:l,target:"_blank"},"Junseok, Choi"))),a.createElement("aside",{className:"notes"},"주제를 시작하기 1로 정한것은, 서버와 클라이언트 모두 적용해야 하기 때문인데, 금일 발표는 서버를 위주로 발표를 진행하고, 추후 발표에서 Vue에 적용한 클라이언트 위주의 발표를 진행하겠습니다.")),a.createElement("section",null,a.createElement("div",null,a.createElement("h2",null,"순서"),a.createElement("ul",{style:{listStyle:"none",margin:"0"}},a.createElement("li",{className:"fragment"},"1. About GraphQL"),a.createElement("li",{className:"fragment"},"2. Example GraphQL"),a.createElement("li",{className:"fragment"},"3. Stable GraphQL"),a.createElement("li",{className:"fragment"},"Q & A")))),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"1. About GraphQL"),a.createElement("div",{style:{width:"90%",margin:"0 auto"}},a.createElement("span",{style:{display:"inline-block",width:"58%",margin:"5px",verticalAlign:"top"}},a.createElement("img",{className:"fragment","data-fragment-index":"1",src:"/img/presentation/graphql-start/about1.jpg"}),a.createElement("div",{className:"fragment",style:{fontSize:"20px"},"data-fragment-index":"3"},"필요한 것만 정확히 물어볼 수있는 기능을 제공하며 시간이 지남에 따라 API를 쉽게 개발할 수 있도록...")),a.createElement("span",{style:{display:"inline-block",width:"38%",margin:"5px"}},a.createElement("img",{className:"fragment","data-fragment-index":"2",src:"/img/presentation/graphql-start/about2.jpg"}),a.createElement("div",{className:"fragment",style:{fontSize:"20px"},"data-fragment-index":"4"},"GraphQL은 단독 버전 관리를 통해 기존 코드 수정없이 보다 깨끗하고 유지보수가 쉽게 사용이 가능..."))),a.createElement("aside",{className:"notes"},"4/4",a.createElement("br",null),"이러한 장점이 있는데요, 저희 서비스에 적용한다면 어떤 도움이 될지, 어떤 점을 미리 살펴봐야 할 지 알아보겠습니다.")),a.createElement("section",null,a.createElement("h2",null,"들어가기에 앞서..."),a.createElement("div",{style:{display:"inline-block",width:"45%",verticalAlign:"top"}},a.createElement("img",{className:"fragment","data-fragment-index":"1",src:"/img/presentation/graphql-start/apollo1.png"}),a.createElement("div",{className:"fragment","data-fragment-index":"3"},a.createElement("a",{href:"https://graphql-kr.github.io/code/#apollo-server-https-www-apollographql-com-docs-apollo-server-github-https-github-com-apollographql-apollo-server-npm-https-www-npmjs-com-package-apollo-server-express",target:"_blank"},"Apollo를 사용합니다."))),a.createElement("div",{style:{display:"inline-block",width:"50%"}},a.createElement("img",{className:"fragment","data-fragment-index":"2",src:"/img/presentation/graphql-start/apollo2.png"})),a.createElement("aside",{className:"notes"},"3/3",a.createElement("br",null),"그 전에, GraphQL은 Apollo와 함께 사용하겠습니다. 기본적으로 `GraphQL은 API를 위한 쿼리언어` 이므로 서버만 지원을 합니다. 서버에 GraphQL을 적용하고, 클라이언트에서는 데이터만 호출할 수도 있지만 프론트와 서버 사이 GraphQL 데이터를 편리하게 교환할 수 있도록 Apollo가 도와줍니다.",a.createElement("br",null),a.createElement("br",null),"Apollo는 JavaScript 서버 프레임워크들에 대해서 클라이언트와의 더욱 쉬운 연결을 위해 별도의 지원 또한 하고있습니다.",a.createElement("br",null),a.createElement("br",null),"또한, GraphQL에서도 공식적으로 Apollo를 사용하라고 가이드를 제공해줍니다. (물론 서버까지 커버해줍니다.)")),a.createElement("section",null,a.createElement("h3",null,a.createElement("a",{href:"https://github.com/seouldrinker/seoulDrinkerGraphql/blob/master/api/graphql/typeDefs.js",target:"_blank"},"Type 정의")),a.createElement("div",null,a.createElement("img",{className:"fragment",style:{display:"inline-block",width:"15%",margin:"0 10px"},src:"/img/presentation/graphql-start-server/type1.jpg"}),a.createElement("img",{className:"fragment",style:{display:"inline-block",width:"15%",margin:"0 10px",verticalAlign:"top"},src:"/img/presentation/graphql-start-server/type2.jpg"}),a.createElement("span",{className:"fragment",style:{display:"inline-block",width:"65%",marginTop:"20%",verticalAlign:"top"}},"MVC 모델에서의 Model과 동일")),a.createElement("aside",{className:"notes"},"2/3",a.createElement("br",null),"MVC 모델에서의 Model과 동일하게 DB의 필드가 아닌,",a.createElement("br",null),"3/3",a.createElement("br",null),"가져올 데이터에 대해 사전에 정의를 해놓습니다.")),a.createElement("section",null,a.createElement("h3",null,a.createElement("a",{href:"https://github.com/seouldrinker/seoulDrinkerGraphql/blob/master/api/graphql/typeDefs.js",target:"_blank"},"Query & Mutation 정의")),a.createElement("div",null,a.createElement("img",{className:"fragment",style:{display:"inline-block",width:"25%",margin:"0 10px"},src:"/img/presentation/graphql-start-server/query_mutation.jpg"}),a.createElement("span",{className:"fragment",style:{display:"inline-block",width:"65%",marginTop:"20%",verticalAlign:"top"}},"데이터를 가져올 수 있는 조합인 Query 및 Mutation을 정의합니다.")),a.createElement("aside",{className:"notes"},"1/2",a.createElement("br",null),"저희가 기존에 만들던 Query와 동일합니다. Mutation은 Get이 아닌 Post, Put, Delete, Options 요청들이며,",a.createElement("br",null),"2/2",a.createElement("br",null),"정의에 있어서 Get과 큰 차이는 없습니다.")),a.createElement("section",null,a.createElement("h3",null,"Interface 정의"),a.createElement("div",null,a.createElement("div",{className:"fragment",style:{width:"48%",margin:"0 auto"}},a.createElement("img",{src:"/img/presentation/graphql-start-server/code1.png"})),a.createElement("div",{className:"fragment"},"interface를 상속하여 타입 구현")),a.createElement("aside",{className:"notes"},"1/2",a.createElement("br",null),"React, Vue에 Flow나 Typescript로 타입에 강제성을 부여는 것과 마찬가지로",a.createElement("br",null),"2/2",a.createElement("br",null),"GraphQL에 Interface를 정의 후, type에서 implements 한 값을 정의합니다.")),a.createElement("section",null,a.createElement("h3",null,"Resolver"),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"55%",verticalAlign:"top"}},a.createElement("img",{src:"/img/presentation/graphql-start-server/resolvers1.png"})),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"40%",margin:"0 10px"}},a.createElement("img",{src:"/img/presentation/graphql-start-server/resolvers2.png"})),a.createElement("div",{className:"fragment"},"정의한 Query와 Mutation에 대한 내용을 구현합니다."),a.createElement("aside",{className:"notes"},"2/3",a.createElement("br",null),"type으로 정의한 모델에 맞게 기능들을 구현합니다.",a.createElement("br",null),"3/3",a.createElement("br",null),"모델들이 구현되어있는 이유는, 해당 모델에서 조인하여 가져오는 값들을 어떻게 가져올지에 대해 정의한 것입니다. `pubDetail` Query를 실행한다고 하였을 때, return 값은 Pub 모델과 같은데 Pub 에는 Feed의 배열인 `_feedList` 값이 있습니다. 이 값을 구현해줍니다. 또한, Feed에서 연결된, 연결된, 연결된.... 값들을 모두 정의해주면 필요할 경우, 원하는 쿼리에 대한 결과를 가져올 수 있습니다."))),a.createElement("section",null,a.createElement("h3",null,"2. Example GraphQL"),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"50%",verticalAlign:"top"}},a.createElement("div",{style:{fontSize:"20px"}},a.createElement("a",{href:"https://github.com/seouldrinker/seoulDrinkerGraphql",target:"_blank"},"< 예제를 보면서 확인해봅시다! >")))),a.createElement("section",null,a.createElement("section",null,a.createElement("h3",null,"3. Stable GraphQL"),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"50%",verticalAlign:"top"}},a.createElement("img",{src:"/img/presentation/graphql-start-server/stable1.png"}),a.createElement("div",{style:{fontSize:"20px"}},a.createElement("a",{href:"https://www.apollographql.com/docs/#client-section",target:"_blank"},"< Apollo 클라이언트 >"))),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"40%"}},a.createElement("img",{src:"/img/presentation/graphql-start-server/stable2.png"}),a.createElement("div",{style:{fontSize:"20px"}},a.createElement("a",{href:"http://graphql.org/code/#server-libraries",target:"_blank"},"< GraphQL 서버 >"))),a.createElement("div",{className:"fragment"},"서버와 클라이언트 각종 언어 및 라이브러리에 대응"),a.createElement("aside",{className:"notes"},"3/3",a.createElement("br",null),"GraphQL가 만들어진 12년도 이후로 서버는 각종 언어에 대한 지원을 시작했습니다. Apollo는 16년 2월 경 시작하였지만 현재 스타 6,500여개에 contributor가 700명 이상입니다.")),a.createElement("section",null,a.createElement("h3",null,"사용하면서 발견한 이슈?!"),a.createElement("div",{className:"fragment"},"는 아직까지 없습니다."),a.createElement("aside",{className:"notes"},"1/1",a.createElement("br",null),"아직까지 만들어보면서 발견한 이슈는 없고, Get, Post 등 동작은 확인했지만 파일이나 이미지 업로드에 대한 구현을 해보지 못했습니다.")),a.createElement("section",null,a.createElement("h3",null,"벅스에 도움이 될만한 부분"),a.createElement("div",{className:"fragment"},"클라이언트 & 웹, 지금의 API로 한번에!!"),a.createElement("aside",{className:"notes"},"1/1",a.createElement("br",null),"클라이언트와 웹 모두 API를 사용한다고 하면, 서로 다른 API를 가져오는 이슈가 있는데 이를 GrapghQL로 해결이 가능합니다.")),a.createElement("section",null,a.createElement("h3",null,"사용 중인 기업"),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"50%",verticalAlign:"top"}},a.createElement("img",{src:"/img/presentation/graphql-start/users.png"}),a.createElement("div",{style:{fontSize:"20px"}},a.createElement("a",{href:"http://graphql.org/users/",target:"_blank"},"< 더 많은 기업들 >"))),a.createElement("aside",{className:"notes"},"1/1",a.createElement("br",null),"많은 기업에서 사용중이지만, 대표적으로 이미지와 같이 페이스북, 깃헙, 핀터레스트, 코세라 등등의 기업들에서 사용 중입니다.")),a.createElement("section",null,a.createElement("h3",null,"컨퍼런스"),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"50%",verticalAlign:"top"}},a.createElement("img",{src:"/img/presentation/graphql-start/conference.png"}),a.createElement("div",{style:{fontSize:"25px"}},a.createElement("a",{href:"https://summit.graphql.com/",target:"_blank"},"< 발표자 - 페이스북, 깃헙, 트위치, oauth, IBM 등등 기업 직원들... >"))),a.createElement("aside",{className:"notes"},"1/1",a.createElement("br",null),"2016, 2017년도에 Apollo의 주도로 컨퍼런스가 이루어졌으며 매년 개최될 예정입니다."))),a.createElement("section",null,a.createElement("section",null,a.createElement("h1",null,"Q & A")),a.createElement("section",null,a.createElement("h1",null,"끝"),a.createElement("div",null,"감사합니다.")))))}},xbwu:function(e,t,l){"use strict";var a=l("q1tI"),n=l("1Yd/"),r=l("COYA");t.a=function(e){var t=e.pathname,l=e.description,i=e.children,c=Object(a.useState)(!1),m=c[0],o=c[1],p=r.b[Object(r.c)(t)].title||"",E=!1,u=setInterval(Object(a.useCallback)((function(){"undefined"!=typeof window&&(window.Reveal&&!E&&(g(),E=!0),window.Reveal&&!m&&(window.Reveal.isReady()?(console.log("ready"),clearInterval(u),o(!0)):g()))}),[m]),300),g=function(){Reveal.initialize({dependencies:[{src:"/js/presentation/notes.min.js",async:!0},{src:"/js/presentation/highlight.min.js",async:!0,callback:function(){hljs.initHighlightingOnLoad()}}],minScale:.66,maxScale:.66})};return Object(a.useEffect)((function(){var e;m&&(console.log("layout"),null===(e=window.Reveal)||void 0===e||e.layout())}),[m]),a.createElement(a.Fragment,null,a.createElement(n.a,{title:p,description:l,link:s.link,script:s.script}),a.createElement("div",{className:"reveal",style:{position:"absolute",display:m?"block":"none"}},i))};var s={link:[{rel:"stylesheet",href:"/css/presentation/reveal.min.css"},{rel:"stylesheet",href:"/css/presentation/black.min.css"},{rel:"stylesheet",href:"/css/presentation/zenburn.min.css"}],script:[{src:"/js/presentation/reveal.min.js"},{src:"/js/presentation/head.min.js"}]}}}]);
//# sourceMappingURL=component---src-pages-presentation-6-tsx-e5492b38dd723c66aa51.js.map