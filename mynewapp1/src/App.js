import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './Home/Home';
import Login from './Login';
import Dashboard from './dashboardpages/Dashboard';
import Buttons from './component.js/Buttons';
import Typography from './component.js/Typography';
import Tables from './component.js/Tables';
import Alerts from './component.js/Alerts';
import Cardscomp from './component.js/Cardscomp';

function App() {
  return (
       <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/buttons" element={<Buttons/>} />
            <Route path="/typography" element={<Typography/>} />
            <Route path="/tables" element={<Tables/>} />
            <Route path="/alerts" element={<Alerts/>} />
            <Route path="/cardscomp" element={<Cardscomp/>} />
        </Routes>
       </>
  );
}

export default App;
