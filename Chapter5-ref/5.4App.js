import React, { Component } from 'react';
import ScrollBox from '../src/ScrollBox';

class App extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
// * 주의해야할 점 처음 렌더링 될 때는 this.scrollBox 값이 undefined이므로 오류가 발생할 수 있다. ? 구체적으로 why?
