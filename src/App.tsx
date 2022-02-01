import React from 'react';
import './app.sass';
import CreateNewList from './components/CreateNewList'
import Header from './components/Header';
import Lists from './components/Lists';

function App() {
  return (
    <div className="App">
      <Header />
      <CreateNewList />
      <Lists />
    </div>
  );
}

export default App;
