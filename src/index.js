import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import Rencherir from './pages/Rencherir';
import MesEncheres from './pages/MesEncheres';
import RechercheMulti from './pages/RechercheMulti';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailsEnchere from './pages/DetailEnchere';
import Details from './pages/Details';
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<RechercheMulti />} />
      <Route path="/detail" element={<DetailsEnchere/>} />
      <Route path="/historique" element={<Details/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route path="/rencherir" element={<Rencherir/>} />
      <Route path="/mesencheres" element={<MesEncheres/>} />
    </Routes>
  </Router> 
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
