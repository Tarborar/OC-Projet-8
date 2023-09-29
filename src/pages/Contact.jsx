import '../styles/Contact.scss'
import Button from '../components/Button'

function Contact(){
    return(
        <div className='contact-bloc'>
            <div className='contact-bloc__information'>
                <h2 className="titleText">CONTACT</h2>
                <div className='contact-bloc__information--info'>
                    <div>
                        <div className='mediumText'>Email</div>
                        <p className='mediumText montserrat'>mail@email.com</p>
                    </div>
                    <div>
                        <div className='mediumText'>TELEPHONE</div>
                        <p className='mediumText montserrat'>01 01 01 01 01</p>
                    </div>
                </div>
            </div>
            <form action="#" className='contact-bloc__form'>
                <div className='input'>
                    <label htmlFor="nom">NOM</label>
                    <input type="text" name='nom'/>
                </div>
                <div className='input'>
                    <label htmlFor="email">EMAIL</label>
                    <input type="text" name='email'/>
                </div>
                <div className='input'>
                    <label htmlFor="message">MESSAGE</label>
                    <textarea className='textarea' name='message'/>
                </div>
                <Button cta={"ENVOYER"} type='submit'/>
            </form>
        </div>
    );
}

export default Contact