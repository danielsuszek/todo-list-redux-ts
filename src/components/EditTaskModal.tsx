import './editTaskModal.sass'

import { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { List, Task } from "../store/type"

interface EditTaskModalProps {
  taskToEdit: {
    list: List,
    task: Task
  }
}
const EditTaskModal: FC<EditTaskModalProps> = ({taskToEdit:{list, task}}) => {
   
  return (
    <div className="editTaskModal">
      <form 
        className="editTaskModal__wrapper"
      >
        <div className="editTaskModal__wrapper__header">
          <h2>Edytuj nazwę zadania</h2>
          <i className="fa fa-times"></i>
        </div>
        <hr />
        <div className="editTaskModal__wrapper__content">
          <div className="editTaskFields">
            <div className="fieldInput">
              <label>Edytuj zadanie</label>
              <input className="inputTaskName"type="text" />
            </div>
            <div className="fieldCheckbox">
              <label>Zadanie wykonane</label>
              <input type="checkbox" />
            </div>
          </div>
        </div>
        <hr />
        <div className="editTaskModal__wrapper__footer">
          <button className="modalConfirm">Edytuj</button>
          <button className="modalCancel">Anuluj</button>
        </div>
      </form>
    </div>
  )
}

export default EditTaskModal