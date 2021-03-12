---
title: "React Advanced guides > Reconciliation"
date: "2021-02-07"
tags: [react, reconciliation, diff, render, javascript]
---

* 해당 내용은 공식 React문서의 [Reconciliation](https://reactjs.org/docs/reconciliation.html)를 참고하여 작성합니다.

---

```ts
// case 1
export const PlusMinus: React.FC<IProps> = ({
  onClickPositiveNegative,
  isPlus
}) =>
  !isPlus ? (
    <button type="button" className={classnames('button')} onClick={() =>
      onClickPositiveNegative('plus')
    }>
      minus
    </button>
  ) : (
    <button type="button" className={classnames('button', 'green')} onClick={() =>
      onClickPositiveNegative('minus')
    }>
      <i className={classnames('add')}>
        <PlusIcon />
      </i>
      plus
    </button>
  );

// case 2
export const PlusMinus: React.FC<IProps> = ({
  onClickPositiveNegative,
  isPlus
}) => (
    <button type="button"
      className={isPlus? classnames('button') : classnames('button', 'green')
      }
      onClick={() => onClickPositiveNegative(isPlus ? 'plus' : 'minus')}>
      isPlus ? <i className={classnames('add')}>
        <PlusIcon />
      </i>
      : 'minu'
      plus
    </button>
  );
```

개발 진행중에 퍼블리셔 분들이 전달해주신 코드에 이벤트와 로직을 입히다 문득 `condition에 대해 컴포넌트 전체를 비교하는것보다 부분부분 비교하는게 rendering시 비교 알고리즘에 효일적일텐데... 하지만, 비교 부분이 경우에 따라 많아지면 가독성이 떨어지고...`
라는 생각과 함께 `render가 일어날 때의 비교는 어떤 과정으로 되는걸까, 어떻게 더 효과적으로 하는 것일까` 하는 의문이 생겼습니다.

다행히 잘 정리된 문서가 이미 있었고 의문을 정리할 수 있게 되었습니다.

```
// https://reactjs.org/docs/reconciliation.html
There are some generic solutions to this algorithmic problem of generating the minimum number of operations to transform one tree into another.
However, the state of the art algorithms have a complexity in the order of O(n3) where n is the number of elements in the tree.

If we used this in React, displaying 1000 elements would require in the order of one billion comparisons.
...
```

변화가 일어나 re-render가 일어나게 될 때, 더 많은 엘리먼트를 새롭게 (계산 &)그려줄 때마다 비교 연산량이 늘어난다는 말입니다.

브라우저는 화면을 그릴 때 발생하는 repaint와 reflow에 대해 얘기해봅시다.

`repaint`는 가시성에 영향을 주는 엘리먼트가 업데이트 되면 발생하고 (opacity, outline, visibility, color...) `reflow`는 엘리먼트의 변화(위치, 크기, 길이 등)로 인해 발생하게 됩니다.

엘리먼트 하나를 수정하더라도 하위 + 상위의 엘리먼트들에게 영향이 퍼져나갈 수 있고(reflow or reflow + repaint), 이 계산으로 인해 문서(일부 혹은 전체)가 repaint 될 수 있습니다.

브라우저의 reflow로직과 동일하게, 비교하는 두 DOM tree의 엘리먼트가 같다면 엘리먼트에서 다른 property만 찾아 업데이트 하게 됩니다.
```tsx
<div className="before" title="stuff" />
// vs
<div className="after" title="stuff" />

// className만 수정
```

비교하는 두 DOM tree의 엘리먼트가 다르다면 해당 엘리먼트 부터 자식 엘리먼트는 새롭게 렌더하게 됩니다. (이 과정에서 unmount, mount life cycle이 실행됨)
```tsx
<div>
  <Counter />
</div>
// vs
<span>
  <Counter />
</span>

// 아예 새롭게 렌더
```

또한 이런 과정이 루트 엘리먼트에서 자식 엘리먼트 순서로 퍼져나가게 됩니다.

---

지금까지 설명한 내용은 최 상단 예제의 `case 1`에 해당하는 내용이었습니다. 비교 과정에서 DOM이 완전히 바뀌게 되고, 이를 업데이트 하는 과정에서 일어나는 부분에 대한 얘기인 것이죠.

이번엔 `case 2`에 대한 얘기를 간단하게 해보겠습니다. 결국 렌더링 비용을 줄이기 위해선 근본적으로 렌더링 횟수 자체를 줄이면 되는 것입니다.
`case 1 처럼 비교가 1번 들어간다, case 2처럼 부분적으로 비교가 3번 들어간다` 라는 부분이 중요한 것이 아니라 `DOM tree가 비교될 때 일어나는 비교 횟수`가 중요한 것입니다.
(onClick에 들어가는 함수의 매개변수에 조건문을 넣는게 문제가 아닌, jsx dom tree를 비교하는 부분이 중요)
(className같은 property는 예외일 수 있음. rendering에 영향을 주는 프로퍼티도 있다.)

이 횟수를 줄이기 위해 case 2 처럼 `isPlus`를 비교하는 구문이 늘어나 가독성이 조금 떨어진다 하더라도 비교하는 DOM tree자체를 줄이는게
성능 향상에 도움이 되게 됩니다.

```tsx
export const PlusMinus: React.FC<IProps> = ({
  onClickPositiveNegative,
  isPlus
}) =>
  !isPlus ? (
    <button type="button" className={classnames('button')} onClick={() =>
      onClickPositiveNegative('plus')
    }>
      <a>
        <b>
          <c>
          </c>
        </b>
        <d1>
          blahblah
        </d1>
      </a>
    </button>
  ) : (
    <button type="button" className={classnames('button', 'green')} onClick={() =>
      onClickPositiveNegative('minus')
    }>
      <a>
        <b>
          <c>
          </c>
        </b>
        <d1>
          blahblah
        </d1>
      </a>
      plus
    </button>
  );
```

case 1, case 2 예제는 간단했지만 위와 같이 조금 복잡해지는 컴포넌트가 있다고 가정하겠습니다.
page의 꽤나 상단에 위치한 컴포넌트에 update가 일어나 리랜더가 된다면, 하위에 있는 수많은 DOM tree가
바뀌지 않았음에도 비교하는 과정을 거치게 됩니다. 이런 과정에서 비용이 들게 됩니다.

(차라리 중간에 다른 엘리먼트로 바뀌면 비교되는 과정이 종료되고 완전히 새로 그릴텐데 말이죠?)

---

Reconciliation에 대한 얘기를 더 해보겠습니다. eslint의 recommend plugin 들을 쓰게되면 보통 기본적으로 들어가는 기능이지만
자식 앨리먼트에 대해 key값을 넣어주지 않으면 warning, error를 내뱉게 됩니다.

```tsx
<ul>
  <li>2</li>
  <li>3</li>
</ul>
// vs
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

이러한 비교를 거쳐갈 때, 알고리즘이 firth child가 바뀐건지 last child가 바뀐것인지 알기 어렵습니다.
따라서 React는 아예 key값이 없는 반복되는 자식 요소에 대해 새롭게 그리게 됩니다.


```tsx
<ul>
  <li key="ajkhsbdfjhabdsf">1</li>
  <li key="kwjentkjsdnfgkj">2</li>
  <li key="asdkfjnakjsdfnk">3</li>
</ul>
```

ps. key값은 최대한 난수로 하는게 좋습니다. 반복문이 돌아갈 때, 요소의 순서가 바뀐다면? React에선 이를 구별할 수 없습니다.
id로 쓰이는 key값이 기존 값들과 동일하게 있으니, 그저 값이 업데이트 된 것으로 인지하겠죠. 전혀 이점을 얻을 수 없게 됩니다.

```tsx
let temp = ['one', 'two', 'three'];

const onClickEvent = () => {
  const splicedValue = temp.splice(0, 1); // 0번째 요소 1개를 잘라냄
  temp = temp.concat(splicedValue); // 기존 array의 맨 뒤로 가져다 붙임
}

return (
  <ul>
    {
      temp.map((number, index) => <li key={index} onClick={onClickEvent}>{number}</li>)
    }
  </ul>
);
```

---

결국 중요한 점은 DOM Tree에 대해 상위 DOM에서의 비교 횟수를 줄이고, 작은 DOM으로 비교 구문을 옮기거나
가능하면 비교하는 부분을 프로퍼티로 옮기는 작업이 성능상 도움을 주게 됩니다.
