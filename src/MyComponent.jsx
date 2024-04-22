import React, { useState } from 'react';
import './MyComponent.css';

const MyComponent = ({ className, index }) => {
  const props = {
    className,
    index,
  };
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return <div className='title'>MyComponent</div>;
};

export default MyComponent;

// initialization
// mounting
// updation / updating
// unmounting
