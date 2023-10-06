import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Router.css'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Team from './Team/Team'
import LinkComponent from './Links'
import ProductDetail from './DynamicRoute/index';
import Form from '../FormInput/Form';

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
                        <Route path="/products/:id" element={<ProductDetail />} />
                        <Route path="/form" element={<Form />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
