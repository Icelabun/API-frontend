import React from 'react';
import MusicList from './components/MusicList';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Music Hub</h1>
      </header>
      <main className="App-content">
        <MusicList />
      </main>
    </div>
  );
};

export default App;
