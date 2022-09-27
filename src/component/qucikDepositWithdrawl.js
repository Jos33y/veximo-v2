import React from "react";
import '../styles/quickDepositWithdrawal.css'
import visa from '../assets/home/8f5ef671e775c0b684be.svg';
import logo from '../assets/home/db8474d3b20701cbcbb4.svg';
const Quick = () => {
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
                      <div className="payment-method">
                          <img src={logo} alt="" className="visa"/>
                      </div>
                      <div className="payment-methods">
                          <img src={visa} alt="" className="visa"/>
                      </div>
                  </div>
                  <div className="d-flex">
                      <p className="vexi">Veximo Code</p>
                      <p className="VM">Visa/MasteCard</p>
                  </div>
                  <div className="quick-content">
                      <h4>Veximo Code PRO</h4>
                      <p>Veximo Code is a tool to transfer assets between user accounts on Kuna exchange
                          Veximo Code also allows the storage or transfer of any asset outside of the exchange, including exchangers.</p>
                      <div className="quick-button d-flex justify-content-center">
                          <button className="btn btn-primary">Deposit</button>
                          <button className="btn btn-light-purple">Withdrawal</button>
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}
export default Quick;
