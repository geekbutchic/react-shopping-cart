import React, { Component } from "react";

export default class Products extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={"#" + product._id}>
                  <img src={product.image} alt={product.title}></img>
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                     {product.price}
                </div>
                <button className="primary button">
                    ADD TO CART
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
