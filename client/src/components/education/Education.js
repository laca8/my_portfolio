import React from 'react'
import '../styles/education.css'
const Education = () =>{
    return(
       <section className="education" id="education">

<h1 className="heading"> my <span>education</span> </h1>

<div className="box-container">

    <div className="box">
        <i className="fas fa-graduation-cap"></i>
        <span>2019</span>
        <h3>front end development</h3>
        <p>html, css, js, bootstrap, react.js!</p>
    </div>

    <div className="box">
        <i className="fas fa-graduation-cap"></i>
        <span>2019</span>
        <h3>back end development</h3>
        <p>node.js ,express.js, Mongodb !</p>
    </div>
    
    <div className="box">
        <i className="fas fa-graduation-cap"></i>
        <span>from : 2019 to 2022</span>
        <h3>cs & math</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
    </div>


    

</div>

</section>
    )
}
export default Education