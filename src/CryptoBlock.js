import React from "react";
import "./CryptoBlock.css";

const CryptoBlock = ({
  id,
  symbol,
  name,
  img,
  price,
  low,
  high,
  dayPriceChange,
}) => {
  return (
    <>
      <div className="crypto-block-container">
        <img className="crypto-block-img" src={img} />
        <p>{name}</p>
        <p>{symbol.toUpperCase()}</p>
        <p>${price}</p>
        <p className="crypto-high">High: ${high}</p>
        <p className="crypto-low">Low: ${low}</p>
        <p className={dayPriceChange > 0 ? "positive" : "negative"}>
          {dayPriceChange > 0
            ? "+" + Math.round(dayPriceChange * 100) / 100
            :  Math.round(dayPriceChange * 100) / 100}
        </p>
      </div>
    </>
  );
};

export default CryptoBlock;
