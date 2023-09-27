import { Link } from 'react-router-dom'
import '../styles/utils/properties.scss'
import '../styles/Navigation.scss'
 
function Navigation() {
    return (
        <nav className='navigation-navbar smallText'>
            <Link to="/" className='navigation-navbar__bloc noLinkDecoration'>Accueil </Link>
            <Link to="/about" className='navigation-navbar__bloc noLinkDecoration'>A Propos </Link>
            <Link to="/skills" className='navigation-navbar__bloc noLinkDecoration'>Compétence </Link>
            <Link to="/projects" className='navigation-navbar__bloc noLinkDecoration'>Projets </Link>
            <Link to="/contact" className='navigation-navbar__bloc noLinkDecoration'>Contact </Link>
        </nav>
    )
}

export default Navigation