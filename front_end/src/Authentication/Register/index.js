import React from "react";
import {Col, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import GoogleIcon from "../../assets/authentication/google_logo_icon.png";
import NavHeader from "../../component/Header";

const SignUp = () => {

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted');
        navigate('/confirm_email');
    }
    return(
        <>
            <NavHeader />
            <div className="box-container">
                <Row className="justify-content-center">
                    <Col md={3}></Col>
                    <Col md={5}>
                        <div className="form-box">
                            <form onSubmit={handleSubmit} >
                                <h3>Create account</h3>
                                <p>Quick way to buy cryptocurrency</p>

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
                                    <p className="terms">
                                        By clicking Continue you agree to the terms of
                                        <Link to="/signup_agreement" className="forgot_link" > Veximo Exchange User Agreement </Link>
                                        and confirm that you are over 18 years old
                                    </p>

                                </div>

                                <div className="form-buttons">
                                    <button className="btn btn-primary" type="submit">Continue</button>
                                    <p>or</p>
                                    <button className="btn btn-secondary">
                                        <img src={GoogleIcon} alt="" className="img-fluid"/> Continue with Google</button>
                                </div>

                                <div className="form-group text-center">
                                    <Link to="/signin" className="forgot_link" >I already have an account. Sign In</Link>
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col md={3}></Col>

                </Row>
            </div>
        </>

    );
}
export default SignUp