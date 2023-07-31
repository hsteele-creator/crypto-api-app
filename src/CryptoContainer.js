import App from "./App";
import { useEffect, useState } from "react";
import axios from "axios";
import CryptoBlock from "./CryptoBlock";
import "./CryptoContainer.css";

const CryptoContainer = () => {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const cryptoData =
    search === ""
      ? data
      : data.filter((item) => item.name.toLowerCase().includes(search));

  {
    if (!data) {
      return (
        <>
          <h1 className="loading">Loading...</h1>
          <p className="loading">If this message does not dissapear please try again in 5 minutes.</p>
        </>
      );
    } else {
      return (
        <>
          <div id="crypto-container">
            <div id="search-container">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
              ></input>
              <button>Submit</button>
            </div>
            {cryptoData.map((crypto) => {
              return (
                <CryptoBlock
                  id={crypto.id}
                  symbol={crypto.symbol}
                  name={crypto.name}
                  img={crypto.image}
                  price={crypto.current_price}
                  low={crypto.low_24h}
                  high={crypto.high_24h}
                  dayPriceChange={crypto.price_change_24h}
                />
              );
            })}
          </div>
        </>
      );
    }
  }
};

export default CryptoContainer;
