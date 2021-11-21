import React, { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { clientHeight, scrollHeight } = this.box;
    /* 앞 코드에는 비구조화 할당 문법을 사용했습니다.
      다음 코드와 같은 의미입니다.
      const scrollHeight = this.box.scrollHeight
      const clientHeight = this.box.clientHeight
      scrollHeight - clientHeight => 스크롤을 맨아래로 내렸을 때의 결과 값
    */
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  render() {
    console.log(this);
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };
    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)',
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;

// scrollTop, scrollHeight, clientHeight -> http://lab.naminsik.com/158 참고
