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
import AgentProfile from "../pages/Dashboard/AgentProfile/AgentProfile";
import AddProperty from "../pages/Dashboard/Agent/AddProperty/AddProperty";
import MyAddedProperties from "../pages/Dashboard/Agent/MyAddedProperties/MyAddedProperties";
import UpdateProperty from "../pages/Dashboard/Agent/UpdateProperty/UpdateProperty";
import WishList from "../pages/Dashboard/UserDashboard/WishList/WishList";
import OfferProperty from "../pages/Dashboard/UserDashboard/WishList/OfferProperty/OfferProperty";
import UserBought from "../pages/Dashboard/UserDashboard/UserBought/UserBought";
import MyReviews from "../pages/Dashboard/UserDashboard/MyReviews/MyReviews";
import RequestedProperties from "../pages/Dashboard/Agent/RequestedProperties/RequestedProperties";
import Payment from "../pages/Dashboard/UserDashboard/Payment/Payment";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile/AdminProfile";
import ManageProperties from "../pages/Dashboard/Admin/ManageProperties/ManageProperties";
import ManageReview from "../pages/Dashboard/Admin/ManageReview/ManageReview";


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
        {
          path: 'wishList',
          element: <WishList></WishList>
        },
        {
          path: 'offerProperty/:id',
          element: <OfferProperty></OfferProperty>,
          loader:  ({params}) => fetch(`http://localhost:5000/wish/${params.id}`)
        },
        {
          path: 'myBought',
          element: <UserBought></UserBought>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'myReviews',
          element: <MyReviews></MyReviews>
        },
        // Agent Rouents
        {
          path:'agentProfile',
          element: <AgentProfile></AgentProfile>
        },
        {
          path: 'addProperty',
          element: <AddProperty></AddProperty>
        },
        {
          path: 'myAddedProperties',
          element: <MyAddedProperties></MyAddedProperties>
        },
        {
          path: 'updateProperty/:id',
          element: <UpdateProperty></UpdateProperty>,
          loader: ({params}) => fetch(`http://localhost:5000/adds/${params.id}`)
        },
        {
          path: 'requestedProperties',
          element: <RequestedProperties></RequestedProperties>
        },

        // Admin Routes
        {
          path: 'manageUsers',
          element: <ManageUsers></ManageUsers>
        },
        {
          path: 'adminProfile',
          element: <AdminProfile></AdminProfile>
        },
        {
          path: 'manageProperties',
          element: <ManageProperties></ManageProperties>
        },
        {
          path: 'manageReviews',
          element: <ManageReview></ManageReview>
        }
      ]
    }
  ]);