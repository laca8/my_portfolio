import React,{useState} from 'react'
import '../styles/home.css'
import {Link} from 'react-router-dom'
const Header = () =>{
    const [toggleMenu,setToggleMenu] = useState(false)
    const toggleNav = () =>{
        setToggleMenu(!toggleMenu)
    }
    return(
        <>
         
       {
    
           toggleMenu ? (
            <>
             
           
           <header id='header'>
           <button className='btn' onClick={toggleNav} style={{background:'none',color:'#37b182',position:'absolute',top:'0',left:'0'}}>
                   <i className='fas fa-times' style={{fontSize:'4rem'}}></i></button>
           <div className="user">
               <h3 className="name">Ahmed.S.Ragab</h3>
               <p className="post"><span className='mern'>Mern</span> Stack</p>
           </div>
           
           <nav className="navbar">
               <ul>
                   <li><Link to="/">home</Link></li>
                   <li><Link to="/about">about</Link></li>
                   <li><Link to="/education">education</Link></li>
                   <li><Link to="/portfolio">My Work</Link></li>
                   <li><Link to="/contact">contact</Link></li>
               </ul>
           </nav>
           
           </header>
       
           </>
           ) : ''
           
       }
       
       <button className='btn' onClick={toggleNav} style={{background:'none',color:'#37b182',padding:'2rem',position:'absolute',top:'0',left:'0'}}>
               <i className='fas fa-bars' style={{fontSize:'4rem'}}></i></button>
       </>
    )
}
export default Header