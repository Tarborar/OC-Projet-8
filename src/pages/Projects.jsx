import { useState } from 'react';
import Modal from '../components/Modal';
import Logo from './Logo';

import '../styles/Projects.scss'
import Card from '../components/Card'
import arrow from '../assets/arrow.svg'

function Projects(){
    const [toggleState, setToggleState] = useState(1);
    const [modal, setModal] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const toggleModal = () =>{
        setModal(!modal);
    }

    return(
        <div className='projects-page'>
            <h2 className='titleText'>PROJETS</h2>
            <div className='projects-bloc'>
                <div className={toggleState === 1 ? 'projects-bloc__web active-web' : 'projects-bloc__web'}> 
                    <div className='projects-bloc__web__carousel-line'></div>
                    <div className='projects-bloc__web__carousel'>
                        <div className='projects-bloc__web--left-line'>Projet 1 <img src={arrow} alt="" className='projects-bloc__web--left-arrow'/></div>
                        <div className='projects-bloc__web--main-line'><Card onClick={toggleModal}/></div> 
                        <div className='projects-bloc__web--right-line'>Projet 1 <img src={arrow} alt="" className='projects-bloc__web--right-arrow'/></div>
                    </div>
                    <div className='projects-bloc__web__carousel-line'></div>
                </div> 
                <Logo toggleState={toggleState} />
                <div className='projects-bloc__navigation'>
                    <div className={toggleState === 1 ? 'projects-bloc__navigation__btn active' : 'projects-bloc__navigation__btn'} onClick={() => toggleTab(1)}><div className='smallText projects-bloc__navigation__btn--text'>WEB</div></div>
                    <div className={toggleState === 2 ? 'projects-bloc__navigation__btn active' : 'projects-bloc__navigation__btn'} onClick={() => toggleTab(2)}><div className='smallText projects-bloc__navigation__btn--text'>LOGO</div></div>
                    <div className={toggleState === 3 ? 'projects-bloc__navigation__btn active' : 'projects-bloc__navigation__btn'} onClick={() => toggleTab(3)}><div className='smallText projects-bloc__navigation__btn--text'>?</div></div>
                </div>
            </div>
            {modal && (
                <Modal toggleModal={toggleModal} />
            )}
            
            
        </div>
        
    );
}

export default Projects