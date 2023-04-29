import React from "react";
var hImg = {
  width:"10%"
}
const Header = () => {
  return (
    <div
      style={{
        height: "60px",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "20%",
          marginLeft: "20px",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <img style={hImg}
      src="https://cdn.iconscout.com/icon/free/png-256/hootsuite-3521491-2944935.png" alt=""/>
        <h2>Hootsuite</h2>
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      > 
        <a
          href="/"
          style={{
            color: "black",
            fontWeight: "bold",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Platform
        </a>
        <a
          href="/"
          style={{
            color: "black",
            fontWeight: "bold",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Plans
        </a>
        {/* // eslint-disable-next-line */}
        <a
          href="/"
          style={{
            color: "black",
            fontWeight: "bold",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Enterprise
        </a>
        <a
          href="/"
          style={{
            color: "black",
            fontWeight: "bold",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Resources
        </a>
        <a
          href="/"
          style={{
            color: "black",
            fontWeight: "bold",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Education
        </a>
      </div>

      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          color: "gray",
        }}
      >
        <a
          href="/"
          style={{
            color: "black",
            fontWeight: "bold",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Contact Us
        </a>
        <a
          href="/"
          style={{
            color: "black",
            fontWeight: "bold",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Log in
        </a>
        <button  style={{
            color: "white",
            backgroundColor:"green",
            fontWeight: "bold",
            marginRight: "20px",
            borderWidth:"0px",
            fontSize:"12px",
            padding:"10px"
          }}>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
