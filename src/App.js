import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';

// 랜덤 색상을 생성합니다.
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777216).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
// * 주의해야할 점 처음 렌더링 될 때는 this.scrollBox 값이 undefined이므로 오류가 발생할 수 있다. ? 구체적으로 why?
