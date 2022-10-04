import React from "react";
import NavHeader from "../../component/Header";
import {Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import SendEmailImage from  "../../assets/authentication/send-email.png";

const ConfirmEmail = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('code submitted');
        navigate('/email_confirmed');
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
                                <div className="image-header">
                                    <img src={SendEmailImage} alt="" className="img-fluid"/>
                                </div>
                                <h3>Confirm Email</h3>
                                <p>We've sent you a 6 digit code at <span className="text-bold">josephlagbalu@gmail.com.</span>  Copy it to the field below</p>

                                <div className="form-group">
                                    <div className="input-code">
                                        <input type="text"
                                               placeholder="6-digits activation code"
                                               required={true}
                                               maxLength="6"
                                               autoComplete="off"
                                               className="form-control"/>
                                    </div>

                                </div>

                                <div className="form-buttons">
                                    <button className="btn btn-primary" type="submit">Done</button>
                                </div>

                                <div className="form-group text-center">
                                    <p className="send-code" >Send the email again</p>
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

export default ConfirmEmail