(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{COYA:function(e,t,l){"use strict";var a;l.d(t,"a",(function(){return n})),l.d(t,"b",(function(){return r})),l.d(t,"c",(function(){return i}));var n={HOME:"/",ARCHIVE:"/archive",RESUME:"/resume",PRESENTATION:"/presentation",PRESENTATION_1:"/presentation/1",PRESENTATION_2:"/presentation/2",PRESENTATION_3:"/presentation/3",PRESENTATION_4:"/presentation/4",PRESENTATION_5:"/presentation/5",PRESENTATION_6:"/presentation/6",PRESENTATION_7:"/presentation/7",PRESENTATION_8:"/presentation/8",PRESENTATION_9:"/presentation/9",PRESENTATION_10:"/presentation/10"},r=((a={})[n.PRESENTATION_1]={title:"React.js basic - NHN벅스 팀 세미나 발표 자료",date:"Nov, 23, 2016",tags:["react","nhn","bugs"]},a[n.PRESENTATION_2]={title:"Vue.js basic - NHN벅스 팀 세미나 발표 자료",date:"Apr, 08, 2017",tags:["vue","nhn","bugs"]},a[n.PRESENTATION_3]={title:"현실적인 개발로 먹고살기",date:"July, 15, 2017",tags:["developer","kookmin","university"]},a[n.PRESENTATION_4]={title:"How to use RxJs - NHN벅스 팀 세미나 발표 자료",date:"Nov, 30, 2017",tags:["rxjs","nhn","bugs"]},a[n.PRESENTATION_5]={title:"Vue pwa 시작하기 - Vuetiful korea 3rd 발표자료",date:"Nov, 30, 2017",tags:["vue","pwa","vuetifulkorea","3rd"]},a[n.PRESENTATION_6]={title:"Graphql 시작하기 (server) - NHN벅스 팀 세미나 발표 자료",date:"Mar, 05, 2018",tags:["graphql","server","nhn","bugs"]},a[n.PRESENTATION_7]={title:"Graphql 시작하기 (client) - NHN벅스 팀 세미나 발표 자료",date:"Mar, 06, 2018",tags:["graphql","client","nhn","bugs"]},a[n.PRESENTATION_8]={title:"Apollo로 알아보는 Vue in the GraphQL - Vuetiful korea 4th 발표자료",date:"Apr, 16, 2018",tags:["vue","graphql","apollo","vuetifulkorea","4th"]},a[n.PRESENTATION_9]={title:"Vuetiful korea 5회 세미나 내용 정리",date:"Aug, 15, 2018",tags:["vue","vuetifulkorea","5th"]},a[n.PRESENTATION_10]={title:"Sentry - Kakaopay FE 세미나",date:"Jul, 09, 2020",tags:["react","sentry","sourcemap"]},a),i=function(e){return e.endsWith("/")?e.slice(0,-1):e}},lPWB:function(e,t,l){"use strict";l.r(t),l.d(t,"default",(function(){return r}));var a=l("q1tI"),n=l("xbwu");function r(e){var t=e.location,l=e.data.site.siteMetadata.siteUrl||void 0;return a.createElement(n.a,{pathname:t.pathname},a.createElement("div",{className:"slides"},a.createElement("section",{"data-background":"/img/presentation/vue-apollo-graphql/vuetifulkorea4_background.png"},a.createElement("aside",{className:"notes"},"안녕하세요. NHN벅스 최준석입니다. GraphQL, Apollo가 생소한 주제일 수 하지만 개발하면서 Slack 채널에 질문을 해도 이미 충분히 많은 분들이 사용해보셨고, 실무에 사용하시는 분도 있으셨습니다. GraphQL과 Apollo의 본질에 대한 설명이나 서버 파트에 대해서 설명을 드리겠습니다. 잘부탁드립니다.")),a.createElement("section",null,a.createElement("div",null,a.createElement("h2",null,"순서"),a.createElement("ul",{style:{listStyle:"none",margin:"0"}},a.createElement("li",{className:"fragment"},"1. 왜 쓰는지 납득을 해야 쓰지"),a.createElement("li",{className:"fragment"},"2. REST API를 GraphQL로"),a.createElement("li",{className:"fragment"},"3. Client"),a.createElement("li",{className:"fragment"},"4. 왜 이걸 써야하는거죠"),a.createElement("li",{className:"fragment"},"Q & A")))),a.createElement("section",null,a.createElement("h2",null,"들어가기전에"),a.createElement("div",{className:"fragment",style:{marginTop:"20px"}},a.createElement("a",{href:l+"/slides/graphql-start-server",target:"_blank"},"기본적인 백엔드 내용은 이 링크를!")),a.createElement("div",{className:"fragment",style:{marginTop:"20px"}},a.createElement("a",{href:l+"/slides/graphql-start-client",target:"_blank"},"기본적인 프론트 내용은 이 링크를!")),a.createElement("div",{className:"fragment",style:{marginTop:"20px"}},a.createElement("a",{href:"https://github.com/seouldrinker/seoulDrinkerGraphql",target:"_blank"},"오늘의 코드는 이곳에",a.createElement("br",null),"(https://github.com/seouldrinker/seoulDrinkerGraphql)!")),a.createElement("div",{className:"fragment",style:{marginTop:"20px"}},"더 자세한 내용은 구글링...! (내용은 백엔드 쪽에 거의 다 있어요 헤헤)"),a.createElement("aside",{className:"notes"},"이미 한차례 사내 세미나를 했었고, 그때 자료도 있으니 발표 후에 한번 둘러봐주세요 :) 이 자료들과 겹치는 내용도 있겠지만, 이해를 돕기위해 추가하기도 했습니다.")),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"1. 왜 쓰는지 납득을 해야 쓰지"),a.createElement("div",{className:"fragment"},"그동안 잘쓰고 있던 API. 한계는??"),a.createElement("ul",{className:"fragment",style:{marginTop:"20px"}},a.createElement("li",null,"플랫폼마다 조금씩 다른 쿼리,",a.createElement("br",null),"그때 그때 원하는 데이터만 보고싶은데..."),a.createElement("li",null,"생각보다 편하다고 쓰고있었는데, 정형화된 규칙이 있을까?",a.createElement("br",null),"(JSON이 규칙을 가지고 있진 않음)"),a.createElement("li",null,"필터는? 정렬은?"),a.createElement("li",null,"페이지네이ㅅ...."),a.createElement("li",null,"읍읍")),a.createElement("aside",{className:"notes"},"나름 편하다고 쓰고 있는 API는 깊게들어갈수록 생각보다 어렵습니다. 뭔가 규칙도 없고, 정렬, 필터, pagination 등등... 최종 선택은 본인과 팀의 결정이지만, 규칙이 없다는 건 리미터가 없다는 것이니 생각보다 위험합니다. 이런 문제들에 대해 일부라도 해결할 수 있다면 한번쯤 사용해 볼만 하겠죠.")),a.createElement("section",null,a.createElement("h3",null,"그렇다면 DB... DB를 보자!!"),a.createElement("div",{style:{fontSize:"30px"}},a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"20%",paddingLeft:"1%",paddingRight:"1%",marginLeft:"1%",verticalAlign:"top",borderLeft:"1px solid #fff",borderRight:"1px solid #fff"}},"GraphQL에서 `RDB`가 나을까 `NoSQL`이 나을까?"),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"20%",paddingLeft:"1%",paddingRight:"1%",marginLeft:"1%",verticalAlign:"top",borderLeft:"1px solid #fff",borderRight:"1px solid #fff"}},"보통 DB에서 성능에 영향을 많이 주더라도 사용하게 되는 JOIN... 하지만 JOIN이 힘든 NoSql에서 쿼리가 급격히 늘어날수도..."),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"20%",paddingLeft:"1%",paddingRight:"1%",marginLeft:"1%",verticalAlign:"top",borderLeft:"1px solid #fff",borderRight:"1px solid #fff"}},"RDB가 나쁠 이유는 없는데?"),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"20%",paddingLeft:"1%",paddingRight:"1%",marginLeft:"1%",verticalAlign:"top",borderLeft:"1px solid #fff",borderRight:"1px solid #fff"}},"심지어 각각의 클라이언트에서 Depth에 대한 난이도 조절 가능...!")),a.createElement("aside",{className:"notes"},"그렇다면 디비는 어떨까요? 회사 세미나의 예제 코드는 MongoDB로, NoSQL 환경이었습니다.",a.createElement("br",null),"과도한 DB를 버텨야 하는 회사 업무에서는 어울리지 않아 보인다는 의견이 있었으나",a.createElement("br",null),"RDB로 적용한 사용자들의 리뷰에서는 충분히 잘 사용하고 있다는 의견 또한 많았습니다.")),a.createElement("section",null,a.createElement("h3",null,"Depth 조절이 가능하다니 무슨 소리죠?"),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"30%"}},a.createElement("img",{style:{display:"inline-block",margin:"0 10px"},src:"/img/presentation/vue-apollo-graphql/code1.png"})),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"30%",verticalAlign:"top"}},a.createElement("img",{style:{display:"inline-block",margin:"0 10px"},src:"/img/presentation/vue-apollo-graphql/code2.png"})),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"40%",marginTop:"60px",verticalAlign:"top"}},"이런 Recursive한 관계...",a.createElement("br",null),"서비스를 하다보면 없을 순 없다 ㅠㅠ..."),a.createElement("aside",{className:"notes"},"코드에 대해선 뒤에서 설명드리겠으니 여기선 Depth 조절만 알아봅시다.",a.createElement("br",null),"이런 방식으로 GraphQL의 type들을 선언하는데, PK, FK 등",a.createElement("br",null),"다른 타입에 대한 의존성이 있을 수 있는데 이런 관계에 대해",a.createElement("br",null),"어느 정도까지 연결 되게 할 것인지 정할 수 있다는 것입니다.")),a.createElement("section",null,a.createElement("h2",null,"GraphQL의 목표"),a.createElement("div",{style:{width:"90%",margin:"0 auto"}},a.createElement("span",{style:{display:"inline-block",width:"58%",margin:"5px",verticalAlign:"top"}},a.createElement("img",{className:"fragment","data-fragment-index":"1",src:"/img/presentation/graphql-start/about1.jpg",style:{margin:"0 auto"}}),a.createElement("div",{className:"fragment",style:{marginTop:"20px",fontSize:"20px"},"data-fragment-index":"3"},"필요한 것만 정확히 물어볼 수있는 기능을 제공하며 시간이 지남에 따라 API를 쉽게 개발할 수 있도록...")),a.createElement("span",{style:{display:"inline-block",width:"38%",margin:"5px"}},a.createElement("img",{className:"fragment","data-fragment-index":"2",src:"/img/presentation/graphql-start/about2.jpg",style:{margin:"0 auto"}}),a.createElement("div",{className:"fragment",style:{marginTop:"20px",fontSize:"20px"},"data-fragment-index":"4"},"GraphQL은 단독 버전 관리를 통해 기존 코드 수정없이 보다 깨끗하고 유지보수가 쉽게 사용이 가능..."))),a.createElement("aside",{className:"notes"},"단편적인 내용들이지만, 규칙을 정하고 유지보수를 용의하게 하기 위해, 즉, GraphQL은",a.createElement("br",null),"필요한 것만 물어보는 것으로",a.createElement("br",null),"여러 플랫폼에 대해 단독 버전 관리를",a.createElement("br",null),"하는 것이 목표입니다."))),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"2. REST API를 GraphQL로"),a.createElement("div",null,"솔직히 한번쯤은 들어봤을 GraphQL. but, 노관심"),a.createElement("br",null),a.createElement("div",{style:{fontSize:"32px"},className:"fragment"},a.createElement("div",{style:{display:"inline-block",width:"50%",textAlign:"center"}},a.createElement("div",null,"REST API"),a.createElement("p",null,a.createElement("span",{style:{color:"red"}},"URI")," 중심으로 데이터의 CRUD 진행"),a.createElement("div",{style:{width:"60%",maxWidth:"580px",margin:"0 auto",verticalAlign:"top"}},a.createElement("img",{style:{display:"block",margin:"0 auto"},src:"/img/presentation/vue-apollo-graphql/query_api.png"}))),a.createElement("div",{style:{display:"inline-block",width:"50%",textAlign:"center",verticalAlign:"top"}},a.createElement("div",null,"GraphQL"),a.createElement("p",null,a.createElement("span",{style:{color:"red"}},"Query"),"와 ",a.createElement("span",{style:{color:"red"}},"Mutation"),"으로 데이터의 CRUD를 진행"),a.createElement("div",{style:{width:"60%",maxWidth:"580px",margin:"0 auto",verticalAlign:"top"}},a.createElement("img",{style:{display:"block",margin:"0 auto"},src:"/img/presentation/vue-apollo-graphql/query_graphql.png"})))),a.createElement("aside",{className:"notes"},"이제 실제로 구현해봐야겠죠? backend의 endpoint에 대한 개발을 하지 않으시는 분들도 있으시겠지만, 서버 얘기를 하지 않을 수 없습니다 ㅠㅠ. 함께 적용을 하고 함께 변경해야 하니까요. REST와 GraphQL을 동시에 사용할 수도 있습니다.",a.createElement("br",null),"---",a.createElement("br",null),"기존에 사용하던 API는 URI중심으로 데이터를 쿼리합니다. 그에 반해 GraphQL은 Query와 Mutation을 중심으로 데이터를 쿼리합니다. uri에 보이시는 대로 GraphQL은 `/graphql` 하나로 사용하는데, 이는 GraphQL의 권장사항 입니다.")),a.createElement("section",null,a.createElement("h3",null,"서버는 살짝만"),a.createElement("div",{className:"fragment","data-fragment-index":"1",style:{fontSize:"32px"}},"하기에는... 생각보단 쉬워요! (클라이언트보단)"),a.createElement("div",{className:"fragment","data-fragment-index":"2",style:{marginTop:"20px"}},a.createElement("a",{href:"https://github.com/seouldrinker/seoulDrinkerApi",target:"_blank"},"기존 API 코드"),"와",a.createElement("a",{href:"https://github.com/seouldrinker/seoulDrinkerGraphql",target:"_blank"},"GraphQL 코드")),a.createElement("div",{className:"fragment","data-fragment-index":"2"},"어떤 부분이 달라졌는지 확인해봅시다."),a.createElement("aside",{className:"notes"},"서버 코드는 Node고 매우 짧습니다. ppt 2장으로 끝나니 GraphQL에 대해 간단히 훑어보겠습니다.")),a.createElement("section",null,a.createElement("h3",null,"우선 라우팅부터"),a.createElement("div",{className:"fragment",style:{fontSize:"32px"}},"API에서 GraphQL로 경로가 바뀌었습니다."),a.createElement("br",null),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"60%"}},a.createElement("img",{style:{display:"inline-block",margin:"0 10px"},src:"/img/presentation/vue-apollo-graphql/code3.png"}),a.createElement("img",{style:{display:"inline-block",margin:"0 10px"},src:"/img/presentation/vue-apollo-graphql/code4.png"})),a.createElement("div",{style:{display:"inline-block",width:"40%",verticalAlign:"top"}},a.createElement("div",{className:"fragment"},"graphql과 graphiql의 차이"),a.createElement("div",{className:"fragment",style:{margin:"20px auto 0 auto"}},a.createElement("img",{style:{display:"block",margin:"0 auto"},src:"/img/presentation/vue-apollo-graphql/graphiql.png"}))),a.createElement("aside",{className:"notes"},"라우팅 경로를 추가해줍니다. 위에서 `/graphql` 하나만 넣는게 권장사항이라 했으나, 2개가 들어가있는 이유는 디버깅 용도로 사용하는 graphiql 입니다. 이 또한 endpoint는 `/graphql`을 가리키고 있습니다.",a.createElement("br",null),"---",a.createElement("br",null),"graphql 라우터는 schema를 받는데, schema는 typeDefs와 resolvers를 실행 가능하게 만든 모듈입니다.")),a.createElement("section",null,a.createElement("h3",null,"typedef와 resolver"),a.createElement("div",{className:"fragment",style:{fontSize:"32px"}},"정말 단순하게도, 이 파일 2개를 만들면 서버는 끝."),a.createElement("br",null),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"50%"}},a.createElement("img",{style:{display:"inline-block",margin:"0 10px"},src:"/img/presentation/vue-apollo-graphql/code5.png"})),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"50%",verticalAlign:"top"}},a.createElement("img",{style:{display:"inline-block",margin:"0 10px"},src:"/img/presentation/vue-apollo-graphql/code6.png"}),a.createElement("img",{style:{display:"inline-block",margin:"0 10px"},src:"/img/presentation/vue-apollo-graphql/code7.png"})),a.createElement("aside",{className:"notes"},"이 두 파일만 더 살펴보면 끝입니다. 매우 간단하죠?",a.createElement("br",null),"---",a.createElement("br",null),"우선 스트링 형태로 타입을 정의합니다. News라는 데이터를 위주로 보기 위해 정의해 놨습니다. 바로 아래 Query는 해당 타입의 리스트를 가져오겠다는 뜻입니다. 기술 해놓지는 않았지만 type Mutation 을 지정해서 데이터의 저장, 수정, 삭제를 할 수 있습니다. graphql에서는 조회만 Query, 나머진 Mutation 이거든요 ㅎㅎ",a.createElement("br",null),"---",a.createElement("br",null),"resolvers에서는 정의된 내용을 구현합니다. News 타입에 대해 데이터 리스트를 가져올 내용은 getNewsList라는 함수인데요, 이 함수는 MongoDB 에서 데이터를 조회합니다. API에서 사용하던 모듈과 동일하고, 이 예제가 포함된 Repository에서 대부분이 API에서 사용하던 함수들을 재사용하며 포팅했습니다.",a.createElement("br",null),"---",a.createElement("br",null),"자 이렇게 서버에 대한 코드 설명이 끝났습니다. 처음 보시는데도 그다지 어렵지 않으셨을겁니다."))),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"3. Client"),a.createElement("div",{className:"fragment","data-fragment-index":"1",style:{fontSize:"32px"}},"클라이언트도 서버처럼"),a.createElement("div",{className:"fragment","data-fragment-index":"2",style:{marginTop:"20px"}},"지난 3월 발표에서 보여드린"," ",a.createElement("a",{href:"https://github.com/seouldrinker/seoulDrinkerPwa",target:"_blank"},"PWA 코드"),"의 api 호출을",a.createElement("a",{href:"https://github.com/seouldrinker/seoulDrinkerGraphql",target:"_blank"},"GraphQL"),"로"),a.createElement("div",{className:"fragment","data-fragment-index":"2"},"어떻게 바꾸는지 알아봅시다."),a.createElement("aside",{className:"notes"},"이번엔 클라이언트 코드를 바꿔보겠습니다.")),a.createElement("section",null,a.createElement("h3",null,"Vue 객체에 apollo provider 주입"),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"50%"}},a.createElement("img",{style:{margin:"0 10px"},src:"/img/presentation/vue-apollo-graphql/code8.png"})),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"50%",margin:"0 auto",verticalAlign:"top"}},a.createElement("div",{className:"fragment"},a.createElement("img",{style:{margin:"0 10px"},src:"/img/presentation/vue-apollo-graphql/code9.png"})),a.createElement("div",{className:"fragment",style:{marginTop:"20px"}},"provider는 공급자.",a.createElement("br",null),"공급자가 하나일 필요는 없음",a.createElement("br",null),"여러개로 늘려도? 상관 없음")),a.createElement("aside",{className:"notes"},"vuex로 치면 store에 대한 설정이 끝난거죠.",a.createElement("br",null),"리액트를 사용하셨던 분들은 provider가 조금 더 친절할 것 같네요.")),a.createElement("section",null,a.createElement("h3",null,"호출부에 대한 설정 완료! 이제는 SPC!"),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"50%"}},a.createElement("img",{style:{margin:"0 10px"},src:"/img/presentation/vue-apollo-graphql/code10.png"})),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"50%",verticalAlign:"top"}},a.createElement("img",{style:{margin:"0 10px"},src:"/img/presentation/vue-apollo-graphql/code11.png"})),a.createElement("aside",{className:"notes"},"this.$apollo.~~~ 하는 방식으로도 사용할 수 있지만, 위 코드와 같은 방식으로 해야 smart query가 동작하여 data에 있는 newsList로 조회된 데이터가 자동 매핑됩니다.")),a.createElement("section",null,a.createElement("h3",null,"간단하게 설명했지만"),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"50%"}},a.createElement("img",{style:{margin:"0 10px"},src:"/img/presentation/vue-apollo-graphql/code12.png"})),a.createElement("div",{style:{display:"inline-block",width:"50%",verticalAlign:"top"}},a.createElement("div",{className:"fragment"},"1. 코드를 분리하려면 꼭 필요한 webpack loader 설정"),a.createElement("div",{className:"fragment",style:{marginTop:"30px"}},"2. pub/sub 모델을 넣고 소켓으로 DB 변화를 `구독` 하려면 추가해야하는"," ",a.createElement("a",{href:"https://github.com/apollographql/graphql-subscriptions",target:"_blank"},"graphql-subscriptions")),a.createElement("div",{className:"fragment",style:{marginTop:"30px"}},"3. vuex에서 데이터 변화를 조금 더 쉽게 관찰할 수 있게 해줄"," ",a.createElement("a",{href:"https://github.com/Akryum/vue-supply",target:"_blank"},"vue-supply")),a.createElement("div",{className:"fragment",style:{marginTop:"30px"}},"4. 기타 등등 ....")),a.createElement("aside",{className:"notes"},"설명은 간단했지만, 서비스에 넣을 정도의 스펙이 된다면 추가 및 수정해야할 것들이 약간 늘어납니다. DB 변화를 감지할 pub/sub 모델, vuex에 데이터 변화를 쉽게 연동할 수 있게 해줄 vue-supply 등등 신경쓸게 늘어납니다."))),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"3. 단점에 대해"),a.createElement("div",{className:"fragment","data-fragment-index":"1"},"사실 여기서부터가 나눠보고 싶은 얘기."),a.createElement("div",{className:"fragment","data-fragment-index":"2"},"페이스북에서"," ",a.createElement("a",{href:"https://code.facebook.com/posts/1691455094417024/graphql-a-data-query-language/",target:"_blank"},'"write once, run anywhere"')),a.createElement("div",{className:"fragment","data-fragment-index":"2"},"이라는 이상에 맞추기 위해 만든게 GraphQL."),a.createElement("div",{className:"fragment","data-fragment-index":"3"},"안 쓸 이유가 있을까?"),a.createElement("aside",{className:"notes"},"물론 안 쓸 이유가 없진 않습니다만, 생각보다 언어가 아닌 명세! graphql에 대한 관리가 열정적으로 이루어지진 않는 것이 대표적입니다.")),a.createElement("section",null,a.createElement("h2",null,"주관적인(겪어봤던) 리뷰"),a.createElement("div",{style:{marginTop:"40px"}},a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"18%",margin:"1%",fontSize:"30px",verticalAlign:"top"}},"실제로 구현하는건 훨씬 복잡한 케이스가 다수"),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"18%",margin:"1%",fontSize:"30px",verticalAlign:"top"}},"에러 관리 (에러가 200으로 떨어지는 케이스)"),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"18%",margin:"1%",fontSize:"30px",verticalAlign:"top"}},"실패한 요청에 대한 재시도 (pub/sub으로 해결 가능함)"),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"18%",margin:"1%",fontSize:"30px",verticalAlign:"top"}},"하지만! 어느정도 잡혀있는 규칙에 대해선 매우 긍정적"),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"18%",margin:"1%",fontSize:"30px",verticalAlign:"top"}},"러닝커브는 모르겠지만, 한번 익숙해지면 rest보다 낫다고 생각할 수 밖에 없음")),a.createElement("aside",{className:"notes"},"실제 구현시 난이도 상승, 에러가 가끔 200으로 나오는 케이스, 실패에 대한 재시도를 따로 제어하기 힘들다는 점 들이 있습니다.")),a.createElement("section",null,a.createElement("h2",null,"느낀 점 & 드리고자 하는 말"),a.createElement("div",{className:"fragment"},"대형 서비스를 기존 REST에서 GraphQL로 모두 바꾸기엔",a.createElement("br",null),"조금은 이른게 아닐까 + 시작해볼만 하다",a.createElement("br",null),a.createElement("b",{style:{display:"block",marginTop:"40px",fontSize:"50px",color:"#efdcbc"},className:"fragment"},"신규서비스라면 써보라 추천!!")),a.createElement("aside",{className:"notes"},"facebook에서 graphql + react에 사용하는 relay를 거의 케어하지 않아서 apollo로 유저들이 많이 넘어오고 있었는데, relay의 업그레이드 버전이 나온다는 소식도 있습니다. 좋은 소식에도 불구하고 당장 큰 규모의 서비스를 쪼개긴 힘들겠지만, 모놀리스 서비스를 msa로 바꾸면서 도입해보기 좋다고 생각합니다."))),a.createElement("section",null,a.createElement("h2",null,"Q&A")),a.createElement("section",null,a.createElement("h1",null,"끝"),a.createElement("div",null,"감사합니다."))))}},xbwu:function(e,t,l){"use strict";var a=l("q1tI"),n=l("1Yd/"),r=l("COYA");t.a=function(e){var t=e.pathname,l=e.description,s=e.children,c=Object(a.useState)(!1),m=c[0],o=c[1],p=r.b[Object(r.c)(t)].title||"",g=!1,d=setInterval(Object(a.useCallback)((function(){"undefined"!=typeof window&&(window.Reveal&&!g&&(E(),g=!0),window.Reveal&&!m&&(window.Reveal.isReady()?(console.log("ready"),clearInterval(d),o(!0)):E()))}),[m]),300),E=function(){Reveal.initialize({dependencies:[{src:"/js/presentation/notes.min.js",async:!0},{src:"/js/presentation/highlight.min.js",async:!0,callback:function(){hljs.initHighlightingOnLoad()}}],minScale:.66,maxScale:.66})};return Object(a.useEffect)((function(){var e;m&&(console.log("layout"),null===(e=window.Reveal)||void 0===e||e.layout())}),[m]),a.createElement(a.Fragment,null,a.createElement(n.a,{title:p,description:l,link:i.link,script:i.script}),a.createElement("div",{className:"reveal",style:{position:"absolute",display:m?"block":"none"}},s))};var i={link:[{rel:"stylesheet",href:"/css/presentation/reveal.min.css"},{rel:"stylesheet",href:"/css/presentation/black.min.css"},{rel:"stylesheet",href:"/css/presentation/zenburn.min.css"}],script:[{src:"/js/presentation/reveal.min.js"},{src:"/js/presentation/head.min.js"}]}}}]);
//# sourceMappingURL=component---src-pages-presentation-8-tsx-ee21c298a01eba6d607a.js.map