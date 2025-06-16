import { ChevronRight, Check, Trash2 } from 'lucide-react';
import {useNavigate} from 'react-router-dom';
import './Tasks.css';

function Tasks(props) {
    const navigate = useNavigate();

    function seeTaskFunction(titulo, descricao, isCompleted){
        navigate(`/Task?titulo=${titulo}&descricao=${descricao}&isCompleted=${isCompleted}`);
    }
    console.log(props)
    return (
        <div id="tarefasContainer">
            {
                props.tasks.map(task => {
                    return <div key={task.key} className="tarefaContainer">

                        <button onClick={() => props.taskConcluida(task.key)} className="tarefa" style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
                        >{task.isCompleted ? <Check className='checkIcon' /> : ""} {task.titulo}</button>

                        <button className="function" onClick={()=> seeTaskFunction(task.titulo, task.descricao, task.isCompleted)}>{<ChevronRight />}</button>
                        <button className="function" onClick={() => props.deletar(task.key)}>{<Trash2 />}</button>
                    </div>

                })
            }
        </div>
    )
}
export default Tasks;