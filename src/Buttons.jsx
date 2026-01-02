import React, { useState } from "react";

function Buttons(){
    const style = {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around",
        alignItems: "center",
        padding:"10px",
    }

const [active, setActive] = useState("inactive");
const handleClick = (event) => {
    setActive(event.target.id);}

    return( 
    <span style={style}>
        <button key={1}
        className={active === "General" ? "active" : "inactive"}
        id={"General"}
        onClick={handleClick}>General</button>
        <button key={2}
        className={active === "Clubs" ? "active" : "inactive"}
        id={"Clubs"}
        onClick={handleClick}>Clubs</button>
        <button key={3}
        className={active === "Events" ? "active" : "inactive"}
        id={"Events"}
        onClick={handleClick}>Events</button>
        <button key={4}
        className={active === "Study Help" ? "active" : "inactive"}
        id={"Study Help"}
        onClick={handleClick}>Study Help</button>
        <button key={5}
        className={active === "Missed Connections" ? "active" : "inactive"}
        id={"Missed Connections"}
        onClick={handleClick}>Missed Connections</button>
    </span> 
    );
}
export default Buttons