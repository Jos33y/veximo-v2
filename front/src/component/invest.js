import React from "react";
import '../styles/invest.css';
import {Link} from "react-router-dom";
const Invest = () => {
  return (
      <>
          <section className="invest">
              <div className="invest-content d-flex">
                  <h1>Start Investing your crypto coins with Veximo</h1>
                 <Link to="/signin"><button className="btn btn-primary">lets Get Started</button></Link>
              </div>
              <p className="">Take the first step for a future without limits</p>
          </section>
      </>
  );
}
export default Invest;
