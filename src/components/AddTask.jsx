import { useState } from 'react'
import './AddTask.css'

function AddTask(props) {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");



    return (
        <div id='mainContainerAddTask'>
            <div className='addTaskContainer'>
                <label htmlFor="inputTitulo" className="labelAddTask">Titulo</label>
                <input type="text" id='inputTitulo' placeholder='Digite o título' className='inputAddTask' name='titulo' value={titulo} onChange={(event) => setTitulo(event.target.value)} />
            </div>
            <div className='addTaskContainer'>
                <label htmlFor="inputDescricao" className="labelAddTask">Descrição</label>
                <input type="text" id='inputDescricao' placeholder='Digite a descrição' className='inputAddTask' name='descricao' value={descricao} onChange={(event) => setDescricao(event.target.value)} />
            </div>
            <button id="adicionarTarefa" onClick={() => {
                if (titulo.trim() != "") {
                    props.addTarefa(titulo, descricao);
                    setTitulo('');
                    setDescricao('');
                }else{
                    alert("Título não pode estar vazio");
                }

            }}>Adicionar Tarefa</button>
        </div>
    )
}
export default AddTask;