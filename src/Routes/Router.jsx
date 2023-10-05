import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Login/login";
import Resister from "../Resister/Resister";
import ReadMore from "../Pages/Home/NewsItem/ReadMore";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
  
const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/career',
            element: <Career></Career>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/resister',
            element: <Resister></Resister>
        },
        {
            path: `/aNews/:id`,
            element: <PrivateRoute><ReadMore></ReadMore></PrivateRoute>
        },
      ]
    },
  ]);

export default Router;