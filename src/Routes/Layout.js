import React from "react";
import { Route,Switch } from "react-router-dom";
import routes from "./Routes"

export default function Layout (){

    return(
        <>
        <NavBar/>
        {
          <Switch>
            {routes.map((route) => {
              const { component: Component, path, name,exact} = route;
              return (
                <Route
                  path={path}
                  key={name}
                  exact={exact}
                  component={ Component}
                >
                </Route>
              )
            })}
          </Switch>
        }
        <Footer/>
        </>
    )
     
}