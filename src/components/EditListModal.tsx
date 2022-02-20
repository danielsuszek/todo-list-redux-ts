import React, {FC} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { List } from "../store/type"

interface EditListToProps {
  listToEdit: List
}

export const EditListModal:FC<EditListToProps> = ({listToEdit}) => {
  const list = useSelector((state: RootState) => state.list.listToEdit)
  console.log(list);
  
  return (    
    <div>
      EditListModal
    </div>
  )  
}