import '../styles/Modal.scss'
import Button from './Button';
import close from '../assets/close.svg'

function Modal({ toggleModal, currentData }) {
    return (
        <div className='modal'>
            <div className='overlay' onClick={toggleModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className={`modal-content__image ${currentData.website}`}>
                        <img className='modal-content__image--close' src={close} alt="" onClick={toggleModal}/>
                    </div>
                    <div className='modal-content__information'>
                        <h3 className='modal-content__information__title'>{currentData.title}</h3>
                        <div>
                            <div className='smallText modal-content__information--date'>{currentData.date}</div>
                            <div className='modal-content__information__line'></div>
                        </div>
                        
                        <div className='subtitleText montserrat'>{currentData.subtitle}</div>    
                        <Button cta={"Découvrir"}></Button>
                        <div>
                            <h4 className='smallText modal-content__information--small-subtitle'>{currentData.paragraphName}</h4>
                            <p className='smallText montserrat'>{currentData.paragraph}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Modal;