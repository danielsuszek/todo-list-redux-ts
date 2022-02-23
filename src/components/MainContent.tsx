import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import './mainContent.sass'

const MainContent: FC  = () => {
  const selectedList = useSelector((state: RootState) => state.list.selectedList)
  
  return (
    <div className="mainContent">
      <div className="mainContent__tasks">
        {(!selectedList) ? 
          <h2>Wybierz listę by dodać zadania</h2> : (
            <h2>{selectedList?.name}</h2>
          )
        }

      </div>
    </div>
  )
}

export default MainContent