import React from "react"; 
import { Link } from "react-router-dom";

export const Menu = () =>{
    return(
        <>
        <Link to="/">Home</Link>
        <Link to="/signup">SignUp</Link>
        </>
    )
}