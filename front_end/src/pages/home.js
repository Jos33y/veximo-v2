import React from "react";
import {Link, NavLink} from "react-router-dom";
import appleIcon from '../assets/home/apple-icon.svg';
import googleIcon from '../assets/home/google-icon.svg';
import {FcGoogle} from "react-icons/fc";
import '../styles/home.css';
import Nav from "../component/nav";
import 'animate.css';
import Privacy from "../component/privacy";
import Quick from "../component/quickDepositWithdrawl";
import Prices from "../component/prices";
import Trade from "../component/trade";
import CreditCard from "../component/creditCard";
import Footer from "../component/footer";
import Services from "../component/services";
import Invest from "../component/invest";
import Contact from "../component/contact";
import {Col, Row} from "react-bootstrap";
import NavHeader from "../component/Header";
import GoogleIcon from "../assets/authentication/google_logo_icon.png";

const Home = () => {
  return (
      <>
          <div className="home-nav">
              <Nav />
          </div>
              <section className="home">
                  <Row>
                      <Col lg={8}>
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
                      </Col>
                      <Col lg={4}>
                          <div className="hero">
                              <div className="signUp animate__fadeInDownBig">
                                  <div className="d-flex">
                                      <NavLink to="/signup"  className="nav-link">Create Account</NavLink>
                                      <NavLink to="/signin"  className="nav-link">Sign In</NavLink>
                                  </div>
                                  <form>
                                      <div className="form-group">
                                          <div className="input-group">
                                              <i className='bx bxs-envelope'></i>
                                              <input type="text"
                                                     placeholder="Email"
                                                     required={true}
                                                     autoComplete="off"
                                                     className="form-control"/>
                                          </div>

                                      </div>

                                      <div className="form-group">
                                          <div className="input-group">
                                              <i className='bx bxs-lock-alt'></i>
                                              <input type="password"
                                                     placeholder="Password"
                                                     className="form-control"
                                                     autoComplete="off"
                                                     required={true}/>
                                          </div>
                                      </div>

                                      <div className="text-start">
                                          <Link to="/forgot_password" className="forgot_link" >Forgot password?</Link>
                                      </div>

                                      <div className="form-buttons">
                                          <button className="btn btn-primary" type="submit">Sign In</button>
                                          <p>or</p>
                                          <button className="btn btn-secondary">
                                              <img src={GoogleIcon} alt="" className="img-fluid"/> Sign in using Google</button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </Col>
                  </Row>
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
