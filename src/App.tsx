import React from 'react';
import { useSelector } from 'react-redux';
import './app.sass';
import CreateNewList from './components/CreateNewList'
import DeleteListModal from './components/DeleteListModal';
import Header from './components/Header';
import Lists from './components/Lists';
import { RootState } from './store/store';
import { ID } from './store/type';

function App() {
  const listIdToDelete: ID = useSelector((state: RootState) => state.list.listIdToDelete)

  
  return (
    <div className="App">
      <Header />
      <CreateNewList />
      <Lists />
      {listIdToDelete && <DeleteListModal listId={listIdToDelete} />}
    </div>
  );
}

export default App;
