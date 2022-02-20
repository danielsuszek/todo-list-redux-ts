import { useEffect, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLists, setListIdToDelete, setListToEdit } from '../store/actions'
import { RootState } from '../store/store'
import { ID, List } from '../store/type'
import './lists.sass'

const Lists: FC = () => {
  const dispatch = useDispatch()
  const lists = useSelector((state: RootState) => state.list.lists)

  // console.log(lists);
  const setListIdToDeleteHandler = (id: ID) => {
    dispatch(setListIdToDelete(id))
  }

  const setListToEditHandler = (id: ID) => {
    dispatch(setListToEdit(id))
  }
  
  useEffect(() => {
    dispatch(getLists())
  }, [dispatch])
  return (
    <div className="lists">
      Lists
      {(Object.keys(lists).length === 0) ?
        <p>Nie masz list</p> :
        (
          Object.values(lists).map((list: List) => {
            return <div key={list.id}>
              <p>{list.name}
                <span onClick={() => setListIdToDeleteHandler(list.id)}>
                  <i title="Kasuj" className="fas fa-minus-circle"></i>
                </span>
                <span onClick={() => setListToEditHandler(list.id)}>
                  <i title="Edytuj" className="fas fa-edit"></i>
                </span>
              </p>
            </div>
          })
        )
      }
    </div>
  )
}

export default Lists