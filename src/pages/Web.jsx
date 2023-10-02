import Card from '../components/Card'
import arrow from '../assets/arrow.svg'

import '../styles/Web.scss'

function Web({toggleState, toggleModal}){
    return(
        <div className={toggleState === 1 ? 'projects-bloc__web active-web' : 'projects-bloc__web'}> 
                    <div className='projects-bloc__web__carousel-line'></div>
                    <div className='projects-bloc__web__carousel'>
                        <div className='projects-bloc__web--left-line'>Projet 1 <img src={arrow} alt="" className='projects-bloc__web--left-arrow'/></div>
                        <div className='projects-bloc__web--main-line'><Card onClick={toggleModal}/></div> 
                        <div className='projects-bloc__web--right-line'>Projet 1 <img src={arrow} alt="" className='projects-bloc__web--right-arrow'/></div>
                    </div>
                    <div className='projects-bloc__web__carousel-line'></div>
                </div> 
    )
}

export default Web