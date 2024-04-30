import React from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <>
      <button
        onClick={() => {
          navigation('/products');
        }}
      >
        Go to Product page
      </button>

      <Link to='/adminlayout'>Go to admin layout</Link>
    </>
  );
};

export default HomePage;
