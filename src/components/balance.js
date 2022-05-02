import React, { useState, useContext } from 'react';
import { UserContext } from './context';
import TripleFrame from './tripleFrame';
import MyCard from './myCard';
import UserBalance from './userBalance';

function Balance(){
  const ctx = useContext(UserContext);
  const [currentBalance, setCurrentBalance] = useState(ctx.users[ctx.userInfo.userRef].balance);

  return (
    <TripleFrame
      center={
        <MyCard 
          bgcolor="dark"
          header="Balance"
          title="See Your Balance Here"
          body={
            <div className="balance">
              <UserBalance
                currentBalance={currentBalance}
              />
            </div>  
            }
        />
      }
    />  
  )
}

export default Balance;