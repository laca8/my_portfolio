import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/about.css'
const About = () =>{
    return(
        <>
        <section className="about" id="about">

<h1 className="heading"> <span>about</span> me </h1>

<div className="row">

    <div className="info">
        <h3> <span> name : </span> Ahmed Sayed Ragab </h3>
        <h3> <span> age : </span> 21 </h3>
        <h3> <span> Education : </span> CS & Math ,Helwan University </h3>
        <h3> <span> Skills : </span> Mern Stack </h3>
        <h3 style={{textTransform:'lowercase'}}> <span> Email : </span> ahmedragab01140331005@gmail.com </h3>
        <h3> <span> Work on Github : </span> <a href='https://github.com/laca8' style={{color:'#37b182',borderBottom:'1px solid #37b182'}}>Github</a> </h3>
    </div>

    <div className="counter">

        <div className="box">
            <span>Front End </span>
            <h3>Html ,Css ,Bootstrap ,Js ,React.js </h3>
        </div>
        <div className="box">
            <span>Back End </span>
            <h3>Node.js,Express.js,MongoDB </h3>
        </div>

    </div>

</div>

</section>
        </>
    )
}
export default About