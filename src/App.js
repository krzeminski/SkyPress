import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './containers/Sections/About/About';
import Button from './components/Buttons/Button';

function App() {
  return (
    <div className="App">
      <About></About>
      <Button text="Kliknij"></Button>
    </div>
  );
}

export default App;
