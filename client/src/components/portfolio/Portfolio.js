import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/portfolio.css'
import app2 from '../styles/app4.png'
import app1 from '../styles/app3.png'
const Portfolio = () =>{
    return(
       
<section class="portfolio" id="portfolio">

<h1 class="heading"> my <span>portfolio</span> </h1>

<div class="box-container">
<div class="box">
    <a href='https://proshop88.herokuapp.com/'>
    <img src={app2} alt="proshop" />
    </a>
       
    </div>
    <div class="box">
    <a href='https://social88.herokuapp.com/'>
    <img src={app1} alt="social" />
    </a>
       
    </div>

</div>

</section>

    )
}
export default Portfolio