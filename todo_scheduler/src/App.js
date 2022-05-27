import './App.css';
import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import Todo from './Components/Todo/Todo';


function App() {

  const [todos, setTodos] = useState(['Feed Pugs', 'Take Pugs Outside', 'Pet the Pugs']);
  const [input, setInput] = useState('');


  const addTodo = (event => {
    // will load when we click the button
    event.preventDefault(); // will stop the refresh
    console.log('I am working')
    setTodos([...todos, input])
    setInput('');
  })

  return (
    <div className="App">
      <h1>
        hello world
      </h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />

        </FormControl>

        <Button disabled={!input} variant="contained" type="submit" onClick={addTodo} color="primary">Add Todo</Button>
        {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}

      </ul>
    </div>
  );
}

export default App;
