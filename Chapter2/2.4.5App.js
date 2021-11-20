import React, { Fragment } from 'react';

function App() {
  const name = '리액트';
  return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>;
}

export default App;

// 리액트에서는 false or null or undefined를 렌더링할 때는 아무것도 view에 나타나지 않는다.
// * 유의해야할 점 -> 숫자 0은 예외적으로 화면에 나타난다.
// * JSX를 여러 줄로 작성할 때 괄호로 감싸고, 한 줄로 표현할 수 있는 JSX는 감싸지 않는다. JSX를 괄호로 감싸는 것은 필수 사항이 아니다. 감싸도 되고 감싸지 않아도 된다.

// * 리액트 함수형 컴포넌트에서 undefined를 반환하여 렌더링하는 상황을 만들면 안된다.
