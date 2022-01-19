import React from "react";
import * as El from './Footer.style'
import {arrRoutes} from "../../Routes/Routes"
import {
    Link
  } from "react-router-dom";

export default function Footer (){

    return(
        <El.FooterContainer>
            <El.FooterMenu>
                {arrRoutes.map(({name,path})=>{
                    return(
                        <El.FooterItem key={name}>
                            <Link to={path}>
                                <El.FooterText>{name}</El.FooterText>
                            </Link>
                        </El.FooterItem>
                    )
                })}
            </El.FooterMenu>
        </El.FooterContainer>
    )

}