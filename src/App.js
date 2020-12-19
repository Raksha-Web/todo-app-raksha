import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new todos 
  useEffect(()=> {
    // this code here ... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);
  const addTodo = (event) =>{
    // This will fire when click the button.
    event.preventDefault();
    //setTodos([...todos, input ]);
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
      <h1>Hello Raksha</h1>
      <form>
        <FormControl>
          <InputLabel>Add Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />          
        </FormControl>
        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
        <ul>
        {todos.map(todo => (
            <Todo todo={todo}/>            
          ))}              
        </ul>
      </form>
    </div>
  );
}

export default App;
