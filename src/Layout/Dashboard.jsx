import {  Outlet } from "react-router-dom";
import UserDashboard from "./DashboardNavbar/UserDashboard";
import { useState } from "react";
import AgentDashboard from "./DashboardNavbar/AgentDashboard";
import AdminDashboard from "./DashboardNavbar/AdminDashboard";


const Dashboard = () => {
    const [userRole, setUserRole] = useState('admin');
    
   


    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-green-600">
                {userRole === 'user' && <UserDashboard></UserDashboard>}
                {userRole === 'agent' && <AgentDashboard></AgentDashboard>}
                {userRole === 'admin' && <AdminDashboard></AdminDashboard>}
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;