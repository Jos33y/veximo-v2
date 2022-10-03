import React from "react";
import '../styles/index.css'
import DashHeader from "../../components/DashHeader";

const DashboardAssets = () => {
    return (
        <>
            <DashHeader isActive="assets" />
            <div className="dashboard-home">
                <h1 className="text-center"> Dashboard Assets</h1>
            </div>
        </>
    );
}
export default DashboardAssets