import React from 'react'
import '../styles/home.css'
import {Link} from 'react-router-dom'
const Home = () =>{
    return(
        <>
     
<div id="menu" className="fas fa-bars"></div>

<section className="home" id="home">

    <h3>HI THERE !</h3>
    <h1>I'M <span>Ragab</span></h1>
    <p style={{lineHeight:'3.5rem'}}>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Distinctio deserunt aspernatur 
        fugiat minus enim ullam repudiandae sint sed magnam
         tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, at.
         ipsum dolor sit amet consectetur adipisicing elit. Distinctio deserunt aspernatur 
        fugiat minus enim ullam repudiandae sint sed magnam tenetur! Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Necessitatibus, at.
    </p>
    <Link to="/about"><button className="btn">about me <i className="fas fa-user"></i></button></Link>

</section>

        </>
    )
}
export default Home