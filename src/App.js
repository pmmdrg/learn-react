// import React, { useState } from 'react';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';

// import MyComponent from './MyComponent';
// import Todos from './Todos';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import User from './pages/User';
import Statistic from './pages/Statistic';

import AdminLayout from './layouts/AdminLayout';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/products',
    element: <ProductPage />,
  },
  {
    path: '/adminlayout',
    element: <AdminLayout />,
    children: [
      {
        path: 'user',
        element: <User />,
      },
      {
        path: 'statistic',
        element: <Statistic />,
      },
    ],
  },
]);

function App() {
  // const [isMount, setIsMount] = useState(false);
  // return (
  //   <>
  //     <button
  //       onClick={() => {
  //         setIsMount(!isMount);
  //       }}
  //     >
  //       Toggle
  //     </button>
  //     {isMount && <MyComponent className='new-title' />}
  //   </>
  // );

  // const [count, setCount] = useState(0);
  // const [todos, setTodos] = useState(['todo 1', 'todo 2']);

  // const increment = () => {
  //   setCount((c) => c + 1);
  // };

  return <RouterProvider router={router} />;
}

export default App;
