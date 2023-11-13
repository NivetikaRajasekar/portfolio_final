import React from "react";
import AppWrap from "../appwrap";
import './home.css';
import {Typewriter} from "react-simple-typewriter"
import "react-simple-typewriter/dist/index";
function Home(){
    return(
        <div id="home__container">
          <div id="profile__content">
            <p id="hi__content">Hi, I am</p>
            <p id="name">Nivetika Rajasekar</p>
            <div id="typing__header">
            <p id="i__am">
            I'm a
            <span id="typing">
            <Typewriter
            words={[' Developer',' React Enthusiast',' Cloud Enthusiast',' Dog Lover']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            />  
            </span>
            </p>
            </div>
            <div id="social__media">
              <div id="linked-in">
              <a href="https://www.linkedin.com/in/nivetika-rajasekar-643b20225/">
                <i class="fa fa-linkedin "></i>
              </a>
              </div>
              <div id="insta">
              <a href="https://www.instagram.com/nivetika_rajasekar/?hl=en">
                <i class="fa fa-instagram"></i>
              </a>
              </div>
              <div id="git">
              <a href="https://github.com/NivetikaRajasekar">
                <i class="fa fa-github"></i>
              </a>
              </div>
              <div id="twitter">
              <a href="https://twitter.com/AloneNive">
                <i class="fa fa-twitter"></i>
              </a>
              </div>
            </div>
          </div>
        </div>
    )
}
export default AppWrap(Home, "home");