import {useState} from 'react'

function Main(){

  const [tasks,setTasks] = useState(['Estudar React','Estudar TypeScript','Estudar Node.js'])
  const [newTask, setNewTask] = useState('')
  

  function handleAddTask(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    if(newTask.trim() === ''){
      alert('Digite uma tarefa válida')
      return
    }
    setTasks([...tasks, newTask])
    setNewTask('')
  }

  return(
    <div>
      <h1>Lista de Tarefas</h1>

      <form action="submit" onSubmit={handleAddTask}>
      <input 
      type="text" 
      placeholder='Digite uma tarefa' 
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      />
      
      <button type='submit'>Adicionar</button>
      
      </form>
      {tasks.map((task, index) =>(
        <div key={index}>
          <p>{index + 1}: {task}</p>
        </div>
      ))}
    </div>
  )
}

export default Main