import { Link } from 'react-router-dom'

import Button from '../components/Button'

import avantGarde from '../assets/Avant-garde.png'
import snow from '../assets/Snow.png'
import axis from '../assets/Axis.png'
import kangaroo from '../assets/Kangaroo.png'
import delta from '../assets/Delta.png'
import deities from '../assets/Deities.png'

import '../styles/Logo.scss'

function Logo( {toggleState} ){
    return(
        <div className={toggleState === 2 ? 'projects-bloc__logo active-logo' : 'projects-bloc__logo'}>
                    <div className='projects-bloc__logo__information'>
                        <h3 className='subtitleText'>LOGO</h3>
                        <Link to="https://www.instagram.com/tarborar/?hl=fr"><Button className='button-cta' cta={"EN VOIR PLUS"}/></Link>
                        <div>
                           <h4 className='mediumText'>IDENTITÉ</h4>
                            <p className='smallText montserrat'>L'identité graphique est pour moi ce qui a de plus important pour l'image d'une entreprise, d'une activité. Le logo reflète les ambitions et les objectifs ainsi que le public que vous voulez viser.</p> 
                        </div>
                        <div>
                           <h4 className='mediumText'>QU'EST-CE QU'UN BON LOGO ?</h4>
                            <p className='smallText montserrat'>Le logo peut se définir sous 3 aspects principaux : Le concept, la réalisation et l'identité. Le plus important se réside dans le concept c'est à dire dans l'histoire ou la signification du logo. La réalisation se trouve surtout dans l'aspect technique de l'illutration, la qualité et la cohérence de chaque trait. Et enfin l'identité, c'est ce qui fait que le logo est reconnaissable entre 1000. Changez les lettres de Google tout en gardant son identité et vous serez tout de même capable de reconnaître la marque.</p> 
                        </div>
                    </div>
                    <div className='projects-bloc__logo__logos'>
                        <h3 className='smallText'>Logo</h3>
                        <div className='projects-bloc__logo__logos--line'></div>
                        <div className='projects-bloc__logo__logos--grid'>
                            <img src={avantGarde} alt="" className='img-logo'/>
                            <img src={snow} alt="" className='img-logo'/>
                            <img src={axis} alt="" className='img-logo'/>
                            <img src={kangaroo} alt="" className='img-logo'/>
                            <img src={delta} alt="" className='img-logo'/>
                            <img src={deities} alt="" className='img-logo'/>
                        </div>
                    </div>
                </div>
        
    )
}

export default Logo