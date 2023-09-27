import '../styles/About.scss'

function About(){
    return(
        <div className='about-bloc'>
            <div className="about-bloc__information">
                <h2 className='about-bloc__information--title bigText'>Qui suis-je ?</h2>
                <h3 className='about-bloc__information--subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, placeat.</h3>
                <button className='about-bloc__information--btn'>Compétence</button>
                <p className='about-bloc__information--text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi amet libero, praesentium quidem, neque ullam earum laborum at qui itaque quas eum, aspernatur facere dolorum repellendus animi perspiciatis consequatur debitis.
                Expedita, commodi? Perferendis nulla nam repellat atque modi at corporis dolorem accusantium distinctio consequatur quidem ab dolor, ipsam ipsa ea maxime accusamus nihil unde dolores nobis aut molestias sint vitae.
                Itaque facilis vero laboriosam, quo quibusdam explicabo? Iusto molestiae esse mollitia ad voluptatum culpa maxime temporibus impedit? Corporis deserunt doloribus sequi, ut libero, beatae in, voluptas unde nesciunt maxime dolor!</p>
            </div>
            <div className='about-bloc__image'><div className='about-bloc__image--test'></div></div>
        </div>
    );
}

export default About