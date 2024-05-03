import React, { useContext } from 'react';
import HomePage, { TempContext } from '../pages/HomePage';

const Button = () => {
  const temp = useContext(TempContext);
  return <div>{temp}</div>;
};

export default Button;
