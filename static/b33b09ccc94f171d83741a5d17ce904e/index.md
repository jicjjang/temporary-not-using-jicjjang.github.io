---
title: "잘못된 hoisting의 이해 바로잡기"
date: "2021-07-29"
tags: [javascript, basic, hoisting]
---

hoisting자바스크립트의 기초를 공부하다 보면 알게되는 그 호이스팅입니다.

`아니, 다 알고있는 사실을 왜 올려?`

기초중의 기초라 할 수 있지만 잘못 알려진 부분이 있어서 (나 또한 잘못 알고 있어서) 그 부분에 대해 아주 짧고 간단하게 알아볼까 합니다.

---

![fault1](./fault1.png)

---

![fault2](./fault2.png)

---

![fault3](./fault3.png)

---

javascript를 공부하며 알 수 있는 기초적인 내용인 hoisting은 구글링을 통해 쉽게 찾아볼 수 있습니다. 하지만 그 중에서도 hoisting은 내용이 많이 갈리고 있습니다.

바로 `function과 var만 호이스팅이 일어난다.` 라는 것입니다.

hoisting은 `var`, `let`, `const`, `function`, `function*`, `class`등, 모든 선언문에 적용되는 특징입니다. 그렇다면, 왜 많은 사람들이 function과 var만 가능하다는 식으로 알고 있을까요?

그것은 `function`과 `var`만 hoisting을 통해 버그와 같다고 느낄만한 동작이 수행되기 때문입니다.

기본적으로 변수는 선언 / 초기화 / 할당 이라는 3가지 단계를 거치게 됩니다.

`var a = 10;` 이라는 변수 선언이 있을 때, `a`에 바로 10이 들어가는 것이 아니라, `undefined`로 우선 초기화가 된 후, 10이 들어가게 되는 것이지요.
이 과정에 선언 / 초기화 / 할당이 모두 들어가게 됩니다.

여기서 `function`, `var 변수`는 어떠한 곳에(사용하는 곳보다 하단에 위치하도록 선언 한다는 등) 선언을 하더라도 해당 scope에 들어왔을 때, 제일 먼저 선언과 초기화 (메모리 할당, undefined 주입)가 일어나게 됩니다. 그렇기 때문에 선언 부분 이전에 해당 `function`, `var 변수`에 접근한다 하더라도 `undefined`가 나오게 됩니다.

그 이외 나머지 `const`, `let`, `function*`, `class`들은 선언단계만 실행되게 되고, 초기화와 할당은 runtime으로 해당 라인을 지나갈 때 실행됩니다. 그렇기 때문에 정의되지 않았다는 에러문구가 나올 수밖에 없습니다.

```js
console.log(a); // undefined
var a = 10;

// ---

console.log(b); // Uncaught ReferenceError: Cannot access 'b' before initialization
const b = 20;
```

위의 b와 같이 선언은 되었으나 초기화가 되지 않아 에러가 발생하는 구간을 TDZ(Temporary Dead Zone) 이라고 부릅니다.
