import { useState } from 'react';

import '../styles/Projects.scss'

import Logo from './Logo';
import Web from './Web';

import Transition from '../components/Transition';

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
            <h2 className='titleText projects-page__title'>PROJETS</h2>
            <div className='projects-bloc'>
                <Web toggleState={toggleState} toggleModal={toggleModal}/>
                <Logo toggleState={toggleState} />
                <Transition toggleState={toggleState} toggleTab={toggleTab}/>
            </div>
        </div>
    );
}

export default Projects