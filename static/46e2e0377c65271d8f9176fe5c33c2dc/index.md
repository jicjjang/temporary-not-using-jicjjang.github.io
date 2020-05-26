---
title: "Gatsby Link 이슈"
date: "2020-05-02"
tags: [renewal, gatsby]
---

현재 진행 중인 블로그 개편을 (매번 할 프로젝트 없을 때, 테스트베드가 되는 블로그...) [Gatsbyjs](https://www.gatsbyjs.org/)를 이용하여
진행중 입니다. Gatsbyjs를 이용하며 블로그를 만들며 찾은 이슈에 대해 알아보겠습니다.

---

우선 `Posts`, `Archive`가 있는 메뉴 영역을 아래와 같은 형식으로 만들었습니다.

~~~tsx
enum MENU {
  POSTS = 'Posts',
  ARCHIVE = 'Archive'
}

const NOT_CHOICE_COLOR = '#898989';
const CHOICE_COLOR = '#000';

const MENU_MAPPED_PATH = {
  [MENU.POSTS]: '/',
  [MENU.ARCHIVE]: '/archive'
};

const StyleLiLink = styled(GatsbyLink)<{color: string}>`
  color: ${props => props.color};
`;

...

// header > Menu > render 영역
  return (
    ...
    <StyledUl>
      {Object.keys(MENU).map(key => (
        <StyledLi key={key}>
          <StyleLiLink
            color={MENU_MAPPED_PATH[MENU[key]] === pathname ? CHOICE_COLOR : NOT_CHOICE_COLOR}
            to={MENU_MAPPED_PATH[MENU[key]]}>
            {MENU[key]}
          </StyleLiLink>
        </StyledLi>
      ))}
    </StyledUl>
    ...
  )
~~~

그런데, 해당 영역이 아래 이미지와 같이 동일한 회색으로 나타났습니다.

![issue](./issue.png)

map chainning을 했을 때, 이러한 경험을 한적은 없었기 때문에 우선 로그를 찍어보았습니다.

~~~tsx
// header > Menu > render 영역
  return (
    ...
    <StyledUl>
      {Object.keys(MENU).map(key => {
        console.log('key', key);
        console.log('MENU_MAPPED_PATH[MENU[key]] === pathname', MENU_MAPPED_PATH[MENU[key]] === pathname);

        return (
        <StyledLi key={key}>
          <StyleLiLink
            color={MENU_MAPPED_PATH[MENU[key]] === pathname ? CHOICE_COLOR : NOT_CHOICE_COLOR}
            to={MENU_MAPPED_PATH[MENU[key]]}>
            {MENU[key]}
          </StyleLiLink>
        </StyledLi>
      )
      })}
    </StyledUl>
    ...
  )
~~~

![log1](./log1.png)

렌더링을 위해 return하는 부분에서는 전혀 문제가 없습니다. 의심이 된 부분은 [styled-components](https://www.styled-components.com/).
styled-components로 감싸면서 무언가 이상이 생긴건가? 하는 의심이 들었습니다.

동일한 로직에 styled-components를 제외하여 로그를 찍어보겠습니다.

~~~tsx
// header > Menu > render 영역
  return (
    ...
    <StyledUl>
      {Object.keys(MENU).map(key => {
        console.log('key', key);
        console.log('MENU_MAPPED_PATH[MENU[key]]', MENU_MAPPED_PATH[MENU[key]]);
        console.log('MENU_MAPPED_PATH[MENU[key]] === pathname', MENU_MAPPED_PATH[MENU[key]] === pathname);

        return (
        <StyledLi key={key}>
          <GatsbyLink> {/* Gatsbyjs의 Link 이름을 바꿔서 export */}
            style={{
              color: MENU_MAPPED_PATH[MENU[key]] === pathname ? CHOICE_COLOR : NOT_CHOICE_COLOR
            }}
            to={MENU_MAPPED_PATH[MENU[key]]}>
            {MENU[key]}
          </GatsbyLink>
        </StyledLi>
      )
      })}
    </StyledUl>
    ...
  )
~~~

하지만 동일한 에러가 나옵니다. styled-components에는 문제가 없다고 판단하고 여러 포인트를 바꿔가며 확인하던 도중 development 모드에선 정상동작,
production 모드에서만 해당 이슈가 재현됨을 확인하였습니다.

위 예제들과 같은 로그를 build시에도 그대로 넣어서 돌려보겠습니다.

![log2](./log2.png)

예상대로 무언가 조금 이상합니다. pathname이 `/*` 라는 값으로 넘어왔습니다.
우선 저 값에 대한 대응을 위해 값을 비교하는 부분에 예외처리를 추가해보겠습니다.

~~~tsx
// header > Menu > render 영역
  return (
    ...
    <StyledUl>
      {Object.keys(MENU).map(key => {
        console.log('key', key);
        console.log('MENU_MAPPED_PATH[MENU[key]]', MENU_MAPPED_PATH[MENU[key]]);
        console.log('MENU_MAPPED_PATH[MENU[key]] === pathname', MENU_MAPPED_PATH[MENU[key]] === pathname);

        return (
        <StyledLi key={key}>
          <StyleLiLink> {/* Gatsbyjs의 Link 이름을 바꿔서 export */}
            color={MENU_MAPPED_PATH[MENU[key]] === pathname || (key === 'POSTS' && pathname === '/*') ? CHOICE_COLOR : NOT_CHOICE_COLOR}
            to={MENU_MAPPED_PATH[MENU[key]]}>
            {MENU[key]}
          </StyleLiLink>
        </StyledLi>
      )
      })}
    </StyledUl>
    ...
  )
~~~

다행히 예상한대로 해결되었습니다.

![resolve](./resolve.png)

build 시 이렇게 나오는 이유에 대해선 gatsbyjs의 코드를 조금 더 확인해봐야할 것 같습니다.
하지만, 이런식의 예외처리는 깔끔하지 못한 것 같다는 생각이 들어 문서를 좀 더 확인해봤습니다.

이러한 이슈에 대한 대응책인지 모르겠지만, `Link` 컴포넌트에 [`activeStyle`이라는 attribute](https://www.gatsbyjs.org/docs/gatsby-link/#show-active-styles-for-partially-matched-and-parent-links)가 있었습니다.
기본적인 color를 지정해주고, activeStyle(현재 url과 Link의 `to` attribute가 동일한지 여부를 구분하여 해당 스타일을 추가해줌)로 컨트롤 하는 방식으로 수정해보았습니다.

~~~tsx
const StyleLiLink = styled(GatsbyLink)`
  color: ${NOT_CHOICE_COLOR};
`;

// header > Menu > render 영역
  return (
    ...
    <StyledUl>
      {Object.keys(MENU).map(key => (
        <StyledLi key={key}>
          <StyleLiLink> {/* Gatsbyjs의 Link 이름을 바꿔서 export */}
            activeStyle={{
              color: CHOICE_COLOR             
            }}
            to={MENU_MAPPED_PATH[MENU[key]]}>
            {MENU[key]}
          </StyleLiLink>
        </StyledLi>
      ))}
    </StyledUl>
    ...
  )
~~~

development, production 모두 정상 동작함을 확인할 수 있습니다.
