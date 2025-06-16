import {useSearchParams, useNavigate} from 'react-router-dom'
import { ChevronLeft } from 'lucide-react';
import './SeeTask.css'

function SeeTask(){
    const [searchParams] = useSearchParams()
    const titulo = searchParams.get('titulo');
    const descricao = searchParams.get('descricao');
    const isCompleted = searchParams.get('isCompleted');

    const navigate = useNavigate()


    return(
        <div id='seeTask'>
            <div id="returnContainer" style={{display: 'flex', width: '90%', flexDirection: 'row', justifyContent: 'flexStart'}}>
                <button className={'return'} onClick={() => navigate(-1)}>
                    <ChevronLeft /> 
                </button>
            </div>
            <p id="isCompleted">{isCompleted === 'true' ? 'Completo' : 'Incompleto'}</p>
            <h1 className="title">{titulo}</h1>
            <p className="descricao">{descricao}</p>
        </div>
    )
}

export default SeeTask;