import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import NavHeader from "../../component/Header";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase"


const SignUp = () => {

    const navigate = useNavigate()
    
    const [data, setData] = React.useState(null);
    const [isDisable, setDisable] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const { email, password } = formData;


    const handleSubmit = async (e) => {
        e.preventDefault()
        setDisable(true);
        try {
        
            await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // eslint-disable-next-line
                    const user = userCredential.user;
                })
                .catch((error) => {
                    // eslint-disable-next-line
                    const errorCode = error.code;
                    // eslint-disable-next-line
                    const errorMessage = error.message;
                });


            navigate('/confirm_email');

        }
        catch (error) {
            console.error({ error });
        }

    }

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    useEffect(() => {

        fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));

    }, [])

    return (
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
                                <p>{!data ? "Loading..." : data}</p>

                                <div className="form-group">
                                    <div className="input-group">
                                        <i className='bx bxs-envelope'></i>
                                        <input type="text"
                                            placeholder="Email"
                                            required={true}
                                            id="email"
                                            value={email}
                                            onChange={onChange}
                                            autoComplete="off"
                                            className="form-control" />
                                    </div>

                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <i className='bx bxs-lock-alt'></i>
                                        <input type="password"
                                            id="password"
                                            value={password}
                                            onChange={onChange}
                                            placeholder="Password"
                                            className="form-control"
                                            autoComplete="off"
                                            required={true} />
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
                                    <button className="btn btn-primary" disabled={isDisable} type="submit">Continue</button>
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