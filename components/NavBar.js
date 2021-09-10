import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
    console.log(props)
    return (
        // <div>
        <nav id="nav-bar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Roster">Records</Link>
                </li>
                <li>
                    <Link to="/score">Scores</Link>
                </li>
            </ul>
        </nav>
        // </div>
    )
}

export default NavBar;