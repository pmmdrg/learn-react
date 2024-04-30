import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <button
      onClick={() => {
        navigation('/');
      }}
    >
      Back to Home
    </button>
  );
};

export default ProductPage;
