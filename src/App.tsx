import React, {FC} from 'react';
import { useSelector } from 'react-redux';
import './app.sass';
import CreateNewList from './components/CreateNewList'
import DeleteListModal from './components/DeleteListModal';
import EditListModal from './components/EditListModal'
import Header from './components/Header';
import Lists from './components/Lists';
import { RootState } from './store/store';

const App: FC = () => {
  const listIdToDelete = useSelector((state: RootState) => state.list.listIdToDelete)
  const listToEdit = useSelector((state: RootState) => state.list.listToEdit)
 
  return (
    <div className="App">
      <Header />
      <CreateNewList />
      <Lists />
      {listIdToDelete && <DeleteListModal listId={listIdToDelete} />}
      {listToEdit && <EditListModal listToEdit={listToEdit} />}
    </div>
  );
}

export default App;
