import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [products] = useState([
    {
      Name: "JBL Speeker",
      Price: 52000,
      Photo: "https://images.unsplash.com/photo-1558537348-c0f8e733989d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amJsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      Name: "Boat Speeker",
      Price: 42000,
      Photo: "https://m.media-amazon.com/images/I/81eHoy7LLmS._SX679_.jpg",
    },
    {
      Name: "Boss Speeker",
      Price: 12000,
      Photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCP_ND0wEAK9-TjzRjQXOybjYNml0HKp8itdQYmmPFNGwhLN_mO80Aak72QEhpuQ1igQo&usqp=CAU",
    },
    {
        Name: "Boat Speeker",
        Price: 42000,
        Photo: "https://m.media-amazon.com/images/I/81eHoy7LLmS._SX679_.jpg",
      },
  ]);
  console.log(products);
  return (
    <>
      <div className="container-fluid">
        <h1>Product Details MArket Showing Detailsss </h1>
        <div className="d-flex flex-wrap">
          {products.map((product, ind) => {
            return (
              <React.Fragment key={ind}>
                <ChildComponent
                  key={ind}
                  Name={product.Name}
                  Price={product.Price}
                  Photo={product.Photo}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ParentComponent;
