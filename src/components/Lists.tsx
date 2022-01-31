import { useEffect, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLists } from '../store/actions'
import { RootState } from '../store/store'
import { List } from '../store/type'

const Lists: FC = () => {
  const dispatch = useDispatch()
  const lists = useSelector((state: RootState) => state.list.lists)

  console.log(lists);

  useEffect(() => {
    dispatch(getLists())
  }, [dispatch])
  return (
    <div>
      Lists
      {(Object.keys(lists).length === 0) ?
        <p>Nie masz list</p> :
        (
          Object.values(lists).map((list: List) => {
            return <div key={list.id}>
              <p>{list.name}</p>
            </div>
          })
        )
      }
    </div>
  )
}

export default Lists