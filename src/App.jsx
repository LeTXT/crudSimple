import React, { useState } from 'react';
import './style.css';


export default function App() {

  const [task, setTask] = useState('')

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD Simples</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tarefas</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">Nome da Tarefa</span>
              <button className="btn btn-danger btn-sm float-right mx-2 ">
                Eliminar
              </button>
              <button className="btn btn-warning btn-sm float-right">
                Editar
              </button>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="textcenter">Formulário</h4>
          <form>
            <input 
            type="text" 
            className="form-control mb-2" 
            placeholder='Entrar na tarefa'
            onChange={ e => setTask(e.target.value) } />
            <button className="btn btn-dark btn-block col-12" type='submit'>Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
// setTareas([...tareas, { id: shortid.generate(), NombreTarea: tarea }]);
// setTareas([...tareas, { id: nanoid(), NombreTarea: tarea }]);
