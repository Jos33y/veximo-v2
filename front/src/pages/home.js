import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import appleIcon from '../assets/home/apple-icon.svg';
import googleIcon from '../assets/home/google-icon.svg';
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
import GoogleIcon from "../assets/authentication/google_logo_icon.png";

const Home = () => {

    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(true);

    const handleFormSwitch = (authentication) => {

        if(authentication === 'register'){
            setIsActive(false)
        }
        else{
            setIsActive(true)
        }
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        console.log('submitted');
        navigate('/confirm_email');
    }

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('submitted');
        navigate('/dashboard/home');
    }
  return (
      <>
          <div className="home-nav">
              <Nav />
          </div>
              <section className="home">
                  <Row>
                      <Col lg={7}>
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
                      <Col lg={5} >
                          <div className="auth-box animate__fadeInDownBig">
                              <div className="nav-auth">
                                  <p onClick={() => { handleFormSwitch('register')}} className={`${isActive ? (''): ('active') }`}>Create account</p>
                                  <p onClick={() => { handleFormSwitch('login')}} className={`${isActive ? ('active'): ('') }`}>Sign In</p>
                              </div>

                              {/*home page form*/}
                              { isActive ? (
                                  <div className="box-form">
                                      <form onSubmit={handleLogin}>
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

                                          <div className="text-end">
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
                              ) : (
                                  <div className="box-form">
                                      <form onSubmit={handleRegistration}>
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

                                          <div className="form-buttons">
                                              <button className="btn btn-primary" type="submit">Continue</button>
                                              <p>or</p>
                                              <button className="btn btn-secondary">
                                                  <img src={GoogleIcon} alt="" className="img-fluid"/> Continue with Google</button>
                                          </div>

                                          <div className="text-start">
                                              <p className="terms">
                                                  By clicking Continue you agree to the terms of
                                                  <Link to="/signup_agreement" className="forgot_link" > Veximo Exchange User Agreement </Link>
                                                  and confirm that you are over 18 years old
                                              </p>
                                          </div>
                                      </form>
                                  </div>
                              )}

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
