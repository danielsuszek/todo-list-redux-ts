import { FC } from "react";

import { ID } from '../store/type'

interface DeleteListModalProps {
  listId: ID;
}

const DeleteListModal: FC<DeleteListModalProps> = ({listId}) => {
  return (
    <div className="deleteListModal">
      <h2>Delete List Modal</h2>
      <p>listId {listId}</p>
    </div>
  )
}

export default DeleteListModal