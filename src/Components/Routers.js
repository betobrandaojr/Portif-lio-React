import React from "react";
import About from './About.js';
import Certificates from './Certificates.js';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<About/>} ></Route>
                <Route path="/Certificates" element={<Certificates/>} ></Route>
            </Routes>
        </Router>
    )
}
export default AppRoutes;