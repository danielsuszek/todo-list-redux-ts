import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import AddTask from './AddTask'
import './mainContent.sass'
import Tasks from './Tasks'

const MainContent: FC  = () => {
  const selectedList = useSelector((state: RootState) => state.list.selectedList)
    
  return (
    <div className="mainContent">
      <div className="mainContent__wrapper">
        {(!selectedList) ? 
          <h2>Wybierz listę by dodać zadania</h2> : 
          (
            <div className="tasksWrapper">
              <h2 className="tasksWrapper__selectedList">{selectedList?.name}</h2>
              <AddTask list={selectedList}/>
              <Tasks tasks={selectedList.tasks}/>
            </div>
          )
        }

      </div>
    </div>
  )
}

export default MainContent