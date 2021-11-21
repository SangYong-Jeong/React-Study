import React from 'react';
import MyComponent from '../src/MyComponent';

const App = () => {
  return (
    <MyComponent name="리액트" favoriteNumber={1}>
      리액트
    </MyComponent>
  );
};

export default App;

/**
 * *  컴포넌트를 선언하는 방식은 두 가지
 * *  1. 함수형 컴포넌트
 * *  2. 클래스형 컴포넌트
 * */

// * 클래스형 컴포넌트에서는 render 함수가 꼭 있어야 하고, 그 안에서 보여주어야 할 JSX를 반환해야 한다.
