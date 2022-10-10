import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const Dashboard = () =>{
    const navigate = useNavigate();

    const logout = () =>{
        localStorage.removeItem("Token");
        navigate('/');
    }
    return(
        <>
        <div className="dashboard">
        <div className="side-bar">
            <h3>TS - Dash</h3>
            <div className="sidebar">
                <ul>
                    <li><Link to="../dashboard/addpost">add Post</Link></li>
                    <li><Link to="../dashboard/showpost">show Post</Link></li>
                    <li><Link to="">Settings</Link></li>
                    <li><Link to="">Other Info</Link></li>
                    <li><button onClick={logout}>Logout</button></li>
                </ul>
            </div>
        </div>
        <div className="content-area">
            <Outlet />
        </div>
        </div>
        </>
    )
}