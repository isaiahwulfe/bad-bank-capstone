import React from "react";
import TripleFrame from "./tripleFrame"
import MyCard from "./myCard";

const Home = () => {

  return (
      <TripleFrame
        center={
          <MyCard
            bgcolor="dark"
            header="BadBank"
            title="Welcome to the Bad Bank"
            text="Since 2022"
            body={<img src="./images/bank.png" style={{position: "relative", width:"15rem", height:"auto", left: "50%", transform: "translate(-50%)"}} alt="Responsive image"/>}
          />
        }
      />
  );  
}

export default Home;