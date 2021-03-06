import './addTask.sass'

import { FC, FormEvent, useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { addTask } from "../store/actions";
import { List, Task } from "../store/type"

interface AddTaskProps {
  list: List
}

const AddTask: FC<AddTaskProps> = ({list}) => {
  const dispatch = useDispatch()
  const inputTaskRef = useRef<HTMLInputElement>(null!)
  
  const [taskContent, setTaskContent] = useState('')
  
  const inputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setTaskContent(e.currentTarget.value)
  }
  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(taskContent.trim() === '') {
      return alert('Nazwa zadania jest wymagana');
    }
    
    const Task: Task  = {
      id: `task-${new Date().getTime()}`,
      name: taskContent,
      completed: false
    }
  
    dispatch(addTask(list, Task))
    setTaskContent("")
  }
  
  useEffect(() => {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" })
    // inputTaskRef.current.focus()
  },[list])
  
  return (
    <div className="addTask">
      <form 
        className="addTask__form"
        onSubmit={addTaskHandler}>
        <input 
          className="addTask__form__taskInput"
          type="text"
          onChange={inputChangeHandler}
          value={taskContent}
          ref={inputTaskRef}
        />
        <button 
          className="addTask__form__submitBtn"
          type="submit"
        >Dodaj zadanie</button>
      </form>
    </div>
  )
}

export default AddTask