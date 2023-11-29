import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavBar = () => {



  
  const {user , logOut} = useContext(AuthContext);

  const handleLogOut = () => {
      logOut()
      .then(() => console.log('user Logged Out'))
      .catch(error => {
          console.log(error);
      })
  }


    const navOptions = <>
            <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/allProperties'> All properties</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
                
              </li>
              <li>
                <Link to='/registration'>Sign Up</Link>
                
              </li>
    </>


  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="text-xl"><span className="text-3xl text-blue-900 font-extrabold">P</span> PH Housing</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
        {
            user ? <>
            <div className="avatar mr-2">
              <div className="w-24 rounded">
                <img src={user?.photoURL} />
              </div>
            </div>
            <span>{user?.displayName}</span>
            
            <a onClick={handleLogOut} className="btn btn-sm ml-2">Log Out</a>
            </>
            :
            <Link to='/login'>
                 <button  className="btn btn-sm ">Log In</button>
            </Link>
        }
        </div>
      </div>
    </>
  );
};

export default NavBar;
