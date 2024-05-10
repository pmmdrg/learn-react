import axios from 'axios';

export const getProducts = async () => {
  const { data } = await axios.get(
    'https://663a35eb1ae792804bee7c09.mockapi.io/api/v1/products'
  );
  console.log(data);
  return data;
};
