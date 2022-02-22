import React, {FC} from 'react';
import { useSelector } from 'react-redux';
import './app.sass';
import DeleteListModal from './components/DeleteListModal';
import EditListModal from './components/EditListModal'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

import { RootState } from './store/store';

const App: FC = () => {
  const listIdToDelete = useSelector((state: RootState) => state.list.listIdToDelete)
  const listToEdit = useSelector((state: RootState) => state.list.listToEdit)
 
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Navbar />
        <MainContent />
      </div>

      {listIdToDelete && <DeleteListModal listId={listIdToDelete} />}
      {listToEdit && <EditListModal listToEdit={listToEdit} />}
    </div>
  );
}

export default App;
