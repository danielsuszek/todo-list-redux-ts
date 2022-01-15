import React , { FC, useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import { List } from '../store/type'
import { addList } from '../store/actions/listActions'

const CreateNewList: FC = () => {
  const dispatch = useDispatch();
  const [listName, setListName] = useState('');

  const inputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setListName(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(listName.trim() === '') {
      return alert('List name is required!');
    }

    const newList: List = {
      id: `list-${new Date().getTime()}`,
      name: listName,
      tasks: []
    }

    dispatch(addList(newList));
    setListName('');
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={listName}
          onChange={inputChangeHandler}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default CreateNewList