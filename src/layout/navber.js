import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <nav className="nav">
            <Link className="navLink" to ="/">Home</Link>
            <Link className="navLink" to ="/add-blog">Add-Blog</Link>
            <Link className="navLink" to ="/about">About</Link>
        </nav>
    );
};

export default Navber;