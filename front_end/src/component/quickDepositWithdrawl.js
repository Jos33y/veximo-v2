import React, {useState} from "react";
import '../styles/quickDepositWithdrawal.css'
import visa from '../assets/home/8f5ef671e775c0b684be.svg';
import logo from '../assets/home/db8474d3b20701cbcbb4.svg';
import {Link, NavLink} from "react-router-dom";
const Quick = () => {

    const [visible, setVisible] =useState(true)
  return (
      <>
          <section className="quick">
              <div className="">
                  <h1>Easy and quick deposits and withdrawals</h1>
                  <div className="d-flex promo">
                      <h5 className="currency">UAH</h5>
                      <h5>NGN</h5>
                  </div>
                  <div className="payments d-flex justify-content-center">
                      <NavLink to=""  className="nav-link active" onClick={ () => setVisible(true)}>
                          <div className="payment-method" >
                             <img src={logo} alt="" className="visa"/>
                          </div>
                      </NavLink>
                      <NavLink to=""  className="nav-link cardss"  onClick={ () => setVisible(false)}>
                          <div className="payment-methods">
                            <img src={visa} alt="" className="visa"/>
                          </div>
                      </NavLink>
                  </div>
                  <div className="d-flex">
                        <p className="vexi">Veximo Code</p>
                        <p className="VM">Visa/MasteCard</p>

                  </div>
                  {visible ? (
                      <div className="quick-content">
                          <h4>Veximo Code PRO</h4>
                          <p>Veximo Code is a tool to transfer assets between user accounts on Kuna exchange
                              Veximo Code also allows the storage or transfer of any asset outside of the exchange,
                              including exchangers.</p>
                          <div className="quick-button d-flex justify-content-center">
                              <Link to="/signin" ><button className="btn btn-primary">Deposit</button></Link>
                              <Link to="/signin" ><button className="btn btn-light-purple">Withdrawal</button></Link>
                          </div>
                      </div>
                      ): (
                      <div>
                          <div className="quick-content">
                              <h4>Visa/Mastercard</h4>
                              <p>Visa/Mastercard is a global international payment system</p>
                              <p>Visa Inc is an American company which has traded since 1958 and annual turnover on Visa cards is
                                  2,5 trillion US Dollars. Visa cards can be used as payment in retail outlets in more than 150
                                  countries around the world, and the companies products are used by 21 thousand member
                                  financial organisations and their card holders.</p>
                              <p>From 20th September 2013 the price of Visa Inc stock in included in the Dow-Jones valuation calculation.</p>
                              <p>Mastercard Worldwide or Mastercard Incorporated is an international payment system and
                                  transnational financial corporation, that unites 22 thousand financial institutions in 210 countries
                                  around the world. It was founded in 1966 in the United States. Mastercard holds about 20% of the
                                  world payment market.
                              </p>
                              <p>
                                  VISA differs from Mastercard mainly due to focusing its operations on Dollars, while Mastercard
                                  carries out its operations in Dollars and Euros.</p>
                              <div className="quick-button d-flex justify-content-center">
                                  <Link to="/signin" ><button className="btn btn-primary">Deposit</button></Link>
                                  <Link to="/signin" ><button className="btn btn-light-purple">Withdrawal</button></Link>
                              </div>
                          </div>
                      </div>

                  )
                  }
              </div>
          </section>
      </>
  );
}
export default Quick;
