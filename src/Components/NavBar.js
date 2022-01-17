import React from "react";
import * as El from '../Style/HomeStyle.style'
import routes from "../Routes/Routes"
import {
    Link
  } from "react-router-dom";


export default function NavBar (){

    return(
        <ul>
            {routes.map(({name,path})=>{
                <li>
                    <Link to={path}>{name}</Link>
                </li>
            })}
        </ul>
    )

}