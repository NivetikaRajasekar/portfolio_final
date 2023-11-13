import React from "react";
import "./education.css";
import AppWrap from "../appwrap";
function Education(){
    return(
        <div class="main">
        <h3 class="heading">Education</h3>
        <div class="container">
            <ul>
                <li>
                    <h3 c="title">Front End Developer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                    <a href="#">Read More</a>
                    <span class="circle"></span>
                    <span class="date">January 2022</span>
                </li>
                <li>
                    <h3 class="title">Back End Developer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
                    <a href="#">Read More </a>
                    <span class="circle"></span>
                    <span class="date">February 2022</span>
                </li>
            </ul>
        </div>
    </div>

    )
}
export default AppWrap(Education,'education');