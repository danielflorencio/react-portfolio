import './styles.css'
import ProjectItem from "./ProjectItem";
export default function ProjectSection(){
    return(
        <section className="section background-color-black center-div">

            <ProjectItem title='FIRE - Your Financial Independence Advisor' positionType='right-left' techStack={['Html', 'TypeScript', 'React', 'Redux', 'Next Js', 'Bootstrap', 'Sass']}/>
            {/* Tech Stack - HTML typescript react redux nextjs bootstrap sass */}
            {/* This project may go to Vercel */}

            <ProjectItem title='Digital Agency Landing Page' positionType='left-right' techStack={['Html', 'JavaScript', 'React']}/>
            {/* 
            tech stack html javascript react MVP
            Complete Project tech stack HTML typescript React sass 
            */} 
            {/* Deployment to github pages. */}

            <ProjectItem title='Portfolio Website' positionType='right-left' techStack={['Html', 'TypeScript', 'React', 'Redux', 'Sass']}/>
            {/* Deployment to github pages. */}

            {/* From here onwards i can start applying to jobs. */}
            
            {/* After i start applying to jobs i can also start learning more about fullstack web dev.*/}

            <ProjectItem title='E-commerce Website.' positionType='left-right' techStack={['Html', 'TypeScript', 'React', 'Redux', 'Sass', 'Node Js', 'Express Js', 'MongoDB']}/>

            <ProjectItem title='Macros Manager App.' positionType='left-right' techStack={['Html', 'TypeScript', 'React', 'Redux', 'Sass', 'Node Js', 'Express Js', 'PostgreSQL']}/>

            {/* With these 2 above finished i can also learn about jest and other ui frameworks like material ui and tailwind css. */}

            <ProjectItem title='Chat App.' positionType='right-left' techStack={['Html', 'TypeScript', 'React', 'Redux', 'Sass', 'Node Js', 'Express Js', 'PostgreSQL']}/>

            <ProjectItem title='' positionType='right-left' techStack={['','','']}/>

            {/* <ProjectItem title='Chatbot'/>  This project must connect to the whatsapp api. Check devsamurai tutorial on my youtube playlist. */}

            {/* This project may go to hostgator or firebase (firebase FREE) */}

            {/* Tech stack Html sass Typescript react redux nodejs express firebase */}


            {/* <ProjectItem title='Crypto Tracker' positionType='right-left' techStack={['Html', TypeScri]}/> - i don't think i wanna do that one anymore. */}


            {/* <ProjectItem title='Real Estate Company Website'/> */}




            {/* Netflix Clone */}            
            {/* Airbnb Clone */}
            {/* Instagram Clone */}
            {/* Pinterest Clone */}
                        
        </section>
    )
    
}