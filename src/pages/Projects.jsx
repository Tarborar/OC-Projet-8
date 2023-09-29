import { useState } from 'react';
import Modal from '../components/Modal';

import '../styles/Projects.scss'
import Card from '../components/Card'

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
            <h2 className='titleText'>Projets</h2>
            <div className='projects-bloc'>
                <div className={toggleState === 1 ? 'projects-bloc__web active-web' : 'projects-bloc__web'} onClick={toggleModal}> 
                    <div className='projects-bloc__web--left-line'>Projet 1</div>
                    <div className='projects-bloc__web--main-line'><Card/></div> 
                    <div className='projects-bloc__web--right-line'>Projet 1</div>
                </div> 
                <div className={toggleState === 2 ? 'projects-bloc__logo active-logo' : 'projects-bloc__logo'}>
                    <div className='projects-bloc__logo__information'>
                        <h3 className='subtitleText'>PROJET 1</h3>
                        <button className='button-cta'>DÉCOUVRIR</button>
                        <div>
                           <h4 className='mediumText'>PROJET 1</h4>
                            <p className='smallText montserrat'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod sequi fugit amet? Ea vitae, architecto ad aliquam et dolorem.</p> 
                        </div>
                        <div>
                           <h4 className='mediumText'>PROJET 1</h4>
                            <p className='smallText montserrat'>zfzeifzefzefzefuhzef</p> 
                        </div>
                    </div>
                    <div className='projects-bloc__logo__logos'>
                        <h3 className='smallText'>Logo</h3>
                        <div className='projects-bloc__logo__logos--line'></div>
                        <div className='test'>
                            <div className='img-logo'></div>
                            <div className='img-logo'></div>
                            <div className='img-logo'></div>
                            <div className='img-logo'></div>
                            <div className='img-logo'></div>
                            <div className='img-logo'></div>
                        </div>
                    </div>
                </div>
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