import  {BrowserRouter, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import HomePageComponent from './components/Homepage';
import NavbarComponent from './components/Navbar';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavbarComponent />}/>
    </Routes>
  </BrowserRouter>
, document.getElementById("root"));