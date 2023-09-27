import '../styles/Home.scss'
import arrow from '../assets/arrow.svg'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <div className='home-bloc'>
            <div className='home-bloc__title'>Portfolio</div>
            <Link to="/about"><img src={arrow} alt="" className='home-bloc__arrow'/></Link>
        </div>
    );
}

export default Home