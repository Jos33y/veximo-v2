import React from "react";
import '../styles/crediCard.css'
const CreditCard = () => {
  return (
      <>
          <section className="credit-card">
              <h1>Buy crypto currency with your credit cards</h1>
              <p>Become a crytpo owner in minutes using credit or debit cards</p>
              <div className="box">
                  <div className="d-flex">
                      <label className="form-label right">I want to spend</label>
                      <label className="form-label">I want to buy</label>
                  </div>
                  <div className="d-flex">
                      <div className="input-group spend">
                          <input type="text" className="form-control" placeholder="0"/>
                      </div>
                      <div className="input-group get">
                          <input type="text" className="form-control" placeholder="BTC"/>
                      </div>
                      <button className="btn btn-primary">Buy Crypto</button>
                  </div>
              </div>
          </section>
      </>
  );
}
export default CreditCard;
