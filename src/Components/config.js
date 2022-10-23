import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Home/Home'
import Wolontariusz from './Wolontariusz/Login'
import Register from './Register/Register';
import Change from './Change/Change';
import Dashboard from './Dashboard/Dashboard';

const config = () => {
    return (
        <div className='app'>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/wolontariusz" element={<Wolontariusz />} />
                    <Route path="/rejestracja" element={<Register />} />
                    <Route path="/Changepassword" element={<Change />} />
                    <Route path="/Panel" element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    )
}

export default config