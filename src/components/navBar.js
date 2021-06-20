import React from 'react';
import './component.css';
import { Link } from 'react-router-dom';
import img from '../assets/a.png';

function NavBar() {
   
        return(
            <header className='navbarItems'>
                <div className='navbar-logo'>
                <img className="logo-img" alt="" src={img}/>
                </div>
                <ul className='nav-menu'>
                    <li><Link to='/' className='nav-links'>Home</Link></li>
                    <li><Link to='/about' className='nav-links'>About</Link></li>
                    <li><Link to='/products' className='nav-links'>Products</Link></li>
                    <li><Link to='/careers' className='nav-links'>Careers</Link></li>
                    <li><Link to='/Contact' className='nav-links' >Contact</Link></li>
                </ul>
                <button className='nav-button'>Login</button>
            </header>
            
        );
    
}

export default NavBar;

