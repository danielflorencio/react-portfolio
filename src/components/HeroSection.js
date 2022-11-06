import '../App.css'
import NavBar from './NavBar'
export default function HeroSection(){
    return(
    <div className='hero-section'>
      <NavBar/>
      <div className='hero-section-container'>
        <div className='container-inner-column'>
          <h1 className='main-title'>Hi, i'm Daniel.</h1>
          <h2>And this is the website's subtitle.</h2>
        </div>
        <div className='container-inner-column'>

        </div>
      </div>
    </div>
    
    )
}