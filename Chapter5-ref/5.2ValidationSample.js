import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;

// * state를 사용하여 필요한 기능 구현 but state만으로 해결할 수 없는 기능이 있다.
/**
 * 1. 특정 input에 포커스 주기
 * 2. 스크롤 박스 조작하기
 * 3. Canvas 요소에 그림 그리기 등
 */

// * 클래스형 컴포넌트에서 DOM에 ref 설정하는 방법
// ** 1. ref를 달고자 하는 특정 DOM 요소에 ref라는 콜백 함수를 props로 전달 콜백함수는 ref를 파라미터로 전달 받고 함수 내부에서 해당 ref를 인스턴스 멤버변수와 mapping 여기서 인스턴스의 멤버 변수는 어떤 이름이든 상관 x
// ** 2. createRef를 통한 ref 설정 -> React.createRef()를 멤버 변수에 담아주고 특정 DOM에 ref props로 멤버변수를 넣어 주면된다.

// *** 두 가지 방식의 차이점 -> 해당 멤버변수에 .current로 더 들어가냐 안들어가냐의 차이 1번 방식은 안들어가고 2번 방식은 .current로 들어간다.
