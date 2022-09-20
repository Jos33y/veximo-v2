import React from "react";
import security from '../assets/home/undraw_two_factor_authentication_namy.svg';
import passcode from '../assets/home/passcode.png'
import {Col, Row} from "react-bootstrap";
import crypto from '../assets/home/undraw_digital_currency_qpak.svg';
import crypto2 from '../assets/home/undraw_digital_currency_qpakpink.svg';
import '../styles/privacy.css';
const Privacy = () => {
  return (
      <>
          <section className="section2">
              <Row>
                  <Col lg={6}>
                      <div className="left-se2 d-flex">
                          <img src={security} alt="" className="security"/>
                          <div className="">
                              <h1 className="animate__fadeInDown">Your security is our priority</h1>
                              <p className="animate__backInLeft">Veximo uses the highest level of Internet Security and it is secured by 256 bits SSL security
                                  encryption to ensure that your information is completely protected from fraud.</p>
                          </div>
                      </div>
                  </Col>
                  <Col lg={6}>
                      <div className="shape">
                          <img src={passcode} alt="" className="passcode  animate__backInLeft"/>
                      </div>

                  </Col>
              </Row>
          </section>
          <section className="section3">
              <div className="d-flex justify-content-center">
                  <div className="box1">
                      <img src={crypto2} alt="" className="crypto"/>
                  </div>
                  <div className="middle-box">
                      <h2>Our accounts are 100% backed</h2>
                      <p>All amounts on our exchange are backed with real money.</p>
                      <p>The reserve ratio for banks is less than 10% of raised funds total amount.
                          Our exchange always reserves 100% of money.
                          Therefore users can withdraw all money from their accounts and it will not affect the work of our exchange.</p>
                  </div>
              </div>
              <div className=" right-box d-flex  justify-content-center">
                  <div className="white-money">
                      <h1>100%
                          WHITE MONEY</h1>
                  </div>
                  <div className="box2">
                      <img src={crypto} alt="" className="crypto"/>
                  </div>
              </div>
          </section>
      </>
  );
}
export default Privacy;
