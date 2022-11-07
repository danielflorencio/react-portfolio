import '../App.css'
import Button from './Button'
export default function NavBar(){
    return(
        <div className='nav-container'>
            <nav className='navbar'>
                <ul>
                    <li>Home</li>   
                    <li>My Tech Stack</li>
                    <li>Projects i made</li>
                    <li>See Resume</li>
                    <Button cta='Contact me'/>
                    {/* Create a download icon for the "My resume" li later. */}
                </ul>
            </nav>
        </div>
    )
}