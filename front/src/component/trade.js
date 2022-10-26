import React from "react";
import '../styles/trade.css';
import { RiArrowUpDownFill} from "react-icons/ri";
import {Col, Row} from "react-bootstrap";
import {BsYoutube} from "react-icons/bs";
import {Link} from "react-router-dom";
const Trade = () => {
  return (
      <section className="trade ">
          <Row>
              <Col lg={4}>
                  <div className="trade-left">
                      <div className="swap-exchange">
                          <p className="you-pay">You Pay</p>
                          <div className="input-group mb-3 send">
                              <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="0"/>
                              <button className="btn btn-outline-secondary dropdown-toggle" type="button"
                                      data-bs-toggle="dropdown" aria-expanded="false">BTC
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                  <li><a className="dropdown-item" href="https://">ETH</a></li>
                                  <li><a className="dropdown-item" href="https://">BCH</a></li>
                                  <li><a className="dropdown-item" href="https://">LTE</a></li>
                              </ul>
                          </div>
                          <RiArrowUpDownFill className="arrow" />
                          <p className="you-get">You Get</p>
                          <div className="input-group mb-3 get">
                              <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="0"/>
                              <button className="btn btn-outline-secondary dropdown-toggle" type="button"
                                      data-bs-toggle="dropdown" aria-expanded="false">ETH
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                  <li><a className="dropdown-item" href="https://">ETH</a></li>
                                  <li><a className="dropdown-item" href="https://">BCH</a></li>
                                  <li><a className="dropdown-item" href="https://">LTE</a></li>
                              </ul>
                              <p className="conversion-amount">1 BTC = 10 ETH</p>
                          </div>
                         <Link to="/signin"><button className="btn btn-purple">Swap</button></Link>
                      </div>
                  </div>
              </Col>
              <Col lg={8}>
                  <div className="trade-right">
                      <div className="trade-right-content">
                          <h1>Limitless crypto exchange</h1>
                          <p>Fast,simple, non-custodial Exchange Services
                              with 5+ crypto-currencies.We pay your network fee</p>
                          <ul className="trade-right-list">
                              <li className="trade-list">Quick buy, sell, exchange</li>
                              <li className="trade-list">Instant tracking</li>
                          </ul>
                          <Link to="/signin"><button className="btn btn-dark">Exchange Crypto</button></Link>
                          <button className="btn btn-primary video"><BsYoutube  className="youtube"/>Exchange video representation</button>
                      </div>
                  </div>
              </Col>
          </Row>
      </section>
  );
}
export default Trade;
