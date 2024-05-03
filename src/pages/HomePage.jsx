import React, { createContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const TempContext = createContext(null);

const HomePage = () => {
  const temp = 123;
  const navigation = useNavigate();
  const location = useLocation();

  return (
    <>
      <TempContext.Provider value={temp}>
        <Header />
      </TempContext.Provider>
      <button
        onClick={() => {
          navigation('/products');
        }}
      >
        Go to Product page
      </button>

      <Link to='/adminlayout'>Go to admin layout</Link>
      <br />
      <Footer />
    </>
  );
};

export default HomePage;
