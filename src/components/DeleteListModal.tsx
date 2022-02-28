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
    <div className="deleteListModal" >
      <div className="deleteListModal__wrapper">
        <div className="deleteListModal__wrapper__header">
          <h2>Delete List Modal</h2>
          <i className="fa fa-times" onClick={ hideModalHandler }></i>
        </div>
        <hr />
        <div className="deleteListModal__wrapper__content">
          <p>Na pewno chcesz skasować listę</p>
          <p className="listToDelete">{listById?.name}
          &nbsp;<span className="listToDelete__qmark">?</span></p>
        </div>
        <hr />
        <div className="deleteListModal__wrapper__footer">
          <button 
            onClick={ deleteListHandler }
            className="modalConfirm"
          >Kasuj</button>
          <button 
            onClick={ hideModalHandler }
            className="modalCancel"
          >Anuluj</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteListModal