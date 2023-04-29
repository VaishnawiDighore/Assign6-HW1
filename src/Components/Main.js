import React from "react";

const Main = () => {
  return (
    <div style={{height: "300px",backgroundColor:"#002b80" }}>
      <div
        style={{
          color:"white",
          width: "100%",
          height: "300px",
          paddingTop: "10px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{display:"flex",height:"300px",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
         <h1 style={{margin:"1px 0px"}}>See value from social sooner</h1>
         <p>Our training and strategic services have helped<br/><br/>thousands of organization succeed on social.</p>
         <button style={{
          borderWidth:"0px",fontWeight:"bold",
          color:"white",backgroundColor:"green", fontSize:"15px",padding:"10px"}}>Request a Demo</button>
         </div>
      </div>
    </div>
  );
};

export default Main;
