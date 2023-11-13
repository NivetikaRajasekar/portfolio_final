import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { motion } from "framer-motion";
import "./card.css";
import "./data"
function Card(props) {
	const [flip, setFlip] = useState(false);
	return (
		<ReactCardFlip isFlipped={flip}
			flipDirection="vertical">
			<div id="front__content">
                <img src={props.img} alt="image"/>
                <p id="title">{props.title}</p>
                <button id="view" onClick={()=>setFlip(!flip)}>View</button>
            </div>
            <section id="back__content">
                <div id="git__hub">
                        <a href={props.git} id="git__id">
                            <motion.div
                            whileInView={{scale:[0,1]}}
                            whileHover={{scale:[1,0.9]}}
                            transition={{duration:0.25}}
                            ><i class="fa fa-github"></i>
                            </motion.div>
                        </a>
                        <div id="code">
                        <p>View Code</p>
                        </div>
                </div>
                <div id="eye">
                        <a href={props.deploy} id="eye__id">
                            <motion.div
                             whileInView={{scale:[0,1]}}
                             whileHover={{scale:[1,0.9]}}
                             transition={{duration:0.25}}>
                            <i class="fa fa-eye"></i>
                            </motion.div>
                        </a>
                        <div id="deployment">
                        <p>View Deployment</p>
                        </div>
                </div>
                <div id="div__button">
                <button id="back" onClick={()=>setFlip(!flip)}>Back</button>
                </div>
            </section>
		</ReactCardFlip>
	);
}
/*Div works perfectly when using display flex */
export default Card;
