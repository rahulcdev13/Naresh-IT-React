import React from "react";

const ChildComponent = (props) => {
  return (
    <>
      <div className="card w-25">
        <img
          alt="photosss"
          src={props.Photo}
          className="card-image-top"
          height="300" 
        />
        <div className="card-header">
          <dt>{props.Name}</dt>
          <dt>{props.Price}</dt>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger w-100"> <span className="bi bi-cart4"></span> Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ChildComponent;
