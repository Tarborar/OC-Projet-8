import React, { useState } from 'react'

import projects from '../datas/projects.json'

import Card from '../components/Card'
import arrow from '../assets/arrow.svg'

import Modal from '../components/Modal';

import '../styles/Web.scss'

function Web({toggleState}){
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [modal, setModal] = useState(false);

    const nextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevCard = () => {
        setCurrentCardIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const toggleModal = () =>{
        setModal(!modal);
    }

    return(
        <div className={toggleState === 1 ? 'projects-bloc__web active-web' : 'projects-bloc__web'}>
        <div className='projects-bloc__web__carousel-line'></div>
        <div className='projects-bloc__web__carousel'>
          <div className='projects-bloc__web--left-line' onClick={prevCard}>
            {projects[currentCardIndex].leftBloc}
            <img src={arrow} alt='' className='projects-bloc__web--left-arrow' />
          </div>
          <div className='projects-bloc__web--main-line'>
            <Card data={projects[currentCardIndex]} onClick={toggleModal} />
          </div>
          <div className='projects-bloc__web--right-line' onClick={nextCard}>
            {projects[currentCardIndex].rigthBloc}
            <img src={arrow} alt='' className='projects-bloc__web--right-arrow' />
          </div>
        </div>
        <div className='projects-bloc__web__carousel-line'></div>
        {modal && (
                <Modal toggleModal={toggleModal} currentData={projects[currentCardIndex]}/>
            )}
      </div>
    )
}

export default Web