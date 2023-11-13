import React from "react";
import image from "../../assets/images/image-product-mobile.jpg"
import { motion } from "framer-motion";
import "./data"
import "./works.css";
export default function Works(props){
    return(
               <motion.div
               id="works"
               whileHover={{scale:[1.05]}}>
                   <img src={props.img} alt="image"/>
                   <div id="social__media">
                        <motion.div id="git__hub"
                        whileInView={{scale:[0,1]}}
                        whileHover={{scale:[1,0.9]}}
                        transition={{duration:0.25}}>
                            <a href={props.git}>
                                <i class="fa fa-github"></i>
                            </a>
                        </motion.div>
                        <motion.div id="eye"
                        whileInView={{scale:[0,1]}}
                        whileHover={{scale:[1,0.9]}}
                        transition={{duration:0.25}}>
                            <a href={props.deploy}>
                                <i class="fa fa-eye"></i>
                            </a>
                        </motion.div>
                   </div>
                   <div id="title__desc">
                   <p id="title">{props.title}</p>
                   <p id="desc">{props.desc}</p>
                   </div>
                </motion.div>
    )
}