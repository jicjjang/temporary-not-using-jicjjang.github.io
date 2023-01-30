---
title: "react의 ref 객체를 업데이트 의존성으로 넣어줘야 할 때"
date: "2023-01-29"
tags: [react, ref, useRef, dependency]
---

react의 ref는 dom을 가리키는 reference나 렌더링과 상관 없는 객체, 상태를 저장하기 위해서도 사용합니다.

렌더링과 무관하기 때문에 `ref.current`로 가리키고 있는 데이터가 업데이트 되더라도 re-render가 발생하지 않으며,
useEffect의 의존성 배열에 `ref.current` 값을 넣어놓았더라도 업데이트는 일어나지 않습니다.

물론 re-render가 발생하고 `ref.current`를 사용하는 로직에선 해당 값이 업데이트가 잘 된 모습을 볼 수 있습니다.

## ref에 값을 넣은 예시

우선 ref를 dom을 가리키는 용도가 아닌 값을 저장하는 용도로 사용해보겠습니다.

```tsx
import { useEffect, useRef } from "react";

const Example = () => {
  const ref = useRef(0);

  useEffect(() => {
    // ref.current에 값이 들어오고 업데이트 발생하면 호출됨
    // useEffect 특성상 첫 렌더 시에도 호출되지만, 첫 렌더때는 ref 값이 0이어서 스킵됨
    if (ref.current) {
      console.log(`!!! Update ref !!! => ${ref.current}`);
    }
  }, [ref.current]);

  return (
    <div>
      <button onClick={() => {
        ref.current = ref.current + 1;
      }}>
        테스트
      </button>
    </div>
  );
};

export default Example;
```

위 예시에 대한 [링크](https://codesandbox.io/s/objective-oskar-f9vrtz?file=/src/App.js)입니다.

테스트라는 버튼을 아무리 눌러도 콘솔에는 아무것도 찍히지 않습니다.
`ref.current`는 계속 업데이트 되고 있지만, re-render가 발생하지 않아 보이지 않는것이죠.

이번엔 코드를 한번 수정해보겠습니다.

```tsx
import { useEffect, useRef, useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  useEffect(() => {
    // ref.current에 값이 들어오고 업데이트 발생하면 호출됨
    // useEffect 특성상 첫 렌더 시에도 호출되지만, 첫 렌더때는 ref 값이 0이어서 스킵됨
    if (ref.current) {
      console.log(`!!! Update ref !!! => ${ref.current}`);
    }
  }, [ref.current]);

  return (
    <div>
      <button onClick={() => {
        ref.current = count + 1;
        setCount(count + 1);
      }}>
        테스트
      </button>
    </div>
  );
};

export default Example;
```

위 예시에 대한 [링크](https://codesandbox.io/s/late-wind-ttybjj?file=/src/App.js)입니다.

테스트 버튼을 클릭할 때마다 re-render를 위해 count를 업데이트 해줬습니다.
re-render가 발생하며 useEffect 로직을 지나가는데, `ref.current`의 값이 이전 렌더와 달라졌기 때문에
버튼을 클릭할 때 마다 `!!! Update ref !!! => count` 로그가 지속적으로 찍히게 됩니다.

## ref에 dom을 넣은 예시1

이번엔 ref를 dom에 할당해보겠습니다.

```tsx
import { useEffect, useRef, useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    console.log("Update Count", ref.current, count);
    setCount(count + 1);
  }, [ref.current]);

  console.log("render", ref.current, count);

  return (
    <div ref={ref}>
      <div>카운트: {count}</div>
      <button
        onClick={() => {
          ref.current = null;
        }}
      >
        버튼
      </button>
    </div>
  );
};

export default Example;
```

위 예시에 대한 [링크](https://codesandbox.io/s/practical-alex-lh6h1d?file=/src/App.js)입니다.

콘솔로 로그를 찍어줬는데, 이는 ref의 할당을 보기 위함입니다.
콘솔의 결과는 아래처럼 나옵니다.

```
// 순서대로 ["render" or "Update Count" | dom | count]
render undefined 0
Update Count <dom> 0
render <dom> 1
Update Count <dom> 1
render <dom> 2
```

첫 렌더 시 아직 할당이 없던 dom에 할당이 이루어지게 됩니다.
이후 useEffect를 통해 콘솔이 찍힐 때, 다시 렌더될 때의 콘솔에는 `ref.current`에 dom이 할당되어 있게 됩니다.

***의존성이 `ref.current에` 밖에 없는데, count의 업데이트로 인해 한번 더 useEffect가 실행된다?***
***이는 react가 dev 모드일 때만 발생하며, StrictMode 설정이 되어있을 경우에 실행됩니다.***
***(codesandbox에서 index.js의 StrictMode를 제외해도 발생하는데, 이는 가시적으로 설정하지 않은 react config에 설정되어있기 때문일 수 있습니다.)***

화면에는 `카운트: 2` 이라는 텍스트와 `버튼` 이 노출되어 있는데요, 버튼을 클릭하면 `ref.current`에 null을 할당하도록 해놨습니다.
클릭하면 어떻게 될까요?

위에서 설명했듯이 ref의 업데이트는 추적하지 않기 때문에 아무런 변화가 나타나지 않습니다.
그러면 클릭할 때 상태를 한번 업데이트하도록 해보겠습니다.

```tsx
...
  <button
    onClick={() => {
      ref.current = null;
      setCount(0); // 이 한줄만 추가!
    }}
  >
    버튼
  </button>
...
```

상태 업데이트까지 추가된 코드에 대한 [링크](https://codesandbox.io/s/cool-dewdney-5q3xqf)입니다.

`setCount` 를 추가하고 버튼을 다시 클릭하면 아래와 같은 로그가 출력됩니다.

```
// 순서대로 ["render" or "Update Count" | dom | count]
render null 0
Update Count null 0
render null 1
```

ref.current가 null이 된것을 확인할 수 있습니다.
(setCount로 업데이트만 시키면 되기에 들어가는 값은 상관이 없으며, ref.current가 업데이트 되었으므로 useEffect가 실행됩니다.)

## ref에 dom을 넣은 예시2

다른 예시를 하나 더 알아보겠습니다.

```tsx
import { useEffect, useRef, useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [isShowCount, setIsShowCount] = useState(false);
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      setIsShowCount(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (ref.current) {
      console.log("Update Count", ref.current, count);
      setCount(count + 1);
    }
  }, [ref.current]);

  console.log("render", ref.current, count);

  return isShowCount ? (
    <div ref={ref}>
      <div>카운트: {count}</div>
    </div>
  ) : null;
};

export default Example;
```

위 예시에 대한 [링크](https://codesandbox.io/s/amazing-colden-t3qjs5?file=/src/App.js)입니다.

이번엔 컴포넌트 영역을 모두 가리고, setTimeout 1초를 지나면 카운트가 노출되도록 해놨습니다.
로그에는 `render undefined 0`이 두번 뜨게됩니다.
useEffect 안에서는 `ref.current`가 최초 렌더링 시 없었고, `ref.current`를 통해 업데이트를 확인할 수 없기 때문에
그대로 동작이 끝나게 됩니다.

이번에도 코드를 바꿔볼텐데, 위에 알아본 `ref에 값을 넣은 예시`, `ref에 dom을 넣은 예시1`과는 다르게 어느정도 해결책이 있습니다.

```tsx
import { useCallback, useEffect, useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [isShowCount, setIsShowCount] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShowCount(true);
    }, 1000);
  }, []);

  const ref = useCallback((dom) => {
    if (dom) {
      console.log("Update Count", dom, count);
      setCount(count + 1);
    }
  }, []);

  console.log("render", ref.current, count);

  return isShowCount ? (
    <div ref={ref}>
      <div>카운트: {count}</div>
    </div>
  ) : null;
};

export default Example;
```

위 예시에 대한 [링크](https://codesandbox.io/s/silly-carlos-fskkoq?file=/src/App.js)입니다.

ref가 useCallback 함수로 변경되었습니다.

```ts
  ...
  // Bivariance hack for consistent unsoundness with RefObject
  type RefCallback<T> = { bivarianceHack(instance: T | null): void }["bivarianceHack"];
  type Ref<T> = RefCallback<T> | RefObject<T> | null;
  type LegacyRef<T> = string | Ref<T>;
  ...
```

ref의 타입은 `LegacyRef`를 가리킵니다. `LegacyRef`는 `string | Ref<T>`를 가리키고,
`Ref` 는 `RefCallback<T> | RefObject<T> | null` 를 가리킵니다.

결론적으로 RefCallback 타입을 통해 callback 함수를 넣어도 괜찮다는 결론이 나옵니다.

주의해야 할 점은 ref에 들어갈 callback 함수가 업데이트 되면 렌더 되면서 다시 호출되게 됩니다.
예시에서는 `setCount`을 통해 Maximum call exceed 에러가 발생할 수 있으므로 의존성 없는 useCallback으로 감싸줍니다.

***일반 함수를 useCallback으로 감싸지 않으면 re-render마다 업데이트 됩니다.***
***여기서 `RefCallback`은 일반 함수와 동일하다고 생각해주세요.***
***주석과 `bivarianceHack` 에 대해선 다음 포스트로 엮어보겠습니다.***

렌더가 이루어지면서 dom의 ref가 할당된 뒤, useCallback의 프로퍼티로 dom node 인자가 들어오게 됩니다.
이제 기존에 `ref.current`를 가지고 useEffect에서 실행했던 비즈니스 로직을 dom node 인자를 가지고 진행하면 됩니다.

---

`ref에 값을 넣은 예시`, `ref에 dom을 넣은 예시1`, `ref에 dom을 넣은 예시2` 총 3가지 예시를 봤습니다. 이를 통해 아래 내용들을 알 수 있었습니다.

- `dom의 ref 속성에 ref object를 담을 경우`, `ref에 값을 넣는 경우` 모두 ref 업데이트를 추적할 순 없다.
- ref에는 callback 함수를 대신 넣을 수 있으며 callback 함수가 업데이트 되고 렌더가 될 때 호출된다.

여러 예시에서 ref의 강제 업데이트를 위해 setCount를 호출해 봤는데
`ref에 값을 넣은 예시`, `ref에 dom을 넣은 예시1`과 같은 케이스에
정말 꼭 필요하다면 state로 사용하고 업데이트를 미루는 방식을 지향해야 합니다.
그리고 ref의 강제 업데이트를 위해 re-render를 만들어내면 안됩니다.
하나의 업데이트라도 서비스에 영향 없이 줄여서 성능을 올려야 하는데 일부로 업데이트를 만들 수는 없으니까요.

결론적으로 ref는 dom을 가리키는게 아니라면 최대한 re-render와 관련 없는 데이터를 저장해놓는 용도로만 조심히 써야 한다는 것입니다.
