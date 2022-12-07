import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Textform from './Textform'
import Alert from './components/Alert'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

const App = () => {
  // set Mode Dark light default light
  const [mode, setMode] = useState('light');
  // for Alert
  const [alert, setAlert] = useState(null);
  // function for ALert

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add = ('bg' + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743'
      showAlert("Light mode has been enabled", "success")
    } else {
      setMode('light');
      document.body.style.background = 'white'
      showAlert("Dark mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className='container my-3'>
          <Routes>
            <Route exact path='/about' element={<About mode={mode} />} />
            <Route exact path='/' element={<Textform mode={mode} heading='Enter Your Text' showAlert={showAlert}/>} />
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App