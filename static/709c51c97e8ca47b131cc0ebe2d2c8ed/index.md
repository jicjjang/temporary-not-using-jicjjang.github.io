---
title: "Gatsby 블로그 개편"
date: "2020-05-25"
tags: [renewal, gatsbyjs, revealjs]
---

블로그 개편을 하며 사용하게 된 Gatsby나 기존 라이브러리들에 대해 느낀 점이나 해결하지 못한 부분에 대해 간단히 기술해 보고자 합니다.

### 1. Gatsby.js static 경로에서의 html 파일

기존에 사용했던 Nuxt.js, Next.js, jekyll 등에서 static 경로에서 어떤 확장자의 파일을 로드하는 것에 대해 문제가 되는 일은 없었습니다.
(적어도 브라우저라 랜더하지 못할 이상한 확장자의 파일을 심지는 않음)

그런데, html파일이 열리지 않는 것을 확인하게 되었습니다. 처음엔 경로에 이상이 있나 생각했으나 나오는 에러페이지는 기본 설정된 Gatsby의 404 페이지였고
동일한 root path의 다른 static 파일(image, js 파일)은 정상적으로 로드가 되었습니다.

해당 html 파일은 블로그에 presentation (ppt 형태의 post)들을 만드는데 사용했던 [reveal.js](https://revealjs.com/)에서 발표자doc을 만드는데
사용합니다. 해당 기능은 회사나 여러 세미나에서 발표할 때, 매우 중요한 역할들을 했기 때문에 포기할 수 없었습니다.
[지속적인 검색으로 어떤 이슈인지](https://github.com/gatsbyjs/gatsby/issues/13072) 찾을 수 있었는데요, 결국 production 모드로 빌드하지 않으면
보여줄 수 없는 것이었고, 이 부분에 대해서 당장은 해결할 수 없었으나, 배포 후 정상 동작함은 확인할 수 있었습니다.

![404](./404.png)
![doc](./doc.png)

### 2. Plugins

Gatsby를 사용하면서 상당히 모듈화가 잘되어있다고 생각하고 있습니다. (물론 없는 플러그인에 대해선 번거로움이 생기지만)
graphql이나 간단하게 페이지를 만들기 위한 MD, MDX나 typescript, styled-component, filesystem (for graphql) 등등
official로 지원하는 플러그인이 꽤 많습니다. unofficial 중에서도 official 만큼이나 유명하고 많이 사용되는 것들도 많구요.
문제는 이런 플러그인들이 없으면 Gatsbyjs 자체가 타격을 입을 수 있을 정도로 규모가 크고 모듈화가 잘되어 있다는 점 입니다.

하나 또 해결해지 못한 부분은 [기본적으로 제공하는 trailing-slash를 없애주는 official 플러그인은 star도 많은데, 정상 동작을 하지 않는 상태](https://github.com/gatsbyjs/gatsby/issues/4836)인 것으로
뭔가 적극적으로 이슈가 해결되지 않는다는 느낌은 조금 받았으나 프레임워크가 만들어지는 과정이라 생각했을 때, 나름 편리하다고는 느꼈습니다.

### 가벼운 마무리

Gatsbyjs를 접하면서 `gatsby-config.js`, ` gatsby-node.js`는 아직도 익숙하지 않은 것 같습니다만, 사용하거나 이해하기 직관적이었고
이해하는데 큰 어려움은 없었습니다. graphql 문법에 익숙하지 않다면 러닝커브가 약간은 있겠지만, 이젠 왠만한 블로그 글이나 잘 설명된 docs가 많아
사용에 무리가 없다 여겨집니다.

게으름을 부리지만 않았다면 금새 익숙해져서 블로그도 옮겼겠지만, 어영부영 시작한지 3주정도 만에 만든 것 같습니다.
앞으로 블로그를 가볍게, 대신 많이, 활용해보려고 합니다. 꾸준하게 익숙해 지는게 중요할 것 같습니다.
