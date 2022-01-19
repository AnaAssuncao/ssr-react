import React from "react";
import Home from '../Pages/Home/Home'
import Information from '../Pages/Information/Information'

export const arrRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: <Home />,
  },
  {
    path: '/list',
    name: 'Lista',
    exact: false,
    component: <Information />,
  }
]
