import React from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';
import { useState, useEffect } from "react";
import AppWrap from "../appwrap";
import message  from "../../assets/images/comments.png";
const Result=()=>{
  return(
    <p>Your message has been sent successfully.I will contact you soon</p>
  )
}
function Contact(){
  const [result, showResult] = React.useState(false);
  const initialValues = { fullName: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex__name = /^[a-zA-Z ]+$/;
    if (!values.fullName) {
      errors.fullName = "Username is required!";
    }else if(!regex__name.test(values.fullName)){
      errors.fullName = "Username must contain only contain letters and spaces";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    } 
    return errors;
  };
  function submitForm(e){
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    if(Object.keys(errors).length === 0){
      setIsSubmit(true);
      emailjs.sendForm('service_2yxo7dt', 'template_55nvmvg', e.target, 'BcxLioV9n7dWYlJdQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }).finally(()=>{
        e.target.reset();
        showResult(true);
        setIsSubmit(false);
      })
    }
  }
    return(
        <div id="contact">
          <div id="left__contact">
            <img src={message}/>
          </div>
          <form id="contact__form"
        onSubmit={submitForm} noValidate
        key="contact">
          <h1 id="contact__header">Keep In Touch</h1>
          <p id="hi_msg">Say Hi to me</p>
          
          <div id="name__email">
          <div id="name__text">
            <input
            id="p-text_name"
            type="text"
            placeholder="Your Name"
            name="fullName"
            value={formValues.fullName}
            onChange={handleChange}
            />
            <p id="errors_name">{formErrors.fullName}</p>
          </div>
          <div id="email__text">
            <input id="p-text_email" 
            type="email" 
            placeholder="Your Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}/>
            <p id="errors_email">{formErrors.email}</p>
          </div>
          </div>
          <div id="text__area">
            <textarea
              id="p-text__area"
              placeholder="Your Message"
              name="message" 
              value={formValues.message}
              onChange={handleChange}
            />
            <p id="errors_msg">{formErrors.message}</p>
          </div>
          <button id="button-1" className="p-text">Send message</button>
          <div id="result">
            {result?<Result/>:null}
          </div>
          </form>
        </div>
    )
}
export default AppWrap(Contact, 'contact');