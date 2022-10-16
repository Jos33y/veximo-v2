import React from "react";
import '../styles/veximoMoney.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavHeader from "../component/Header";
// import {Link} from "react-router-dom";
// import GoogleIcon from "../assets/authentication/google_logo_icon.png";
import Contact from "../component/contact";
import Footer from "../component/footer";

const VeximoMoney = () => {
  return (
      <>
          <NavHeader />
          <section className="vexi-money">
              <div className="vexi-money-header">
                  <h1 className="title">Fast purchase and selling of cryptoassets</h1>
                  <p className="ads">Buying and selling cryptocurrency using cards Visa/Mastercard UAH</p>
              </div>
              <Container>
                  <div className="exchanges">
                      <Row>
                          <Col lg={4}>
                              <div className="give">
                                  <h2>Give</h2>
                                  <p>Choose how to pay for your purchases</p>
                              </div>
                              <div className="crypto-currency">
                                  <button className="btn btn-primary">BTC</button>
                                  <button className="btn btn-primary">ETH</button>
                                  <button className="btn btn-primary">tether</button>
                                  <button className="btn btn-primary">USDC</button>
                                  <button className="btn btn-primary">LTE</button>
                                  <button className="btn btn-primary">BCH</button>
                                  <button className="btn btn-primary">DOGE</button>
                                  <button className="btn btn-primary">BTC</button>
                                  <button className="btn btn-primary">ETH</button>
                                  <button className="btn btn-primary">tether</button>
                              </div>
                          </Col>
                          <Col lg={3}>
                              <div className="vl">
                                  <div className="get">
                                      <h2>Get</h2>
                                      <p>Select the asset that you would like to buy</p>
                                  </div>
                                  <div className="crypto-currency">
                                      <button className="btn btn-primary">BTC</button>
                                      <button className="btn btn-primary">ETH</button>
                                      <button className="btn btn-primary">tether</button>
                                      <button className="btn btn-primary">USDC</button>
                                      <button className="btn btn-primary">LTE</button>
                                      <button className="btn btn-primary">BCH</button>
                                      <button className="btn btn-primary">DOGE</button>
                                  </div>
                              </div>
                          </Col>
                          <Col lg={5}>
                              <div className="vl">
                                  <div>
                                      <div className="form-box">
                                          <form>
                                              <h3>Transaction details</h3>
                                              <p>Buy Bitcoin (BTC) via Visa/Mastercard (UAH)</p>

                                              <div className="form-group">
                                                  <label className="form-label">You will give</label>
                                                  <div className="input-group">
                                                      <input type="number"
                                                             placeholder="BTC"
                                                             className="form-control"/>
                                                  </div>

                                              </div>
                                              <label className="form-label">You will get</label>
                                              <div className="form-group">
                                                  <div className="input-group">
                                                      <input type="number"
                                                             placeholder="ETH"
                                                             className="form-control"
                                                           />
                                                  </div>
                                              </div>
                                              <label className="form-label">Address BTC wallet.</label>
                                              <div className="form-group">
                                                  <div className="input-group">
                                                      <input type="text"
                                                             placeholder="Address"
                                                             className="form-control"
                                                      />
                                                  </div>
                                              </div>
                                              <label className="form-label">Email</label>
                                              <div className="form-group">
                                                  <div className="input-group">
                                                      <input type="email"
                                                             placeholder="Email"
                                                             className="form-control"
                                                      />
                                                  </div>
                                              </div>
                                              <div className="form-check">
                                                  <input className="form-check-input" type="checkbox" value=""
                                                         id="flexCheckDefault" />
                                                      <label className="form-check-label" htmlFor="flexCheckDefault">
                                                         I agree to the terms <span>of use of Veximo exchange</span>
                                                      </label>
                                              </div>
                                              <div className="form-buttons">
                                                  <button className="btn btn-primary" type="submit">Buy</button>
                                              </div>

                                          </form>
                                      </div>
                                  </div>
                              </div>
                          </Col>
                      </Row>
                  </div>
              </Container>
          </section>
          <Contact />
          <Footer />
      </>
  );

}
export default VeximoMoney;
