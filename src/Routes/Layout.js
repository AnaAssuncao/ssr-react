import React from "react";
import { Route, Routes } from "react-router";
import {arrRoutes} from "./Routes"

import NavBar from "../Components/NavBar/NavBar"
import Footer from "../Components/Footer/Footer"
import * as El from './Layout.style'

export default function Layout (){

    return(
        <El.Container>
          <NavBar/>
          {
            <Routes>
              {arrRoutes.map((route) => {
                const { component: Component, path, name,exact} = route;
                return (
                  <Route
                    path={path}
                    key={name}
                    exact={exact}
                    element={ Component}
                  >
                  </Route>
                )
              })}
            </Routes>
          }
          <Footer/>
        </El.Container>
    )
     
}