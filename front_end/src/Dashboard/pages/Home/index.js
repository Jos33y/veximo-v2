import React from "react";
import '../styles/index.css'
import DashHeader from "../../components/DashHeader";
import {Container} from "react-bootstrap";

const DashboardHome = () => {
    return (
        <>
            <DashHeader isActive="dashboard" />
            <div className="container-fluid main-section">
                <div className="dashboard-home">
                    <div className="assets-balance">
                        <h6>Balance of all assets</h6>
                        <h2>0.00 NGN</h2>
                        <p>0.00 USD</p>
                    </div>

                    <div className="fiat-balance">
                        <p>Fiat Funds</p>

                        <div className="fiat-card">
                            <div className="header">
                                <div className="balance">

                                    <div className="balance-header">
                                        <div className="image-section">

                                        </div>
                                        <div className="balance-text">
                                            <p>Balance</p>
                                            <h3>0.00 NGN</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="info">
                                    <i className='bx bxs-info-circle'></i>
                                </div>
                            </div>

                            <div className="action-button">
                                <button className="btn btn-md btn-primary"><i className='bx bx-plus'></i> Deposit</button>
                                <button className="btn btn-md btn-outline-primary"><i className='bx bx-up-arrow-alt'></i> Withdrawal</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="dashboard-home">
                    <h1 className="text-center"> Dashboard Home</h1>
                </div>
            </div>

        </>
    );
}
export default DashboardHome