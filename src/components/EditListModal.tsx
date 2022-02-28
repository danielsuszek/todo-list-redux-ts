import "./editListModal.sass"

import React, {FC, useState, FormEvent} from 'react';
import { useDispatch} from 'react-redux';
import { setListToEdit, updateList } from '../store/actions';
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

  const hideModalHandler = () => {
    dispatch(setListToEdit(''));
  }

  
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(updateList(listToEdit.id, listName))
  }
  
  return (
    <div className="editListModal">
      <form 
        className="editListModal__wrapper"
        onSubmit={submitHandler}
      >
        <div className="editListModal__wrapper__header">
          <h2>Edytuj nazwę listy</h2>
          <i className="fa fa-times" onClick={ hideModalHandler }></i>
        </div>
        <hr />
        <div className="editListModal__wrapper__content">
          <label htmlFor="listName">Nazwa listy</label>
          <br />
          <input 
            className="inputListName"
            type="text" 
            name="listName"
            onChange={inputChangeHandler} 
            value={listName}
          />
        </div>
        <hr />
        <div className="editListModal__wrapper__footer">
          <button
           type="submit"
           className="modalConfirm"
          >Edytuj</button>
          <button 
            type="button" 
            className="modalCancel" 
            onClick={hideModalHandler}
          >Anuluj</button>
        </div>
      </form>
    </div>
  )
}

export default EditListModal