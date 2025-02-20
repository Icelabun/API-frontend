import React from 'react';
import NewsList from './components/NewsList';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Football News</h1>
      </header>
      <main className="App-content">
        <NewsList />
      </main>
    </div>
  );
};

export default App;
