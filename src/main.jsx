import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import SignIn from './Authentication/SignIn/SignIn';
import SignUp from './Authentication/SignUp/SignUp';
import Requirements from './pages/Requirements/Requirements';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';
import AllAssignments from './pages/AllAssignments/AllAssignments';
import CreateAssignment from './pages/CreateAssignment/CreateAssignment';
import SubmittedAssignment from './pages/SubmittedAssignment/SubmittedAssignment';

const  router  = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/createAssignment",
      element: <CreateAssignment></CreateAssignment>,
    },
    {
      path: "/allAssignments",
      element: <AllAssignments></AllAssignments>,
    },
    {
      path: "/submittedAssignment",
      element: <SubmittedAssignment></SubmittedAssignment>,
    },
    {
      path: "/signIn",
      element: <SignIn></SignIn>,
    },
    {
      path: "/signUp",
      element: <SignUp></SignUp>,
    },
    {
      path: "/requirements",
      element: <PrivateRoute><Requirements></Requirements></PrivateRoute>,
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={  router } />
  </React.StrictMode>,
)
