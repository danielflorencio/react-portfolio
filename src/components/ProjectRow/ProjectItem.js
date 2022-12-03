import './styles.css'
function StackItem({item, img}){
    return(
        <div className='stack-item inner-padding-10'>{item}</div>
    )
}

export default function ProjectItem({img, title, description, stack}){
 return(
        <div className="project-container">
            <div className="project-img-container inner-padding-10"><img/></div>
            <div className="project-description-container inner-padding-10">
                
                <div className="project-description-title"><h1>Fire - Your Personal Financial Independence Advisor</h1></div>
                
                <div className="project-description-text">
                    <p>Lorem ipsum dolor sit amet. Ut voluptas voluptatem et nostrum mollitia qui atque quos et internos dolores. Ea molestiae quia qui laboriosam nobis eum mollitia nostrum.</p>
                    <br/>
                    <p>Sed iste repellat aut cupiditate quasi non galisum voluptas est velit quidem eos voluptatem modi qui galisum voluptas et magni expedita. Et aspernatur asperiores est quaerat facilis id magni doloremque ut voluptates voluptas 33 laudantium error quo nesciunt iste.</p>
                </div>                

                <div className="project-stack-container">
                    <StackItem item='HTML'/>
                    <StackItem item='TypeScript'/>
                    <StackItem item='React JS'/>
                    <StackItem item='BootStrap'/>
                    <StackItem item='Sass'/>
                </div>

                
                {/* <div className="Project-architecture ande Design Patterns">
                    {/* Model View Controller (MVC) */} {/* Object Oriented Programming (OOP) */}
                    {/* Functional Programming
                </div> */}
            </div>
        </div>
 )   
}