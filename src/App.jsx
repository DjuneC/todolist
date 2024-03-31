import { useState } from 'react'

import './App.css'

import TodoListForm from './components/TodoListForm'
import ShowTodos from './components/ShowTodos';

import generateID from './utils/GenerateID';


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
      const idGenerated = generateID()
      const isIdExisted = todos.some(todo => todo.id === idGenerated)

      if(!isIdExisted){
        setTodos(prev => {
          return [
            {id: idGenerated, title},
            ...prev
          ]
        })
      }
      else{
        alert('Id already existed')
      }
    }
    setTitle('')
  }

  const handleDeleteTodo = (idOfTodoToRemove) => {
    const newTodos = todos.filter(todo => todo.id !== idOfTodoToRemove)
    return setTodos(newTodos)
  }

  return (
    <>
      <TodoListForm onChange={handleInputChange} onSubmit={handleSubmit} currentValue={title}/>
      <ShowTodos todos={todos} onDeleteTodo={handleDeleteTodo} />
    </>
  )
}

export default App
