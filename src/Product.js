import React from 'react'

export const Product = (props) => (
  <div className="col-xs-6 col-sm-4 col-md-3"
       onClick={props.onClick}>  
    <div className="product-container product col-sm-12">
      <img className="col-xs-offset-3" 
           height="250px"
           alt={props.image}
           src={props.image} />
      <h3>{props.name}</h3>
      <span className="price">
        {props.price}$
      </span>
      {props.isClicked && <div>
        <p className="inStock">
          {(props.info.inStock)
            ? "✔ In stock"
            : "🚚 Special delivery"}          
        </p>
        {props.info.text}
      </div>}
    </div>
  </div>
)