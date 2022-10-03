import React from "react";
import '../styles/index.css'
import DashHeader from "../../components/DashHeader";

const DashboardHome = () => {
    return (
        <>
            <DashHeader isActive="dashboard" />
            <div className="dashboard-home">
                <h1 className="text-center"> Dashboard Home</h1>
            </div>
        </>
    );
}
export default DashboardHome