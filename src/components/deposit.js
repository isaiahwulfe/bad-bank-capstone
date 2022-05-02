import React, { useState, useContext } from 'react';
import { UserContext } from './context';
import TripleFrame from './tripleFrame';
import MyCard from './myCard';
import Form from './form';
import UserBalance from './userBalance';

function Deposit(){
  const ctx = useContext(UserContext);
  const [amount, setAmount] = useState('');
  const [currentBalance, setCurrentBalance] = useState(ctx.users[ctx.userInfo.userRef].balance);

  return (
    <TripleFrame
      center={
        <MyCard 
          bgcolor="dark"
          header="Deposit"
          title="Deposit Funds To Your Account Here"
          body={
            <div id="hud">
              <UserBalance
                currentBalance={currentBalance}
              />
              {ctx.userInfo.loggedIn && <div>
                <Form 
                  show={{name:false,email:false,password:false,amount:true}} 
                  setAmount={setAmount}
                  amount={amount}
                  base={ctx.users[ctx.userInfo.userRef].balance}
                  setCurrentBalance={setCurrentBalance}
                  task="Deposit"
                />
              </div>}
            </div>
          }
        />
      }  
    />
  )
}

export default Deposit;
