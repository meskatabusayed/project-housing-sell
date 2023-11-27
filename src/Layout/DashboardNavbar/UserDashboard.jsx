import { NavLink } from "react-router-dom";


const UserDashboard = () => {
    return (
        <div>
            <ul className="menu">
                <li className="font-extrabold text-xl"><NavLink to="/dashboard/myProfile">My Profile</NavLink></li>
                    <li className="font-extrabold text-xl"><NavLink to="/dashboard/wishlist">Wishlist</NavLink></li>
                    <li className="font-extrabold text-xl"><NavLink to="/dashboard/myBought">Property bought</NavLink></li>
                    <li className="font-extrabold text-xl"><NavLink to="/dashboard/myReviews">My reviews</NavLink></li>
                </ul>
        </div>
    );
};

export default UserDashboard;