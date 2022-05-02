import React, { useState, useEffect } from "react";
import { UserContext } from "./context";
import TripleFrame from './tripleFrame';
import MyCard from './myCard';
import Form from './form';

function CreateAccount(){
  const [show, setShow]         = useState(true);
  const [status, setStatus]     = useState('');
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <TripleFrame 
      center={
        <MyCard
          bgcolor="dark"
          header="Create Account"
          title="Create A New Account"
          status={status}
          body={show ? (  
                  <div>
                    <Form
                      show={{name:true,email:true,password:true,amount:false}} 
                      name={name}
                      email={email}
                      password={password}
                      setName={setName}
                      setEmail={setEmail}
                      setPassword={setPassword}
                      setShow={setShow}
                      task="Create Account"
                    />
                  </div>
                ):(
                  <div style={{textAlign:"center"}}>
                    <h4 style={{paddingBottom:".75rem"}}>Success!</h4>
                    <p>Your Account Has Been Successully Created</p>
                    <button style={{borderRadius:"6px"}} type="submit" className="my-button-2" onClick={clearForm}>Add another account</button>
                  </div>
                )}
        />
      }
    />
  )
}

export default CreateAccount;