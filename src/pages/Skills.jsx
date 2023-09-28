import { useState } from 'react';
import data from '../datas/skills.json';

import '../styles/Skills.scss'
import Button from '../components/Button';

function Skills(){

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const currentData = data[toggleState - 1];

    return(
        <div className='skills-bloc'>
            <div className={toggleState === 1 ? 'skills-bloc__information--active' : 'skills-bloc__information'}>
                <h2 className='titleText'>{currentData.title}</h2>
                <ul>
                    {currentData.technologies.map((tech, index) => (
                        <li key={index}>{tech.name}</li>
                    ))}
                </ul>
                <h3 className='subtitleText montserrat'>{currentData.subtitle}</h3>
                <p className='middleText montserrat'>{currentData.paragraph}</p>
                <Button cta={'Projets'} />
            </div>
            <div className={toggleState === 2 ? 'skills-bloc__information--active' : 'skills-bloc__information'}>
                <h2 className='titleText'>{currentData.title}</h2>
                <ul>
                    {currentData.technologies.map((tech, index) => (
                        <li key={index}>{tech.name}</li>
                    ))}
                </ul>
                <h3 className='subtitleText montserrat'>{currentData.subtitle}</h3>
                <p className='middleText montserrat'>{currentData.paragraph}</p>
                <Button cta={'Projets'} />
            </div>
            <div className={toggleState === 3 ? 'skills-bloc__information--active' : 'skills-bloc__information'}>
                <h2 className='titleText'>{currentData.title}</h2>
                <ul>
                    {currentData.technologies.map((tech, index) => (
                        <li key={index}>{tech.name}</li>
                    ))}
                </ul>
                <h3 className='subtitleText montserrat'>{currentData.subtitle}</h3>
                <p className='middleText montserrat'>{currentData.paragraph}</p>
                <Button cta={'Projets'} />
            </div>
            <nav className='skills-bloc__navigation'>
                <div className={toggleState === 1 ? 'mediumText skills-bloc__navigation--active' : 'mediumText'} onClick={() => toggleTab(1)}>Compétence 1</div>
                <div className={toggleState === 2 ? 'mediumText skills-bloc__navigation--active' : 'mediumText'} onClick={() => toggleTab(2)}>Compétence 2</div>
                <div className={toggleState === 3 ? 'mediumText skills-bloc__navigation--active' : 'mediumText'} onClick={() => toggleTab(3)}>Compétence 3</div>
            </nav>
        </div>
    );
}

export default Skills