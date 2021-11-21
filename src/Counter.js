import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회한다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다.
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state);
              }
            );
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

// ** constructor 메서드를 선언하지 않고도 state 초깃값을 설정할 수 있다.

// *** this.setState를 이용해 state 값을 업데이트 한다. -> 중요!! this.setState는 state값을 동기가 아닌 비동기적으로 업데이트 한다.

// **** 이에 대한 해결책은 this.setState를 사용할 때 객체 대신에 함수를 인자로 넣어주는 것이다.

/*
  ex)
    this.setState((prevState, props) => { prevState는 기존 상태, props는 현재 지니고 있는 props를 가리킨다. 업데이트 하는 과정에서 props가 필요하지 않다면 생략해도 된다.
      return {
        업데이트하고 싶은 내용
      }
    })
*/

// ** this.state는 setState안의 모든 처리가 끝나고 나서야 업데이트 된다. setState의 인자로 값을 바로 준 경우 모아서 통째로 처리하게 되고 함수를 준 경우에는 해당 함수를 각각 큐에 넣고 스택에서 실행하는 개념

// *** setState를 사용하여 값을 업데이트하고 난 다음에 특정 작업을 하고 싶을 때는 setState의 두 번째 파라미터로 콜백함수를 등록하여 작업을 처리할 수 있다.
