export default function Subtitle({subtitle, color}){
    return(
        <h3 className="align-content-center" style={{color: `${color}`}}>{subtitle}</h3>
    )
}