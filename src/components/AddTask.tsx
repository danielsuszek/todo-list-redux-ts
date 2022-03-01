import './addTask.sass'

import { FC, FormEvent, useState } from "react"
import { useDispatch } from "react-redux";
import { addTask } from "../store/actions";
import { List, Task } from "../store/type"

interface AddTaskProps {
  list: List
}

const AddTask: FC<AddTaskProps> = ({list}) => {
  const dispatch = useDispatch()
  
  const [taskContent, setTaskContent] = useState('')
  
  const inputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setTaskContent(e.currentTarget.value)
  }
  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const Task: Task  = {
      id: `task-${new Date().getTime()}`,
      name: taskContent,
      completed: false
    }
  
    dispatch(addTask(list, Task))
    setTaskContent("")
  }
  
  return (
    <form onSubmit={addTaskHandler}>
      <input 
        type="text"
        onChange={inputChangeHandler}
        value={taskContent}
      />
      <button type="submit">Dodaj zadanie</button>
    </form>
  )
}

export default AddTask