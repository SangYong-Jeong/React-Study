import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // state의 초깃값 설정하기
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회한다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다.
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;

// * 클래스형 컴포넌트에서 constructor를 작성할 때 반드시 super(props)를 호출해 주어야한다. 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출해 준다.

// * state가 변경되면 다시 렌더링 시작! == 함수 또는 클래스 다시 호출
// * 첫 렌더링 시에만 파일들을 전부 다 읽고 이후에는 파일을 안읽는듯

// * this.setState 함수는 인자로 전달된 객체 안에 들어 있는 값만 바꾸어 준다. (아예 통으로 바꾸는거 아님!)
