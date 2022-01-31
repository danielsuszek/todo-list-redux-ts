import React from 'react';
import './app.sass';
import CreateNewList from './components/CreateNewList'
import Lists from './components/Lists';

function App() {
  return (
    <div className="App">
      App
      <CreateNewList />
      <Lists />
    </div>
  );
}

export default App;
