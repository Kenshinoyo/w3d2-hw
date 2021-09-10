import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    
    return (
        
        <nav id="nav-bar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/roster">Roster</Link>
                </li>
                <li>
                    <Link to="/score">Scores</Link>
                </li>
            </ul>
        </nav>

    )
}

export default NavBar;