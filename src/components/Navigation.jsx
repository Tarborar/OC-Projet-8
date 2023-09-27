import { Link } from 'react-router-dom'
import '../styles/utils/properties.scss'
import '../styles/Navigation.scss'
 
function Navigation() {
    return (
        <nav className='navigation-navbar smallText'>
            <Link to="/about" className='navigation-navbar__bloc noLinkDecoration'>
                <div className='navigation-navbar__bloc--text noLinkDecoration'>A Propos</div>
            </Link>
            <Link to="/skills" className='navigation-navbar__bloc noLinkDecoration'>
                <div className='navigation-navbar__bloc--text noLinkDecoration'>Compétence</div>
            </Link>
            <Link to="/projects" className='navigation-navbar__bloc noLinkDecoration'>
                <div className='navigation-navbar__bloc--text noLinkDecoration'>Projets</div>
            </Link>
            <Link to="/contact" className='navigation-navbar__bloc noLinkDecoration'>
                <div className='navigation-navbar__bloc--text noLinkDecoration'>Contact</div>
            </Link>
        </nav>
    )
}

export default Navigation