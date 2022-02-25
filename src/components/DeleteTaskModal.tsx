import { FC } from "react"
import { setTaskToDelete } from "../store/actions"
import { List, Task } from "../store/type"

interface DeleteTaskProps {
  taskToDelete: {
    list: List,
    task: Task    
  }
}

const DeleteTaskModal: FC<DeleteTaskProps> = ({taskToDelete: {list, task}}) => {
  return (
    <div>
      DeleteTaskModal 
    </div>
  )
}

export default DeleteTaskModal