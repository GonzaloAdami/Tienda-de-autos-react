// src/app/Module/Nav/nav.js
import React, { useState } from 'react';
import './style.css';
import logo from '../../../assets/logo.png';

function Nav({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = (event) => {
        setQuery(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={logo} className='logo' alt="Logo" />
                <form className="d-flex navbar-form" role="search">
                    <input
                        className="nav-form-control me-2 border"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={query}
                        onChange={handleSearch}
                    />
                    
                </form>
            </div>
        </nav>
    );
}

export default Nav;
