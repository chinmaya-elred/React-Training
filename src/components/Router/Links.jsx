import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {

    const products = [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        { id: 3, name: 'Product C' },
    ];



    return (
        <ul className="app-nav-list">
            <li className="app-nav-item">
                <NavLink to="/" exact className="app-nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="app-nav-item">
                <NavLink to="/about" className="app-nav-link" activeClassName="active">About</NavLink>
            </li>
            <li className="app-nav-item">
                <NavLink to="/about/team" className="app-nav-link" activeClassName="active">Our Team</NavLink>
            </li>
            <li className="app-nav-item">
                <NavLink to="/contact" className="app-nav-link" activeClassName="active">Contact</NavLink>
            </li>
            <li className="app-nav-item">
            <NavLink to="/form" className="app-nav-link" activeClassName="active">Form</NavLink>
            </li>

            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}  className="app-nav-item">
                           <NavLink to={`/products/${product.id}`} className="app-nav-link" activeClassName="active">{product.name}</NavLink>
                    </li>
                ))}
            </ul>
        </ul>
    );
};

export default NavLinks;
