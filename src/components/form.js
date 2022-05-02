import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from './context';

function Form(props){
    const ctx = useContext(UserContext);
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [amountError, setAmountError] = useState(null);
    const [disabled, setDisabled] = useState(true);
  
    function handleTask(){
      let final = "";
      let name = props.name;
      let email = props.email;
      let password = props.password;
      let amount = props.amount;
      switch(props.task){
        case "Deposit":
          final = parseInt(props.base) + parseInt(props.amount);
          ctx.users[ctx.userInfo.userRef].balance = final;
          props.setCurrentBalance(ctx.users[ctx.userInfo.userRef].balance);
          alert("Your Deposit Was Successful");
          props.setAmount('');
          setDisabled(true);
          dimBorder();
          break;
        case "Withdraw":
          if((parseInt(props.base) - parseInt(props.amount)) < 0){
            alert('You cannot withdraw more money than you have')
          }
          if((parseInt(props.base) - parseInt(props.amount)) >= 0){
            final = parseInt(props.base) - parseInt(props.amount);
            ctx.users[ctx.userInfo.userRef].balance = final;
            props.setCurrentBalance(ctx.users[ctx.userInfo.userRef].balance);
            alert("Your Withdraw was successful");
            props.setAmount('');
            setDisabled(true);
            dimBorder();
          }
          break;
        case "Login":
          let cred1 = ctx.users.findIndex((array) => array.email === props.email);
          let cred2 = ctx.users.findIndex((array) => array.password === props.password);
          if(!email || !password){
            alert('Fields Cannot Be Blank')
          }
          else{
            if(cred1 >= 0 && cred2 >= 0){
              props.setUserInput(false);
              props.setResult(true);
              console.log('success');
              ctx.userInfo.userRef = cred1;
            }
            if(cred1 < 0 || cred2 < 0){
              props.getError(cred1, cred2);
              props.setResult(false);
            }
          }
          break;
        case "Create Account":
          if(!name || !email){
            alert('Fields Cannot Be Blank');
            return null;
          }
          if(!password || password.length < 8){
            alert('Password must be longer than 8 characters')
            return null;
          }
          else{
            ctx.users.push({name,email,password,balance:100});
            props.setShow(false);
          }
          break;
      }
    }
  
    function lightBorder(){
      document.querySelector(".form").style.borderTop = '5px solid gold';
      document.querySelector(".form").style.borderRight = '5px solid gold';
      document.querySelector(".form").style.borderLeft = '5px solid gold';
      document.getElementById("button").style.backgroundColor = 'gold';
    }
  
    function dimBorder(){
      document.querySelector(".form").style.borderTop = '5px solid goldenrod';
      document.querySelector(".form").style.borderRight = '5px solid goldenrod';
      document.querySelector(".form").style.borderLeft = '5px solid goldenrod';
      document.getElementById("button").style.backgroundColor = 'goldenrod';
    }
    
    function validation(field, label){
      console.log(field);
      switch(label){
        case "Name":
          if(field.match(/^[a-zA-Z ]+$/g)){
            setNameError(false);
          }
          if(field.match(/^\s*$/g) || !field){
            setNameError(true);
          }
          if(!field.match(/^[a-zA-Z ]+$/g)){
            setNameError(true);
          }
          break;
        case "Email":
          if(field.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
            setEmailError(false);
          }
          if(field.match(/^\s*$/g) || !field){
            setEmailError(true);
          }
          if(!field.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
            setEmailError(true);
          }
          break;
        case "Password":
          if(field.match(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/g)){
            setPasswordError(false);
          }
          if(field.match(/^\s*$/g) || !field){
            setPasswordError(true);
          }
          if(!field.match(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/g)){
            setPasswordError(true);
          }
          break;
        case "Amount":
          if(field.match(/^[0-9]+$/g)){
            setAmountError(false);
            setDisabled(false);
          }
          if(!field.match(/^[0-9]+$/g) && !field.match(/^\s*$/g)){
            alert('This field only accepts numbers above 0');
            props.setAmount('');
            setDisabled(true);
          }
          if(!field.match(/^[0-9]+$/g)){
            setAmountError(true);
          }
          if(field.match(/^\s*$/g)){
            setDisabled(true);
          }
          break;
      }
    }

    useEffect(() => {
      if(props.name === '' && props.email === '' && props.password === ''){
        setDisabled(true);
      }
      if(props.name !== '' || props.email !== '' || props.password !== ''){
        switch(window.location.hash){
          case '#/CreateAccount/':
            setDisabled(false);
            break;
          case '#/login/':
            if(props.email !== '' || props.password !== ''){
              setDisabled(false);
            }
            break;
        }
      }
    }, [nameError, passwordError, emailError])
  
    return (
      <div>
        <div className="form">
          {props.show.name && 
            <div>
              {nameError && <p style={{color:"red", padding:"0"}}>Name Can Only Be Letters</p>}
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={props.name} onChange={e => {
                props.setName(e.currentTarget.value);
                validation(e.currentTarget.value, "Name");
                }} /> 
              <br/>
            </div>}
          {props.show.email && 
            <div>
              {emailError && <p style={{color: "red"}}>Please Enter A Valid Email Address</p>}
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={props.email} onChange={e => {
                props.setEmail(e.currentTarget.value);
                validation(e.currentTarget.value, "Email");
                }}/><br/>
            </div>}
          {props.show.password && 
            <div>
              {passwordError && <p style={{color: "red"}}>Password must be at least 8 characters and may contain uppercase, lowercase, numeric or special characters.</p>}
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={props.password} onChange={e => {
                props.setPassword(e.currentTarget.value);
                validation(e.currentTarget.value, "Password");
                }}/><br/>
            </div>}
          {props.show.amount && 
            <div>
              {amountError && <p style={{color: "red"}}>Amount can only be numbers above zero</p>}
              Amount<br/>
              <input type="amount" className="form-control" id="amount" placeholder="Enter amount" value={props.amount} onChange={e => {
                props.setAmount(e.currentTarget.value);
                validation(e.currentTarget.value, "Amount");
                }}/><br/>  
            </div>}
        </div>
        <button id="button" className="my-button" onMouseOver={lightBorder} onMouseOut={dimBorder} onClick={handleTask} disabled={disabled}>  
        {props.task}
        </button>
      </div>
    )
  }

export default Form;