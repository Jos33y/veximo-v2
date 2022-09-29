import React from "react";
import {Link, NavLink} from "react-router-dom";
import appleIcon from '../assets/home/apple-icon.svg';
import googleIcon from '../assets/home/google-icon.svg';
import {FcGoogle} from "react-icons/fc";
import '../styles/home.css';
import Nav from "../component/nav";
import 'animate.css';
import BuyCrypto from "../component/buyCrypto";
import Privacy from "../component/privacy";
import Quick from "../component/qucikDepositWithdrawl";
import Prices from "../component/prices";
import Trade from "../component/trade";
import CreditCard from "../component/creditCard";
import Footer from "../component/footer";
import VisaMasterCard from "../component/visaQuickDepositWithdrawal";
import Services from "../component/services";
import Invest from "../component/invest";
import Contact from "../component/contact";
import Location from "../component/location";

const Home = () => {
  return (
      <>
              <section className="home d-flex">
                  <div className="left-home-content">
                      <h1 className=" animate__backInLeft">The best way to buy and sell cryptocurrency</h1>
                      <p className=" animate__backInLeft">Sign up now to buy cryptocurrency and trade the most popular currency pairs</p>
                      <div className="socials-icon d-flex">
                          <div className="store">
                              <button className="btn btn-dark app-store animate__bounceIn"><img className="icon" src={appleIcon} alt=""/>Get on iPhone</button>
                          </div>
                          <div className="store">
                              <button className="btn btn-dark play animate__bounceIn"><img className="" src={googleIcon} alt=""/>Get on Android</button>
                          </div>
                      </div>
                  </div>
                  <div className="hero">
                      <div className="nav d-flex">
                          <Nav />
                      </div>
                      <div className="signUp animate__fadeInDownBig">
                          <div className="d-flex">
                              <NavLink to=""  className="nav-link">Create Account</NavLink>
                              <NavLink to=""  className="nav-link">Sign In</NavLink>
                          </div>
                          <form>
                              <input type="email" className="form-control"
                                     placeholder="Email" />
                              <input type="password" className="form-control"
                                     placeholder="Choose password"/>
                              <button className="btn btn-purple">Continue</button>
                          </form>
                          <button className="btn btn-dark register"><FcGoogle className="google-icon" />Sign in using Google</button><br/>
                          <h6 className="agree">By clicking Continue you agree to the terms of Kuna
                              Exchange User Agreement and confirm that you are over 18 years old</h6>
                      </div>
                  </div>
              </section>
          <Prices />
         <Trade />
          <Quick />
          <CreditCard />
          <Services />
          <Privacy />
          <Invest />
          <Contact />
          <Footer />
      </>
  );
}
export default Home;
