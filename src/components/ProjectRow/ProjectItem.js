export default function ProjectItem(title){
 return(
    <section>
        <div className="project-container">
            <div className="project-img-container"></div>
            <div className="project-description-container">
                <div className='project-description'>
                    <div className="project-description-title"></div>
                    <div className="project-description-text"></div>
                </div>
                <div className="project-stack-container">
                    <ProjectStackItem item='TypeScript'/>
                    <ProjectStackItem item='React JS'/>
                    <ProjectStackItem item='Node JS'/>
                    <ProjectStackItem item='Express JS'/>
                    <ProjectStackItem item='GraphQL'/>


                    <ProjectStackItem item='Next JS'/>
                    
                    <ProjectStackItem item='Tailwind CSS'/>
                    <ProjectStackItem item='Bootstrap'/>
                    
                    <ProjectStackItem item='Dynamo DB'/>
                    <ProjectStackItem item='PostgreSQL'/>
                    <ProjectStackItem item='MySQL'/>
                    
                    
                    <ProjectStackItem item='AWS'/>
                </div>
            </div>
        </div>
    </section>
 )   
}