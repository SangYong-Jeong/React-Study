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
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            // 위 코드와 아래 코드는 완전히 똑같은 기능을 한다.
            // 아래 코드는 함수에서 바로 객체를 반환한다는 의미이다.
            this.setState((prevState) => ({ number: prevState.number + 1 }));
            // this.setState(this.state.number);
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
