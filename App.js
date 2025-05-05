import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Main from './main';
 
function App() {
  return (
    <Router>
    <Routes>
    <Route path="" element={<Main />}>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    </Route>
    </Routes>
    </Router>
  );
}
 
export default App;