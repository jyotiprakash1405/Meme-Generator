import React from "react";
import logo from "../images/Logo.png"

function Header(){
    return (
        <div>
            <header className="header">
                <img src={logo} className="header--image"/>
                {/* <h2 className="header--title">Header Component</h2> */}
                <h4 className="header--project">React Course - Project 3</h4>
            </header>
            
        </div>
        
    )
}

export default Header