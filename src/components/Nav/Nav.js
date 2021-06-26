import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
  const [isMobile,setMobile] = useState(false)
    return (
       <nav className="navbar">
         <h3>Logo</h3>
         <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
         onClick={()=>{setMobile(false)}}
         >
           <Link to="/" className="home">
           <li>Home</li> 
           </Link>
           <Link to="/about" className="about">
           <li>About</li> 
           </Link>
           <Link to="/contact" className="contact">
           <li>Contact</li> 
           </Link>
           <Link to="/services" className="services">
           <li>Services</li> 
           </Link>
           <Link to="/blogs" className="blogs">
           <li>Blogs</li> 
           </Link>
           <Link to="/technews" className="technews">
           <li>Tech News</li> 
           </Link>
           <Link to="/reviews" className="reviews">
           <li>Reviews</li> 
           </Link>
         </ul>
           <button className="mobile-menu-icon"
           onClick={()=>{setMobile(!isMobile)}}>
             {isMobile ? (<p>heo</p>): (<p>Heo</p>)}
           </button>
       </nav>
    )  
}

export default Nav
