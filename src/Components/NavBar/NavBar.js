import React from "react";
import {arrRoutes} from "../../Routes/Routes"
import {
    Link
  } from "react-router-dom";
import * as El from './NavBar.style'

export default function NavBar (){
    
    return(
        <El.NavBarContainer> 
            <El.NavBarLogo>SSR</El.NavBarLogo>
            <El.NavBarMenu>
                {arrRoutes.map(({name,path})=>{
                    return(
                        <El.NavBarItem key={name}>
                            <Link to={path}>
                                <El.NavBarText>{name}</El.NavBarText>
                            </Link>
                        </El.NavBarItem>
                    )
                })}
            </El.NavBarMenu>
        </El.NavBarContainer>
    )

}