import '../App.css'
export default function NavBar(){
    return(
        <div className='nav-container'>
            <nav className='navbar'>
                <ul>
                    <li>Home</li>   
                    <li>Projects</li>
                    <li>Tech Stack</li>
                    <li>My Resume</li>
                    <button>Contact me</button> 
                    {/* Create a download icon for the "My resume" li later. */}
                </ul>
            </nav>
        </div>
    )
}