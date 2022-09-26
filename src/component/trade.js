import React from "react";
import '../styles/trade.css';
import { RiArrowUpDownFill} from "react-icons/ri";
const Trade = () => {
  return (
      <section className="trade d-flex">
          <div className="trade-left">
              <div className="input-group mb-3 send">
                  <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="You Pay"/>
                      <button className="btn btn-outline-secondary dropdown-toggle" type="button"
                              data-bs-toggle="dropdown" aria-expanded="false">BTC
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                          <li><a className="dropdown-item" href="#">ETH</a></li>
                          <li><a className="dropdown-item" href="#">BCH</a></li>
                          <li><a className="dropdown-item" href="#">LTE</a></li>
                      </ul>
              </div>
              <RiArrowUpDownFill className="arrow" />
              <div className="input-group mb-3 get">
                  <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="You get"/>
                  <button className="btn btn-outline-secondary dropdown-toggle" type="button"
                          data-bs-toggle="dropdown" aria-expanded="false">ETH
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item" href="#">ETH</a></li>
                      <li><a className="dropdown-item" href="#">BCH</a></li>
                      <li><a className="dropdown-item" href="#">LTE</a></li>
                  </ul>
              </div>
              <button className="btn btn-purple">Swap</button>
          </div>
          <div className="trade-right">
              <div className="trade-right-content">
                  <h1>Limitless crypto exchange</h1>
                  <p>Fast,simple, non-custodial Exchange Services
                      with 5+ crypto-currencies.We pay your network fee</p>
                  <button className="btn btn-dark">Exchange Crypto</button>
              </div>
          </div>
      </section>
  );
}
export default Trade;
