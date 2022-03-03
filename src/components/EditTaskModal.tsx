import './editTaskModal.sass'

import { FC, FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { List, Task } from "../store/type"
import { editTask, unsetTaskToEditAction } from '../store/actions'

interface EditTaskModalProps {
  taskToEdit: {
    list: List,
    task: Task
  }
}
const EditTaskModal: FC<EditTaskModalProps> = ({taskToEdit:{list, task}}) => {
  const dispatch = useDispatch()
  const [taskName, setTaskName] = useState(task.name)
  const [taskCompleted, setTaskCompleted] = useState(task.completed)
  
  const taskNameHandler = (e: FormEvent<HTMLInputElement>) => {
    setTaskName(e.currentTarget.value)
  }
  const taskCompletedHandler = (e: FormEvent<HTMLInputElement>) => {
    setTaskCompleted(e.currentTarget.checked)
  }
  const handleCancelEditTask = () => {
    dispatch(unsetTaskToEditAction())
  }
  
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (taskName.trim() === '')
      return alert('Zadanie nie może być puste')

    dispatch(editTask(list, task.id, taskName, taskCompleted))
  }

  return (
    <div className="editTaskModal">
      <form 
        className="editTaskModal__wrapper"
        onSubmit={submitHandler}
      >
        <div className="editTaskModal__wrapper__header">
          <h2>Edytuj nazwę zadania</h2>
          <i className="fa fa-times" onClick={handleCancelEditTask}></i>
        </div>
        <hr />
        <div className="editTaskModal__wrapper__content">
          <div className="editTaskFields">
            <div className="fieldInput">
              <label>Edytuj zadanie</label>
              <input 
                className="inputTaskName"
                type="text" 
                onChange={taskNameHandler}
                value={taskName}
              />
            </div>
            <div className="fieldCheckbox">
              <label>Zadanie wykonane</label>
              <input 
                type="checkbox" 
                onChange={taskCompletedHandler}
                checked={taskCompleted}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="editTaskModal__wrapper__footer">
          <button 
            className="modalConfirm"

          >Edytuj</button>
          <button 
            className="modalCancel"
            onClick={handleCancelEditTask}
          >Anuluj</button>
        </div>
      </form>
    </div>
  )
}

export default EditTaskModal