import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTaskToDelete, setTaskToEdit } from "../store/actions"
import { RootState } from "../store/store"
import { Task } from "../store/type"
import './tasks.sass'

interface TasksProps {
  tasks: Task[]
}

const Tasks:FC<TasksProps> = ({tasks}) => {
  const dispatch = useDispatch()
  const list = useSelector((state: RootState) => state.list.selectedList!)
  
  const handleDeleteTask = (task: Task) => {
    // console.log(task);
    dispatch(setTaskToDelete(list, task))
  }
  const handleEditTask = (task: Task) => {
    dispatch(setTaskToEdit(list, task))
  }

  return (
      <div className="tasks">
        {
          (tasks.length === 0) ?
            <p>Brak zadań</p> : 
            (
              <div className="tasks__wrapper">
                {tasks.map((task: Task) => {
                  return (
                    <div key={task.id} className="task">
                      <div 
                        className={`task__name ${(task.completed) ? 'taskCompleted': ''}`}>
                        {task.name}
                      </div>
                      <div 
                        className="task__manage"
                      >
                        <i 
                          className="fas fa-minus-circle"
                          title="Kasuj" 
                          onClick={() => handleDeleteTask(task)}
                        ></i>
                        <i 
                          className="fas fa-edit" 
                          title="Edytuj" 
                          onClick = {() => handleEditTask(task)}
                        ></i>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
        }
      </div>
  )
}

export default Tasks