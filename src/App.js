import React from 'react';
import NewsList from './components/NewsList';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <h1>Football News</h1>
      <NewsList />
    </div>
  );
};

export default App;
