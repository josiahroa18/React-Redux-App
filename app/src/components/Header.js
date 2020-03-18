import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <img src={logo}></img>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/characters'>Characters</Link>
            </nav>
        </header>
    );
}

export default Header;