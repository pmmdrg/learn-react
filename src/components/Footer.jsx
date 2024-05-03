import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementWithAmount } from '../redux/countSlice';

const Footer = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.value);

  const handleIncrease = () => {
    dispatch(increment());
  };
  const handleDecrease = () => {
    dispatch(decrement());
  };
  const handleIncreaseWithAmount = () => {
    dispatch(incrementWithAmount(parseInt(amount)));
  };

  return (
    <>
      <input
        type='text'
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button onClick={handleIncreaseWithAmount}>Increase with amount</button>
      <button onClick={handleIncrease}>Increase</button>
      <div>{count}</div>
      <button onClick={handleDecrease}>Decrease</button>
    </>
  );
};

export default Footer;
