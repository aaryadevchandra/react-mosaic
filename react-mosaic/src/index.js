import  {BrowserRouter, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import HomePageComponent from './components/Homepage';
import NavbarComponent from './components/Navbar';
import FellowshipComponent from './components/Fellowship';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePageComponent />}/>
      <Route path='/fellowship' element={<FellowshipComponent/>} />
    </Routes>
  </BrowserRouter>
, document.getElementById("root"));