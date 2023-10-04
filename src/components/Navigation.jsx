import { Link, useLocation } from 'react-router-dom'
import '../styles/Navigation.scss'
 
function Navigation() {
    const location = useLocation();

    return (
        <nav className='navigation-navbar smallText'>
            <Link to="/about" className={`navigation-navbar__bloc noLinkDecoration ${location.pathname === '/about' ? 'active-navigation' : ''}`}>
                <div className='navigation-navbar__bloc--text noLinkDecoration'>A PROPOS</div>
            </Link>
            <Link to="/skills" className={`navigation-navbar__bloc noLinkDecoration ${location.pathname === '/skills' ? 'active-navigation' : ''}`}>
                <div className='navigation-navbar__bloc--text noLinkDecoration'>COMPÉTENCES</div>
            </Link>
            <Link to="/projects" className={`navigation-navbar__bloc noLinkDecoration ${location.pathname === '/projects' ? 'active-navigation' : ''}`}>
                <div className='navigation-navbar__bloc--text noLinkDecoration'>PROJETS</div>
            </Link>
            <Link to="/contact" className={`navigation-navbar__bloc noLinkDecoration ${location.pathname === '/contact' ? 'active-navigation' : ''}`}>
                <div className='navigation-navbar__bloc--text noLinkDecoration'>CONTACT</div>
            </Link>
        </nav>
    )
}

export default Navigation