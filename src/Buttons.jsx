import React, { useState } from "react";

function Buttons(){
    const style = {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around",
        alignItems: "center",
        padding:"10px",
    }
    const button_style = {
        background: "#9f9fc2",
        borderRadius: "999px",
        boxShadow: "#5e5df0 0 10px 20px - 10px",
        boxSizing: "border-box",
        color: "#ffffff",
        cursor: "pointer",
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans - serif",
        fontSize: "15px",
        fontWeight: "700",
        lineHeight: "24px",
        margin: "1% 0% 2% 1%",
        opacity: "1",
        outline: "0 solid transparent",
        padding: "4px 10px",
        userSelect: "none",
        webkitUserSelect: "none",
        touchAction: "manipulation",
        width: "fit-content",
        wordBreak: "break-word",
        border: "0",
}

///const handleClick = (e) =>  e.target.style.background = "#202033"
const [active, setActive] = useState("inactive");
const handleClick = (event) => {
    setActive(event.target.id);}

    return( 
    <span style={style}>
        <button key={1}
        className={active === "1" ? "active" : "inactive"}
        id={"1"}
        onClick={handleClick}>General</button>
        <button         key={2}
       className={active === "2" ? "active" : "inactive"}
       id={"2"}
       onClick={handleClick}>Clubs</button>
        <button key={3}
        className={active === "3" ? "active" : "inactive"}
        id={"3"}
        onClick={handleClick}>Events</button>
        <button key={4}
        className={active === "4" ? "active" : "inactive"}
        id={"4"}
        onClick={handleClick}>Study Help</button>
        <button key={5}
        className={active === "5" ? "active" : "inactive"}
        id={"5"}
        onClick={handleClick}>Missed Connections</button>
    </span> 
    );
}
export default Buttons