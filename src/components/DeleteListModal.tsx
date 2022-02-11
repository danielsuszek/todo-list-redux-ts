import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListById } from "../store/actions";
import { RootState } from "../store/store";

import { ID } from '../store/type'

interface DeleteListModalProps {
  listId: ID;
}

const DeleteListModal: FC<DeleteListModalProps> = ({listId}) => {
  const dispatch = useDispatch()
  const listById = useSelector((state: RootState) => state.list.listById)
  
  useEffect(() => {
    dispatch(getListById(listId))
  }, [dispatch, listId])
  return (
    <div className="deleteListModal">
      <h2>Delete List Modal</h2>
      <p>listId {listId}</p>
      <p>{listById?.name}</p>
    </div>
  )
}

export default DeleteListModal