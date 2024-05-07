import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementWithAmount } from '../redux/countSlice';

const cars = ['BMW', 'Volvo', 'Lamborghini', 'Audi', 'Ferrari'];

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
      <ul>
        {cars.map((car, index) => {
          return <li key={index}>{car}</li>;
        })}
      </ul>
    </>
  );
};

export default Footer;
