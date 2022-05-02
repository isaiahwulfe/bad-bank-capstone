import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './context';
import TripleFrame from './tripleFrame';
import MyCard from './myCard';
import Form from './form';

function Login(){
  const [userInput, setUserInput] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [emailAttempt, setEmailAttempt] = useState('');
  const [passAttempt, setPassAttempt] = useState('');
  const ctx = useContext(UserContext);

  function getError(one, two){
    if(one < 0 && two >= 0){
      setError('email');
    }
    if(one >= 0 && two < 0){
      setError('password');
    }
    if(one < 0 && two < 0){
      setError('both');
    }
  }

  function success(){
    ctx.userInfo.loggedIn = true;
    return(
      <div style={{textAlign:"center"}}>
        <h4>Success!</h4>
        <div>You are now logged in.</div>
      </div>
    )
  }

  function failure(){
    switch(error){
      case 'email': 
        alert('Login Failed. Incorrect Email Address.');
        setError('');
        break;
      case 'password':
        alert('Login Failed. Incorrect Password.');
        setError('');
        break;
      case 'both':
        alert('Login Failed. Incorrect Email Address and Password.');
        setError('');
        break;
    }
  }

  return (
    <TripleFrame
      center={
        <MyCard 
          bgcolor="dark"
          header="Login"
          title="Login with your Email and Password"
          text="Don't have an account? Click the create account button at the top"
          body={
            <div>
              {userInput &&
                <div> 
                  <Form 
                    show={{name:false,email:true,password:true,amount:false}} 
                    setEmail={setEmailAttempt}
                    setPassword={setPassAttempt}
                    email={emailAttempt}
                    password={passAttempt}
                    setUserInput={setUserInput}
                    setResult={setResult}
                    getError={getError}
                    task="Login"
                  />
                </div>
                }
              {result ? (success()) : (failure())}  
            </div>    
            }
        />
      }
    />
  )  
}

export default Login;