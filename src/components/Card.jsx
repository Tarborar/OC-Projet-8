import '../styles/Card.scss'

function Card(){
    return(
        <div className='card-bloc'>
            <div className='card-content'>
                <div className='card-content__information'>
                    <div className='card-content-line'></div>
                    <div className='card-content__information--content'>
                        <div>2023</div>
                        <div>PROJET</div>
                        <div>N1</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Card