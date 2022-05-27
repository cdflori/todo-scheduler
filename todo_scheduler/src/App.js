import './App.css';
import React, { useState } from 'react';

function App() {

const [todos, setTodos] = useState(['Feed Pugs','Take Pugs Outside']);


  return (
    <div className="App">
      <h1>
        hello world
      </h1>
      <input/>
      <button>Add Todo</button>

      <ul>
        {todos.map( todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
