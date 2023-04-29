import React from "react";

var fImg = {
  width:"40%"

}
var sImg = {
  width:"60%"
}
var tImg = {
  width:"30%"
}

const Footer = () => {
  return (
    <div
      style={{
        margin:"20px",
        display: "flex",
        height: "90px",
        paddingBottom: "10px",
        paddingLeft:"10px",
        backgroundColor: "white",
        textAlign: "center",
        justifyContent:"center",
      }}
    >
      <div>
         <img 
         style={fImg}
         src="https://e7.pngegg.com/pngimages/259/691/png-clipart-gray-blue-and-orange-rocket-rocket-league-guess-the-emoji-sticker-spaceship-spacecraft-vehicle-thumbnail.png" alt=""/>
        <p>
          Lorem ipsum dolor sit amet am nupti eaque soluta quasi
        </p>
      </div>
      <div>
      <img style={sImg}
      src="https://mydocsafe.com/wp-content/uploads/2020/10/automate-employee-onboarding-icon-mds.png" alt=""/>
      
        <p>
          Lorem ipsum dolor rrupti eaque soluta quasi pe  
        </p>
      </div>
      <div>
      <img style={tImg}
      src="https://cdn-icons-png.flaticon.com/512/32/32384.png" alt=""/>
        <p>
          icia eius in fugit tempora quaerat nisi commodi molestias 
        </p>
      </div>
    </div>
  );
};

export default Footer;
