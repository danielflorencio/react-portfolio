import './styles.css'
import ProjectItem from "./ProjectItem";

export default function ProjectSection(){
    return(
        <section className="section background-color-black center-div">

            <ProjectItem title='Digital Agency Landing Page'/>

            {/* tech stack html javascript react */}
            {/* This project may initially go to Github pages */}

            {/* I can also apply it to Salus's actual page. */}
            {/* In this case it would make sense to learn more about lazy loading and performance. */}
            {/* It would also make sense to use Next Js. */}
            {/* I can host it on AWS so i get experience with AWS. */}

            <ProjectItem title='Fire advisor'/>

            {/* Tech Stack - HTML typescript react redux nextjs bootstrap sass */}
            {/* This project may go to Vercel */}

            <ProjectItem title='Crypto Tracker'/>


            <ProjectItem title='Chatbot'/> 

            {/* This project may go to hostgator or firebase (firebase FREE) */}

            {/* Tech stack Html sass Typescript react redux nodejs express firebase */}

            <ProjectItem title='This Portfolio'/>

            {/* tech stack html typescript react nextjs sass */}

            <ProjectItem title='Real Estate Company Website'/>

            {/* Netflix Clone */}            
            {/* Airbnb Clone */}
            {/* Instagram Clone */}
            {/* Pinterest Clone */}
            
        </section>
    )
    
}