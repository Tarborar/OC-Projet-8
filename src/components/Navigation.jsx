import { Link, useLocation } from 'react-router-dom'
import '../styles/Navigation.scss'
 
function Navigation() {
    const location = useLocation();

    return (
        <nav className='navigation-navbar smallText'>
            <Link to="/about" className={`navigation-navbar__bloc noLinkDecoration ${location.pathname === '/about' ? 'active' : ''}`}>
                <div className='navigation-navbar__bloc--text noLinkDecoration'>A Propos</div>
            </Link>
            <Link to="/skills" className={`navigation-navbar__bloc noLinkDecoration ${location.pathname === '/skills' ? 'active' : ''}`}>
                <div className='navigation-navbar__bloc--text noLinkDecoration'>Compétences</div>
            </Link>
            <Link to="/projects" className={`navigation-navbar__bloc noLinkDecoration ${location.pathname === '/projects' ? 'active' : ''}`}>
                <div className='navigation-navbar__bloc--text noLinkDecoration'>Projets</div>
            </Link>
            <Link to="/contact" className={`navigation-navbar__bloc noLinkDecoration ${location.pathname === '/contact' ? 'active' : ''}`}>
                <div className='navigation-navbar__bloc--text noLinkDecoration'>Contact</div>
            </Link>
        </nav>
    )
}

export default Navigation