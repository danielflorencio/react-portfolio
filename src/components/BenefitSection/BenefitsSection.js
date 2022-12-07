import { IconContext } from 'react-icons'
import './styles.css'
import SubTitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import {FaTicketAlt} from 'react-icons/fa';
export default function IconsAndDescriptionSection(){
    return(
        <section className='section background-color-black'>
            <Title 
            title='Specialized knowledge is not enough to make a good worker.' 
            color='white'/> 

            <SubTitle 
            subtitle='See other benefits of working with me besides my tech skills.' 
            color='white' 
            background_color='light-blue'/>

            <div class='blocks-container'>

                <IconAndDescriptionBlock 
                title='Title' 
                icon={<FaTicketAlt/>}
                description='Description.'/>

                <IconAndDescriptionBlock 
                title='Title' 
                icon={<FaTicketAlt/>}
                description='Description.'/>

                <IconAndDescriptionBlock 
                title='Title' 
                icon={<FaTicketAlt/>}
                description='Description.'/>
                
                <IconAndDescriptionBlock 
                title='Title' 
                icon={<FaTicketAlt/>}
                description='Description.'/>
                
                <IconAndDescriptionBlock 
                title='Title' 
                icon={<FaTicketAlt/>}
                description='Description.'/>
                
                <IconAndDescriptionBlock 
                title='Title' 
                icon={<FaTicketAlt/>}
                description='Description.'/>

                <IconAndDescriptionBlock 
                title='Title' 
                icon={<FaTicketAlt/>}
                description='Description.'/>                
            
                <IconAndDescriptionBlock 
                title='Title' 
                icon={<FaTicketAlt/>}
                description='Description.'/>    
            
            </div>

        </section>
    )
}

function IconAndDescriptionBlock({icon, title, description}){   
    return(
        <div class="block">
            <div className=''>      
                <div class="align-content-center">
                    <IconContext.Provider value={{className:'icon-sizer-class'}}>
                        {icon}
                    </IconContext.Provider>
                </div>
                <h3 style={{textAlign: 'center'}}>{title}</h3>
                <p style={{textAlign: 'center'}} className='block-description'>{description}</p>
            </div>            
        </div>
    )
}