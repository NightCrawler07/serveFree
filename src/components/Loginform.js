import React, { useState } from 'react';
import '../pages/home.css';

const Form = props => (
  <div className='form'>
    <FormInput description="Username" placeholder="Enter your username" type="text" />
    <FormInput description="Password" placeholder="Enter your password" type="password"/>
    <FormButton title="Log in"/>
  </div>
);

const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
 );
 const FormInput = props => (
  <div class="row">
    
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
 );
 
const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in</label>
  
  </div>
 );
 const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);
const Loginform= () => {
    return (
    <div id="loginform">
        <Form />
        <OtherMethods />
      </div>
  );}
  export {Loginform};
