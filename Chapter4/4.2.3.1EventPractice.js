import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    console.log(this);
    this.setState({
      message: e.target.value,
    });
  }

  handleClick() {
    console.log(this);
    alert(this.state.message);
    this.setState({
      message: '',
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          text="text"
          name="message"
          value={this.state.message}
          placeholder="아무거나 입력해 보세요"
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;

// * 콘솔에 기록되는 e 객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체이다. 네이티브 이벤트객체와 인터페이스가 같으므로 똑같이 사용하면 된다.

// ** SyntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화 되므로 정보를 참조할 수 없다. 0.5초 뒤에 e객체를 참조하면 e객체 내부의 모든 값이 비워지게 된다. 비동기적으로 이벤트 객체를 참조할 일이 있다면 e.persist() 함수를 호출해 주어야 한다. -> 나중에 다시 봐야할 부분 (정확히 이해 안감)
