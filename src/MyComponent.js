import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: '기본 이름',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    console.log(this);
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}
      </div>
    );
  }
}

export default MyComponent;

// * defaultProps와 propTypes를 사용해 해당 컴포넌트에 어떤 props가 필요한지 쉽게 알 수 있어 개발 능률이 좋아질 수 있다.

// * defaultProps와 propTypes는 함수 안 또는 인스턴스에 설정하는 것이 아니라 함수자체의 property 값 또는 클래스의 static property로 선언하고 사용해야 한다.

// * props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며, 자식 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있다. props를 바꾸려면 부모 컴포넌트에서 바꿔주어야 한다. 즉, 자식 컴포넌트에서는 props 값을 변경시킬 수 없다는 것을 의미한다.
