import React, { Component } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from './Components/login/Login';
import SignUp from './Components/signup/SignUp';
import Dashboard from './Components/dashboard/Dashboard';

export default class AppRouter extends Component {

  render() {

    const router = createBrowserRouter([
        {
            path:'/',
            element: <Login/>
        },
        {
            path:'/login',
            element: <Login/>
        },
        {
            path:'/signup',
            element: <SignUp/>
        },
        {
            path: '/dashboard',
            element: <Dashboard/>
        }
        
    ]);   

    return (
        <RouterProvider router={router}/>
    )
  }
}
