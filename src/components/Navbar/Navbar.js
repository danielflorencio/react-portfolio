import '../../App.css'
import './styles.css'
import Button from '../Button/Button'
export default function NavBar(){
    return(
        <div className='nav-container'>
            <nav className='navbar'>
                <ul>
                    <li>Home</li>   
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>+ Benefits</li>
                    <li>See Resume</li>
                    <Button cta='Contact me'/>
                    {/* Create a download icon for the "My resume" li later. */}
                </ul>
            </nav>
        </div>
    )
}