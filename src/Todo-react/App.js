import React from 'react'
import {useState} from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  return (
    <div><ToDoList/></div>
  )
}

export default App