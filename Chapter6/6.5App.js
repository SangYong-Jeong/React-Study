import React, { Component } from 'react';
import IterationSample from '../src/IterationSample';

class App extends Component {
  render() {
    return <IterationSample />;
  }
}

export default App;
// * 주의해야할 점 처음 렌더링 될 때는 this.scrollBox 값이 undefined이므로 오류가 발생할 수 있다. ? 구체적으로 why?
