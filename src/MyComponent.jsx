import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MyComponent.css';

const MyComponent = ({ className = 'title', index }) => {
  const [count, setCount] = useState(0);
  const [isActivated, setActivated] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleEffect = () => {
    setActivated(!isActivated);
  };

  useEffect(() => {
    setTimeout(() => {
      console.log('activated:', isActivated);
    }, 3000);
  }, [isActivated]);

  return (
    <div className={className}>
      <button onClick={handleClick}>Click me {count} times!</button>
      <button onClick={handleEffect}>Click for activate effect</button>
    </div>
  );
};

MyComponent.propTypes = {
  className: PropTypes.string.isRequired,
};

export default MyComponent;

// initialization
// mounting
// updation / updating
// unmounting
