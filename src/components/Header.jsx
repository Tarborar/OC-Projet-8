import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import btn_home from '../assets/btn_home.svg'
import '../styles/Header.scss'

import Menu from './Menu';
 
function Header() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    useEffect(() => {
        function handleResize() { //met à jour isMobile en fonction de la largeur de la fenêtre
            setIsMobile(window.innerWidth <= 1024);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function toggleSideMenu() {
        setIsSideMenuOpen(!isSideMenuOpen);
    }

    return (
        <nav className='header-navbar'>
            {isMobile ? (
                <img src={btn_home} alt="accueil" className='header-navbar__btn-home' onClick={toggleSideMenu}/>
            ) : (
                <Link to="/" className='button-home'>
                    <img src={btn_home} alt="accueil" className='header-navbar__btn-home' />
                </Link>
            )}
            <Link to="/contact" className='header-navbar__text noLinkDecoration'>Me contacter</Link>

            {isSideMenuOpen && (
                <Menu/>
            )}
        </nav>
    )
}

export default Header