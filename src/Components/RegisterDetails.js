import React, { useState } from "react";
import StyleBindingComponent from "./StyleBindingComponent";

const RegisterDetails = () => {
  const [product, setProduct] = useState({
    Name: "",
    Price: 0,
    City: "",
    Stock: false,
  });

  const [theam, setTheam] = useState({});

  const [newProduct, setNewProduct] = useState({});

  const handleRegisterClick = (e) => {
    setNewProduct({
      Name: product.Name,
      Price: product.Price,
      City: product.City,
      Stock: product.Stock,
    });
  };

  const handleNameChange = (e) => {
    setProduct({
      Name: e.target.value,
      Price: product.Price,
      City: product.City,
      Stock: product.Stock,
    });
  };
  const handlePriceChange = (e) => {
    setProduct({
      Name: product.Name,
      Price: e.target.value,
      City: product.City,
      Stock: product.Stock,
    });
  };

  const handleCityChange = (e) => {
    setProduct({
      Name: product.Name,
      Price: product.Price,
      City: e.target.value,
      Stock: product.Stock,
    });
  };
  const handleStockChange = (e) => {
    setProduct({
      Name: product.Name,
      Price: product.Price,
      City: product.City,
      Stock: e.target.checked,
    });
  };
  const handleTheamChnage = (e) => {
    if (e.target.checked) {
      setTheam({
        backgroundColor: "black",
        color: "white",
        padding:"20px"
      });
    } else {
      setTheam({
        backgroundColor: "white",
        color: "black",
        padding:"20px"
      });
    }
  };

  return (
    <>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-4">
            <div className="theam" style={theam}>
              <div className="form-switch">
                <dt> 
                  <input
                    type="checkbox"
                    onChange={handleTheamChnage}
                    className="form-check-input"
                  />
                   Dark Theam
                </dt>
              </div>
              <h2>Register Form</h2>
              <dt>Product Name</dt>
              <dd>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Product Name"
                  onChange={handleNameChange}
                />
              </dd>
              <dt>Price</dt>
              <dd>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter price Name"
                  onChange={handlePriceChange}
                />
              </dd>
              <dt>Sheeped To</dt>
              <dd>
                <select className="form-select" onChange={handleCityChange}>
                  <option>Delhi</option>
                  <option>Pune</option>
                  <option>Aurangabad</option>
                </select>
              </dd>
              <dt>Stock</dt>
              <dd className="form-switch ">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleStockChange}
                />{" "}
                Product is Available ?
              </dd>
              <button
                className="btn btn-primary w-100"
                onClick={handleRegisterClick}
              >
                Save Product
              </button>
            </div>
          </div>

          <div className="col-2">
            <h2>Register Details</h2>
            <dt>Product Name</dt>
            <dd>{newProduct.Name}</dd>
            <dt>Price</dt>
            <dd>{newProduct.Price}</dd>
            <dt>Sheeped To</dt>
            <dd>{newProduct.City}</dd>
            <dt>Stock</dt>
            <dd>{newProduct.Stock === true ? "Availble" : "Out of Stock"}</dd>
          </div>
          <div className="col-6">
            <StyleBindingComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterDetails;
