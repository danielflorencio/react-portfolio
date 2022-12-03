import '../../App.css'
import './styles.css'
import TechStackItem from '../IconTitleItem/TechStackItem'
import reactIcon from '../../imgs/react80.png'
import htmlIcon from '../../imgs/html96.png'
import jsIcon from '../../imgs/js96.png'
import gitIcon from '../../imgs/git96.png'
import nextIcon from '../../imgs/next96.png'
import tsIcon from '../../imgs/ts96.png'
import {BsBootstrapFill} from 'react-icons/bs'
import {DiSass} from 'react-icons/di'
import nodeIcon from '../../imgs/node96-icon.png'
import expressIcon from '../../imgs/express96-icon.png'
import mysqlIcon from '../../imgs/mysql96-icon.png'
import mongoIcon from '../../imgs/mongodb96-icon.png'
import { SiRedux } from 'react-icons/si'
export default function TechStackSection(){
    return(
        <section className='section background-color-black'>

            <div className='tech-stack inner-container'>

            <TechStackItem src={gitIcon} title='Git and Github' alt='Git icon'/>
            <TechStackItem src={htmlIcon} title='HTML5 and CSS3' alt='HTML Language icon'/>
            <TechStackItem src={jsIcon} title='Javascript' alt='Javascript Language Icon' />
            <TechStackItem src={reactIcon} title='React JS' alt='React JS Framework Icon'/>
            
            <TechStackItem src={tsIcon} title='TypeScript' alt='Typescript icon'/>

            <TechStackItem img={<BsBootstrapFill/>} title='bootstrap' alt='bootstrap Icon'/>

            <TechStackItem img={<DiSass/>} />

            {/* 4 - Bootstrap - Portfolio */}
            {/* sass */}
            
            {/* Start applying to jobs at this moment, then start learning redux to apply it to the projects */}
            {/* Only apply to one job a day */}

            {/* <TechStackItem img={SiRedux} title='Redux'/> */}

            {/* After applied redux to the projects, start applying to 2 jobs a day. */}
            {/* After this point, it will make sense to start learning more backend stuff */}

            {/* I can use next js + PostgreSql for the Fire Advisor ----- And node JS + Express + Mongo DB for the Chatbot. */} 

            {/* <TechStackItem src={nextIcon} title='Next JS' ownStyle={'next-js-icon'}/> */}
            {/* <TechStackItem src={PostgreSqlIcon} title='PostgreSQL' ownStyle={'postgreSQL-icon'} */}
            
            {/* <TechStackItem src={nodeIcon} title='Node JS' alt='Typescrpt icon'/> */}
            {/* <TechStackItem src={expressIcon} title='ExpressJS' alt='Typescript icon' ownStyle={'next-js-icon'}/> */}
            {/* <TechStackItem src={mongoIcon} title='MongoDB' alt='MongoDB Icon'/> */}
            
            {/* also, this is not a tech stack item, but experience with restful apis and services is a plus */}

            {/* After learned more backend stuff, and started applying to 3-5 jobs a day, start learning Jquery and Jest. */}

            {/* JQuery */}
            {/* Testing with Jest */}
           
            {/* Now apply to 6 minimum jobs a day. */}
            
                                            {/* react state management library classes https://www.youtube.com/watch?v=-bEzt5ISACA - All projects */}

            {/* GraphQL */}                

        
  
            {/* 9 - Dynamo DB */}
            {/* 10 - AWS */} 
            {/* Firebase */}
            {/* 12 -  Docker */}
            {/* 13 - Kubernetes */}
            {/* 14 - Gitlab */}
            </div>           
        </section>
    )
}