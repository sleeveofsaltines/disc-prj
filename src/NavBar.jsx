function NavBar(){
    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }

    function toggleMenu() {
      let navbar = document.getElementById("myNavbar");
      navbar.classList.toggle("responsive");
    }

    return(
        <div className="navbar" id="myNavbar">
            <div id="mySidenav" className="menu">
                <a href="#">Messages</a>
                <a href="#">Following and Followers</a>
                <a href="#">Pinned Posts</a>
                <a href="#">Settings</a>
            </div>
            <a className="icon" onClick={toggleMenu}> &#9776; </a>
        </div>
    
    );
}
export default NavBar