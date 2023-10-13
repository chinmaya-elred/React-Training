import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";


const App = (props) => {

  return (
    <Router>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<ProductsPage/>} exact />
          <Route path="/favorites" element={<FavoritesPage/>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
