import '../App.css'
import NavBar from './NavBar'
export default function HeroSection(){
    return(
    <div className='hero-section'>
      <NavBar/>
      <div className='hero-section-container'>
        <div className='container-inner-column'>
          <h1 className='main-title'>Hi, i'm Daniel, a Front End developer.</h1>
          <h2>Scroll down and see how i can help your company grow.</h2>
        </div>
        <div className='container-inner-column'>

        </div>
      </div>
    </div>
    
    )
}