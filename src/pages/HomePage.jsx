import React, { createContext, useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { axiosInstance } from '../configs/axiosInstance.js';
import { getProducts } from '../services/productServices.js';
import { Button } from '@mui/material';

export const TempContext = createContext(null);

const HomePage = () => {
  const [phones, setPhones] = useState([]);
  const [products, setProducts] = useState([]);
  const temp = 123;
  const navigation = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch('https://663a35eb1ae792804bee7c09.mockapi.io/api/v1/products')
      .then((res) => res.json())
      .then((result) => {
        if (result) setPhones(result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('Da chay xong thao tac call API boi fetch');
      });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axiosInstance.get('/products');
      setProducts(data);
    };

    fetchData();
  }, []);

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
      <p>Data from mockapi by fetch method</p>
      <ul>
        {phones.map((phone, index) => {
          return (
            <li key={index}>
              <p>Ten san pham: {phone?.title}</p>
              <p>Mau sac: {phone?.color}</p>
              <p>So luong: {phone?.quantity}</p>
            </li>
          );
        })}
      </ul>
      <br />
      <p>Data from mockapi by axios</p>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              <p>Ten san pham: {product?.title}</p>
              <p>Mau sac: {product?.color}</p>
              <p>So luong: {product?.quantity}</p>
            </li>
          );
        })}
      </ul>
      <br />
      <Button variant='contained'>Demo MUI</Button>
      <Footer />
    </>
  );
};

export default HomePage;
