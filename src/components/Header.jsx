import { Link } from 'react-router-dom'
import btn_home from '../assets/btn_home.svg'
import '../styles/Header.scss'
 
function Header() {
    return (
        <nav className='header-navbar'>
            <Link to="/"><img src={btn_home} alt="accueil" className='header-navbar__btn-home' /></Link>
            <Link to="/contact">Contact </Link>
        </nav>
    )
}

export default Header