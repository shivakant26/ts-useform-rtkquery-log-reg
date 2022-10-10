import React from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () =>{
    const navigate = useNavigate();

    const logout = () =>{
        localStorage.removeItem("Token");
        navigate('/');
    }
    return(
        <>
        <h2>Dashboard Component</h2>
        <button onClick={logout}>Logout</button>
        </>
    )
}