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
                        <h3 className='subtitleText'>PROJET 1</h3>
                        <button className='button-cta'>DÉCOUVRIR</button>
                        <div>
                           <h4 className='mediumText'>PROJET 1</h4>
                            <p className='smallText montserrat'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod sequi fugit amet? Ea vitae, architecto ad aliquam et dolorem.</p> 
                        </div>
                        <div>
                           <h4 className='mediumText'>PROJET 1</h4>
                            <p className='smallText montserrat'>zfzeifzefzefzefuhzef</p> 
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