import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'

interface Task {
  id: number;
  taskName: string;
  status: boolean;
}[]

function App() {
  const [task, setTask] = useState<Task>();
  return (
    <div className='flex items-center justify-center bg-slate-900 h-screen'>
      <div className='w-1/2'>
        <h1 className='text-5xl text-center text-white font-bold mb-5'>Todo List</h1>
        <InputField setTask={setTask} />
      </div>
    </div>
  )
}

export default App
