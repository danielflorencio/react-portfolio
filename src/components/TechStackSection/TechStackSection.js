import '../../App.css'
import TechStackItem from '../IconTitleItem/TechStackItem'
import reactIcon from '../../imgs/react80.png'
import htmlIcon from '../../imgs/html96.png'
import jsIcon from '../../imgs/js96.png'
import gitIcon from '../../imgs/git96.png'
import nextIcon from '../../imgs/next96.png'
import tsIcon from '../../imgs/ts96.png'
import nodeIcon from '../../imgs/node96-icon.png'
import expressIcon from '../../imgs/express96-icon.png'
import mysqlIcon from '../../imgs/mysql96-icon.png'
import mongoIcon from '../../imgs/mongodb96-icon.png'
export default function TechStackSection(){
    return(
        <section className='tech-stack section background-color-dark-grey'>

            <TechStackItem src={gitIcon} title='Git and Github' alt='Git icon'/>
            <TechStackItem src={htmlIcon} title='HTML5 and CSS3' alt='HTML Language icon'/>
            <TechStackItem src={jsIcon} title='Javascript' alt='Javascript Language Icon' />
            <TechStackItem src={reactIcon} title='React JS' alt='React JS Framework Icon'/>
            
            <TechStackItem src={tsIcon} title='TypeScript' alt='Typescript icon'/>
            
            {/* 1 -  Tailwind CSS - CI calc project */}
            {/* 2 - Any react state management library https://www.youtube.com/watch?v=-bEzt5ISACA - All projects */}
            
            {/* 3 - GraphQL - CI calc project */}    
            {/* 4 - Bootstrap - Portfolio */}
            
            {/* 5 - <TechStackItem src={nodeIcon} title='Node JS' alt='Typescript icon'/> */}
            {/* 6 - <TechStackItem src={expressIcon} title='ExpressJS' alt='Typescript icon' ownStyle={'next-js-icon'}/> */}
            {/* 7 - <TechStackItem src={mongoIcon} title='MongoDB' alt='MongoDB Icon'/> */}
        
            {/* 8 - <TechStackItem src={nextIcon} title='Next JS' ownStyle={'next-js-icon'}/> */}

            {/* 9 - Dynamo DB */}

            {/* 10 - AWS */} 

            {/* 11 - PostgreSQL */}
            

            {/* <TechStackItem src={mysqlIcon} title='MySQL' alt='MySQL Icon'/> */}


            {/* Firebase */}
            {/* 12 -  Docker */}
            {/* 13 - Kubernetes */}
            {/* 14 - Gitlab */}
            
        </section>
    )
}