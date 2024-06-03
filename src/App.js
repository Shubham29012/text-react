import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Textform from './Component/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Set initial state to 'light'

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    } else if (mode === 'dark') {
      setMode('skyblue');
      document.body.style.backgroundColor = 'skyblue';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('bg-dark');
      document.body.classList.remove('bg-light', 'bg-skyblue');
    } else if (mode === 'skyblue') {
      document.body.classList.add('bg-skyblue');
      document.body.classList.remove('bg-light', 'bg-dark');
    } else {
      document.body.classList.add('bg-light');
      document.body.classList.remove('bg-dark', 'bg-skyblue');
    }
  }, [mode]);

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textform heading="Enter the Text" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
