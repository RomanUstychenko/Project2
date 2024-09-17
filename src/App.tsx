import React from 'react';
import './App.css';
import ImageSearch from './pages/imageSearch';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <ImageSearch />
      </header>
    </div>
  );
}

export default App;
