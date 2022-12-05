import { IconContext } from 'react-icons'
// import '../generalStyles.css'
import './styles.css'
import SubTitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import {FaTicketAlt} from 'react-icons/fa';
export default function IconsAndDescriptionSection(){
    return(
        <section className='section background-color-black'>
            {/* <Title 
            title='A well done marketing can bring you all these benefits.' 
            color='white'/>

            <SubTitle 
            subtitle='Schedule a meeting now and find out how we can help you get them.' 
            color='white' 
            background_color='light-blue'/> */}

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