import './deleteTaskModal.sass'

import { FC } from "react"
import { useDispatch } from "react-redux"
import { deleteTask, unsetTaskToDelete } from "../store/actions"
import { List, Task } from "../store/type"

interface DeleteTaskProps {
  taskToDelete: {
    list: List,
    task: Task    
  }
}

const DeleteTaskModal: FC<DeleteTaskProps> = ({taskToDelete: {list, task}}) => {
  const dispatch = useDispatch()

  const deleteTaskHandler = () => {
    dispatch(deleteTask(list, task))
  }
  const unsetTaskToDeleteHandler = () => {
    dispatch(unsetTaskToDelete())
  }
  
  return (
    <div className="deleteTaskModal">
      <div className="deleteTaskModal__wrapper">
        <div className="deleteTaskModal__wrapper__header">
          <h2>Usuwanie zadania</h2>
          <i className="fa fa-times" onClick={unsetTaskToDeleteHandler}></i>
        </div>
        <hr />
        <div className="deleteTaskModal__wrapper__content">
          <p>Na pewno chcesz skasować zadanie</p>
          <p className="taskToDelete">{task.name}</p>
          &nbsp;<span className="taskToDelete__qmark">?</span>
        </div>
        <hr />
        <div className="deleteTaskModal__wrapper__footer">
          <button 
            className="modalConfirm"
            onClick={deleteTaskHandler}>Kasuj</button>
          <button
            className="modalCancel"
            onClick={unsetTaskToDeleteHandler}
          >Anuluj</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteTaskModal