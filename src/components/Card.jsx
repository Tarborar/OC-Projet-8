import '../styles/Card.scss'


function Card({data, onClick}){ //doit passer l'argument onClick pour le transférer l'événement au component

    return(
        <div className='card-bloc' onClick={onClick}>
            <div className={`card-content ${data.background}`}>
                <div className='card-content__information'>
                    <div className='card-content-line'></div>
                    <div className='card-content__information--content'>
                        <div>{data.year}</div>
                        <div>{data.title}</div>
                        <div>{data.number}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card