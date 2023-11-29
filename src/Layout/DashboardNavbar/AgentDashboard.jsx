import { NavLink } from "react-router-dom";


const AgentDashboard = () => {
    return (
        <div>
            <ul className="menu">
                <li className="font-extrabold text-xl"><NavLink to="/dashboard/agentProfile">Agent Profile</NavLink></li>
                    <li className="font-extrabold text-xl"><NavLink to="/dashboard/addProperty">Add Property</NavLink></li>
                    <li className="font-extrabold text-xl"><NavLink to="/dashboard/myAddedProperties">My added properties</NavLink></li>
                    <li className="font-extrabold text-xl"><NavLink to="/dashboard/mySoldProperties">mySoldProperties</NavLink></li>
                    <li className="font-extrabold text-xl"><NavLink to="/dashboard/requestedProperties">Requested properties</NavLink></li>
                </ul>
        </div>
    );
};

export default AgentDashboard;