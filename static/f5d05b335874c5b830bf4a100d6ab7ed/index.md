---
title: "나이키 인스타 tracking 사이드 프로젝트"
date: "2022-03-20"
tags: [nike, raffle, sideproject, node]
---

전 개인적으로 신발에 관심이 많습니다. 이미 많이 알려진 [Kream](https://kream.co.kr/) 서비스에서는 발매된 신발들의 가격이
희소성으로 인해 몇배씩 뛰곤 하는데요. 선물을 위해 에어포스 화이트를 사려고 하다가 인스타에 발매 정보를 공지하는 것을 보고 알림을 주는 bot을 만들어보았습니다.

![airforce](./airforce.jpg)

---

서현, 강남 등등의 nike store별로 있는 인스타그램 계정에서 `raffle을 하는 경우, feed`가 올라옵니다. 그리고 `선착순 구매를 하는 경우, story` 가 올라옵니다.
그래서 feed가 올라올 때, story가 올라올 때 telegram으로 알림을 주는 봇을 생각하게 되었습니다.

처음엔 crowling을 통해 특정 html 태그 내부의 정보를 긁어가려고 했으나, crowling을 하면 데이터가 렌더링 되지 않은 html 정보들만 긁어져 왔습니다.
ssr을 하는게 아닌 것 같네요. 따라서 api를 사용할 수 밖에 없었습니다.

instagram에서는 공식적으로 api를 제공하지 않습니다. 이 api를 찾는 과정이 오래걸렸습니다. (방법이 있는건 아니고 삽질을 통해...)
또한 feed와 story에 대한 api는 성격이 완전히 달라보였습니다. story는 session정보가 필요했고, feed는 session정보가 필요하지 않았습니다.
story는 권한이 없으면 아무것도 노출되지 않고, feed는 공개유저에 대해선 권한이 없어도 노출되기 때문이 아닐까 생각했습니다.

raffle은 짧으면 30분 정도 진행했기 때문에 15분마다 돌아가는 cronjob을 통해 실행되게 해놨고,
선착순 구매는 시간이 생명이기 때문에...! 5분마다 cronjob을 돌게 해놨습니다.

조회해온 feed, story 정보는 object에 저장해놓고 cron을 통해 다음 실행으로 받아온 정보와 비교합니다. (isFirst 플래그를 통해 처음 조회 시에는 무조건 저장만 하게 합니다.)
비교 시, 데이터가 달라진다면 세팅된 텔레그램으로 알림을 보내게 됩니다. 이렇게 이전 객체와 비교만 하면 되니 DB에 데이터를 저장할 필요도 없습니다.

![bot](./bot.jpg)

Github: [nike-raffle-notifier](https://github.com/jicjjang/nike-raffle-notifier)