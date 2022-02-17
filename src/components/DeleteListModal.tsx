import "./deleteListModal.sass"

import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteList, getListById, setListIdToDelete } from "../store/actions";
import { RootState } from "../store/store";

import { ID } from '../store/type'

interface DeleteListModalProps {
  listId: ID;
}

const DeleteListModal: FC<DeleteListModalProps> = ({listId}) => {
  const dispatch = useDispatch()
  const listById = useSelector((state: RootState) => state.list.listById)
  
  const deleteListHandler = () => {
    dispatch(deleteList(listId))
  }
  const hideModalHandler = () => {
    dispatch(setListIdToDelete(''))
  }
  
  useEffect(() => {
    dispatch(getListById(listId))
  }, [dispatch, listId])
  return (
    <div className="deleteListModal" onClick={ hideModalHandler }>
      <h2>Delete List Modal</h2>
      <p>listId {listId}</p>
      <p>{listById?.name}</p>
      <button onClick={ deleteListHandler }>Kasuj</button>
      <button onClick={ hideModalHandler }>Anuluj</button>
    </div>
  )
}

export default DeleteListModal