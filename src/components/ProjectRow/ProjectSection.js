import './styles.css'
import ProjectItem from "./ProjectItem";
export default function ProjectSection(){
    return(
        <section className="section background-color-black center-div">

            <ProjectItem title='FIRE - Your Financial Independence Advisor' positionType='right-left' techStack={['Html', 'TypeScript', 'React', 'Redux', 'Next Js', 'Bootstrap', 'Sass']}/>

            {/* Tech Stack - HTML typescript react redux nextjs bootstrap sass */}
            {/* This project may go to Vercel */}

            <ProjectItem title='Digital Agency Landing Page' positionType='left-right' techStack={['Html', 'JavaScript', 'React']}/>

            {/* tech stack html javascript react */}
            {/* This project may initially go to Github pages */}

            {/* I can also apply it to Salus's actual page. */}
            {/* In this case it would make sense to learn more about lazy loading and performance. */}
            {/* It would also make sense to use Next Js. */}
            {/* I can host it on AWS so i get experience with AWS. */}


            {/* <ProjectItem title='Chatbot'/>  This project must connect to the whatsapp api. Check devsamurai tutorial on my youtube playlist. */}

            {/* This project may go to hostgator or firebase (firebase FREE) */}

            {/* Tech stack Html sass Typescript react redux nodejs express firebase */}


            {/* <ProjectItem title='Crypto Tracker' positionType='right-left' techStack={['Html', TypeScri]}/> - i don't think i wanna do that one anymore. */}






            <ProjectItem title='Portfolio Website' positionType='right-left' techStack={['Html', 'TypeScript', 'React', 'Redux', 'Sass']}/>

            {/* tech stack html typescript react nextjs sass */}

            {/* <ProjectItem title='Real Estate Company Website'/> */}

            {/* <ProjectItem title='E-commerce Website.'/> */}




            {/* Netflix Clone */}            
            {/* Airbnb Clone */}
            {/* Instagram Clone */}
            {/* Pinterest Clone */}
            
        </section>
    )
    
}