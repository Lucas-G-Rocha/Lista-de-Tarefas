import {useState, useEffect} from 'react';
import './App.css';
import Tasks from './components/Tasks.jsx';
import AddTask from './components/AddTask.jsx';
import {v4} from 'uuid';

function App(){
  const dataLocal = localStorage.getItem("tasks")
  const [tasks, setTasks] = useState(JSON.parse(dataLocal) || []);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  
  

  //FUNÇÕES
function taskConcluida(key){
  const newTasks = tasks.map(task => {
    if(task.key === key) return {...task, isCompleted: !task.isCompleted}
    return task; 
    
  })
  setTasks(newTasks);
}

function deletar(key){
  const newTasks = tasks.filter(task => task.key !== key)
  setTasks(newTasks);
}

function addTarefa(titulo, descricao){
  const tarefa = {
    key: v4(),
    titulo: titulo,
    descricao: descricao,
    isCompleted: false
  }

  setTasks([...tasks, tarefa])
}
//RENDERIZAÇÃO
  return(
    <div id="mainContainer">
      <h1 className="titulo">Tarefas</h1>
      <AddTask addTarefa={addTarefa} />
      <Tasks tasks={tasks} taskConcluida={taskConcluida} deletar={deletar} />
    </div>
  )
}
export default App;