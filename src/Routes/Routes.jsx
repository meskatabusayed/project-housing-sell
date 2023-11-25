import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Dashboard from "../Layout/Dashboard";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import AddDetails from "../pages/AddDetails/AddDetails";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
      {
            path: '/',
            element: <Home></Home>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><AddDetails></AddDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/add/${params.id}`)

      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      }
    
    ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'myProfile',
          element: <MyProfile></MyProfile>
        },
        // Admin Routes
        {
          path: 'manageUsers',
          element: <ManageUsers></ManageUsers>
        }
      ]
    }
  ]);