import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "./menu";

export const Header = () =>{
    return(
        <>
            <div className="header">
                <div className="logo">
                    <Link to="/"><span className="rd">Ts</span> - Crud</Link>
                </div>
                <div className="menu">
                    <Menu />
                </div>
            </div>
        </>
    )
}
