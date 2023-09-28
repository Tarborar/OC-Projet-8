import { useState } from 'react';
import data from '../datas/skills.json';

import '../styles/Skills.scss';
import Button from '../components/Button';

function Skills() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className='skills-bloc'>
            {data.map((item, index) => (
                <div key={index} className={toggleState === index ? 'skills-bloc__information skill-active' : 'skills-bloc__information'}>
                    <h2 className='titleText'>{item.title}</h2>
                    <ul>
                        {item.technologies.map((tech, techIndex) => (
                            <li key={techIndex}>{tech.name}</li>
                        ))}
                    </ul>
                    <h3 className='subtitleText montserrat'>{item.subtitle}</h3>
                    <p className='middleText montserrat'>{item.paragraph}</p>
                    <Button cta={'Projets'} />
                </div>
            ))}
            
            <div className='skills-bloc__line'></div>
            <nav className='skills-bloc__navigation'>
                {data.map((item, index) => (
                    <div key={index} className={toggleState === index ? 'mediumText skills-bloc__navigation--btn skill-btn-active' : 'mediumText skills-bloc__navigation--btn'} onClick={() => toggleTab(index)}>
                        {item.title}
                    </div>
                ))}
            </nav>
        </div>
    );
}

export default Skills;