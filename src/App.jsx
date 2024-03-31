import { useState, useEffect } from 'react'

import {v4 as uuidv4} from 'uuid';

import './App.css'

import TodoListForm from './components/TodoListForm'
import ShowTodos from './components/ShowTodos';

function App() {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState(
      [
        {id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed', title: 'Learn React'},
        {id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', title: 'Learn ASP.net'}
      ]
    )

  const handleInputChange = (e) => {
    const todoName = e.target.value;
    return setTitle(todoName)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert('You should input a value')
    }
    else{
      setTodos(prev => ([{}]))
    }
    setTitle('')
  }

  return (
    <>
      <TodoListForm onChange={handleInputChange} onSubmit={handleSubmit} currentValue={title}/>
      <ShowTodos todos={todos}/>
    </>
  )
}

export default App
