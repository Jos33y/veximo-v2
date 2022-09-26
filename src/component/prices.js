import React from "react";
import '../styles/prices.css';
const Prices = () => {
  return (
      <>
          <section className="marquee market-prices">
              <ul className="d-flex">
                  <li>BTC/USDT</li><span>18700 2.69%</span>
                  <li>BTC/ETH</li><span>18700 2.69%</span>
                  <li>BTC/BCH</li><span>18700 2.69%</span>
                  <li>ETH/USDT</li><span>1300 2.69%</span>
                  <li>XRP/USDT</li><span>1 2.69%</span>
                  <li>BCH/USDT</li><span>400 2.69%</span>
                  <li>LTE/USDT</li><span>100 2.69%</span>
              </ul>
          </section>
      </>
  );
}
export default Prices;
