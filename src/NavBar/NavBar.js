import React from 'react';
import logo from '../assets/logo.png';
import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';


function NavBar() {
    return (
        <div className={styles[`nav-bar`]}>
            <img src={logo} alt='logo'  className={styles.logo}/>
            <SearchBar small/>
            <button className={`button ${styles[`nav-button`]}`}>Sign In</button>
            <button className={`button ${styles[`nav-button`]}`}>Register</button>
        </div>
        
    )
}

export default NavBar
