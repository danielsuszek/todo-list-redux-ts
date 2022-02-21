import React, {FC, useState, FormEvent} from 'react';
import { useDispatch} from 'react-redux';
import { updateListAction } from '../store/actions';
import { List } from "../store/type"

interface EditListModalProps {
  listToEdit: List
}

const EditListModal:FC<EditListModalProps> = ({listToEdit}) => {
  const dispatch = useDispatch()
  const  [listName, setListName] = useState(listToEdit.name)

  const inputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setListName(e.currentTarget.value)
  }
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(updateListAction(listToEdit.id, listName))
  }
  
  return (
    <div>
      <h2>Edit modal</h2>
      <form onSubmit={submitHandler}>
        <input 
          type="text" 
          onChange={inputChangeHandler} 
          value={listName}
        />
        <button type="submit">Edytuj</button>
      </form>
    </div>
  )
}

export default EditListModal