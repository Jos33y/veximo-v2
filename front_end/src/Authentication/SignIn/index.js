import React from "react";
import '../styles/authStyle.css'
import {Link, useNavigate} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import NavHeader from "../../component/Header";

const SignIn = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted');
        navigate('/dashboard/home');
    }
    return (
        <>
            <NavHeader />
            <div className="box-container">
                <Row className="justify-content-center">
                    <Col md={3}></Col>
                    <Col md={5}>
                        <div className="form-box">
                            <form onSubmit={handleSubmit} >
                                <h3>Sign In</h3>
                                <p>Glad to see you again</p>

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
                                
                                </div>

                                <div className="form-group text-center">
                                    <Link to="/signup" className="forgot_link" >Don't have an account? Create!</Link>
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </div>
        </>
    )
}

export default SignIn
