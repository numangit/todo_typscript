import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import Todos from './components/Todos';
import { todoData } from './data/data';

interface Task {
  id: number;
  taskName: string;
  status: boolean;
}[]

function App() {

  const [task, setTask] = useState<Task>();
  const [todos, setTodos] = useState(todoData);

  const handleDeleteTodo = (id: string) => {

  };

  return (
    <div className='flex items-center justify-center bg-slate-900 h-screen'>
      <div className='w-1/2'>
        <h1 className='text-5xl text-center text-white font-bold mb-5'>Todo List</h1>
        <InputField setTask={setTask} />
        <Todos todos={todos} handleDeleteTodo={handleDeleteTodo} />
      </div>
    </div>
  )
}

export default App
