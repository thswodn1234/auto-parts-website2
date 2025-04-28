import React from 'react';

const Button = ({ count, onIncrease }) => {
  return <button onClick={onIncrease}>Count is {count} </button>;
};

export default Button;
