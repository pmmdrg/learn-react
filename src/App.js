import React, { useState } from 'react';

import './App.css';
import MyComponent from './MyComponent';
import Todos from './Todos';

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

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['todo 1', 'todo 2']);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default App;
