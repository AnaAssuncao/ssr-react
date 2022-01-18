import React from "react";
import Home from '../Pages/Home/Home'

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
    component: <Home />,
  }
]
