import React, { useState } from "react";

const StyleBindingComponent = () => {
  const [backColor, setBackColor] = useState({backgroundColor:"red"});
  const [textColor, setTextColor] = useState({color:"white"});
  const [alignment, setAlignment] = useState("");

  const handleBackColor = (event) => {
    setBackColor(event.target.value);
  };
  const handleTextColor = (event) => {
    setTextColor(event.target.value);
  };
  const handleAlignment = (event) => {
    setAlignment(event.target.value)
  };
  return (
    <>
      <div className="container-fluid">
        <dl>
          <dt>Background Color Chnage</dt>
          <dd>
            <select className="form-select" onChange={handleBackColor}>
              <option>Select Background Color</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="purple">Purple</option>
            </select>
          </dd>
          <dt>Text Color</dt>
          <dd>
            <select className="form-select" onChange={handleTextColor}>
            <option>Select Text Color</option>
              <option value="white">White</option>
              <option value="green">Green</option>
              <option value="black">Black</option>
              <option value="yellow">Yellow</option>
            </select>
          </dd>
          <dt>Style Alignment</dt>
          <dd>
            <input 
              type="radio"
              name="align"
              value="left"
              onChange={handleAlignment}
            />
            Left
            <input
              type="radio"
              name="align"
              value="center"
              onChange={handleAlignment}
            />
            Center
            <input
              type="radio"
              name="align"
              value="right"
              onChange={handleAlignment}
            />
            RIght
          </dd>
        </dl>
        <h1
          style={{
            backgroundColor: backColor,
            color: textColor,
            padding: "20px",
            textAlign:alignment
          }}
        >
          Style binding in React
        </h1>
      </div>
    </>
  );
};

export default StyleBindingComponent;
