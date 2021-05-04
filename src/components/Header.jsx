import React, { useState } from "react";

    const Header  = () => {

    const Header = ({color, title}) => {

    const onClick = () => {
        console.log(onClick)
    }

    return (
    <Header className="Header">
        {<h2 style={{color: propColor}}>{title}</h2> 

        ,<Button 
        color={onShowAdd ? "red" : "green"}
        text={onShowAdd ? "close" : "open"}
        onClick={onShowAdd}
        />
        }</Header>
    
        )
    };
};

Header.defaultProps = {
    title: "todo list",
    color: "black"
}
export default Header