import { NavLink } from "react-router-dom";


const AdminDashboard = () => {
    return (
        <div>
            <ul className="menu">
                <li className="font-extrabold text-xl"><NavLink to="/dashboard/adminProfile">Admin Profile</NavLink></li>
                    <li className="font-extrabold text-xl"><NavLink to="/dashboard/manageProperties">Manage Properties</NavLink></li>
                    <li className="font-extrabold text-xl"><NavLink to="/dashboard/manageUsers">Manage Users</NavLink></li>
                    <li className="font-extrabold text-xl"><NavLink to="/dashboard/manageReviews">Manage Reviews</NavLink></li>
                   
                </ul>
        </div>
    );
};

export default AdminDashboard;