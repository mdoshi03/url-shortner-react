import React from "react";
import githubLogo from "./github.svg";
import email from "./email 1.svg";

const footer = () => {
  
  return (
    <div>
    
      <div className="my-logo">
        <div className="image-div">
          
          <a href="https://github.com/meet12398">
            <img width="50px" height="50px" src={githubLogo} alt="" />
          </a>

          <a href="mailto:meetdoshi33@gmail.com">
            <img width="50px" height="50px" src={email} alt="" />
          </a>
        </div>
        <div className="textDiv">
          
        </div>
      </div>
    </div>
  );
};

export default footer;
