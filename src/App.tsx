import { useState } from 'react'
import './App.css'
import Todos from './components/Todos';
import { todoData } from './data/data';
import AddTodo from './components/AddTodo';

function App() {

  const [todos, setTodos] = useState(todoData);

  //function to delete
  const handleDeleteTodo = (id: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className='flex items-center justify-center bg-slate-900 h-screen'>
      <div className='w-1/2'>
        <h1 className='text-5xl text-center text-white font-bold mb-5'>Todo List</h1>
        <AddTodo />
        <Todos todos={todos} handleDeleteTodo={handleDeleteTodo} />
      </div>
    </div>
  )
}

export default App
