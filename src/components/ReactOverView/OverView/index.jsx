import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Posts from '../routes/Post';
import NewPost from '../routes/NewPost';
import RootLayout from '../routes/RootLayout';
import './index.css';
import PostsList from '../components/PostList';

const Main = () => {
    return (
        <Router>
            <div className="app-container">
                <div className="app-content">
                    <Routes>
                        <Route path="/" element={<RootLayout />} />
                        <Route path="/post-list" element={<PostsList />} />
                        <Route path="/create-post" element={<NewPost />} />
                        
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default Main;

