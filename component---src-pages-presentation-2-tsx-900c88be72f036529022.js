(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+OEC":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c})),n.d(t,"query",(function(){return m}));var a=n("q1tI"),l=n("xbwu"),r=n("COYA");function c(e){var t=e.location,n=e.data.site.siteMetadata.social.linkedin||void 0;return a.createElement(l.a,{title:r.b[Object(r.c)(t.pathname)].title||""},a.createElement("div",{className:"slides"},a.createElement("section",null,a.createElement("h1",null,"Vue.js"),a.createElement("h3",null,"Javascript View Library"),a.createElement("p",null,a.createElement("small",null,"Created by"," ",a.createElement("a",{href:n,target:"_blank"},"Junseok, Choi")))),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"1. React 공부했으면 더 깊이 파보지 왜 어정쩡하게 Vue로 넘어가?")),a.createElement("section",null,a.createElement("p",null,"Angular / Angular2 / React"," ",a.createElement("span",{className:"fragment",style:{fontSize:"120px"}},"/ Vue")),a.createElement("h3",{className:"fragment"},"변화에 둔감해지지 말기"),a.createElement("aside",{className:"notes"},"이미 충분히 유명한 Angular, Angular2나 React가 있는데",a.createElement("br",null),a.createElement("br",null),"굳이 또 새로운 프레임워크를 배워야 할까요?",a.createElement("br",null),a.createElement("br",null),"이전에 발표했던 React의 장점을 엄청 어필하다가",a.createElement("br",null),a.createElement("br",null),"그새 다른 프레임워크로...",a.createElement("br",null),a.createElement("br",null),"변화에 둔감해지지 않기위해 공부하다 빠져버렸습니다.")),a.createElement("section",null,a.createElement("h2",{className:"fragment"},a.createElement("a",{href:"https://facebook.github.io/react/2013/06/05/why-react.html"},'"지속해서 데이터가 변화하는 대규모 애플리케이션을 구축하기"')),a.createElement("aside",{className:"notes"},"거의 React의 타이틀과 같은 말인데, Vue를 공부하면서 느낀점은",a.createElement("br",null),a.createElement("br",null),"Vue가 훨씬 이 말에 어울린다는 것이었습니다."))),a.createElement("section",null,a.createElement("section",null,a.createElement("p",null,"Angular는 제쳐두고..."),a.createElement("br",null),a.createElement("p",{className:"fragment"},"Why??"),a.createElement("br",null),a.createElement("p",{className:"fragment"},"서로 다른 모델, 서로 다른 라이브러리(or 프레임워크)"),a.createElement("aside",{className:"notes"},"일단 앵귤러는 제쳐놓고, React와 비교를 해보겠습니다.",a.createElement("br",null),a.createElement("br",null),"앵귤러는 mvc 모델, React는 mvvm 모델을 따르기 때문에",a.createElement("br",null),a.createElement("br",null),"역할은 같지만 가는 방향이 다르다고 생각하기 때문이죠.",a.createElement("br",null),a.createElement("br",null))),a.createElement("section",null,a.createElement("h2",null,"페이스북이 만들었는데? 참트루?"),a.createElement("div",{className:"fragment",style:{display:"inline-block",width:"35%"}},a.createElement("img",{src:"/img/presentation/vue-basic/compare1.png"})),a.createElement("div",{style:{display:"inline-block",width:"50%"}},a.createElement("img",{className:"fragment",src:"/img/presentation/vue-basic/compare2.png"}),a.createElement("img",{className:"fragment",src:"/img/presentation/vue-basic/compare3.png"})),a.createElement("aside",{className:"notes"},"React팀과 직접 퍼포먼스틑 비교한 것에 대한 내용입니다.",a.createElement("br",null),a.createElement("br",null),"발표들으시면서 해석까지하기 힘드실까봐 번역도 해놨습니다.")),a.createElement("section",null,a.createElement("p",null,"React와 Vue를 모두 사용해본 결론은 Vue"),a.createElement("div",{className:"fragment",style:{width:"50%",margin:"0 auto"}},a.createElement("img",{src:"/img/presentation/vue-basic/good.jpg"})),a.createElement("p",{className:"fragment"},"(사실, 사용이 더 편한 것도 있고 양방향 데이터 바인딩도 훨씬 쉽고 등등... 이유는 많습니다.)"),a.createElement("p",{className:"fragment"},"(그리고 정답또한 아닙니다.)"),a.createElement("aside",{className:"notes"},"정답은 없습니다. 그저 개발자에게 더 편리하고 효율성 좋은 라이브러리가 답입니다."))),a.createElement("section",null,a.createElement("section",null,a.createElement("h2",null,"2. 이제 사용법을 알아보자")),a.createElement("section",null,a.createElement("div",{style:{width:"50%",margin:"0 auto"}},a.createElement("img",{src:"/img/presentation/vue-basic/helloworld.png"})),a.createElement("p",{className:"fragment"},"(이것을 보고 느낄 여러분의 마음)"),a.createElement("p",{className:"fragment",style:{fontSize:"80px"}},'"저것은 Angular가 아닌가!!!"'),a.createElement("p",{className:"fragment"},"React와 Angular의 장점을 흡수했기 때문"),a.createElement("aside",{className:"notes"},"Angular와 매우 유사한 모습!!! 그것은 React와 Angular의 장점을 흡수했기 때문입니다.")),a.createElement("section",null,a.createElement("a",{href:"https://jsfiddle.net/junseokchoi/r0xrtxr2/"},"1. 조건문에 대해 알아보기"),a.createElement("br",null),a.createElement("a",{href:"https://jsfiddle.net/junseokchoi/3oz10rgt/1/"},"2. 반복문에 대해 알아보기")),a.createElement("section",null,a.createElement("h2",null,"directive란?"),a.createElement("p",null,"Vue에서 제공하는 특수 속성으로 앞에 v- 접두사가 붙음"),a.createElement("a",{href:"https://jsfiddle.net/junseokchoi/3oz10rgt/2/"},"1. v-on directive 알아보기"),a.createElement("br",null),a.createElement("a",{href:"https://jsfiddle.net/junseokchoi/3oz10rgt/3/"},"2. v-bind directive 알아보기"),a.createElement("br",null),a.createElement("a",{href:"https://jsfiddle.net/junseokchoi/3oz10rgt/4/"},"3. v-model directive 알아보기"),a.createElement("br",null),a.createElement("a",{href:"https://jsfiddle.net/junseokchoi/3oz10rgt/5/"},"4. component directive 알아보기"),a.createElement("aside",{className:"notes"},"이제 Vue가 제공하는 특수 기능이 담긴 directive에 대해 알아보겠습니다. directive란 것은 Vue에서만 사용하는 용어는 아닙니다. 이미 Angular에서도 있었습니다."))),a.createElement("section",null,a.createElement("section",null,a.createElement("div",{style:{width:"50%",margin:"0 auto"}},a.createElement("img",{src:"/img/presentation/vue-basic/ricebot.png"})),a.createElement("h2",{className:"fragment"},"3. 매일 점심시간을 알려주는 밥봇"),a.createElement("a",{className:"fragment",href:"https://github.com/jicjjang/DoorayHookerFront"},"https://github.com/jicjjang/DoorayHookerFront")),a.createElement("section",null,a.createElement("div",{style:{width:"70%",margin:"0 auto"}},a.createElement("img",{src:"/img/presentation/vue-basic/example1.png"})),a.createElement("aside",{className:"notes"},"템플릿, 컴포넌트 부분입니다. data가 파싱된 html부분입니다.")),a.createElement("section",null,a.createElement("div",{style:{width:"50%",margin:"0 auto"}},a.createElement("img",{src:"/img/presentation/vue-basic/example2.png"})),a.createElement("aside",{className:"notes"},"데이터와 메서드 들입니다. 또한, mapActions로 Vuex에 정의된 기능을 사용할 수 있습니다.")),a.createElement("section",null,a.createElement("div",{style:{width:"40%",margin:"0 auto"}},a.createElement("img",{src:"/img/presentation/vue-basic/example3.png"})),a.createElement("aside",{className:"notes"},"마지막으로 Flux 모델을 기반으로 한 Vuex의 Store 기능을 도와주는 Actions, Mutations, State입니다. 변화하는 데이터 (State)를 함수들로 로드하고 (Actions) 변화된 값을 적용 시키는 것(Mutations) 입니다.")),a.createElement("section",null,a.createElement("div",{style:{width:"60%",margin:"0 auto"}},a.createElement("img",{src:"/img/presentation/vue-basic/hooker.png"})),a.createElement("div",{className:"fragment"},"동기들 사이에서의 인기몰이 실패를 경험했습니다...ㅠㅠ"),a.createElement("div",{className:"fragment"},"그래도 흥미있는 프로젝트로 새로운 프레임워크 경험하기!"),a.createElement("aside",{className:"notes"},"동기들 사이에서 그닥 성공하진 못했지만... 처음 시도하기엔 좋은 경험이었습니다."))),a.createElement("section",null,a.createElement("div",{style:{width:"50%",margin:"0 auto"}},a.createElement("img",{src:"/img/presentation/vue-basic/end.jpg"})),a.createElement("h1",null,"끝"))))}var m="1641997136"}}]);
//# sourceMappingURL=component---src-pages-presentation-2-tsx-900c88be72f036529022.js.map