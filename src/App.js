import React, { useState } from 'react';

import './App.css';
import MyComponent from './MyComponent';

function App() {
  const [isMount, setIsMount] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsMount(!isMount);
        }}
      >
        Toggle
      </button>
      {isMount && <MyComponent className='my-component' index={1} />}
    </>
  );
}

export default App;
