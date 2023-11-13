import React from "react";
import "./about.css";
import Profile from "../../assets/images/profile-5.jpeg";
import AppWrap from "../appwrap";
function About(){
    const skills = [
        {type: "HTML", level:95},
        {type: "CSS", level:95},
        {type:"Javascript", level:90}
    ];
    return(
        <div id="about__container">
            <div id="about__header">
                <p id="para__1">About</p>
                <p id="para__2">Let me introduce myself.</p>
            </div>
            <div id="full__about">
                <div id="about__content">
                    <img src={Profile} alt="Profile"/>
                    <p id="about__para">
                        My Nivetika Rajasekar, People call me Nivetika or Nivi. I am an ambivert and highly motivated with some skills in cooking and art.
                        I am currently doing my Bachelors in computer science. So I am trying to fill me up with current technologies,
                        which made me jump into full-stack. But frontend caught my eye and I am currently focusing on developing my 
                        skills in frontend. Even though I am into frontend some times backbone of website which is backend amazed me and 
                        I learned some important concept in backend with node JS and express JS. 
                        <br/>
                        <br/>
                        Taking about my leadership skills, I have lead a team more than 3 times and I got recognition for it. Once, I lead
                        a team in Smart India Hackathon and our idea got selected. Coming to expressing my skills infront of people, It's not a 
                        bad journey but I am always trying to improve myself to be confident. In technical part, I developed some
                        websites like portfolio, tenzies game, random advice generator using react JS and I also developed an app using react-native.
                        Being a front-end developer, I also got certified as AWS cloud practitioner and did some projects in AI/ML & Deep learning.
                    </p>
                </div>
                <div id="profile__skill">
                    <div id="profile">
                        <p id="profile__para">profile</p>
                            <div id="college">
                                <i class="fa fa-graduation-cap"></i>
                                <p>Currently doing my Bachelor's degree in Mepco Schlenk Engineering College</p>
                            </div>
                            <div id="full__name">
                                <p id="full">Full Name:</p>
                                <p id="my__name"><span>Nivetika</span> Rajasekar</p>
                            </div>
                            <div id="birth__date">
                                <p id="birth">Birth Date:</p>
                                <p id="date">18 May, Every Year</p>
                            </div>
                            <div id="email">
                                <p id="mail">Email:</p>
                                <p id="mail__id">nivetikarajasekar@gmail.com</p>
                            </div>
                            <div id="phone">
                                <p id="phone_no">Phone:</p>
                                <p id="no">+91 9360709587</p>
                            </div>
                    </div>
                    <div id="skills">
                        <p id="skill__header">SKILLS</p>
                        <p id="skill__content">I am a Front end enthusiast who likes to develop a responsive web applications. 
                            I am more of a front end person than a developer.
                            To keep up with the trend I am also slowly shifting to the MERN stack. 
                        </p>
                        <div className="percentage">
                            <div className="skill-box">
                                <span className="title">HTML</span>
                                <div className="skill-bar">
                                    <span className="skill-per html">
                                        <span className="tooltip">95%</span>
                                    </span>
                                </div>
                            </div>
                            <div className="skill-box">
                                <span className="title">CSS</span>
                                <div className="skill-bar">
                                    <span className="skill-per css">
                                        <span className="tooltip">90%</span>
                                    </span>
                                </div>
                            </div>
                            <div className="skill-box">
                                <span className="title">JavaScript</span>
                                <div className="skill-bar">
                                    <span className="skill-per javascript">
                                        <span className="tooltip">80%</span>
                                    </span>
                                </div>
                            </div>
                            <div className="skill-box">
                                <span className="title">ReactJS</span>
                                <div className="skill-bar">
                                    <span className="skill-per reactjs">
                                        <span className="tooltip">80%</span>
                                    </span>
                                </div>
                            </div>
                            <div className="skill-box">
                                <span className="title">NodeJS</span>
                                <div className="skill-bar">
                                    <span className="skill-per nodejs">
                                        <span className="tooltip">50%</span>
                                    </span>
                                </div>
                            </div>
                            <div className="skill-box">
                                <span className="title">MySQL</span>
                                <div className="skill-bar">
                                    <span className="skill-per mysql">
                                        <span className="tooltip">80%</span>
                                    </span>
                                </div>
                            </div>
                            <div className="skill-box">
                                <span className="title">AI,ML</span>
                                <div className="skill-bar">
                                    <span className="skill-per aiml">
                                        <span className="tooltip">60%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AppWrap(About,"about");