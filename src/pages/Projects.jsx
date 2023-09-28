import '../styles/Projects.scss'
import Card from '../components/Card'

function Projects(){
    return(
        <div className='projects-page'>
            <h2 className='titleText'>Projets</h2>
            <div className='projects-bloc'>
                <div className='projects-bloc__content'> 
                    <div className='projects-bloc__content--left-line'>Projet 1</div>
                    <div className='projects-bloc__content--main-line'><Card/></div> 
                    <div className='projects-bloc__content--right-line'>Projet 1</div>
                </div> 
                <div className='projects-bloc__navigation'>
                    navigation
                </div>    
            </div>
        </div>
        
    );
}

export default Projects