import '../../App.css'
import './styles.css'
import NavBar from '../Navbar/Navbar'
export default function HeroSection(){
    return(
    <section className='hero-section'>
      <NavBar/>
      <div className='hero-section-container'>        
          <h1 className='main-title'>Hi, i’m Daniel</h1>
          <h2 className='main-title'>And your search for a new web developer for your company has just ended.</h2>
          <h3>Scroll down to see my Tech Stack and some of my projects.</h3>



        {/* <div className='container-inner-column'>
          <h1 className='main-title'>Hi, i’m Daniel.</h1>
          <h2 className='main-title'>And your search for a new web developer for your company has just ended.</h2>
          <h2>Scroll down to see my Tech Stack and some of my projects.</h2>
        </div> */}
        {/* <div className='container-inner-column'>

        </div> */}
      </div>
    </section>
    
    )
}