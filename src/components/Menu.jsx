import { Link } from 'react-router-dom'
import '../styles/Menu.scss'

function Menu(){
    return(
        <div className="menu-bloc">
            <Link to="/" className='menu-bloc__btn first-btn noLinkDecoration'>ACCUEIL</Link>
            <Link to="/about" className='menu-bloc__btn noLinkDecoration'>A PROPOS</Link>
            <Link to="/skills" className='menu-bloc__btn noLinkDecoration'>COMPÉTENCES</Link>
            <Link to="/projects" className='menu-bloc__btn noLinkDecoration'>PROJETS</Link>
            <Link to="/contact" className='menu-bloc__btn noLinkDecoration'>CONTACT</Link>
        </div>
    )
}

export default Menu