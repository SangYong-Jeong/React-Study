import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;

// es6 화살표 함수 -> 주로 함수를 파라미터로 전달할 때 유용하다.

// * 리액트 컴포넌트를 사용할 때 컴포넌트 내그 사이의 내용을 보여주는 props가 있다. 그건 바로!! props.children

// * propType를 통해 props를 검증할 수 있다. -> TypeChecking 개념
// ** 사용하기  위해서는 import로 'prop-types'를 불러온 후 컴포넌트의 propTypes 프로퍼티에 각각의 props의 타입정의
// * propTypes 설정 후 뒤에 isRequired를 붙여주면 부모 컴포넌트에서 해당 props를 안 줄 경우 에러를 뜨게 한다.
// ** 해당 기능을 설정하지 않을 경우 해당 props를 넘겨 받았는지 check하지 않는다.
