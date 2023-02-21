import React from 'react';

const Button = ({ text, children }) => {
  const message = () => {
    alert(`You clicked button ${text}!`);
  }

  // return <button onClick={message}>Button {text}</ button>
  return <button onClick={message}>{children}</ button>
};

export default Button;
