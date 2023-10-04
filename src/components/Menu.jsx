import { Link, useLocation } from 'react-router-dom'
import '../styles/Menu.scss'

function Menu({toggleSideMenu}){
    const location = useLocation();

    return(
        <div className="menu-bloc">
            <Link to="/" className={`menu-bloc__btn first-btn noLinkDecoration ${location.pathname === '/' ? 'active-menu' : ''}`} onClick={toggleSideMenu}>ACCUEIL</Link>
            <Link to="/about" className={`menu-bloc__btn noLinkDecoration ${location.pathname === '/about' ? 'active-menu' : ''}`} onClick={toggleSideMenu}>A PROPOS</Link>
            <Link to="/skills" className={`menu-bloc__btn noLinkDecoration ${location.pathname === '/skills' ? 'active-menu' : ''}`} onClick={toggleSideMenu}>COMPÉTENCES</Link>
            <Link to="/projects" className={`menu-bloc__btn noLinkDecoration ${location.pathname === '/projects' ? 'active-menu' : ''}`} onClick={toggleSideMenu}>PROJETS</Link>
            <Link to="/contact" className={`menu-bloc__btn noLinkDecoration ${location.pathname === '/contact' ? 'active-menu' : ''}`} onClick={toggleSideMenu}>CONTACT</Link>
        </div>
    )
}

export default Menu