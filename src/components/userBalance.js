import React, { useContext } from 'react';
import { UserContext } from './context';

function UserBalance(props){
    const ctx = useContext(UserContext);
  
    return (
      <div style={{paddingBottom:".75rem"}}>
        {ctx.userInfo.loggedIn ? (
          <h1 style={{textAlign: "center"}}>Your Current Balance is:<br /> ${props.currentBalance}</h1>
        ) : (
          <h6 style={{textAlign: "center"}}>You Have No Balance. Please Login to Continue.</h6>
        )}
      </div>
    )
  }

export default UserBalance;