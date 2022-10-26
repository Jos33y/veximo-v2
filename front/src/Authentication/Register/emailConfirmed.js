import React from "react";
import {Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import EmailConfirmedImage from  "../../assets/authentication/email_confirmed.png";
import DashHeader from "../../Dashboard/components/DashHeader";

const EmailConfirmed = () => {
    const navigate = useNavigate()
    const handleSubmit = () => {
        console.log('confirmed');
        navigate('/dashboard/home');
    }
    return (
        <>
            <DashHeader />
            <div className="box-container">
                <Row className="justify-content-center">
                    <Col md={3}></Col>
                    <Col md={5}>
                        <div className="form-box">
                            <div className="confirmed"  >
                                <div className="image-header">
                                    <img src={EmailConfirmedImage} alt="" className="img-fluid"/>
                                </div>
                                <h3>Email has been confirmed</h3>
                                <p>Yay, you can now sign in to your account! </p>

                                <div className="form-buttons">
                                    <button onClick={handleSubmit} className="btn btn-primary">Go to Dashboard</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}></Col>

                </Row>
            </div>
        </>
    )
}

export default EmailConfirmed