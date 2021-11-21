import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };
  myRef = null; // ref를 설정할 부분
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    // static property이므로 인스턴스 접근 불가 this x
    // console.log('getDerivedStateFromProps');
    // console.log(prevState);
    // console.log(nextProps); // 업데이트 후 props
    if (nextProps.color !== prevState.color) {
      // prevState는 setState 이후의 state
      return { color: nextProps.color };
    }
    return null;
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(this.props); // 업데이트 전 props
    //console.log(nextProps); // 업데이트 후 props
    // console.log(this.state); // 업데이트 전 state
    // console.log(nextState); // 업데이트 후 state
    // console.log('shouldComponentUpdate');
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    // console.log(prevProps); // 이전 props 업데이트 전
    // console.log(this.props); // 현재 props 업데이트 후
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color; // Dom에는 이전 style의 color로 등록되어 있다.
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState); // 업데이트 전 props, 업데이트 전 state
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }
  render() {
    console.log('render');
    const style = {
      color: this.props.color,
    };
    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
