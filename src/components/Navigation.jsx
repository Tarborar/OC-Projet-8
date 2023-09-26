import { Link } from 'react-router-dom'
 
function Navigation() {
    return (
        <nav>
            <Link to="/">Accueil </Link>
            <Link to="/about">A Propos </Link>
            <Link to="/skills">Compétence </Link>
            <Link to="/projects">Projets </Link>
            <Link to="/contact">Contact </Link>
        </nav>
    )
}

export default Navigation