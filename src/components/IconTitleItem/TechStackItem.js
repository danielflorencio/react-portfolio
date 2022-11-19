import '../../App.css'
export default function TechStackItem({src, title, alt, ownStyle}){
    return(
        <div className={'minor-block'}>
            <img className='block-img' src={src} alt={alt} id={ownStyle}/>
            <h3>{title}</h3>    
        </div>
    )  
}
