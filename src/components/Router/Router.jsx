import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Router.css'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Team from './Team/Team'
import LinkComponent from './Links'

const App = () => {
    return (
        <Router>
            <div className="app-container">

                <LinkComponent />
                <div className="app-content">
                    <Routes>
                        <Route path="/about/team" element={<Team />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route index={true} element={<Home />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
