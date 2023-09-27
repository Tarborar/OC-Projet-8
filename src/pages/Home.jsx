import '../styles/Home.scss'
import arrow from '../assets/arrow.svg'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <div className='home-bloc'>
            <h2 className='home-bloc__title'>Portfolio</h2>
            <Link to="/about"><img src={arrow} alt="" className='home-bloc__arrow'/></Link>
        </div>
    );
}

export default Home