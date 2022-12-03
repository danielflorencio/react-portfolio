import '../../App.css'
import './styles.css'
import { IconContext } from 'react-icons'
export default function TechStackItem({src, title, alt, ownStyle, img}){
    return(
        <div className={'minor-block'}>
            <img className='block-img' src={src} alt={alt} id={ownStyle}/>
                <IconContext.Provider value={{className:'icon-sizer'}}>
                    {img}   
                </IconContext.Provider>
            <h3>{title}</h3>    
        </div>
    )  
}
