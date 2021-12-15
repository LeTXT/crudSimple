import React, { useState } from 'react';
import './style.css';
import shortid from 'shortid'


export default function App() {

  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [modoEdition, setModoEdition] = useState(false)
  const [id, setId] = useState('')
  const [error, setError] = useState(null)

  const addTask = e => {
    e.preventDefault()

    if(!task.trim()) {
      console.log('vazio')
      setError('Escreva algo por favor!')
      return
    }

    console.log(task)

    setTasks([
      ...tasks, 
      {id: shortid.generate(), nameTask: task}
    ])

    setTask('')
    setError(null)


  }

  const deleteTask = id => {
    const arrayFilter = tasks.filter(item => item.id !== id)
    setTasks(arrayFilter)
  }

  const edit = item => {
    console.log(item)
    setModoEdition(true)
    setTask(item.nameTask)
    setId(item.id)
    setError(null)

  }

  const editTask = e => {
    e.preventDefault()
    if(!task.trim()) {
      console.log('vazio')
      setError('Escreva algo por favor!')
      return
    }

    const arrayEdited = tasks.map(
      item => item.id === id ? {id:id, nameTask: task} : item
    )

    setTasks(arrayEdited)
    setModoEdition(false)
    setTask('')
    setId('')
    setError(null)
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD Simples</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tarefas</h4>
          <ul className="list-group">
            {

              tasks.length === 0 ? (
                <li className='list-group-item'>Não há tarefas</li>
              ) : (

                tasks.map(item => (
              <li className="list-group-item" key={item.id}>
                <span className="lead">{item.nameTask}</span>
                <button className="btn btn-danger btn-sm float-end mx-2 "
                onClick={() => deleteTask(item.id)}
                >
                  Eliminar
                </button>
  
                <button className="btn btn-warning btn-sm float-end"
                onClick={() => edit(item)}
                >
                  Editar
                </button>
              </li>
                ))
              )
            }


          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {
              modoEdition ? 'Editar Tarefa' : 'Adicionar tarefa'
            }
            </h4>
          <form onSubmit={modoEdition ? editTask : addTask}>
            {
              error ? <span className='text-danger'>{error}</span> : null
            }
            <input 
            type="text" 
            className="form-control mb-2" 
            placeholder='Entrar na tarefa'
            onChange={ e => setTask(e.target.value) } 
            value={task}
            />
            {
              modoEdition ? (
                <button className="btn btn-warning btn-block col-12" type='submit'>Editar</button>
              ) : (

                <button className="btn btn-dark btn-block col-12" type='submit'>Entrar</button>
              )
            }
          </form>
        </div>
      </div>
    </div>
  );
}
// setTareas([...tareas, { id: shortid.generate(), NombreTarea: tarea }]);
// setTareas([...tareas, { id: nanoid(), NombreTarea: tarea }]);
