import { Link } from 'react-router-dom'

import '../styles/About.scss'
import Button from '../components/Button'

function About(){
    return(
        <div className='about-bloc'>
            <div className="about-bloc__information">
                <h2 className='titleText'>À propos</h2>
                <h3 className='subtitleText montserrat'>Mathieu Seurre, Développeur front-end & Graphiste passionné</h3>
                <Link to="/skills" className='button-link'><Button cta={'En savoir plus'}/></Link>
                <p className='smallText montserrat'>En développant une application en C# pour le projet de fin d'année pour compléter ma seconde année d'études de BTS, je découvre un intérêt Gigantesque pour l'UI/UX design. 
                Je conçois l'interface graphique de l'application PC, mobile et Web pour tout mon groupe de projet. <br /><br /> 
                Je me suis d'abord intéressé à la conception de logos puis j'ai commencé à approfondir mes connaissances en autodidacte pour devenir développeur front-end.
                <br /><br />C’est alors que je me suis inscrit à la formation d’Openclassrooms pour pousser mon niveau au plus haut et ainsi obtenir la liberté de création que j'ai aujoud'hui.</p>
            </div>
            <div className='about-bloc__image'><div className='about-bloc__image--test'></div></div>
        </div>
    );
}

export default About