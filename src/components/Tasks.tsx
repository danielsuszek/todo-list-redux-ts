import { FC } from "react"
import { List, Task } from "../store/type"

interface TasksProps {
  tasks: Task[]
}

const Tasks:FC<TasksProps> = ({tasks}) => {
  return (
    <div>
      <div>
        {
          (tasks.length === 0) ?
            <p>Brak zadań</p> : 
            (
              <ul>
                {tasks.map((task) => {
                  return (
                    <li key={task.id}>{task.name}</li>
                  )
                })}
              </ul>
            )
        }
      </div>
    </div>
  )
}

export default Tasks