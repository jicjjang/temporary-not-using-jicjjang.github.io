(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{COYA:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return s}));var l={HOME:"/",ARCHIVE:"/archive",RESUME:"/resume",PRESENTATION:"/presentation",PRESENTATION_1:"/presentation/1",PRESENTATION_2:"/presentation/2",PRESENTATION_3:"/presentation/3",PRESENTATION_4:"/presentation/4",PRESENTATION_5:"/presentation/5",PRESENTATION_6:"/presentation/6",PRESENTATION_7:"/presentation/7",PRESENTATION_8:"/presentation/8",PRESENTATION_9:"/presentation/9",PRESENTATION_10:"/presentation/10"},r=((n={})[l.PRESENTATION_1]={title:"React.js basic - NHN벅스 팀 세미나 발표 자료",date:"Nov, 23, 2016",tags:["react","nhn","bugs"]},n[l.PRESENTATION_2]={title:"Vue.js basic - NHN벅스 팀 세미나 발표 자료",date:"Apr, 08, 2017",tags:["vue","nhn","bugs"]},n[l.PRESENTATION_3]={title:"현실적인 개발로 먹고살기",date:"July, 15, 2017",tags:["developer","kookmin","university"]},n[l.PRESENTATION_4]={title:"How to use RxJs - NHN벅스 팀 세미나 발표 자료",date:"Nov, 30, 2017",tags:["rxjs","nhn","bugs"]},n[l.PRESENTATION_5]={title:"Vue pwa 시작하기 - Vuetiful korea 3rd 발표자료",date:"Nov, 30, 2017",tags:["vue","pwa","vuetifulkorea","3rd"]},n[l.PRESENTATION_6]={title:"Graphql 시작하기 (server) - NHN벅스 팀 세미나 발표 자료",date:"Mar, 05, 2018",tags:["graphql","server","nhn","bugs"]},n[l.PRESENTATION_7]={title:"Graphql 시작하기 (client) - NHN벅스 팀 세미나 발표 자료",date:"Mar, 06, 2018",tags:["graphql","client","nhn","bugs"]},n[l.PRESENTATION_8]={title:"Apollo로 알아보는 Vue in the GraphQL - Vuetiful korea 4th 발표자료",date:"Apr, 16, 2018",tags:["vue","graphql","apollo","vuetifulkorea","4th"]},n[l.PRESENTATION_9]={title:"Vuetiful korea 5회 세미나 내용 정리",date:"Aug, 15, 2018",tags:["vue","vuetifulkorea","5th"]},n[l.PRESENTATION_10]={title:"Sentry - Kakaopay FE 세미나",date:"Jul, 09, 2020",tags:["react","sentry","sourcemap"]},n),s=function(e){return e.endsWith("/")?e.slice(0,-1):e}},Kuz4:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return r}));var n=a("q1tI"),l=a("xbwu");function r(e){var t=e.location,a=e.data.site.siteMetadata.social.linkedin||void 0;return n.createElement(l.a,{pathname:t.pathname},n.createElement("div",{className:"slides"},n.createElement("section",null,n.createElement("h2",null,"How to use RxJs"),n.createElement("h3",null,"NHN Bugs"),n.createElement("p",null,n.createElement("small",null,"Created by"," ",n.createElement("a",{href:a,target:"_blank"},"Junseok, Choi"))),n.createElement("aside",{className:"notes"},"안녕하세요. 최준석입니다.",n.createElement("br",null),"RxJs에 대한 정의와 원리, 사용법 등에 대해 간단히 조사한 내용으로 발표를 진행해보겠습니다.")),n.createElement("section",null,n.createElement("div",null,n.createElement("h2",null,"순서"),n.createElement("ul",{style:{listStyle:"none",margin:"0"}},n.createElement("li",{className:"fragment"},"1. Rx란 뭔가요?"),n.createElement("li",{className:"fragment"},"2. 간단한 예제"),n.createElement("li",{className:"fragment"},"3. 우리의 현재와 미래"),n.createElement("li",{className:"fragment"},"Q & A")))),n.createElement("section",null,n.createElement("section",null,n.createElement("h2",null,"1. Rx란 뭔가요?"),n.createElement("h3",{className:"fragment"},"Rx에 대한 정의"),n.createElement("div",{className:"fragment",style:{width:"70%",margin:"0 auto"}},n.createElement("img",{style:{display:"block",margin:"5px auto"},src:"/img/presentation/rxjs/intro1.jpg"}),n.createElement("img",{style:{display:"block",margin:"5px auto"},src:"/img/presentation/rxjs/intro1_trans.jpg"})),n.createElement("aside",{className:"notes"},"Rx라는건 ReactiveX의 약자입니다. 요즘 많이들 사용한다는 반응형 프로그래밍, 함수형 프로그래밍을 일컫는 말인데요. 자바스크립트에만 있는게 아니고 대부분의 언어가 있다고 보시면 됩니다.")),n.createElement("section",null,n.createElement("h3",null,"반응형이란건"),n.createElement("div",{className:"fragment",style:{width:"100%",margin:"0 auto"}},n.createElement("img",{style:{display:"block",width:"60%",margin:"0 auto"},src:"/img/presentation/rxjs/example.jpg"})),n.createElement("aside",{className:"notes"},"반응형이란건 이 코드와 같습니다. 뒤에 수정된 결과 값에 앞에서 정의되었던 수식이 수정되기도 하죠.")),n.createElement("section",null,n.createElement("h3",null,"가장 대표적인 예제"),n.createElement("div",{className:"fragment",style:{maxWidth:"100%",margin:"0 auto"}},n.createElement("img",{style:{display:"block",width:"60%",margin:"0 auto"},src:"/img/presentation/rxjs/excel.jpg"})),n.createElement("aside",{className:"notes"},"가장 대표적인 예제는 엑셀입니다. 앞에서 정의된 수식도 뒤에 수정된 엑셀 한 칸의 값에 결과들이 바뀌기도 하니까요.")),n.createElement("section",null,n.createElement("h3",null,"자세하게 알아보겠습니다")),n.createElement("section",null,n.createElement("h3",null,"Reactive Programming"),n.createElement("div",{style:{display:"inline-block",margin:"0 20px"},className:"fragment"},n.createElement("img",{style:{background:"none",border:"none",boxShadow:"none"},src:"/img/presentation/rxjs/arrow_left_down.png"}),n.createElement("div",{style:{textAlign:"left"}},"Observable")),n.createElement("div",{style:{display:"inline-block",margin:"0 20px"},className:"fragment"},n.createElement("img",{style:{background:"none",border:"none",boxShadow:"none"},src:"/img/presentation/rxjs/arrow_right_down.png"}),n.createElement("div",{style:{textAlign:"right"}},"Data Flow")),n.createElement("aside",{className:"notes"},"reactive programming은 기본적으로 Observable과 Data Flow로 나뉩니다. 이 둘을 하나씩 살펴보겠습니다.")),n.createElement("section",null,n.createElement("h3",null,"Observer Pattern"),n.createElement("div",{className:"fragment"},n.createElement("div",{className:"fragment fade-out",style:{position:"absolute"}},n.createElement("div",{style:{display:"inline-block",width:"40%",margin:"0 1%"}},n.createElement("img",{style:{display:"block",width:"100%",margin:"0 auto"},src:"/img/presentation/rxjs/observer.jpg"}),n.createElement("div",{style:{fontSize:"15px"}},n.createElement("a",{href:"https://ko.wikipedia.org/wiki/%EC%98%B5%EC%84%9C%EB%B2%84_%ED%8C%A8%ED%84%B4",target:"_blank",style:{wordBreak:"break-all"}},"출처 - https://ko.wikipedia.org/wiki/%EC%98%B5%EC%84%9C%EB%B2%84_%ED%8C%A8%ED%84%B4"))),n.createElement("div",{style:{display:"inline-block",width:"40%",margin:"0 1%",verticalAlign:"top"}},n.createElement("img",{style:{display:"block",width:"100%",margin:"0 auto"},src:"/img/presentation/rxjs/rx_observer.jpg"}))),n.createElement("div",{className:"fragment fade-in"},n.createElement("div",{style:{display:"inline-block",margin:"0 20px"}},n.createElement("img",{style:{background:"none",border:"none",boxShadow:"none"},src:"/img/presentation/rxjs/arrow_left_down.png"}),n.createElement("div",{style:{textAlign:"left"}},"Observable")),n.createElement("div",{style:{display:"inline-block",margin:"0 20px"},className:"fragment"},n.createElement("img",{style:{background:"none",border:"none",boxShadow:"none"},src:"/img/presentation/rxjs/arrow_down.png"}),n.createElement("div",{style:{textAlign:"center"}},"Observer")),n.createElement("div",{style:{display:"inline-block",margin:"0 20px"},className:"fragment"},n.createElement("img",{style:{background:"none",border:"none",boxShadow:"none"},src:"/img/presentation/rxjs/arrow_right_down.png"}),n.createElement("div",{style:{textAlign:"right"}},"Subscribe")))),n.createElement("aside",{className:"notes"},"옵저버 패턴은 위키피디아에도 정의가 되어있지만, 이벤트 기반 프로그래밍에서 대표적으로 쓰이느 패턴입니다. Observer가 Rx에서 말하는 Observable을 바라보는데, 구독(Subscribe)을 하면 등록되어있는 해당 Observable을 받아 볼 수 있는 구조입니다. Rx에서는 Observable에 등록한 이벤트들에 대해 구독과 구독 취소들로 이루어졌다고 할 수 있습니다.")),n.createElement("section",null,n.createElement("h3",null,"Observable"),n.createElement("div",{style:{display:"inline-block",maxWidth:"400px",verticalAlign:"top",margin:"0 20px"}},n.createElement("div",{className:"fragment","data-fragment-index":"0",style:{textAlign:"center"}},"Hot Observable"),n.createElement("img",{className:"fragment","data-fragment-index":"3",style:{display:"block",margin:"0 auto"},src:"/img/presentation/rxjs/youtube_live.jpg"})),n.createElement("span",{className:"fragment","data-fragment-index":"1",style:{color:"red",verticalAlign:"top"}},"vs"),n.createElement("div",{style:{display:"inline-block",maxWidth:"400px",verticalAlign:"top",margin:"0 20px"}},n.createElement("div",{className:"fragment","data-fragment-index":"2",style:{textAlign:"center"}},"Cold Observable"),n.createElement("img",{className:"fragment","data-fragment-index":"4",style:{display:"block",margin:"0 auto"},src:"/img/presentation/rxjs/youtube.jpg"})),n.createElement("aside",{className:"notes"},"Observable은 Hot과 Cold로 나뉩니다. Observable은 기본적으로 구독자, 즉 Subscriber가 있을 경우에는 Observable의 이벤트가 발생할 경우 구독자들에게 이벤트를 전달합니다. 그런데 구독자가 없는경우, Hot Observable은 구독자 여부와 상관없이 이벤트를 구독자들에게 전달하고, Cold Observable은 구독자들에게 이벤트를 전달하지 않습니다. Hot Observable은 Youtube Live, Cold Observablesms Youtube VOD 서비스를 예로 들 수 있습니다.")),n.createElement("section",null,n.createElement("h3",null,"Data Flow"),n.createElement("div",{style:{display:"inline-block",verticalAlign:"top",width:"30%",margin:"0 20px"}},n.createElement("img",{className:"fragment","data-fragment-index":"0",style:{display:"block",width:"30%",margin:"0 auto",background:"none",border:"none",boxShadow:"none"},src:"/img/presentation/rxjs/arrow_left_down.png"}),n.createElement("div",{className:"fragment","data-fragment-index":"0",style:{textAlign:"left"}},"Control Flow"),n.createElement("img",{className:"fragment","data-fragment-index":"2",style:{display:"block",width:"30%",margin:"0 auto",background:"none",border:"none",boxShadow:"none"},src:"/img/presentation/rxjs/arrow_down.png"}),n.createElement("ul",{className:"fragment","data-fragment-index":"2",style:{display:"block"}},n.createElement("li",null,"if / else if / else"),n.createElement("li",null,"for / for-each / for-in"),n.createElement("li",null,"while / switch"),n.createElement("li",null,"..."))),n.createElement("div",{style:{display:"inline-block",verticalAlign:"top",width:"30%",margin:"0 20px"}},n.createElement("img",{className:"fragment","data-fragment-index":"1",style:{display:"block",width:"30%",margin:"0 auto",background:"none",border:"none",boxShadow:"none"},src:"/img/presentation/rxjs/arrow_right_down.png"}),n.createElement("div",{className:"fragment","data-fragment-index":"1",style:{textAlign:"right"}},"Data Flow"),n.createElement("img",{className:"fragment","data-fragment-index":"3",style:{display:"block",width:"30%",margin:"0 auto",background:"none",border:"none",boxShadow:"none"},src:"/img/presentation/rxjs/arrow_down.png"}),n.createElement("ul",{className:"fragment","data-fragment-index":"3",style:{display:"block"}},n.createElement("li",null,"recursion"),n.createElement("li",null,"pipe(. 연산자)"),n.createElement("li",null,"..."))),n.createElement("aside",{className:"notes"},"이제 앞으로 돌아가서 Data Flow에 대해 알아보겠습니다. 프로그래밍에서의 로직은 Control Flow와 Data Flow로 나뉩니다. 기존에 주로 사용하는 연산자들이 Control Flow에 속하고, 물론 많이 사용하지만, Control Flow 보다는 적게 사용하는 Data Flow는 보통 리턴 값들의 체이닝에 의해 진행됩니다.",n.createElement("br",null),n.createElement("br",null),"Iterable 에서 Observable로 변하게 된 것입니다.")),n.createElement("section",null,n.createElement("h3",null,"요약하자면"),n.createElement("ul",null,n.createElement("li",{className:"fragment"},"Rx는 Event stream과 Data를 쉽게 컨트롤하도록 도와줌"),n.createElement("li",{className:"fragment"},"가독성 좋은 비동기 코드를 체이닝으로 쉽게 작성 가능"),n.createElement("li",{className:"fragment"},"초기 진입장벽이 어느 정도 존재한다는 단점이 있음")),n.createElement("aside",{className:"notes"},"기존에 사용하던 명령형 구조에서 데이터의 흐름을 이해해야하는 반응형 프로그래밍으로의 개념 전환이 초기의 진입 장벽이 될 수 있습니다. 실시간은 아니지만, IE같은 장벽을 차치하고 벅스같은 스트리밍 서비스에 충분히 도움이 될거라 생각합니다."))),n.createElement("section",null,n.createElement("section",null,n.createElement("h2",null,"2. 간단한 예제"),n.createElement("h3",{className:"fragment"},"Rx의 종류"),n.createElement("div",null,n.createElement("span",{className:"fragment"},"RxJava, "),n.createElement("span",{className:"fragment"},"RxJs, "),n.createElement("span",{className:"fragment"},"Rx.Net, "),n.createElement("span",{className:"fragment"},"RxScala, "),n.createElement("span",{className:"fragment"},"Etc...")),n.createElement("aside",{className:"notes"},"처음 자료를 찾아보게 된 것도 안드로이드팀에선 RxJava 스터디를 하고있더라고요. 기존에도 RxJs라는걸 알고는 있었지만 한번 더 찾아보게 된 계기가 되었습니다.")),n.createElement("section",null,n.createElement("h2",null,"RxJs 예제"),n.createElement("div",null,n.createElement("a",{href:"https://jsfiddle.net/junseokchoi/Lsm48mpd/10/",target:"_blank"},"https://jsfiddle.net/junseokchoi/Lsm48mpd/")))),n.createElement("section",null,n.createElement("section",null,n.createElement("h2",null,"3. 우리의 현재와 미래"),n.createElement("h3",{className:"fragment"},"왜 RxJs로 눈을 돌리게 되었나?"),n.createElement("ul",null,n.createElement("li",{className:"fragment"},"Callback hell이 일어나는 부분이 많음"),n.createElement("li",{className:"fragment"},"Promise와 Async/Await에 대한 부재 (ECMA 버전 이슈)"),n.createElement("li",{className:"fragment"},"jQuery에 있는 Deffered라도... ",n.createElement("br",null),"(보안상 이슈가 생길 수 있어서 X)")),n.createElement("aside",{className:"notes"},"RxJs를 찾아보게 된건 CallBack Hell에 대한 이슈가 가장 컸습니다. setTimeout으로 처리하는 부분이 많은데, 이 부분들에 대해 해결해야 하나 생각해봤습니다. 그러던 찰나에 RxJs를 찾게 되었고, Promise나 Async/Await가 아닌 새로운 해결책이었습니다.")),n.createElement("section",null,n.createElement("h3",null,"그럼 이제 우리도 RxJs를 쓰자!!!"),n.createElement("div",{className:"fragment",style:{width:"100%",margin:"0 auto"}},n.createElement("img",{style:{display:"block",width:"50%",margin:"0 auto",background:"none",border:"none",boxShadow:"none"},src:"/img/presentation/rxjs/support.jpg"})),n.createElement("aside",{className:"notes"},"하지만 쉬울리 없죠 ㅠㅠ... 지원하는 버전이 Promise나 Async/Await를 사용할 수 있는 환경과 거의 유사하기 때문에 지금 당장 벅스 서비스에 도입할 순 없을 것 같습니다.",n.createElement("br",null),n.createElement("br",null),"저의 발표는 여기까지고요. 간단한 rxjs에 대한 소개 마치겠습니다."))),n.createElement("section",null,n.createElement("section",null,n.createElement("h2",null,"Q&A")),n.createElement("section",null,n.createElement("h3",null,"참고하면 좋은 사이트 모음"),n.createElement("div",null,n.createElement("div",null,n.createElement("a",{style:{fontSize:"30px"},href:"https://www.slideshare.net/sunhyouplee/vuejs-reactive-programming-vuetiful-korea-2nd",target:"_blank"},"https://www.slideshare.net/sunhyouplee/vuejs-reactive-programming-vuetiful-korea-2nd")),n.createElement("div",null,n.createElement("a",{style:{fontSize:"30px"},href:"http://sculove.github.io/blog/2016/06/22/Reactive-Programming/",target:"_blank"},"http://sculove.github.io/blog/2016/06/22/Reactive-Programming/")),n.createElement("div",null,n.createElement("a",{style:{fontSize:"30px"},href:"https://github.com/CoderK/What-I-Learned-About-RP/blob/master/README.md#rx와-리액티브-프로그래밍2016",target:"_blank"},"https://github.com/CoderK/What-I-Learned-About-RP/blob/master/README.md#rx와-리액티브-프로그래밍2016")),n.createElement("div",null,n.createElement("a",{style:{fontSize:"30px"},href:"https://github.com/studye/rxjs/wiki/Chapter-1.-The-Reactive-Way",target:"_blank"},"https://github.com/studye/rxjs/wiki/Chapter-1.-The-Reactive-Way"))))),n.createElement("section",null,n.createElement("h1",null,"끝"),n.createElement("div",null,"감사합니다."))))}},xbwu:function(e,t,a){"use strict";var n=a("q1tI"),l=a("1Yd/"),r=a("COYA");t.a=function(e){var t=e.pathname,a=e.description,i=e.children,c=Object(n.useState)(!1),m=c[0],o=c[1],d=r.b[Object(r.c)(t)].title||"",g=!1,E=setInterval(Object(n.useCallback)((function(){"undefined"!=typeof window&&(window.Reveal&&!g&&(u(),g=!0),window.Reveal&&!m&&(window.Reveal.isReady()?(console.log("ready"),clearInterval(E),o(!0)):u()))}),[m]),300),u=function(){Reveal.initialize({dependencies:[{src:"/js/presentation/notes.min.js",async:!0},{src:"/js/presentation/highlight.min.js",async:!0,callback:function(){hljs.initHighlightingOnLoad()}}],minScale:.66,maxScale:.66})};return Object(n.useEffect)((function(){var e;m&&(console.log("layout"),null===(e=window.Reveal)||void 0===e||e.layout())}),[m]),n.createElement(n.Fragment,null,n.createElement(l.a,{title:d,description:a,link:s.link,script:s.script}),n.createElement("div",{className:"reveal",style:{position:"absolute",display:m?"block":"none"}},i))};var s={link:[{rel:"stylesheet",href:"/css/presentation/reveal.min.css"},{rel:"stylesheet",href:"/css/presentation/black.min.css"},{rel:"stylesheet",href:"/css/presentation/zenburn.min.css"}],script:[{src:"/js/presentation/reveal.min.js"},{src:"/js/presentation/head.min.js"}]}}}]);
//# sourceMappingURL=component---src-pages-presentation-4-tsx-595a573f0a10e1772fe5.js.map