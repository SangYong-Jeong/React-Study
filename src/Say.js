import React, { useState } from 'react';

const Say = () => {
  let [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );
};

export default Say;

/**
 * * state를 사용할 때 주의사항
 * 1. state 값을 바꿀 때에는 무조건 setState 혹은 useState를 통해 전달받은 세터 함수를 사용해야 한다.
 * 2. 배열이나 객체를 업데이트해야 할 때에는 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트 한 후, 그 사본의 상태를 setState 혹은 세터 함수를 통해 업데이트 한다.
 * ???? 객체야 그렇다 할 수 있지만 배열의 경우 let으로 선언 하고 push를 통해 원본 배열을 바꾼 후 그 배열을 세터함수에 넣으면 어떻게 될까? -> 안됨  이유는 모르겠는데 아예 새로운 배열이나 객체를 세터함수의 인자로 넣어주어야 제대로 작동됨!!!!
 * * 세터함수를 이용해야 리액트가 state 변경을 알아차리고 다시 렌더링 하기 때문이다.
 */

// ** props는 부모 컴포넌트가 설정하고, state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트할 수 있다.

/**
 * 이벤트를 사용할 때 주의 사항
 * 1. 이벤트 이름은 카멜 표기법으로 작성한다.
 * 2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.
 * 3. DOM 요소에만 이벤트를 설정할 수 있다. (부모 컴포넌트 입장에서 자식컴포넌트에 이벤트를 자체적으로 설정할 수 없다.)
 */
