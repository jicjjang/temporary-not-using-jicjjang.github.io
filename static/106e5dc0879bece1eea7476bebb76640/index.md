---
title: "vscode prettier formatOnSave 잘 사용하고 계신가요?"
date: "2020-12-21"
tags: [javascript, vscode, prettier]
---

vscode를 사용하는데 언젠가부터 저장할때마다 `formatOnSave` 옵션이 잘 안되더라구요.
이직 후 거의 3개월 이상 미뤄두다 진행중인 프로젝트 Renewal를 맞아 (ㅋㅋ) 함께 개선하고 가기로 했습니다.

저는 기본적으로 vscode의 plugin 에서 prettier formatter를 설치하고, npm module 내의 prettier도 설치하고 사용합니다.
vscode plugin은 제 환경에서, npm module은 팀원들과의 싱크를 위해서 이므로, 기존에 `formatOnSave` 옵션이 안 될때도 command line에서의 prettier는 (당연하지만) 잘 동작하였습니다.

검색하니 제 환경의 문제는 아니었고, 최근 결과 (20년 10월~) 로 [동일한 이슈에 대한 스레드](https://github.com/microsoft/vscode/issues/108447)가 있었습니다.

![setting](./setting.png)
![plugin](./plugin.png)

`esbenp`는 배포한 author의 id 입니다.

`Cmd + , > "Default Formatter" 검색 > esbenp.prettier-vscode` 옵션을 설정하면 해결 됩니다.


