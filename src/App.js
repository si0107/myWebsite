import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import References from './components/References';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <div>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Sue+Ellen+Francisco&display=swap');
</style>
      </div>
      <Router>
        <Routes>
          <Route path = "/" element ={<About/>} />
          <Route path = "/Projects" element ={<Projects/>} />
          {/* <Route path = "/References" element ={<References/>} /> */}
          {/* <Route path = "/Contact" element ={<Contact/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
