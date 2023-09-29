import '../styles/Modal.scss'
import Button from './Button';
import close from '../assets/close.svg'

function Modal({ toggleModal }) {
    return (
        <div className='modal'>
            <div className='overlay' onClick={toggleModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className='modal-content__image'>
                        <img className='modal-content__image--close' src={close} alt="" onClick={toggleModal}/>
                    </div>
                    <div className='modal-content__information'>
                        <h3 className='modal-content__information__title'>Projet 1</h3>
                        <div className='smallText'>23.03.2023</div>
                        <div className='modal-content__information__line'></div>
                        <div className='subtitleText montserrat'>Lorem ipsum feizjfz feifiefze</div>    
                        <Button cta={"Découvrir"}></Button>
                        <h4 className='smallText'>Projet 1</h4>
                        <p className='smallText montserrat'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores, autem id culpa consequuntur illo, vel excepturi delectus aut magnam porro illum harum maxime mollitia, vitae quae perspiciatis voluptas obcaecati?</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Modal;