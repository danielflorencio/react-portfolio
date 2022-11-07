import '../App.css'
import TechStackItem from './TechStackItem'
import reactIcon from '../imgs/react80.png'
import htmlIcon from '../imgs/html96.png'
import jsIcon from '../imgs/js96.png'
import gitIcon from '../imgs/git96.png'
import nextIcon from '../imgs/next96.png'
import tsIcon from '../imgs/ts96.png'
import nodeIcon from '../imgs/node96-icon.png'
import expressIcon from '../imgs/express96-icon.png'
import mysqlIcon from '../imgs/mysql96-icon.png'
import mongoIcon from '../imgs/mongodb96-icon.png'
export default function TechStackSection(){
    return(
        <div className='tech-stack section background-color-dark-grey'>
            <TechStackItem src={gitIcon} title='Git and Github' alt='Git icon'/>
            <TechStackItem src={htmlIcon} title='HTML5 and CSS3' alt='HTML Language icon'/>
            <TechStackItem src={jsIcon} title='Javascript' alt='Javascript Language Icon' />
            <TechStackItem src={reactIcon} title='React JS' alt='React JS Framework Icon'/>
            <TechStackItem src={nextIcon} title='Next JS' ownStyle={'next-js-icon'}/>
            <TechStackItem src={tsIcon} title='TypeScript' alt='Typescript icon'/>
            <TechStackItem src={nodeIcon} title='Node JS' alt='Typescript icon'/>
            <TechStackItem src={expressIcon} title='ExpressJS' alt='Typescript icon' ownStyle={'next-js-icon'}/> 
            <TechStackItem src={mysqlIcon} title='MySQL' alt='MySQL Icon'/>
            <TechStackItem src={mongoIcon} title='MongoDB' alt='MongoDB Icon'/>
            </div>
    )
}