import { Link } from 'react-router-dom'

import '../styles/Skills.scss'
import Button from '../components/Button';

function Skills(){
    return(
        <div className='skills-bloc'>
            <div className='skills-bloc__information'>
                <h2 className='titleText'>Compétence 1</h2>
                <div>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div> 
                <h3 className='subtitleText montserrat'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, placeat.</h3>
                <p className='middleText montserrat'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi amet libero, praesentium quidem, neque ullam earum laborum at qui itaque quas eum, aspernatur facere dolorum repellendus animi perspiciatis consequatur debitis.
                    Expedita, commodi? Perferendis nulla nam impedit? Corporis deserunt doloribus sequi, ut libero, beatae in, voluptas unde nesciunt maxime dolor!</p>
                <Button cta={'Projets'}/>
            </div>
            <div className='skills-bloc__navigation'>
                <nav>
                    <Link to="./skills" className='noLinkDecoration'>
                        <img src="" alt="" />
                        <div className='mediumText'>Compétence 1</div>
                    </Link>
                    <Link to="./skills" className='noLinkDecoration'>
                        <img src="" alt="" />
                        <div className='mediumText'>Compétence 2</div>
                    </Link>
                    <Link to="./skills" className='noLinkDecoration'>
                        <img src="" alt="" />
                        <div className='mediumText'>Compétence 3</div>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Skills