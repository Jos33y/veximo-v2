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
                  <div className="d-flex justify-content-center">
                      <h5 className="payment">UAH</h5>
                      <h5 className="payment">USD</h5>
                  </div>
                  <div className="d-flex justify-content-center">
                      <div className="payment-method">
                          <img src={logo} alt="" className="visa"/>
                      </div>
                      <div className="payment-method">
                          <img src={visa} alt="" className="visa"/>
                      </div>
                  </div>
                  <div>
                      <h4>Kuna Code PRO</h4>
                      <p>Kuna Code is a tool to transfer assets between user accounts on Kuna exchange
                          Kuna Code also allows the storage or transfer of any asset outside of the exchange, including exchangers.</p>
                      <div className="d-flex justify-content-center">
                          <button className="btn btn-primary">Deposit</button>
                          <button className="btn btn-primary">Withdrawal</button>
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}
export default Quick;
