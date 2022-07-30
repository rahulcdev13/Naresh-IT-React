import React from "react";

const Card = () => {
  let products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 4,
      title: "Mens Casual Slim Mens Casual Slim Fit Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: { rate: 2.1, count: 430 },
    },
    
  ];
  return (
    <>
      <div className="fluid container">
        <div className="d-flex flex-wrap">
          {products.map((product, ind) => {
            return (
              <>
                <div key={ind} className="card m-2 w-25">
                  <img
                    src={product.image}
                    alt="preview"
                    className="card-img-top"
                  />
                  <div className="card-header">
                    <p>
                      {product.title}{" "}
                      <span className="bi bi-star-fill text-warning">
                        {" "}
                        {product.rating.rate}
                      </span>
                    </p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-danger w-100">
                      <span className="bi bi-cart3"> Add To Cart</span>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
