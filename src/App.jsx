import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import DefaultRoute from './Guards/DefaultRoute';
import UserLayout from './layout/Userlayout';
import AdminLayout from './layout/Adminlayout';
import UserDashboard from './Pages/UserLayout/Dashboard';
import AdminDashboard from './Pages/AdminLayout/Dashboard';
import MyBooking from './Pages/UserLayout/MyBooking';
import UserEvent from './Pages/UserLayout/Event';
import AdminEvent from './Pages/AdminLayout/Event';
import Profile from './Pages/UserLayout/Profile';
import Booking from './Pages/AdminLayout/Booking';
import AuthGuard from './Guards/AuthGuard';


function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
     {
      path: "/register",
      element: <Register />
    },
    {
      path: "/",
      element: <DefaultRoute/>
    },

    //user
    {
      path:"user",
      element: <AuthGuard requiredAuth= {true} allowedRoles={["user"]}><UserLayout /></AuthGuard>,
      children: [
        {path: "Dashboard",element: <UserDashboard/>},
        {path: "MyBooking",element: <MyBooking/>},
        {path: "Event",element: <UserEvent/>},
        {path: "profile",element: <Profile/>}
      ]
    },
      //admin routes
    {
      path:"admin",
      element: <AuthGuard requiredAuth= {true} allowedRoles={["admin"]}><AdminLayout/></AuthGuard>,
      children: [
        {path: "Dashboard",element: <AdminDashboard/>},
        {path: "Booking",element: <Booking/>},
        {path: "Event",element: <AdminEvent/>}
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App
