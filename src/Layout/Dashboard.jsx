import {  Outlet } from "react-router-dom";
import UserDashboard from "./DashboardNavbar/UserDashboard";
// import {   useState } from "react";
import AgentDashboard from "./DashboardNavbar/AgentDashboard";
import AdminDashboard from "./DashboardNavbar/AdminDashboard";
import useAdmin from "../hooks/useAdmin";
import useAgent from "../hooks/useAgent";






const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isAgent] = useAgent();
   
   
    // const [userRole, setUserRole] = useState([]);

    

    
   


    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-green-600">
                {
                    isAdmin ?
                    <AdminDashboard></AdminDashboard>
                    : isAgent ?
                    <AgentDashboard></AgentDashboard>
                    : <UserDashboard></UserDashboard>
                }



                {/* {isRole == !role  && <UserDashboard></UserDashboard>} 
                 {userRole === 'agent' && <AgentDashboard></AgentDashboard>}
                {isRole && <AdminDashboard></AdminDashboard>} */}
              
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;