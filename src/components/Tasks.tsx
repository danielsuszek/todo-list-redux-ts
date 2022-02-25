import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTaskToDelete } from "../store/actions"
import { RootState } from "../store/store"
import { Task } from "../store/type"
import DeleteTaskModal from "./DeleteTaskModal"
import './tasks.sass'

interface TasksProps {
  tasks: Task[]
}

const Tasks:FC<TasksProps> = ({tasks}) => {
  const dispatch = useDispatch()
  const list = useSelector((state: RootState) => state.list.selectedList!)
  
  const handleDeleteTask = (task: Task) => {
    console.log(task);
    dispatch(setTaskToDelete(list, task))
  }
  
  return (
    <div>
      <div>
        {
          (tasks.length === 0) ?
            <p>Brak zadań</p> : 
            (
              <div>
                {tasks.map((task) => {
                  return (
                    <p key={task.id} className="tasks">
                      {task.name}
                      <span onClick={() => handleDeleteTask(task)}><i title="Kasuj" className="fas fa-minus-circle"></i></span>
                    </p>
                  )
                })}
              </div>
            )
        }
      </div>

    </div>
  )
}

export default Tasks