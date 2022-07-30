import React from "react";

const DataBindingP = () => {
  let categories = ["electronics", "Cloths", "footwear", "fashin"];
  let productName = "iphone 13 pro-max int.";
  let price = 78999.0;
  let stock = true;
  console.log(categories);
  let categorydata = [
    { id: "1", Name: "rahul", Email: "rahul@123gmail.com", address: "Pune" },
    { id: "2", Name: "Samat", Email: "rahul@123gmail.com", address: "Pune" },
    { id: "3", Name: "Ajinkya", Email: "rahul@123gmail.com", address: "Pune" },
    { id: "4", Name: "Suhas", Email: "rahul@123gmail.com", address: "Pune" },
    { id: "5", Name: "Vinya", Email: "rahul@123gmail.com", address: "Pune" },
  ];
  console.log(categorydata);
  return (
    <>
      <div className="container-fluid">
        <h2>Category List</h2>
        <ol className="list-unstyle">
          {categories.map((cdata) => {
            return <li key={cdata}>{cdata}</li>;
          })}
        </ol>
        <h2>Select category List </h2>
        <select>
          <option>--select Category--</option>
          {categories.map((cdata) => {
            return (
              <>
                <option key={cdata}>{cdata}</option>
              </>
            );
          })}
        </select>
        <h2>Category in Table form</h2>
        <div className="container-fluid">
          <table className="table table-striped table-bordered table-hover table-condensed">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
            <tbody>
              {categorydata.map((data, i) => {
                return (
                  <>
                    <tr key={i}>
                      <th>{data.id}</th>
                      <th>{data.Name}</th>
                      <th>{data.Email}</th>
                      <th>
                        <button className="btn btn-primary me-3">
                        <span className="bi bi-eye-fill"></span>
                        </button>
                        <button className="btn btn-danger">
                        <span className="bi bi-trash"></span>
                        </button>
                      </th>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container-fluid">
        <dl>
          <dt>Product Name</dt>
          <dd>{productName}</dd>
          <dt>Price</dt>
          <dd>{price}</dd>
          <dt>Stock</dt>
          <dd>{stock === true ? "Available" : "Out of stock"}</dd>
        </dl>
      </div>
    </>
  );
};

export default DataBindingP;
