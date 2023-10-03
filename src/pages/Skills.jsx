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
                    <h2 className='titleText skills-bloc__information--title'>{item.title}</h2>
                    <ul className='skills-bloc__information__ul'>
                        {item.technologies.map((tech, techIndex) => (
                            <li key={techIndex} className='skills-bloc__information__ul--li-design'>
                                <div className='skills-bloc__information__ul--li-design--text'>{tech.name}</div>
                            </li>
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
                    <div key={index} className={toggleState === index ? 'skills-bloc__navigation--btn skill-btn-active' : 'skills-bloc__navigation--btn'} onClick={() => toggleTab(index)}>
                        {item.title}
                    </div>
                ))}
            </nav>
        </div>
    );
}

export default Skills;