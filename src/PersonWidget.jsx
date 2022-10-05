function Ppl(props) {
    return(
        <div className='ppl-container'>
            <img className='ppl-img' src={props.src}></img>
            <span className='ppl-text'>
                <div className='ppl-name'>{props.name}</div>
                <div className='ppl-description'>{props.description}</div>
            </span>
        </div>
    )
}
export default Ppl;