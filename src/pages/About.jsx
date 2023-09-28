import '../styles/About.scss'
import Button from '../components/Button'

function About(){
    return(
        <div className='about-bloc'>
            <div className="about-bloc__information">
                <h2 className='titleText'>Qui suis-je ?</h2>
                <h3 className='subtitleText montserrat'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, placeat.</h3>
                <Button cta={'En savoir plus'}/>
                <p className='mediumText montserrat'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi amet libero, praesentium quidem, neque ullam earum laborum at qui itaque quas eum, aspernatur facere dolorum repellendus animi perspiciatis consequatur debitis.
                Expedita, commodi? Perferendis nulla nam impedit? Corporis deserunt doloribus sequi, ut libero, beatae in, voluptas unde nesciunt maxime dolor!</p>
            </div>
            <div className='about-bloc__image'><div className='about-bloc__image--test'></div></div>
        </div>
    );
}

export default About