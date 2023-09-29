import { useState } from 'react';

import '../styles/Projects.scss'
import Card from '../components/Card'

function Projects(){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return(
        <div className='projects-page'>
            <h2 className='titleText'>Projets</h2>
            <div className='projects-bloc'>
                <div className={toggleState === 1 ? 'projects-bloc__web active-web' : 'projects-bloc__web'}> 
                    <div className='projects-bloc__web--left-line'>Projet 1</div>
                    <div className='projects-bloc__web--main-line'><Card/></div> 
                    <div className='projects-bloc__web--right-line'>Projet 1</div>
                </div> 
                <div className={toggleState === 2 ? 'projects-bloc__logo active-logo' : 'projects-bloc__logo'}>
                    Logo
                </div>
                <div className='projects-bloc__navigation'>
                    <div className={toggleState === 1 ? 'projects-bloc__navigation__btn active' : 'projects-bloc__navigation__btn'} onClick={() => toggleTab(1)}><div className='smallText projects-bloc__navigation__btn--text'>WEB</div></div>
                    <div className={toggleState === 2 ? 'projects-bloc__navigation__btn active' : 'projects-bloc__navigation__btn'} onClick={() => toggleTab(2)}><div className='smallText projects-bloc__navigation__btn--text'>LOGO</div></div>
                    <div className={toggleState === 3 ? 'projects-bloc__navigation__btn active' : 'projects-bloc__navigation__btn'} onClick={() => toggleTab(3)}><div className='smallText projects-bloc__navigation__btn--text'>?</div></div>
                </div>    
            </div>
        </div>
        
    );
}

export default Projects