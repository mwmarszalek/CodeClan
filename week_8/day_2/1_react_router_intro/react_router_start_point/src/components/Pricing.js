import React from "react";

const Pricing = ({ prices }) => {

  const priceItems = prices.map((price,index) => {
    return <li key={index}>{price.level}: £{price.cost}</li>
  })

  return (
    <div>
      <h4>Pricing</h4>
      <ul>
        { priceItems }
      </ul>
    </div>
  )
};

export default Pricing;
