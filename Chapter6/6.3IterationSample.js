import React from 'react';

const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;

// * 고유한 값이 없을 때만 index 값을 key로 사용해야 한다.
// * index를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링 하지 못한다. -> 공식문서 참고 필요
// ** key의 필요성 -> key를 통해 Virtual DOM 비교시 효율적으로 비교 가능
