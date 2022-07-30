import React from "react";

const NestedIterations = () => {
  let categories = [
    {
      category: "Electronics",
      product: ["Samsung Tv", "Iphone Mobile", "Speeker"],
    },
    {
      category: "Super Electronics",
      product: ["AirConditioner", "Freeze", "Radio"],
    },
  ];

  let ProductLists = [
    {
      price: 2500.0,
      category: "Electronics",
      product: "Samsung Tv",
      photo: "images/netflix1.png",
    },
    {
      price: 25000.0,
      category: "iphone Mobile",
      product: "Iphone 13",
      photo: "images/netflix3.png",
    },
    {
      price: 25000.0,
      category: "Smart Mobile",
      product: "Iphone 12",
      photo: "images/netflix3.png",
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <h2>Nested Iterations</h2>
        <ol>
          {categories.map((items, i) => {
            return (
              <>
                <li key={i}>
                  {items.category}
                  <ul>
                    {items.product.map((product, i) => {
                      return (
                        <>
                          <li key={i}>{product}</li>
                        </>
                      );
                    })}
                  </ul>
                </li>
              </>
            );
          })}
        </ol>
      </div>

      <div className="container-fluid">
        <h2>Select a Product using nested iterations</h2>
        <select className="container-fluid">
          {categories.map((data,i) => {
            return (
              <>
                <optgroup label={data.category} key={i} >
                  {data.product.map((nesData) => {
                    return <option key={nesData}>{nesData} </option>;
                  })}
                </optgroup>
              </>
            );
          })}
        </select>
        <h2>data binding with local resources</h2>
        <table className="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {ProductLists.map((showData, i) => {
              return (
                <>
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <th>{showData.category}</th>
                    <th>{showData.product}</th>
                    <th>{showData.price}</th>
                    <th>
                      <img src={showData.photo} alt="photoss" style={{height:"50px",width:"50px"}} />
                    </th>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NestedIterations;
