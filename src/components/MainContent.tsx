import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import './mainContent.sass'

const MainContent: FC  = () => {
  const selectedList = useSelector((state: RootState) => state.list.selectedList)
  
  console.log('from main content',selectedList);
  return (
    <div className="mainContent">
      <div className="mainContent__tasks">
        <h2>Wybierz listę by dodać zadania</h2>
        <div>{selectedList?.name}</div>
      </div>
    </div>
  )
}

export default MainContent