import '../styles/Transition.scss'

function Transition( {toggleState, toggleTab} ){
    return(
        <div className='projects-bloc__navigation'>
            <div className={toggleState === 1 ? 'projects-bloc__navigation__btn active' : 'projects-bloc__navigation__btn'} onClick={() => toggleTab(1)}><div className='smallText projects-bloc__navigation__btn--text'>WEB</div></div>
            <div className={toggleState === 2 ? 'projects-bloc__navigation__btn active' : 'projects-bloc__navigation__btn'} onClick={() => toggleTab(2)}><div className='smallText projects-bloc__navigation__btn--text'>LOGO</div></div>
            <div className={toggleState === 3 ? 'projects-bloc__navigation__btn active' : 'projects-bloc__navigation__btn'} onClick={() => toggleTab(3)}><div className='smallText projects-bloc__navigation__btn--text'>?</div></div>
        </div>
    )
}

export default Transition