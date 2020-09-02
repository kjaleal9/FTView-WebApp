import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>FactoryTalk View Screen Generator</Link>
            </h1>
            <Link to='/screenGenerator'>Screen Generator</Link>
        </nav>
    );
};

export default Navbar;
