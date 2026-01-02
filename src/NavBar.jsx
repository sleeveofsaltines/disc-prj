import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function NavBar(){

    const navigate = useNavigate();

    function toggleMenu() {
      let navbar = document.getElementById("myNavbar");
      navbar.classList.toggle("responsive");
    }

    return(
        <div className="navbar" id="myNavbar">
            <div className="menu">
                <a onClick={() => navigate("/messages")} >Messages</a>
                <a onClick={() => navigate("/following")}>Following and Followers</a>
                <a onClick={() => navigate("/pinned")} >Pinned Posts</a>
                <a onClick={() => navigate("/settings")}>Settings</a>
            </div>
            <a className="icon" onClick={toggleMenu}> &#9776; </a>
        </div>
    
    );
}
export default NavBar