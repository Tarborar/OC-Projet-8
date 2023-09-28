import '../styles/utils/properties.scss'

function Button({cta}){
    return(
        <div>
            <button className='button-cta'>{cta}</button>
        </div>
    )
}

export default Button