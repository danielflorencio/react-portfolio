import './styles.css'
function StackItems({stackArray}){
    return(
        <div className="project-stack-container">
            {
                stackArray.map(StackItem => {   
                    return <div key={StackItem} className='stack-item inner-padding-10'><strong>{StackItem}</strong></div>
                })
            }
        </div>
    )    
}
export default function ProjectItem(props){
    return(
        <div className={'project-container ' + props.positionType}>
            <div className="project-img-container inner-padding-10 place-center"><img alt='project img'/></div>
            <div className="project-description-container inner-padding-10">
                <div className="project-description-title"><h1>{props.title}</h1></div>
                <div className="project-description-text">
                    <p>Lorem ipsum dolor sit amet. Ut voluptas voluptatem et nostrum mollitia qui atque quos et internos dolores. Ea molestiae quia qui laboriosam nobis eum mollitia nostrum.</p>
                    <br/>
                    <p>Sed iste repellat aut cupiditate quasi non galisum voluptas est velit quidem eos voluptatem modi qui galisum voluptas et magni expedita. Et aspernatur asperiores est quaerat facilis id magni doloremque ut voluptates voluptas 33 laudantium error quo nesciunt iste.</p>
                </div>                
                <StackItems stackArray={props.techStack}/>
            </div>
        </div>
    )   
}